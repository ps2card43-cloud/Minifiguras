self.addEventListener('install',e=>{e.waitUntil(caches.open('mf1').then(c=>c.addAll(['./','index.html'])))});
self.addEventListener('fetch',e=>{if(e.request.method!='GET')return;e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)))});
