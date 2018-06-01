## Stencil

**Site internet :** [https://stenciljs.com/](https://stenciljs.com/)

![](/assets/stencil_1.png)

Les créateurs de ce projet le définissent comme _**"un outil pour construire des composants web modernes et des progressive web apps \(PWA\)"**_.

Stencil veut tirer parti des principales nouvelles fonctionnalités disponibles dans les navigateurs telles que les **"Web Components"**[^1], une nouvelle spécification du W3C[^2] permettant la création de composants compatibles avec tous les frameworks. Ceux-ci fonctionnent aussi bien dans Angular, React, Ember, que Vue, il fonctionne aussi avec jQuery ou même sans framework du tout, car le coeur de Stencil est la création de simples éléments HTML.

Exemple de composant web, ici qui affichera le drapeau du pays précisé dans l'attribut "country".

```js
<flag-icon country="fr"></flag-icon>
```

### Installation et prise en main

Stencil utilise NodeJS et un certain nombre d'autres outils déjà présent si vous avez correctement installé Ionic.

Le démarrage d'un nouveau projet peut se faire en clonant un template exemple disponible sur github.

```bash
$ git clone https://github.com/ionic-team/stencil-starter.git mon_app_stencil

Clonage dans 'mon_app_stencil'...
remote: Counting objects: 306, done.
remote: Compressing objects: 100% (16/16), done.
remote: Total 306 (delta 14), reused 17 (delta 10), pack-reused 279
Réception d'objets: 100% (306/306), 329.35 KiB | 0 bytes/s, fait.
Résolution des deltas: 100% (153/153), fait.
Vérification de la connectivité... fait.

$ cd mon_app_stencil
$ git remote rm origin
$ npm install
```

Vous aurez besoin d'installer le plugin sass à l'intérieur du projet :

```bash
$ npm install @stencil/sass --save-dev
```

Et le déclarer dans le fichier de configuration :

```js
const sass = require('@stencil/sass');

exports.config = {
  plugins: [
    sass()
  ]
};
// ... suite du fichier de config
```

Il ne reste plus qu'à compiler tout cela, puis démarrer le projet :

```bash
$ npm start
```

![](/assets/stencil_app_1.png)

### Création de composants

Les composants créés avec Stencil sont simplement des classes écrites en TypeScript avec des décorateurs un peu spéciaux. La création d'un nouveau composant se fait à partir d'un fichier ayant l'extension .tsx.

Dans le dossier **src/components**, créons le fichier **moncomposant.tsx **avec le contenu suivant :

**src/components/moncomposant.tsx**

```js
import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'mon-composant',
  styleUrl: 'mon-composant.scss'
})
export class MonComposant {
  // On déclare ici les propriétés du composants
  @Prop() prenom: string;

  @Prop() nom: string;

  @State() isVisible: boolean = true;

  render() {
    return (
      <p>
        Salut, je m'appelle {this.prenom} {this.nom}
      </p>
    );
  }
}
```

Dans ce composant, nous déclarons un certains nombre d'attributs \(propriétés\) à l'aide du décorateur **Prop**.

La méthode **render\(\)** permet de générer le contenu html. Ici on renverra simplement un paragraphe avec des valeurs des attributs **prenom** et **nom** du composant.

Créons aussi le fichier scss associé :

**src/components/moncomposant.scss**

```js
mon-composant {
  background: #e43b00;
  padding: 5px;
  margin: 5px 0;
  border-radius: 5px;
  display: block;
  color: #fff;
}
```

Puis dans n'importe qu'elle fichier html, vous pourrez appeler ce composant comme n'importe quel autre tag html :

```js
<mon-composant prenom="Charles" nom="EDOU NZE"></mon-composant>
```

Ajoutons par exemple ce tag en page d'accueil :

**src/components/app-home/app-home.tsx**

```js
import { Component } from '@stencil/core';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <p>
          Ma première application avec Stencil
          <mon-composant prenom="Charles" nom="EDOU NZE"></mon-composant>
        </p>

        <stencil-route-link url='/profile/stencil'>
          <button>
            Mon profil
          </button>
        </stencil-route-link>
      </div>
    );
  }
}
```

ce qui donne ceci :

![](/assets/stencil_2.png)

On peut aussi tout simplement rajouter ce composant au fichier **index.html** de l'application, après com :

```bash
$ npm run build
$ vi src/index.html # Choisissez votre éditeur préféré
```

```js
<!DOCTYPE html>
<html dir="ltr" lang="en">
<head>
  <meta charset="utf-8">
  <title>Mon appli Stencil</title>
  <meta name="Description" content="Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil!">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0">
  <meta name="theme-color" content="#16161d">
  <meta name="apple-mobile-web-app-capable" content="yes">

  <meta http-equiv="x-ua-compatible" content="IE=Edge"/>

  <script src="/build/app.js"></script>

  <link rel="apple-touch-icon" href="/assets/icon/icon.png">
  <link rel="icon" type="image/x-icon" href="/assets/icon/favicon.ico">
  <link rel="manifest" href="/manifest.json">
</head>
<body>

  <!--<my-app></my-app>-->
  <mon-composant prenom="Charles" nom="EDOU NZE"></mon-composant>

  <style>
    body {
      margin: 0px;
      padding: 0px;
      font-family: sans-serif;
    }
  </style>
</body>
</html>
```

On n'affichera plus que le composant :

![](/assets/stencil_4.png)

L'idée est de pouvoir réutiliser des composants créés dans d'autres projets, les partager ou faire évoluer ceux des autres. C'est toute la philosophie des Web Components.

Kit de développement de PWA avec Ionic \(Ionic PWA Toolkit\)

Si vous souhaitez partir sur un projet prêt à l'emploi pour votre prochain PWA, Ionic propose son propre kit, régulièrement mis à jour. Au moment où j'écris ces quelques lignes, le kit utilise la version 4 \(Alpha\) du framework Ionic et propose tout un tas de fonctionnalités intéressantes :

* Le framework Stencil \(évidemment\), pour créer et charger facilement des composants Web standardisés

* Le framework Ionic

* Un système de routage

* Notifications Push

* Affichage d'un toast quand une nouvelle version du PWA est disponible

* Tests unitaires

* Pré-rendu

* Configuration pour l'optimisation du chargement des pages \(lazy loading\)
* Configuration pour l'optimisation du code
* Polyfills chargé de manière sélective en fonction du support du navigateur
* ES6 par défaut pour les nouveaux navigateurs, ES5 pour les anciens navigateurs
* Tout ce dont vous avez besoin pour ajouter votre PWA à l'écran d'accueil \(Service worker, manifeste Web et méta-tags iOS\)
* Composant ion-img pour un chargement rapide des images
* Customisation des styles à l'aide de variables SCSS

Pour installer le kit et commencer à développer dessus, il vous suffit de cloner les sources depuis le depot git :

```bash
$ git clone https://github.com/ionic-team/ionic-pwa-toolkit.git mon-pwa
$ cd mon-pwa
$ git remote rm origin
```

Vous pourrez ensuite démarrer l'application :

```bash
$ npm install
$ npm start
```

![](/assets/screen_pwa_toolkit.png)

Pour compiler une version de production, il suffit de faire :

```bash
$ npm run build
```

Il ne vous restera plus qu'à faire pointer nom de domaine sur le fichier **www/index.html**.

Vous pouvez également tester la version de production depuis votre navigateur en utilisant par exemple le logiciel **http-server** \(_**npm install http-server -g**_\).

```
$ http-server www

Starting up http-server, serving www
Available on:
  http://127.0.0.1:8080
  http://192.168.2.146:8080
Hit CTRL-C to stop the server
```



