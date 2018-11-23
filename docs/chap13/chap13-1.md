# Migration de Ionic 3 vers Ionic 4

Nous allons voir étape par étape comment migrer de Ionic 3 vers Ionic 4. Etant donné que cette version 4 est encore en phase Beta \(elle ne le sera plus d'ici quelques moi je pense\), il n'est pas recommandée de l'utiliser en production. Mais si vous êtes joueur, alors la suite cette page a est faite pour vous.

## Installation d'une version basique de Ionic 4

On va commencer par générer une nouvelle application de type _**"blank"**_ basée sur Ionic 4

```bash
$ ionic start duckcoin-ion4 blank --type=angular

✔ Preparing directory ./duckcoin-ion4 - done!
✔ Downloading and extracting blank starter - done!

Installing dependencies may take several minutes.

     ✨   IONIC  DEVAPP   ✨

 Speed up development with the Ionic DevApp, our fast, on-device testing mobile app

  -  🔑   Test on iOS and Android without Native SDKs
  -  🚀   LiveReload for instant style and JS updates

 -->    Install DevApp: https://bit.ly/ionic-dev-app    <--

────────────────────────────────────────────────────────────
```

A la question _**Install the free Ionic Pro SDK and connect your app?**_, répondez non pour le moment, vous aurez l'occasion de lier votre applicartion à Ionic PRO plus tard.

Remarquez dans la commande _**ionic start**_ le paramètre **--type=angular** qui permet de créer effectivement une application basée sur la V4.

En accedant au dossier **./duckcoin-ion4** on est frappé par la ressemnblance encore plus importante à mes yeux avec un projet Angular.

```bash
$ cd ./duckcoin-ion4
$ ls -al

total 56K
drwxr-xr-x 6 charles charles 4,0K nov.  15 09:47 ./
drwxr-xr-x 6 charles charles 4,0K nov.  15 09:49 ../
drwxr-xr-x 3 charles charles 4,0K nov.  15 09:47 app/
drwxr-xr-x 3 charles charles 4,0K nov.  15 09:47 assets/
drwxr-xr-x 2 charles charles 4,0K nov.  15 09:47 environments/
-rw-r--r-- 1 charles charles  465 nov.   1 20:23 global.scss
-rw-r--r-- 1 charles charles  668 nov.   1 20:23 index.html
-rw-r--r-- 1 charles charles  965 nov.   1 20:23 karma.conf.js
-rw-r--r-- 1 charles charles  370 nov.   1 20:23 main.ts
-rw-r--r-- 1 charles charles 3,4K nov.   1 20:23 polyfills.ts
-rw-r--r-- 1 charles charles  642 nov.   1 20:23 test.ts
drwxr-xr-x 2 charles charles 4,0K nov.  15 09:47 theme/
-rw-r--r-- 1 charles charles  194 nov.   1 20:23 tsconfig.app.json
-rw-r--r-- 1 charles charles  303 nov.   1 20:23 tsconfig.spec.json
```

## Migration de documents

### Services

En vous plaçant à la racine de votre nouveau projet Ionic, copiez tous les documents présents dans le dossier **src/providers** de votre projet Ionic 3 vers le nouveau dossier **src/app/services**.

```
$ cp -R ../duckcoin/src/providers src/app/services
```

Puis ajustez vos services en ajoutant **{ providedIn: 'root' }** dans le décorateur **@Injectable\(\)** comme ceci :

**fichier : src/app/mon.service.ts**

```js
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // <!-- ICI
})
export class MonService {

}
```

Cette instruction permet de rendre votre service accessible à l'ensemble de l'application \(**root**\).

### Composants, Directives et Pipe

En vous plaçant toujours à la racine de votre nouvelle application, copiez comme précédemment tous les documents présent dans le dossier **src/components** vers **src/app/components, **tous les documents présent dans le dossier **src/directives** vers **src/app/directives**, et **src/pipes** vers **src/app/pipes**.

```bash
$ cp -R ../duckcoin/src/components src/app/components
$ cp -R ../duckcoin/src/pipes src/app/pipes
$ cp -R ../duckcoin/src/directives src/app/directives

$ ls -al src/app/
total 72
drwxr-xr-x 13 charles charles 4096 nov.  15 10:22 .
drwxr-xr-x  6 charles charles 4096 nov.  15 09:47 ..
-rw-r--r--  1 charles charles   63 nov.   1 20:23 app.component.html
-rw-r--r--  1 charles charles 1583 nov.   1 20:23 app.component.spec.ts
-rw-r--r--  1 charles charles  613 nov.   1 20:23 app.component.ts
-rw-r--r--  1 charles charles  763 nov.   1 20:23 app.module.ts
-rw-r--r--  1 charles charles  372 nov.   1 20:23 app-routing.module.ts
drwxrwxr-x  3 charles charles 4096 nov.  15 10:16 components
drwxrwxr-x  3 charles charles 4096 nov.  15 10:22 directives
drwxr-xr-x  3 charles charles 4096 nov.  15 10:14 home
drwxrwxr-x  2 charles charles 4096 nov.  15 10:14 login
drwxrwxr-x  2 charles charles 4096 nov.  15 10:14 mining
drwxrwxr-x  3 charles charles 4096 nov.  15 10:23 pipes
drwxrwxr-x  2 charles charles 4096 nov.  15 10:14 profile
drwxrwxr-x  4 charles charles 4096 nov.  15 10:19 services
drwxrwxr-x  2 charles charles 4096 nov.  15 10:14 setting
drwxrwxr-x  2 charles charles 4096 nov.  15 10:14 tabs
```

### Style SCSS

Copiez le style globale de votre application **src/app/app.scss** vers **src/global.scss**.

### Pages et autres dossiers

Copiez ensuite l'ensemble de vos pages **src/pages/mapage** vers  **src/app/mapage**, et tout autre dossier dans le dossier **src/app**.

```bash
$ cp -R ../duckcoin/src/pages/* src/app/
```

### Nouvelle arborescence

| Ionic V3 | Ionic V4 |
| :---: | :---: |
| ![](/assets/ionic_v3.png) | ![](/assets/ionic_v4.png) |

### Annexes :

* _My Method for Upgrading from Ionic 3 to Ionic 4_, par Josh Morony [https://www.joshmorony.com/my-method-for-upgrading-from-ionic-3-to-ionic-4/](https://www.joshmorony.com/my-method-for-upgrading-from-ionic-3-to-ionic-4/)



