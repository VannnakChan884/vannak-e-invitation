const CACHE_NAME = 'wedding-cache-v1';
const urlsToCache = [
  '/',
  '/index.html', 
  '/manifest.json',
  '/assets/index-7I3zK-Fm.js',  // Make sure all CSS is cached
  '/assets/index-DrPzGCUk.css',   // Make sure all JS is cached
  '/icons/icon-192x192.png', 
  '/icons/icon-512x512.png',
  // Add any other assets you want to cache for offline use
];

// Install the service worker and cache the essential files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache and caching files');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())  // Force the service worker to activate immediately
  );
});

// Handle fetch requests and return cached files if available
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached file if available, otherwise fetch from the network
        return response || fetch(event.request);
      })
      .catch(() => {
        // Fallback to cached index.html if the network fails (for single-page apps)
        return caches.match('/index.html');
      })
  );
});

// Cleanup old caches when the service worker is activated
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);  // Delete old cache versions
          }
        })
      );
    })
  );
});
