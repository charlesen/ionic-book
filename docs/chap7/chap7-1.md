## Installation d'Angular CLI et Création d'un nouveau projet

```bash
$ npm install -g @angular/cli # Rajouter "sudo" si nécessaire
```

On va se mettre en dehors de notre projet DuckCoin, pour éviter de le polluer. Dans un dossier autre que celui de Duckcoin, saisir la commande suivante :

```bash
$ ng new duckweb # Cette commande va créer un nouveau dossier duckweb.
```

Ça va mettre un peu de temps à se créer, mais pas de panique vous êtes sur la bonne voie ;-\).

![](/assets/angular_create_screen1.png)



Si vous rencontrez une exception à la création du projet \(sous Windows notamment\), n'hésitez pas à supprimer le cache npm et recréer votre projet :

```bash
$ rm -rf duckweb # Suppresion du dossier, uniquement si ça bug.
$ npm cache clean --force
$ ng new duckweb
```

Une fois la création terminée, on va pouvoir lancer notre projet :

```bash
$ cd duckweb
$ ng serve --open
```

![](/assets/angular_launch.png)

En avant d'aller plus loin découvrons un peu la structure, puis l'architecture d'un projet Angular.

