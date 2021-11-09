// Listen for install event, set callback
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(['/', '/author/','/author/neeraj/','/archive/','/column/']);
        })
    );
});

self.addEventListener("fetch", e => {
    console.log('Intercepting fetch request for: ${e.request.url}');
});
