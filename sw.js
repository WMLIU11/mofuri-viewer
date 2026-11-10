// 最小的 service worker：只為了讓瀏覽器把網頁當成可安裝的 App。
// 不快取任何東西、不攔截跨網站請求（含 api.github.com），所以不會碰到 token 或報告資料。
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(fetch(e.request));
});
