## Première application Ionic

Pour créer votre première application, rien de plus simple, saisissez la commande suivante depuis votre invite de commandes :

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

