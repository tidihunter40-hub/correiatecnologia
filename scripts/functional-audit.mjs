import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const baseUrl = process.env.FUNCTIONAL_AUDIT_URL ?? 'http://127.0.0.1:3051';
const cdpUrl = process.env.FUNCTIONAL_AUDIT_CDP_URL ?? 'http://127.0.0.1:9223';
const outputDir = join(process.cwd(), 'artifacts', 'funcional-audit');
await mkdir(outputDir, { recursive: true });

const [version, ...targets] = await Promise.all([
  fetch(new URL('/json/version', cdpUrl)).then((response) => response.json()),
  fetch(new URL('/json/list', cdpUrl)).then((response) => response.json()),
]);
const target = targets.flat().find((entry) => entry.type === 'page' && entry.webSocketDebuggerUrl);
if (!target) throw new Error('Chrome DevTools não informou uma aba de página.');

const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  socket.addEventListener('open', resolve, { once: true });
  socket.addEventListener('error', reject, { once: true });
});

let nextId = 0;
const pending = new Map();
socket.addEventListener('message', (event) => {
  const message = JSON.parse(event.data);
  if (!message.id) return;
  const request = pending.get(message.id);
  if (!request) return;
  pending.delete(message.id);
  clearTimeout(request.timer);
  if (message.error) request.reject(new Error(message.error.message));
  else request.resolve(message.result);
});

function send(method, params = {}, timeout = 20000) {
  const id = ++nextId;
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      pending.delete(id);
      reject(new Error(`Timeout em ${method}`));
    }, timeout);
    pending.set(id, { resolve, reject, timer });
    socket.send(JSON.stringify({ id, method, params }));
  });
}

async function evaluate(expression) {
  const response = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
  if (response.exceptionDetails) throw new Error(response.exceptionDetails.exception?.description || response.exceptionDetails.text);
  return response.result.value;
}

const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
async function navigate(path) {
  const loaded = new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`Timeout carregando ${path}`)), 25000);
    const listener = (event) => {
      const message = JSON.parse(event.data);
      if (message.method !== 'Page.loadEventFired') return;
      clearTimeout(timer);
      socket.removeEventListener('message', listener);
      resolve();
    };
    socket.addEventListener('message', listener);
  });
  await send('Page.navigate', { url: new URL(path, baseUrl).href });
  await loaded;
  await sleep(250);
}

await send('Page.enable');
await send('Runtime.enable');
await send('Network.enable');
await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });

const results = {};
await navigate('/catalogo');
results.catalogFilters = await evaluate(`(async () => {
  const results = [];
  for (const button of document.querySelectorAll('.catalog-categories button')) {
    button.click();
    await new Promise(resolve => setTimeout(resolve, 120));
    results.push({ label: button.innerText.trim(), count: document.querySelectorAll('.catalog-grid .product-card').length, pressed: button.getAttribute('aria-pressed') });
  }
  return results;
})()`);

await navigate('/contato');
results.contact = await evaluate(`(() => {
  const form = document.querySelector('.contact-form');
  const links = [...document.querySelectorAll('a[href]')].map(anchor => anchor.href);
  return {
    requiredFormInvalidWhenEmpty: form ? !form.checkValidity() : null,
    whatsappLinks: links.filter(href => href.startsWith('https://wa.me/')),
    telephoneLinks: links.filter(href => href.startsWith('tel:')),
    emailLinks: links.filter(href => href.startsWith('mailto:')),
    mapsLinks: links.filter(href => href.includes('google.com/maps')),
    mapFrame: document.querySelector('iframe[title*="Mapa"]')?.src ?? null,
    address: document.querySelector('address')?.innerText ?? null,
  };
})()`);
results.contact.filledFormValid = await evaluate(`(() => {
  const form = document.querySelector('.contact-form');
  const set = (name, value, type = 'input') => {
    const element = form.elements.namedItem(name);
    const prototype = element instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : element instanceof HTMLSelectElement ? HTMLSelectElement.prototype : HTMLInputElement.prototype;
    Object.getOwnPropertyDescriptor(prototype, 'value').set.call(element, value);
    element.dispatchEvent(new Event(type, { bubbles: true }));
  };
  set('name', 'Teste de homologação');
  set('company', 'Empresa de teste');
  set('phone', '(71) 99999-9999');
  set('email', 'teste@example.com');
  set('solution', 'Relógios de Ponto', 'change');
  set('message', 'Teste local, não enviar.');
  const consent = form.querySelector('input[type="checkbox"]');
  consent.checked = true;
  consent.dispatchEvent(new Event('change', { bubbles: true }));
  return form.checkValidity();
})()`);

await navigate('/solucoes/relogios-de-ponto');
results.navigation = await evaluate(`(async () => {
  const activeItem = document.querySelector('.bottom-navigation-item[aria-current="page"]')?.innerText.trim() ?? null;
  document.querySelector('.bottom-navigation-item[aria-label="Mais páginas"]')?.click();
  await new Promise(resolve => setTimeout(resolve, 150));
  const moreOpens = Boolean(document.querySelector('.more-sheet[role="dialog"]'));
  const moreLinks = [...document.querySelectorAll('.more-sheet-link')].map(link => ({ label: link.innerText.trim(), href: link.getAttribute('href') }));
  document.querySelector('.more-sheet-close')?.click();
  return { currentUrl: location.pathname, activeItem, moreOpens, moreLinks };
})()`);
await evaluate(`document.querySelector('.bottom-navigation-item[href="/catalogo"]')?.click()`);
await sleep(400);
results.navigation.catalogClick = await evaluate('location.pathname');
await evaluate('history.back()');
await sleep(400);
results.navigation.afterBack = await evaluate('location.pathname');
await evaluate('history.forward()');
await sleep(400);
results.navigation.afterForward = await evaluate('location.pathname');

await navigate('/');
results.pwa = await evaluate(`(async () => {
  await navigator.serviceWorker.ready;
  const registration = await navigator.serviceWorker.getRegistration('/');
  const pageCache = await caches.open('correia-public-pages-v2');
  return {
    manifestLink: document.querySelector('link[rel="manifest"]')?.href ?? null,
    registrationScope: registration?.scope ?? null,
    workerState: registration?.active?.state ?? null,
    controlledBeforeReload: Boolean(navigator.serviceWorker.controller),
    offlinePageCached: Boolean(await pageCache.match(new URL('/offline', location.origin).href)),
  };
})()`);

const report = { baseUrl, chrome: version.Browser, timestamp: new Date().toISOString(), results };
await writeFile(join(outputDir, 'resultado.json'), JSON.stringify(report, null, 2));
process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
socket.close();
