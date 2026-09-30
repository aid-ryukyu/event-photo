// ホーム画面に追加（インストール）できるようにするための最小構成
// 画面（index.html）は毎回サーバーから最新を取得する（GitHub Pages の10分キャッシュを使わない）
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => {
  if (e.request.mode !== 'navigate') return;
  e.respondWith(
    fetch(e.request.url, { cache: 'no-store' }).catch(() => fetch(e.request))
  );
});
