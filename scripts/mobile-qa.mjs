import { spawn } from 'node:child_process';
import { mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const output = path.join(root, 'artifacts', `mobile-qa-${new Date().toISOString().slice(0, 10)}`);
const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const fullAudit = process.env.CORREIA_FULL_AUDIT === '1';
const widths = process.env.CORREIA_QA_WIDTHS ? process.env.CORREIA_QA_WIDTHS.split(',').map(Number) : fullAudit ? [390, 1440] : [320, 360, 375, 390, 414, 430, 768, 1024];
const routes = process.env.CORREIA_QA_ROUTES ? process.env.CORREIA_QA_ROUTES.split(',') : fullAudit ? [
  '/', '/sobre', '/servicos', '/catalogo', '/segmentos', '/contato', '/projetos', '/blog', '/privacidade', '/offline',
  '/controle-de-acesso-facial-salvador', '/relogio-de-ponto-facial-salvador', '/solucoes/relogios-de-ponto',
  '/solucoes/automacao-de-entradas', '/solucoes/venda-de-equipamentos', '/solucoes/locacao-de-equipamentos', '/solucoes/instalacao-e-suporte',
  '/segmentos/condominios', '/segmentos/empresas', '/segmentos/escolas', '/segmentos/academias', '/segmentos/comercios', '/segmentos/clinicas',
] : [
  '/', '/sobre', '/servicos', '/catalogo', '/segmentos', '/contato', '/projetos', '/blog', '/privacidade', '/offline',
  '/controle-de-acesso-facial-salvador', '/relogio-de-ponto-facial-salvador', '/solucoes/relogios-de-ponto',
  '/solucoes/automacao-de-entradas', '/solucoes/venda-de-equipamentos', '/solucoes/locacao-de-equipamentos', '/solucoes/instalacao-e-suporte',
  '/segmentos/condominios', '/segmentos/empresas', '/segmentos/escolas', '/segmentos/academias', '/segmentos/comercios', '/segmentos/clinicas',
];
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function waitFor(url, timeout = 60000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    try {
      const response = await fetch(url);
      if (response.ok) return response;
    } catch {}
    await sleep(350);
  }
  throw new Error(`Timed out waiting for ${url}`);
}

function connect(wsUrl) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(wsUrl);
    const pending = new Map();
    let id = 0;
    ws.addEventListener('open', () => resolve({
      send(method, params = {}) {
        return new Promise((done, fail) => {
          const next = ++id;
          pending.set(next, { done, fail });
          ws.send(JSON.stringify({ id: next, method, params }));
        });
      },
      close() { ws.close(); },
    }));
    ws.addEventListener('error', reject);
    ws.addEventListener('message', (event) => {
      const response = JSON.parse(event.data);
      if (!response.id || !pending.has(response.id)) return;
      const promise = pending.get(response.id);
      pending.delete(response.id);
      if (response.error) promise.fail(new Error(response.error.message));
      else promise.done(response.result);
    });
  });
}

async function main() {
  await mkdir(output, { recursive: true });
  const server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'dev', '--hostname', '127.0.0.1', '--port', '3005'], {
    cwd: root, env: { ...process.env, CORREIA_QA_DIST_DIR: '.next-mobile-qa' }, stdio: 'pipe', windowsHide: true,
  });
  server.stdout.on('data', (chunk) => { if (/Ready|Error|Failed/.test(String(chunk))) process.stdout.write(chunk); });
  server.stderr.on('data', (chunk) => { if (/Error|Failed/.test(String(chunk))) process.stderr.write(chunk); });
  const browser = spawn(chrome, [
    '--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
    '--remote-debugging-port=9223', '--remote-allow-origins=*',
    `--user-data-dir=${path.join(output, 'chrome-profile')}`, 'about:blank',
  ], { cwd: root, stdio: 'ignore', windowsHide: true });
  let cdp;
  try {
    await waitFor('http://127.0.0.1:3005');
    await waitFor('http://127.0.0.1:9223/json/version');
    const target = await (await fetch('http://127.0.0.1:9223/json/new?about:blank', { method: 'PUT' })).json();
    cdp = await connect(target.webSocketDebuggerUrl);
    await cdp.send('Page.enable');
    await cdp.send('Runtime.enable');
    await cdp.send('Emulation.setTouchEmulationEnabled', { enabled: true });
    const findings = [];
    const interactionChecks = [];
    for (const width of widths) {
      await cdp.send('Emulation.setDeviceMetricsOverride', { width, height: 844, deviceScaleFactor: 1, mobile: true });
      for (const route of routes) {
        const url = `http://127.0.0.1:3005${route}`;
        await cdp.send('Page.navigate', { url: 'about:blank' });
        await cdp.send('Page.navigate', { url });
        let ready = false;
        for (let attempt = 0; attempt < 80; attempt++) {
          const state = await cdp.send('Runtime.evaluate', { expression: "({ ready: document.readyState, url: location.href })", returnByValue: true });
          if (state.result.value.ready === 'complete' && state.result.value.url.startsWith('http://127.0.0.1:3005/')) { ready = true; break; }
          await sleep(200);
        }
        if (!ready) throw new Error(`Page did not load: ${url}`);
        await cdp.send('Runtime.evaluate', { expression: 'document.fonts.ready', awaitPromise: true });
        await sleep(250);
        await cdp.send('Runtime.evaluate', { expression: "history.scrollRestoration = 'manual'; window.scrollTo(0, 0)" });
        await sleep(100);
        const result = await cdp.send('Runtime.evaluate', {
          expression: `(() => {
            const pageWidth = innerWidth;
            const out = [...document.querySelectorAll('body *')].filter((el) => {
              const s = getComputedStyle(el), r = el.getBoundingClientRect();
              return s.display !== 'none' && s.visibility !== 'hidden' && r.width > 0 && r.right > pageWidth + 2 && s.position !== 'fixed';
            }).slice(0, 8).map((el) => ({ tag: el.tagName, className: String(el.className).slice(0, 90), right: Math.round(el.getBoundingClientRect().right) }));
            const heading = document.querySelector('h1');
            const nav = document.querySelector('.bottom-navigation');
            return { url: location.pathname, width: pageWidth, scrollY: window.scrollY, scrollWidth: document.documentElement.scrollWidth,
              heading: heading?.textContent?.trim(), headingSize: heading ? getComputedStyle(heading).fontSize : null,
              navHeight: nav ? Math.round(nav.getBoundingClientRect().height) : null,
              beyondViewport: out };
          })()`, returnByValue: true,
        });
        const item = result.result.value;
        findings.push(item);
        if (item.scrollWidth > width + 2) console.log('OVERFLOW', JSON.stringify(item));
        if ((fullAudit && (width === 390 || (width === 1440 && ['/', '/servicos', '/contato'].includes(route)))) || (!fullAudit && (route === '/' || (width === 390 && ['/servicos','/catalogo','/segmentos','/contato','/sobre'].includes(route))))) {
          await cdp.send('Runtime.evaluate', { expression: "document.querySelectorAll('nextjs-portal').forEach((el) => el.remove())" });
          await cdp.send('Runtime.evaluate', { expression: 'window.scrollTo(0, document.documentElement.scrollHeight)' });
          await sleep(100);
          await cdp.send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0)' });
          await sleep(200);
          const shot = await cdp.send('Page.captureScreenshot', { format: 'png', fromSurface: true, captureBeyondViewport: true, clip: { x: 0, y: 0, width, height: 844, scale: 1 } });
          const name = route === '/' ? 'inicio' : route.slice(1).replaceAll('/', '-');
          await writeFile(path.join(output, `${fullAudit ? 'audit-' : ''}${name}-${width}.png`), Buffer.from(shot.data, 'base64'));
          if (fullAudit && width === 390) {
            const heightResult = await cdp.send('Runtime.evaluate', { expression: 'document.documentElement.scrollHeight', returnByValue: true });
            const fullHeight = Math.min(heightResult.result.value, 16000);
            for (let y = 0; y < fullHeight; y += 600) {
              await cdp.send('Runtime.evaluate', { expression: `window.scrollTo(0, ${y})` });
              await sleep(90);
            }
            await cdp.send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0)' });
            await sleep(350);
            const fullShot = await cdp.send('Page.captureScreenshot', { format: 'png', fromSurface: true, captureBeyondViewport: true, clip: { x: 0, y: 0, width, height: fullHeight, scale: 1 } });
            await writeFile(path.join(output, `audit-full-${name}-390.png`), Buffer.from(fullShot.data, 'base64'));
            if (['/', '/servicos', '/catalogo', '/contato'].includes(route)) {
              for (const scrollY of [850, 1700, 2600]) {
                await cdp.send('Runtime.evaluate', { expression: `window.scrollTo(0, ${scrollY})` });
                await sleep(100);
                const sectionShot = await cdp.send('Page.captureScreenshot', { format: 'png', fromSurface: true, captureBeyondViewport: false });
                await writeFile(path.join(output, `audit-${name}-390-scroll-${scrollY}.png`), Buffer.from(sectionShot.data, 'base64'));
              }
            }
          }
          if (!fullAudit && route === '/' && width === 390) {
            for (const scrollY of [650, 1300]) {
              await cdp.send('Runtime.evaluate', { expression: `window.scrollTo(0, ${scrollY})` });
              await sleep(150);
              const below = await cdp.send('Page.captureScreenshot', { format: 'png', fromSurface: true, captureBeyondViewport: false });
              await writeFile(path.join(output, `inicio-390-scroll-${scrollY}.png`), Buffer.from(below.data, 'base64'));
            }
          }
        }
        if (width === 390 && route === '/') {
          await cdp.send('Runtime.evaluate', { expression: "document.querySelector('.mobile-menu-trigger')?.click()" });
          await sleep(250);
          const opened = await cdp.send('Runtime.evaluate', { expression: "Boolean(document.querySelector('.mobile-menu-panel') && document.querySelector('.mobile-menu-trigger')?.getAttribute('aria-expanded') === 'true')", returnByValue: true });
          const menuShot = await cdp.send('Page.captureScreenshot', { format: 'png', fromSurface: true, captureBeyondViewport: false });
          await writeFile(path.join(output, 'menu-aberto-390.png'), Buffer.from(menuShot.data, 'base64'));
          await cdp.send('Runtime.evaluate', { expression: "document.querySelector('.mobile-menu-close')?.click()" });
          await sleep(150);
          const closed = await cdp.send('Runtime.evaluate', { expression: "!document.querySelector('.mobile-menu-panel') && document.querySelector('.mobile-menu-trigger')?.getAttribute('aria-expanded') === 'false'", returnByValue: true });
          interactionChecks.push({ check: 'mobile menu opens and closes', passed: Boolean(opened.result.value && closed.result.value) });
          await cdp.send('Runtime.evaluate', { expression: "document.querySelector('.mobile-menu-trigger')?.click()" });
          await sleep(200);
          const linkClick = await cdp.send('Runtime.evaluate', { expression: "(() => { const link = document.querySelector('.mobile-menu-links a[href=\"/sobre\"]'); link?.click(); return Boolean(link); })()", returnByValue: true });
          let followed = false;
          for (let attempt = 0; attempt < 50; attempt++) {
            const state = await cdp.send('Runtime.evaluate', { expression: "location.pathname === '/sobre' && !document.querySelector('.mobile-menu-panel')", returnByValue: true });
            if (state.result.value) { followed = true; break; }
            await sleep(100);
          }
          interactionChecks.push({ check: 'mobile menu navigates and closes', passed: Boolean(linkClick.result.value && followed) });
        }
        if (width === 390 && route === '/catalogo') {
          await cdp.send('Runtime.evaluate', { expression: "document.querySelectorAll('.catalog-categories button')[2]?.click()" });
          await sleep(100);
          const filtered = await cdp.send('Runtime.evaluate', { expression: "document.querySelectorAll('.catalog-categories button')[2]?.getAttribute('aria-pressed') === 'true' && document.querySelectorAll('.catalog-grid .product-card').length === 1", returnByValue: true });
          interactionChecks.push({ check: 'catalog category filter', passed: Boolean(filtered.result.value) });
        }
      }
      console.log(`Checked ${width}px: ${routes.length} routes`);
    }
    const reportName = fullAudit ? 'full-audit-findings.json' : process.env.CORREIA_QA_ROUTES ? 'target-findings.json' : 'findings.json';
    await writeFile(path.join(output, reportName), JSON.stringify(findings, null, 2));
    await writeFile(path.join(output, 'interaction-checks.json'), JSON.stringify(interactionChecks, null, 2));
    console.log(`Saved screenshots and metrics to ${output}`);
  } finally {
    cdp?.close();
    browser.kill();
    server.kill();
    await sleep(500);
    const profile = path.resolve(output, 'chrome-profile');
    if (profile.startsWith(path.resolve(root) + path.sep)) {
      try { await rm(profile, { recursive: true, force: true }); } catch {}
    }
  }
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
