# Première application Ionic

Pour créer votre première application, rien de plus simple :

```
$ ionic start monAppli tabs
✔ Creating directory ./monAppli - done!
✔ Downloading and extracting tabs starter - done!

? Would you like to integrate your new app with Cordova to target native iOS and Android? (y/N)
```

A la question _"Would you like to integrate your new app with Cordova to target native iOS and Android?"_ saisir **"y"**.

Et à la question _"Install the free Ionic Pro SDK and connect your app?"_ , répondez aussi par un **"y"**.

Vous allez devoir entrez vos identifiants et générer une paire clé privé/publique en choisissant _**"Automatically setup new a SSH key pair for Ionic Pro"**_

Suivez ensuite le setup et garder les valeurs par défaut \(choisir **"Y"** à chaque fois\).

La syntaxe générique d'une création d'application est la suivante :

```
$ ionic start [<name>] [<template>]
```

| Entrée | Description |
| :--- | :--- |
| name | C'est le nom de votre application au format Camel par ex. Vous pouvez également l'écrire tout en minuscule \(ce que je recommande\) |
| template | C'est le template ionic de votre choix. Pour afficher la liste des templates disponible actuellement, vous pouvez saisir la commande **ionic start --list **\(voir ci-dessous\) |

```
$ ionic start --list
tabs ............... ionic-angular A starting project with a simple tabbed interface
blank .............. ionic-angular A blank starter project
sidemenu ........... ionic-angular A starting project with a side menu with navigation in the content area
super .............. ionic-angular A starting project complete with pre-built pages, providers and best practices for Ionic development.
conference ......... ionic-angular A project that demonstrates a realworld application
tutorial ........... ionic-angular A tutorial based project that goes along with the Ionic documentation
aws ................ ionic-angular AWS Mobile Hub Starter
tabs ............... ionic1 A starting project for Ionic using a simple tabbed interface
blank .............. ionic1 A blank starter project for Ionic
sidemenu ........... ionic1 A starting project for Ionic using a side menu with navigation in the content area
maps ............... ionic1 An Ionic starter project using Google Maps and a side menu
```

il est également possible de créer une application à partir d'un dépot git :

```
$ ionic start monappli_sur_git https://github.com/charlesen/monappli_sur_git
```

Une fois votre application créée, accédez au dossier nouvellement créé, puis démarrer le projet :

```
$ cd monappli
$ ionic serve -lc
```

Ionic devrait ensuite ouvrir votre application depuis votre navigateur préféré.

## Création du projet Duckcoin

Comme nous l'avons vu, il est possible de créer une application mobile à partir d'un dépôt git. C'est ce que nous allons faire pour l'application DuckCoin.

Ouvrez donc votre terminal et saisissez les commandes suivantes :

```
$ ionic start duckcoin https://github.com/charlesen/duckcoin-starter
```

![](/assets/ionic_screen_2.png)

Démarrez ensuite l'application avec la commande serve :

```
$ cd duckcoin
$ ionic serve -lc
```

![](/assets/screen_app1.png)

## Struction du projet

Faisons un peu le tour de l'anatomie d'un projet type sous Ionic.

## ./src/index.html

> C'est l'entrée principale du projet. Il faut se rappeler q'une application Hybride utilisation la technologie WebView du téléphonequi se comporte comme un mini-navigateur à l'intérieur duquel on peut afficher un site web, qui est votre projet.

A l'intérieur  de ce fichier, Ionic va aller chercher le tag **&lt;ion-app&gt;** à l'intérieur duquel vos différents écrans seront chargés.

```js
<ion-app></ion-app>
```

On retrouve également du code javascript, généré par Ionic et qu'il ne sera pas nécessaire de modifier :

```js
<!-- Ionic's root component and where the app will load -->
<ion-app></ion-app>

<!-- The polyfills js is generated during the build process -->
<script src="build/polyfills.js"></script>

<!-- The vendor js is generated during the build process
     It contains all of the dependencies in node_modules -->
<script src="build/vendor.js"></script>

<!-- The main bundle js is generated during the build process -->
<script src="build/main.js"></script>
```

## ./src/

C'est à l'intérieur que l'on retrouve le code de l'application à proprement. Lorsque l'on voudra rajouter de nouveaux écrans, de la logique métier,...c'est ici que cela se passera.

On retrouve du code écrit en TypeScript \(nous en reparlerons en détails au [chapitre 6](/chap-6-introduction-au-langage-typescript-le-futur-de-javascript.md)\) dont l'extension de fichiers est **.ts**.

On retrouve aussi du htlm, du css,...

> **Ecran Mobile = 1 Fichier .ts + 1 Fichier .html + 1 Fichier .scss**

le fichier **src/app/app.module.ts** est le point d'entrée métier de notre application.

```js
@NgModule({
  declarations: [MyApp, ContactPage, HomePage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, ContactPage, HomePage],
  providers: []
})
export class AppModule {}
```

C'est dans ce fichier que l'on décide quelle composant \(ici MyApp\) sera le composant principal. On expliquera ces notions de composants dans le [chapitre 8](/chap-8-architecture-avancee-dune-application-ionic-composants-directives-providers-et-modules.md).

Dans le [chapitre suivant](/chap-4-templates-et-customisation.md), nous allons apprendre à customiser notre application pour qu'elle soit un peu plus à notre image.Mais en attendant, exerçons-vous un peu.
