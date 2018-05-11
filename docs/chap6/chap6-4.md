## Les itérateurs

#### Boucle for..of

Cette boucle permet d'afficher les éléments d'une liste pure.

```js
let unArray = [1, "deux", 'trois'];

for (let valeur of unArray) {
    console.log(valeur); // 1, "deux", "trois"
}
```

cette boucle est aussi celle qu'il faudra utiliser quand on voudra boucler sur des listes d'objets :

```js
let unArrayObjets = [{'nom':'etudiant 1', 'num':1}, {'nom':'etudiant 2', 'num':2}];

for (let item of unArrayObjets) {
    console.log(item.nom); // etudiant 1 etudiant 2
}
```

#### Boucle for..in

Reprenons le code précédent, mais en utilisant la boucle for..in

```js
let unArray = [1, "deux", 'trois'];

for (let index in unArray) {
    console.log(index); // 0, 1, 2
}
```

La boucle renvoie en fait les indexes de chaque valeur et ne doit être utilisé dans ce cas là que si l'on souhaite vraiment récupérer les indexes d'un tableau.

Mais le véritable intérêt pour moi de la boucle **for..in** est de pouvoir boucler sur les propriétés d'un objet.

```js
let etudiant = {'nom':'Etudiant 001', 'num':1};
for (let cle in etudiant) {
    console.log(etudiant[cle]) // Renvoie Etudiant 001
}
```

Et un petit résumé de ce que renvoie l'une ou l'autre des deux boucles :

```js
let list = [4, 5, 6];
let etudiant = {'nom':'Etudiant', 'num':1};


for (let i in list) {
   console.log(i); // "0", "1", "2",
}

for (let i of list) {
   console.log(i); // "4", "5", "6"
}
```

### Calculs et transformations sur les listes avec map, filter et reduce

#### Map

Considerons la liste de politiciens suivante :

```js
let politiciens = [{
        'prenom': 'Emmanuel',
        'nom': 'Macron',
        'age': 40,
      },
      {
        'prenom': 'Edouard',
        'nom': 'Philippe',
        'age': 47,
      },
      {
        'prenom': 'Bruno',
        'nom': 'Le Maire',
        'age': 49,
      },
      {
        'prenom': 'Virginie',
        'nom': 'Calmels',
        'age': 47,
      },
      {
        'prenom': 'Alain',
        'nom': 'Juppé',
        'age': 72,
}];
```

Pour extraire uniquement les noms tout en majuscule de chacun d'entre eux, JavaScript propose différentes solutions comme celle-ci :

```js
let politiciens_noms = [];

for (let i = 0, max = politiciens.length; i < max; i += 1) {

    politiciens_noms.push(politiciens[i].nom.toUpperCase());

}

// politiciens_noms
// (5) ["MACRON", "PHILIPPE", "LE MAIRE", "CALMELS", "JUPPÉ"]
```

Ou encore celle là :

```js
let politiciens_noms = [];

politiciens.forEach(function (politicien) {

    politiciens_noms.push(politicien.nom.toUpperCase());

});
```

Mais avec la méthode Map, la récupération se fait de manière beaucoup plus efficace :

```js
let politiciens_noms = politiciens.map(function (politicien, index, array) {

    return politicien.nom.toUpperCase();

});
// politiciens_noms
// (5) ["MACRON", "PHILIPPE", "LE MAIRE", "CALMELS", "JUPPÉ"]
```

La méthode donne accès dans son callback à chaque item du tableau depuis la variable **politicien**, à sa position \(**index\)** à l'intiérieur du tableau, et enfin du tableau lui-même \(**array**\).

Avec cette méthode, vous n'aurez pas à vous inquieter de l'index de la boucle ou d'utiliser la méthode push pour stocker vos éléments. De plus, la méthode renvoyant un Array, il est tout à fait possible de d'appliquer une autre méthode juste après la méthode map.

#### Filter

Cette méthode fait exactement ce que nom semble suggérer : à partir d'un tableau reçu en entrée, il le filtre en éliminant les éléments non désiré selon une condition determinée.

Reprenons notre liste de politiciens et ne retenons que ceux de moins de 50 ans. Grâce à la methode filter, il suffit de faire :

```js
let politiciens_U50 = politiciens.filter((politicien) => politicien.age <= 50 );

// (4) [{…}, {…}, {…}, {…}]
// 0:{prenom: "Emmanuel", nom: "Macron", age: 40}
// 1:{prenom: "Edouard", nom: "Philippe", age: 47}
// 2:{prenom: "Bruno", nom: "Le Maire", age: 49}
// 3:{prenom: "Virginie", nom: "Calmels", age: 47}
// length:4
// __proto__:Array(0)
```

#### Reduce

Si la fonction **map** permet de créer un nouveau tableau en transformant chaque élément d'un tableau, et si **filter** permet quant à lui de créer un nouveau tableau en supprimer des éléments selon une condition determinée, la méthode **reduce** permet de prendre tous les éléments du tableau pour les "réduire" à une unique valeur.

Considérons le tableau de politiciens de moins de 50 ans précécent. On aimerait cette fois calculer la moyenne d'âge de ces _"jeunes"_ faiseurs de lois.

```js
let moyenne_age = politiciens_U50.reduce(function (previous, current, index) {
    return (previous + current.age);
}, 0)/politiciens_U50.length;

// previous est la valeur de l'âge à un moment t dans la boucle. Cette valeur est initialié à 0.
// current est la valeur actuelle de l'élement de la boucle, ex: {prenom: "Emmanuel", nom: "Macron", age: 40}

// moyenne_age : 45.75
```

Vous aurez souvent l'occasion d'utiliser ces méthodes qui sont extrêment puissante. On peut comme dit précédemment les concaténer les unes derrière les autres. On peut par exemple calculer la moyenne d'âge des politiciens de moins 50 ans précédents en une seule ligne de code. Oui je sais, je suis cruel de vous l'avoir caché jusque là :-\).

```js
politiciens.filter((politicien) => politicien.age <= 50 )
           .reduce(function (previous, current, index) {
                      return previous + current.age;
           }, 0)/politiciens.filter((politicien) => politicien.age <= 50 )
.length;

// Renvoie bien : 45.75
```