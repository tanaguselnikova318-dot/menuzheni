const CACHE = 'menuzheni-v1';

const ASSETS = [
  './',
  './index.html',
  './breakfast.html',
  './lunch.html',
  './style.css',
  './app.js',
  './app-breakfast.js',
  './app-lunch.js',
  './manifest.json',
  './icon.svg'
];

/* ── Установка: кэшируем все файлы ── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

/* ── Активация: удаляем старые кэши ── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

/* ── Запросы: сначала кэш, затем сеть ── */
self.addEventListener('fetch', event => {
  // Только GET-запросы
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request)
      .then(cached => cached || fetch(event.request)
        .then(response => {
          // Кэшируем новые ресурсы на лету
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
      )
  );
});
