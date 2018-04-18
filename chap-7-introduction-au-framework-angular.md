# Chap 7 - Introduction au framework Angular

![](/assets/logo_angular.png)

AngularJS est un framework JavaScript libre et open source développé par Google. Il permet la construction d'applications client reactives en HTML et en TypeScript. Angular est d'ailleurs lui-même écrit en TypeScript.

Angular, propose un outil, Angular CLI \(Command line\), qui facilite la création et le développement de projets web en ligne de commande.

Pour mieux comprendre le fonctionnement d'Angular, rien de mieux que développer un petit projet web basé sur celui-ci.

## Installation d'Angular CLI

```bash
$ npm install -g @angular/cli # Rajouter "sudo" si nécessaire
```

## Création d'un nouveau projet

On va se mettre en dehors de notre projet DuckCoin, pour éviter de le polluer. Dans un dossier autre que celui de Duckcoin, saisir la commande suivante :

```bash
$ ng new duckweb # Cette commande va créer un nouveau dossier duckweb.
```

Ca va mettre un peu de temps à se créer, mais pas de panique vous êtes sur la bonne voie ;-\).

![](/assets/angular_create_screen1.png)

Une fois la création terminée, on va pouvoir lancer notre projet :

```bash
$ cd duckweb
$ ng serve --open
```

![](/assets/angular_launch.png)

En avant d'aller plus loin découvrons un peu la structure, puis l'architecture d'un projet Angular.

## Structure d'un projet Angular

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

## Architecture d'un projet Angular

Les blocs de base d'une application Angular sont les composants. Un composant peut être vu comme comme un ensemble composé :

* D'une **Vue** : du contenu HTML
* D'un **Modèle** de données : les informations qui vont être affichées dans le contenu HTML
* D'un **Contrôleur**, qui va se charger de la logique derriere l'affichage des données dans la vue.

Un composant peut être constitué d'autres composants. Par exemple :

* Twitter \[Composant Root\] 
  * Header \(Titre, logo,...
  * Un contenu principal \[Composant Content\]
    * Tweets \[Composant Tweets\]
      * Un tweet \[Composant Tweet\] est constitué de contenu
        * ce contenu peut être soit une image \[Composant image\], soit du texte \[Composant texte\]
        * ce contenu est aussi fait de commentaires \[Composant Commentaire\]

L'intérêt d'une architecture en composants est que si jamais on souhaite étendre une fonctionnalité particulière, plutot que de la redefinir, on va créer un composant qui pourra être appelé partout \(afficher des tweets en page d'accueil, sur son profil, dans les résultats de recherche,...\).

Le composant principal d'Angular est définit à l'intérieur du fichier **src/app/app.component.ts**, où l'on retrouve aussi d'autres fichiers qui forment le MVC du projet.

```
app.component.css
app.component.html
app.component.spec.ts
app.component.ts
app.module.ts
```

Une application a toujours au moins un module racine qui permet le lancement du projet \(à l'exemple d'un fichier index.html en racine d'un site web\). C'est ce module qui va amorcer le composant Root \(principal\).

Sources : [https://www.tutorialspoint.com/angular4/index.htm](https://www.tutorialspoint.com/angular4/index.htm)

## Angular dans les templates

### \*ngFor

Permet de boucler sur les éléments d'un tableau à l'intérieur d'un template html.

Supposons que l'on ait définit la liste des mois de l'année dans une liste :

```js
let months_of_year = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 
                      'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
```

l'affichage de tous les éléments se fait simplement de la manière suivante :

```js
<div *ngFor="let month of months_of_year">
   Mois de l'année : {{month}}
</div>
```

### \*ngIf

Comme vous pouvez le devinez,  \*ngIf est la version "if...else" adaptée aux templates.

```js
<span *ngIf="isConnected">Je suis connecté.</span>
```

## Exercez-vous

1\) Créez un nouveau projet comme expliqué précédemment

2\) Que pouvez-vous remarquer dans l'arborescence de fichiers d'Angular...vis-à-vis de Ionic

3\) A l'aide de la commande suivante, générez un nouveau Composant nommé  **"transaction"** :

```bash
$ ng g c transaction
```

Que s'est-il passé ? Ouvrez le fichier **src/app/transaction/transaction.component.ts** et examinez-le.

4\) Ouvrez le fichier **src/app/app.component.html**, et remplacez le contenu ci-dessous \(on ne gardera que le logo d'Angular\)

```js
<h2>Here are some links to help you start: </h2>
<ul>
  <li>
    <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
  </li>
  <li>
    <h2><a target="_blank" rel="noopener" href="https://github.com/angular/angular-cli/wiki">CLI Documentation</a></h2>
  </li>
  <li>
    <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
  </li>
</ul>
```

Par le code suivant :

```js
<app-transaction></app-transaction>
```

Que s'est-il passé dans ce qui est affiché dans votre navigateur ?

**P.S :** notre application a désormais l'architecture suivante :

* **DuckWeb**
  * **Transaction**

5\) Remplacez le contenu du fichier **src/app/transaction/transaction.component.html**. Quel changement dans votre navigateur ?

6\) Ouvrez le fichier **src/app/transaction/transaction.component.ts** dans le constructeur, définissez  une liste de transactions comme vu dans le TP précédent, puis modifiez le fichier **src/app/transaction/transaction.component.html**, de manière à avoir le résultat suivant :

![](/assets/render_appcompo.png)

Que pouvez-vous conclure sur le rôle d'un composant ? Comprenez-vous mieux comment fonctionne les composants Ionic ?

7\) Dans le fichier **src/app/transaction/transaction.component.ts**, ajoutez les lignes suivantes dans la partie dédiée aux imports :

```
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
```

Puis le modifiez le fichier comme ceci :

    import { Component, OnInit } from '@angular/core';
    import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http';

    const apiUrl='https://duckcoin.charlesen.fr'

    @Component({
      selector: 'app-transaction',
      templateUrl: './transaction.component.html',
      styleUrls: ['./transaction.component.css']
    })
    export class TransactionComponent implements OnInit {
      transactions: any = [];
      constructor(private http: HttpClient) {
        //
        this.http.get(`${apiUrl}/transactions`).subscribe(data => function(){
          console.log('transactions::data', data);
        });
      }

      ngOnInit() {
      }

    }

Vous avez planté normalement. Savez-vous pourquoi ?

