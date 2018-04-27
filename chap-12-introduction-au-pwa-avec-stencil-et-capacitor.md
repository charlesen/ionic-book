# Chap 12 - Introduction au PWA avec Stencil et Capacitor

## Une Progressive Web App c'est quoi ?

C'est une application disponible à la fois sur le web et sur le mobile, et qui se comporte comme une application mobile native.

Une étude a montré que bon nombre d'utilisateurs, autour de 20%, se désintéressaient d'une application du fait de sa relative complexité d'installation sur mobile. De plus, de nombreux utilisateurs sont hésitants à l'idée d'installer une application qui prendrait à la longue beaucoup trop de place sur leur téléphone à cause du cache, des fichiers statiques,...

Le PWA vient en quelque sorte corriger ces problèmes et bien d'autres, rencontrés dans l'univers du mobile.

## Ionic à l'assaut du PWA

La société éditrice du Framework mobile n'a pas attendu pour s'attaquer à ce qui pourrait s'appararenter au futur du web et du mobile. Elle a créé en l'espace d'un an deux projets pour faciliter la création de PWA : Stencil et Capacitor.

### Stencil 

**Site internet :** [https://stenciljs.com/](https://stenciljs.com/)

![](/assets/stencil_1.png)

Les créateurs de ce projet le définissent comme _**"un outil pour construire des composants web modernes et des progressive web apps \(PWA\)"**_.

Stencil veut tirer parti des principales nouvelles fonctionnalités disponibles dans les navigateurs telles que les **"Web Components"**[^1], une nouvelle spécification du W3C[^2] permettant la création de composants compatibles avec tous les frameworks. Ceux-ci fonctionnent aussi bien dans Angular, React, Ember, que Vue, il fonctionne aussi avec jQuery ou même sans framework du tout, car le coeur de Stencil est la création de simples éléments HTML.



Exemple de composant web, ici qui affichera le drapeau du pays précisé dans l'attribut "country".

```js
<flag-icon country="fr"></flag-icon>
```

#### Installation et prise en main

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



#### Création de composants

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



On peut aussi tout simplement rajouter ce composant au fichier index.html de l'application, après com :

```bash
$ npm run build
$ vi src/index.html # Choisissez votre éditeur préféré
```

```


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



### Capacitor : [https://capacitor.ionicframework.com/](https://capacitor.ionicframework.com/)

![](/assets/ionic_capacitor.png)

De ces deux outils, **Capacitor** est surement celui qui a le plus de potentiel et donc est susceptible de durer dans le temps. Mais les technologies mobiles évoluant tellement vite, seul l'avenir nous dira qui de ces deux technologies aura remporté le trophée de l'outil principal  de développement de PWA.

Affaire à suivre donc.

[^1]: MDN web docs : [https://developer.mozilla.org/fr/docs/Web/Web\_Components](https://developer.mozilla.org/fr/docs/Web/Web_Components)

[^2]: Ressources du W3C sur les WebComponents  : [https://www.w3.org/wiki/WebComponents/](https://www.w3.org/wiki/WebComponents/)

