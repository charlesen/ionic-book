## Pipes

On en a déjà un peu parlé au chapitre. Les pipes permettent de modifier la forme d'un contenu avant son affichage. Citons quelques pipes intéressant :

* **currency** : permet de rajouter une devise avant la valeur sur laquelle on l'applique
* **date** : formatage de date
* **uppercase** : transforme du texte en majuscule
* lowercase : transforme du texte en minuscule
* **json** : affiche le contenu d'un objet ou d'un texte au format JSON
* ...

```js
let maVariable = "Hello mmi";
...
<span>{{maVariable | uppercase}}</span>
```

Pour créer un nouveau Pipe, il suffit de faire :

```bash
$ ionic g pipe monPipe

// Création du dossier src/pipes/square/
// Mise à jour du fichier src/pipes/pipes.module.ts
```



Pour plus de détails : [https://www.tutorialspoint.com/angular4/angular4\_pipes.htm](https://www.tutorialspoint.com/angular4/angular4_pipes.htm)

