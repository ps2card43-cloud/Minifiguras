self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open('mf9').then(c=>c.addAll(['./','index.html'])))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!='mf9').map(x=>caches.delete(x)))).then(()=>clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!='GET')return;const same=new URL(e.request.url).origin==location.origin;
e.respondWith((same?fetch(e.request.url,{cache:'no-cache'}):fetch(e.request)).catch(()=>caches.match(e.request)))});
