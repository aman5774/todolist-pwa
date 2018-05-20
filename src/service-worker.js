// Cache names
var dataCacheName = 'TODOData-v1'

var cacheName = 'todoPWA-1'

// Application shell files to be cached

var filesToCache = [
  '/',
  '/index.html',
  '/scripts/app.js',
  '/scripts/jquery-3.21-min.js',
  '/styles/style.css'
]



self.addEventListener('install', function(e) {
  //console.log('[ServiceWorker] Install')
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      //console.log('[ServiceWorker] Caching app shell')
      return cache.addAll(filesToCache)
    })
  )
})

self.addEventListener('activate', function(e) {
  //console.log('[ServiceWorker] Activate')
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName && key !== dataCacheName) {
          //console.log('[ServiceWorker] Removing old cache', key)
          return caches.delete(key)
        }
      }))
    })
  )
  return self.clients.claim()
})

self.addEventListener('fetch', function(e) {
  //console.log('[ServiceWorker] Fetch', e.request.url)
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  )
})
