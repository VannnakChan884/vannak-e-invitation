self.addEventListener("install", (event) => {
    console.log("Service Worker Installed!");
    event.waitUntil(
      caches.open("wedding-cache").then((cache) => {
        return cache.addAll([
          "/",
          "/index.html",
          "/manifest.json",
          "/icons/icon-192x192.png",
          "/icons/icon-512x512.png",
          "/styles.css", // Add your CSS file if needed
          "/script.js" // Add any additional JS file
        ]);
      })
    );
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  