// ホーム画面に追加（インストール）できるようにするための最小構成
// キャッシュはしないので、index.html を更新すると次回起動時から反映される
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
