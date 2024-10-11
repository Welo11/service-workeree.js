self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('shopify-pwa-cache').then(cache => {
      return cache.addAll([
        '/',
        '/assets/icons/icon-192x192.png',
        '/assets/icons/icon-512x512.png',
        '/assets/css/main.css'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
