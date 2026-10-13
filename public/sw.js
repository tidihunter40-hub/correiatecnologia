/* Correia Tecnologia PWA: only public, same-origin GET responses are cached. */
const CACHE_PREFIX = 'correia-public-';
const STATIC_CACHE = `${CACHE_PREFIX}static-v1`;
const PAGE_CACHE = `${CACHE_PREFIX}pages-v1`;
const IMAGE_CACHE = `${CACHE_PREFIX}images-v1`;
const OFFLINE_URL = '/offline';
const MAX_PAGES = 40;
const MAX_IMAGES = 60;

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(PAGE_CACHE);
    try {
      const response = await fetch(OFFLINE_URL, { cache: 'reload' });
      if (response.ok && response.headers.get('content-type')?.includes('text/html')) {
        await cache.put(OFFLINE_URL, response);
      }
    } catch {
      // Installation can still complete; offline fallback becomes available
      // after the first successful online visit to /offline.
    }
  })());
});

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter((name) => name.startsWith(CACHE_PREFIX) && ![STATIC_CACHE, PAGE_CACHE, IMAGE_CACHE].includes(name)).map((name) => caches.delete(name)));
    await self.clients.claim();
  })());
});

async function trimCache(cacheName, limit) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  await Promise.all(keys.slice(0, Math.max(0, keys.length - limit)).map((key) => cache.delete(key)));
}

function isCacheablePublicResponse(response) {
  if (!response?.ok || response.type === 'opaque' || response.headers.has('set-cookie')) return false;
  const control = response.headers.get('cache-control') || '';
  return !/\b(private|no-store)\b/i.test(control);
}

async function cacheFirst(request, cacheName, limit) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (isCacheablePublicResponse(response)) {
    await cache.put(request, response.clone());
    await trimCache(cacheName, limit);
  }
  return response;
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(IMAGE_CACHE);
  const cached = await cache.match(request);
  const update = fetch(request).then(async (response) => {
    if (isCacheablePublicResponse(response)) {
      await cache.put(request, response.clone());
      await trimCache(IMAGE_CACHE, MAX_IMAGES);
    }
    return response;
  });
  if (cached) {
    update.catch(() => {});
    return cached;
  }
  return update;
}

async function networkFirstPage(request) {
  const cache = await caches.open(PAGE_CACHE);
  const hasQuery = new URL(request.url).search.length > 0;
  try {
    const response = await fetch(request);
    if (!hasQuery && isCacheablePublicResponse(response) && response.headers.get('content-type')?.includes('text/html')) {
      await cache.put(request, response.clone());
      await trimCache(PAGE_CACHE, MAX_PAGES);
    }
    return response;
  } catch {
    const cached = await cache.match(request);
    if (cached) return cached;
    return (await cache.match(OFFLINE_URL)) || Response.error();
  }
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET' || request.headers.has('authorization')) return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin || url.pathname.startsWith('/api/') || url.pathname === '/sw.js') return;

  if (url.pathname.startsWith('/_next/static/')) {
    event.respondWith(cacheFirst(request, STATIC_CACHE, 120));
    return;
  }

  if (url.pathname.startsWith('/images/') || url.pathname.startsWith('/icons/') || url.pathname.startsWith('/_next/image') || url.pathname === '/manifest.webmanifest' || url.pathname === '/favicon.ico') {
    event.respondWith(staleWhileRevalidate(request));
    return;
  }

  if (request.mode === 'navigate') event.respondWith(networkFirstPage(request));
});
