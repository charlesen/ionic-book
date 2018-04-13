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

cd









## Exercez-vous

1\) Créez un nouveau projet comme expliqué précédemment

2\) Que pouvez-vous remarquer dans l'arborescence de fichiers d'Angular...vis-à-vis de Ionic

