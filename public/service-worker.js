const CACHE_NAME = "wedding-cache-v2";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Cache all necessary files dynamically
      return cache.addAll([
        "/",
        "/manifest.json",
        "/icons/icon-192x192.png",
        "/icons/icon-512x512.png",
        // Cache all other assets dynamically
        "/css/*",  // Cache all CSS files
        "/js/*",   // Cache all JS files
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).catch(() => {
          return caches.match("/"); // Fallback to index.html if offline
        })
      );
    })
  );
});
