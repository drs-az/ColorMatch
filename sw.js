// Simple service worker that immediately takes control
self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  // You can add caching strategies here if desired.
  // For now, just do a passthrough:
  event.respondWith(fetch(event.request));
});