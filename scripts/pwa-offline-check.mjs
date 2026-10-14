import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

// Run with the local site server stopped, after the PWA has been loaded once online.
const origin = process.env.PWA_OFFLINE_AUDIT_URL ?? 'http://127.0.0.1:3052';
const cdpUrl = process.env.PWA_OFFLINE_AUDIT_CDP_URL ?? 'http://127.0.0.1:9223';
const outputDir = join(process.cwd(), 'artifacts', 'funcional-audit');
await mkdir(outputDir, { recursive: true });

const [version, targets] = await Promise.all([
  fetch(new URL('/json/version', cdpUrl)).then((response) => response.json()),
  fetch(new URL('/json/list', cdpUrl)).then((response) => response.json()),
]);
const target = targets.find((entry) => entry.type === 'page' && entry.webSocketDebuggerUrl);
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

function send(method, params = {}) {
  const id = ++nextId;
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      pending.delete(id);
      reject(new Error(`Timeout em ${method}`));
    }, 20000);
    pending.set(id, { resolve, reject, timer });
    socket.send(JSON.stringify({ id, method, params }));
  });
}

async function evaluate(expression) {
  const response = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
  if (response.exceptionDetails) throw new Error(response.exceptionDetails.exception?.description || response.exceptionDetails.text);
  return response.result.value;
}

await send('Page.enable');
await send('Runtime.enable');
await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
const preflight = await evaluate(`(async () => {
  const registration = await navigator.serviceWorker.getRegistration('/');
  const cache = await caches.open('correia-public-pages-v2');
  return {
    controlled: Boolean(navigator.serviceWorker.controller),
    workerState: registration?.active?.state ?? null,
    offlineFallbackCached: Boolean(await cache.match(new URL('/offline', location.origin).href)),
  };
})()`);
if (!preflight.controlled || preflight.workerState !== 'activated' || !preflight.offlineFallbackCached) {
  throw new Error(`Pré-condições do PWA não atendidas: ${JSON.stringify(preflight)}`);
}

const route = `/offline-audit-${Date.now()}`;
const loaded = new Promise((resolve, reject) => {
  const timer = setTimeout(() => reject(new Error('Timeout ao mostrar fallback offline.')), 20000);
  const listener = (event) => {
    if (JSON.parse(event.data).method !== 'Page.loadEventFired') return;
    clearTimeout(timer);
    socket.removeEventListener('message', listener);
    resolve();
  };
  socket.addEventListener('message', listener);
});
await send('Page.navigate', { url: new URL(route, origin).href });
await loaded;
await new Promise((resolve) => setTimeout(resolve, 300));
const result = await evaluate(`({
  url: location.href,
  title: document.title,
  offlineFallbackShown: document.body.innerText.includes('Você está sem conexão.'),
  controlled: Boolean(navigator.serviceWorker.controller),
})`);
const screenshot = await send('Page.captureScreenshot', {
  format: 'png', fromSurface: true, captureBeyondViewport: false,
  clip: { x: 0, y: 0, width: 390, height: 844, scale: 1 },
});
await writeFile(join(outputDir, 'etapa5-pagina-offline-real.png'), Buffer.from(screenshot.data, 'base64'));
const report = { baseUrl: origin, chrome: version.Browser, network: 'servidor local intencionalmente parado', preflight, result };
await writeFile(join(outputDir, 'offline-real.json'), JSON.stringify(report, null, 2));
if (!result.offlineFallbackShown || !result.title.includes('Sem conexão')) {
  throw new Error(`Fallback offline não apareceu: ${JSON.stringify(report)}`);
}
process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
socket.close();
