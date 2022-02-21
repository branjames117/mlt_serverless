const APP_PREFIX = 'MLTArts-';
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;

const FILES_TO_CACHE = [
  './index.html',
  './about-us.html',
  './business-membership.html',
  './couple-membership.html',
  './family-membership.html',
  './history.html',
  './individual-membership.html',
  './membership.html',
  './oops.html',
  './thank-you.html',
  './ticket-policy.html',
  './public/css/style.css',
  './public/js/form_script.js',
  './public/js/history_script.js',
  './public/js/index_script.js',
  './public/js/script.js',
  './public/img/history/house1.jpg',
  './public/img/history/house2.png',
  './public/img/sponsors/penguinproject.jpg',
  './public/img/sponsors/tnartscommission.jpg',
  './public/img/sponsors/tnlicense.jpg',
  './public/img/curtain.jpg',
  './public/img/logo.png',
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      let cacheKeeplist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX);
      });
      cacheKeeplist.push(CACHE_NAME);

      return Promise.all(
        keyList.map(function (key, i) {
          if (cacheKeeplist.indexOf(key) === -1) {
            return caches.delete(keyList[i]);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (request) {
      return request || fetch(e.request);
    })
  );
});
