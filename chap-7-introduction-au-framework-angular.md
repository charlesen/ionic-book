# Chap 7 - Introduction au framework Angular

AngularJS est un framework JavaScript libre et open source développé par Google. Il permet la construction d'applications client reactives en HTML et en TypeScript. Angular est lui-même écrit en TypeScript.

Angular, propose un outil, 'Angular CLI \(Command line\), qui facilite la création et le développement de projets web en ligne de commande.

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

En avant d'aller plus loin decouvrons un peu l'architecture d'Angular

## Structure d'un projet Angular

Les blocs de base d'une application Angular sont les modules \(NgModules\), qui fournissent un contexte de compilation pour les composants. Une application a toujours au moins un module racine qui permet le lancement du projet \(à l'exemple d'un fichier index.html en racine d'un site web\).

À l'intérieur d'un projet angular on trouver un certain nombre de dossiers et de fichiers :

![](/assets/angular_content.png) 

A

## Exercez-vous

1\) Créez un nouveau projet comme expliqué précédemment

2\) Que pouvez-vous remarquer dans l'arborescence de fichiers d'Angular...vis-à-vis de Ionic

