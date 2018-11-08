## Structure et architecture d'un projet Angular

### Structure d'un projet

À l'intérieur d'un projet angular on trouve un certain nombre de dossiers et de fichiers :

![](/assets/angular_content.png)

* **e2e** : ce dossier stock des scripts pour effectuer des tests unitaires, un ensemble de d'énoncé et d'instruction qui permettent de vérifier que son code fonctionne bien selon un certain cahier des charges.
* **node\_modules** : c'est dans ce dossier que sont installés tous les plugins Node installé via npm.
* **src** : c'est dans ce dossier seront stockés nos fichiers sources,le code quoi. C'est dans ce dossier que l'on passera 99% du temps.
* **angular-cli.json** : un fichier de configuration pour Angular CLI.
* **package.json** : fichier de configuration pour Node
* **protractor.conf.js** : Protractor est un outil utilisé pour les Tests unitaires. Ce fichier de configuration est utilisé par lui.
* **karma.conf.js** : karma est un autre outil utilisé dans les tests unitaires. Tester son projet est une philosophie forte chez Angular.
* **tsconfig.json** : fichier de configuration pour le compilateur de TypeScript \(tsc\).
* **tslint.json** : tslint est utilitaire qui permet de vérifier les fichiers TypeScript \(bug, import non utilisé,...\)

### Architecture Angular

Le bloc de base d'une application Angular est le module \(NgModules\) qui sert de contexte de compilation et d'execution à un autre élément nommé Composant. Un composant peut être vu comme comme la combinaison :

* D'une **Vue** : du contenu HTML
* D'un **Modèle** de données : les informations qui vont être affichées dans le contenu HTML
* D'un **Contrôleur**, qui va se charger de la logique derrière l'affichage des données dans la vue.

Un composant peut être constitué d'autres composants. Par exemple :

* **Twitter** \[Composant Root\]
  * **Entête** \(Titre, logo,...
  * **Un contenu** principal \[Composant Content\]
    * **Tweets** \[Composant liste de Tweets\]
      * **Un tweet** \[Composant Tweet\] est constitué de contenu
        * ce contenu peut être soit une image \[Composant image\], soit du texte \[Composant texte\]
        * ce contenu est aussi fait de commentaires \[Composant Commentaire\]

L'intérêt d'une architecture en composants est que si jamais on souhaite étendre une fonctionnalité particulière, plutôt que de la redéfinir, on va créer un composant qui pourra être appelé partout \(afficher des tweets en page d'accueil, sur son profil, dans les résultats de recherche,...\).

Le composant principal d'Angular est définit à l'intérieur du fichier **src/app/app.component.ts**, où l'on retrouve aussi d'autres fichiers qui forment le MVC du projet.

```
app.component.css
app.component.html
app.component.spec.ts
app.component.ts
app.module.ts
```

Une application a toujours au moins un module racine qui permet le lancement du projet \(à l'exemple d'un fichier index.html en racine d'un site web\). C'est ce module qui va amorcer le composant Root \(**AppComponent**\).

Par convention, celui-ci s'appelle **AppModule** et est défini dans le fichier **src/app/app.module.ts**.

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

S'il fallait faire un comparatif avec un véhicule, les composants seraient des élements comme le pare-brise, les rétroviseurs, les roues, ...tandis que le module Root serait le moteur, sans lequel le véhicule, même le plus beau au monde \(avec les plus beaux composants\), ne pourrait démarrer.

