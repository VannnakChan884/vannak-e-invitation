const CACHE_NAME = 'wedding-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/*',
  '/icons/*',     // Caching icon files
  '/manifest.json',
  '/offline.html', // Add offline.html to the cache (this page will show when offline)
];

// Install the service worker and cache the specified assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching essential files...');
      return cache.addAll(urlsToCache);
    })
  );
});

// Intercept network requests and serve from cache if available
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // If the file is in the cache, return it, otherwise try the network
        return response || fetch(event.request);
      })
      .catch(() => {
        // If the network fails (no internet), serve the offline page
        return caches.match('/offline.html');
      })
  );
});

// Cleanup old caches when a new service worker is activated
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName); // Delete old cache versions
          }
        })
      );
    })
  );
});
