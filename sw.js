const CACHE = "nyx-shell-v7";
const APP_SHELL = [
  "./",
  "./index.html",
  "./src/app.js",
  "./src/vision.worker.js",
  "./src/style.css",
  "./manifest.json",
  "./icons/favicon-32.png",
  "./icons/favicon-48.png",
  "./icons/logo-mark.png",
  "./icons/icon.svg",
  "./icons/icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET" || !request.url.startsWith(self.location.origin)) return;
  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request).then((response) => {
      const copy = response.clone();
      caches.open(CACHE).then((cache) => cache.put(request, copy));
      return response;
    }).catch(() => request.destination === "document" ? caches.match("./index.html") : Response.error()))
  );
});
