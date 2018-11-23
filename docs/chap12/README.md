# Chap 12 - Introduction au PWA avec Stencil et Capacitor

## Une Progressive Web App c'est quoi ?

C'est une application disponible à la fois sur le web et sur le mobile, et qui se comporte comme une application mobile native.

Une étude a montré que bon nombre d'utilisateurs, autour de 20%, se désintéressaient d'une application du fait de sa relative complexité d'installation sur mobile. De plus, de nombreux utilisateurs sont hésitants à l'idée d'installer une application qui prendrait à la longue beaucoup trop de place sur leur téléphone à cause du cache, des fichiers statiques,...

Le PWA vient en quelque sorte corriger ces problèmes et bien d'autres, rencontrés dans l'univers du mobile.

## Ionic à l'assaut du PWA

Le Framework Ionic n'a pas attendu pour s'attaquer à ce qui pourrait s'appararenter au futur du web et du mobile. Pour faire de votre application Ionic une PWA, rien de bien compliquer, car il suffit d'éditer le fichier **src/index.html** et décommenter la ligne suivante :

```js
<!-- un-comment this code to enable service worker
  <script>
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('service-worker.js')
        .then(() => console.log('service worker installed'))
        .catch(err => console.error('Error', err));
    }
  </script>-->
```

Voilà. Votre application est désormais une PWA et rien ne vous empeche de la publier sur le web.

Le code que nous avons décommenté fait appel à Service Worker, un ensemble de scripts que le navigateur lance en arrière plan et qui va nous permettre de mettre en cache des fichiers et donc de les rendre disponible hors connexion, de faire de la synchronisation de données ou encore des notifications push.

Il est tout a fait possible de controler quels fichiers sera mis en cache en éditant le fichier **src/service-worker.js**

```js
/**
 * Check out https://googlechromelabs.github.io/sw-toolbox/ for
 * more info on how to use sw-toolbox to custom configure your service worker.
 */


'use strict';
importScripts('./build/sw-toolbox.js');

self.toolbox.options.cache = {
  name: 'ionic-cache'
};

// pre-cache our key assets
self.toolbox.precache(
  [
    './build/main.js',
    './build/vendor.js',
    './build/main.css',
    './build/polyfills.js',
    'index.html',
    'manifest.json'
  ]
);

// dynamically cache any other local assets
self.toolbox.router.any('/*', self.toolbox.fastest);

// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkFirst;
```

On peut ajuster les paramètres de notre PWA en éditant également le fichier **src/manifest.json**

```js
{
  "name": "Duckcoin",
  "short_name": "DCK",
  "start_url": "index.html",
  "display": "standalone",
  "icons": [{
    "src": "assets/imgs/logo.png",
    "sizes": "512x512",
    "type": "image/png"
  }],
  "background_color": "#df4932",
  "theme_color": "#df4932"
}
```

Ce format, qui n'est pas propre à Ionic, est celui utilisé dans toutes les PWA. C'est le manifeste[^1] de l'application. Voyons un peu ce qui signifie chaque option :

* **name** : C'est le nom de votre application, celui qui apparaitre sous l'icone une fois installé sur votre téléphone \(Oui une PWA s'installe, mais beaucoup plus vite qu'une application classique\)
* **short\_name** : ce nom remplacera la valeur du "name" uniquement si l'accueil de votre téléphone est bondée d'applications et donc ne dispose pas d'assez de place à l'écran.
* **start\_url** : c'est le point d'entrée de votre PWA. On aurait pu très bien mettre un fichier PHP ou autre.
* display : permet de gérer l'affichage de l'application. le mode _Standalone_ permet d'avoir l'impression en ouvrant l'application d'être vraiment dans une application native. D'autres options existent : _fullscreen_, _browser_ \(affichage en mode page web classique\)
* **icons** : liste d'icones pour chaque taille d'écran \(smartphone, tablette,...\)
* **background\_color** : couleur d'arrière plan
* **theme\_color** : couleur de la barre d'outil de votre appareil mobile.

Il ne vous reste plus qu'à compiler le tout, et à faire pointer votre nom de domaine sur le dossier www contenant les fichiers sources de votre PWA 

```bash
$ npm run ionic:build -- --prod 
```

Ionic est très impliqué dans le PWA, pressentant certainement une ruée vers cette technologie dans l'univers du mobile. D'ailleurs la société éditrrice du Framework a créé en l'espace d'un an deux projets pour faciliter la création de PWA : Stencil et Capacitor.

[^1]: Web App manifest, Google Developer [https://developers.google.com/web/fundamentals/web-app-manifest/](https://developers.google.com/web/fundamentals/web-app-manifest/)

