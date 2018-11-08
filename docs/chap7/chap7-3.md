## Templates Angular

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

Comme vous pouvez le deviner,  \*ngIf est le _**"if...else"**_ adapté aux templates.

```js
<span *ngIf="isConnected">Je suis connecté.</span>
```

### Pipe

Comme dans la plupart des moteurs de templates, Angular permet l'utilisation de pipes qui permettent de modifier une variable ou un contenu avant qu'il soit affiché. Le framework propose un certain nombre de pipes prêts à l'emploi, comme _titlecase_, _currency_,...Mais il est tout à fait possible de créer son propre pipe.

```js
<div>
   <h2>{{ 'charles edou nze' | titlecase }}</h2>
</div>
```

**titlecase** permet de mettre en capitale les premières lettres de chaque mot. Ce qui donnera le résultat suivant :

```
Charles Edou Nze
```



