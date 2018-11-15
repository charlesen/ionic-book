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

## Migration de fichiers

Dans votre projet Ionic 3, copiez tous les documents présents dans le dossier **src/providers** dans le dossier **src/app/services** de votre Ionic 4. Puis ajustez vos services en ajoutant **{ providedIn: 'root' }** dans le décorateur **@Injectable\(\)** comme ceci : 

```js
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // <!-- ICI
})
export class MonService {

}
```

Cette instruction permet de rendre votre service accessible à l'ensemble de l'application \(**root**\).



