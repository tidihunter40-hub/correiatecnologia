import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const baseUrl = process.env.RESPONSIVE_AUDIT_URL ?? 'http://127.0.0.1:3005';
const cdpUrl = process.env.RESPONSIVE_AUDIT_CDP_URL ?? 'http://127.0.0.1:9222';
const outputDir = join(process.cwd(), 'artifacts', 'responsividade');
const routes = [
  '/', '/sobre', '/servicos',
  '/servicos/controle-de-acesso-facial', '/servicos/relogios-de-ponto',
  '/servicos/automacao-de-entradas', '/servicos/venda-de-equipamentos',
  '/servicos/locacao-de-equipamentos', '/servicos/instalacao-de-solucoes',
  '/solucoes/controle-de-acesso-facial', '/solucoes/relogios-de-ponto',
  '/solucoes/automacao-de-entradas', '/solucoes/venda-de-equipamentos',
  '/solucoes/locacao-de-equipamentos', '/solucoes/instalacao-e-suporte',
  '/catalogo', '/segmentos', '/segmentos/condominios', '/segmentos/empresas',
  '/segmentos/escolas', '/segmentos/academias', '/segmentos/comercios',
  '/segmentos/clinicas', '/projetos', '/contato', '/blog', '/privacidade',
  '/offline',
];
const viewports = [
  [320, 568], [360, 800], [375, 812], [390, 844], [430, 932],
  [768, 1024], [820, 1180], [1024, 1366], [1024, 768], [1180, 820], [1280, 800], [1366, 768],
  [1440, 900], [1536, 1024], [1920, 1080],
];
const requestedViewports = process.env.RESPONSIVE_AUDIT_VIEWPORTS?.split(',').map((value) => value.trim()).filter(Boolean);
const activeViewports = requestedViewports
  ? viewports.filter(([width, height]) => requestedViewports.includes(`${width}x${height}`))
  : viewports;
const captures = new Map([[390, 'mobile'], [820, 'tablet'], [1366, 'desktop']]);
const desktopCaptures = new Map([
  ['/', 'home'], ['/sobre', 'sobre'], ['/servicos', 'solucoes'], ['/catalogo', 'equipamentos'],
  ['/segmentos', 'segmentos'], ['/projetos', 'projetos'], ['/contato', 'contato'],
]);
const routeSet = new Set(routes);

await mkdir(outputDir, { recursive: true });

const version = await fetch(new URL('/json/version', cdpUrl)).then((r) => r.json());
const targets = await fetch(new URL('/json/list', cdpUrl)).then((r) => r.json());
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
  const entry = pending.get(message.id);
  if (!entry) return;
  pending.delete(message.id);
  clearTimeout(entry.timer);
  if (message.error) entry.reject(new Error(message.error.message));
  else entry.resolve(message.result);
});

function send(method, params = {}, timeout = 45000) {
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
  const result = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true }, 10000);
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text);
  return result.result.value;
}

await send('Page.enable');
await send('Runtime.enable');
await send('Emulation.setDeviceMetricsOverride', { width: 1366, height: 768, deviceScaleFactor: 1, mobile: false });

const results = [];
const failures = [];
function makeReport() {
  return {
    baseUrl,
    chrome: version.Browser,
    routes: routes.length,
    viewports: activeViewports.map(([width, height]) => `${width}x${height}`),
    combinations: results.length,
    failures,
    results,
  };
}

for (const [width, height] of activeViewports) {
  await send('Emulation.setDeviceMetricsOverride', {
    width, height, deviceScaleFactor: 1, mobile: width <= 600,
    screenOrientation: { angle: width > height ? 90 : 0, type: width > height ? 'landscapePrimary' : 'portraitPrimary' },
  });
  for (const route of routes) {
    const loaded = new Promise((resolve) => {
      const listener = (event) => {
        socket.removeEventListener('message', listener);
        if (JSON.parse(event.data).method === 'Page.loadEventFired') resolve();
        else socket.addEventListener('message', listener);
      };
      socket.addEventListener('message', listener);
      setTimeout(resolve, 10000);
    });
    await send('Page.navigate', { url: new URL(route, baseUrl).href }, 45000);
    await loaded;
    await new Promise((resolve) => setTimeout(resolve, 120));

    const captureName = captures.get(width);
    const desktopCaptureName = width === 1366 ? desktopCaptures.get(route) : undefined;
    if ((route === '/' && captureName) || desktopCaptureName) {
      const metrics = await send('Page.getLayoutMetrics');
      const { width: pageWidth, height: pageHeight } = metrics.cssContentSize;
      const screenshot = await send('Page.captureScreenshot', {
        format: 'png', fromSurface: true, captureBeyondViewport: true,
        clip: { x: 0, y: 0, width: Math.min(width, pageWidth), height: Math.min(pageHeight, 12000), scale: 1 },
      });
      const fileName = desktopCaptureName
        ? `etapa5-${desktopCaptureName}-desktop.png`
        : `etapa5-home-${captureName}.png`;
      await writeFile(join(outputDir, fileName), Buffer.from(screenshot.data, 'base64'));
    }

    const measurement = await evaluate(`(async () => {
      for (const image of document.images) image.loading = 'eager';
      await Promise.race([Promise.all(Array.from(document.images, image => image.decode().catch(() => {}))), new Promise(resolve => setTimeout(resolve, 1800))]);
      const width = document.documentElement.clientWidth;
      const scrollWidth = document.documentElement.scrollWidth;
      const visible = element => { const s = getComputedStyle(element), r = element.getBoundingClientRect(); return s.display !== 'none' && s.visibility !== 'hidden' && r.width > 0 && r.height > 0; };
      const isInsideHorizontalScroller = element => {
        let parent = element.parentElement;
        while (parent && parent !== document.body) {
          const overflow = getComputedStyle(parent).overflowX;
          if ((overflow === 'auto' || overflow === 'scroll') && parent.scrollWidth > parent.clientWidth + 1) return true;
          parent = parent.parentElement;
        }
        return false;
      };
      const outside = Array.from(document.querySelectorAll('a,button,input,select,textarea')).filter(element => visible(element) && !isInsideHorizontalScroller(element)).map(element => {
        const r = element.getBoundingClientRect();
        return { text: (element.innerText || element.getAttribute('aria-label') || element.getAttribute('placeholder') || element.tagName).trim().slice(0,70), left: Math.round(r.left), right: Math.round(r.right) };
      }).filter(element => element.left < -1 || element.right > width + 1).slice(0,8);
      const brokenImages = Array.from(document.images).filter(image => image.currentSrc && image.complete && image.naturalWidth === 0).map(image => image.currentSrc);
      const brokenInternalLinks = Array.from(document.querySelectorAll('a[href]')).map(anchor => {
        const url = new URL(anchor.href, location.href);
        return url.origin === location.origin && !${JSON.stringify([...routeSet])}.includes(url.pathname) ? url.pathname : null;
      }).filter(Boolean);
      const missingFragments = Array.from(document.querySelectorAll('a[href*="#"]')).map(anchor => {
        const url = new URL(anchor.href, location.href);
        return url.origin === location.origin && url.pathname === location.pathname && url.hash && !document.getElementById(decodeURIComponent(url.hash.slice(1))) ? url.hash : null;
      }).filter(Boolean);
      return { width, scrollWidth, horizontalOverflow: scrollWidth > width + 1, outside, brokenImages, brokenInternalLinks: [...new Set(brokenInternalLinks)], missingFragments: [...new Set(missingFragments)], title: document.title };
    })()`);
    const result = { route, viewport: `${width}x${height}`, ...measurement };
    results.push(result);
    if (result.horizontalOverflow || result.outside.length || result.brokenImages.length || result.brokenInternalLinks.length || result.missingFragments.length) failures.push(result);

    if (width === 390 && route === '/') {
      await evaluate(`(async () => { document.querySelector('.bottom-navigation-item[aria-label="Mais páginas"]')?.click(); await new Promise(resolve => setTimeout(resolve, 250)); return true; })()`);
      const moreShot = await send('Page.captureScreenshot', { format: 'png', fromSurface: true, captureBeyondViewport: false, clip: { x: 0, y: 0, width: 390, height: 844, scale: 1 } });
      await writeFile(join(outputDir, 'etapa5-menu-mais-mobile.png'), Buffer.from(moreShot.data, 'base64'));
      await evaluate(`document.querySelector('.more-sheet-close')?.click()`);
    }
    if (width === 390 && route === '/solucoes/relogios-de-ponto') {
      const activeShot = await send('Page.captureScreenshot', { format: 'png', fromSurface: true, captureBeyondViewport: false, clip: { x: 0, y: 0, width: 390, height: 844, scale: 1 } });
      await writeFile(join(outputDir, 'etapa5-item-ativo-mobile.png'), Buffer.from(activeShot.data, 'base64'));
    }
    if (width === 390 && route === '/offline') {
      const offlineShot = await send('Page.captureScreenshot', { format: 'png', fromSurface: true, captureBeyondViewport: false, clip: { x: 0, y: 0, width: 390, height: 844, scale: 1 } });
      await writeFile(join(outputDir, 'etapa5-offline-online-preview.png'), Buffer.from(offlineShot.data, 'base64'));
    }
  }
  await writeFile(join(outputDir, `resultado-parcial-${width}x${height}.json`), JSON.stringify(makeReport(), null, 2));
  process.stdout.write(`Validado ${width}x${height}: ${routes.length} páginas.\n`);
}

await writeFile(join(outputDir, 'resultado.json'), JSON.stringify(makeReport(), null, 2));
process.stdout.write(`RESULTADO: ${failures.length} combinação(ões) com overflow, controles fora da tela ou imagens quebradas.\n`);
socket.close();
