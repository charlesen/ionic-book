## Les itérateurs

#### Boucle for..of

Cette boucle permet d'afficher les éléments d'une liste pure.

```js
let unArray = [1, "deux", 'trois'];

for (let valeur of unArray) {
    console.log(valeur); // 1, "deux", "trois"
}
```

Une fois votre code transpilé en JavaScript \(commande _**tsc**_\), il ressemblera plus à ceci :

```js
var unArray = [1, "deux", 'trois'];
for (var idx = 0; idx < unArray.length; idx++) {
    var valeur = unArray[idx];
    console.log(valeur);
}
```

La boucle _**for..of**_ est aussi celle qu'il faudra utiliser quand on voudra boucler sur des listes d'objets :

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
let etudiant = {'nom':'Etudiant 001', 'ine':1};
for (let idx in etudiant) {
    console.log(`${idx} : ${etudiant[idx]}`);
    // nom : Etudiant 001
    // ine : 1
}
```

Et un petit résumé de ce que renvoie l'une ou l'autre des deux boucles :

```js
let list = [3, 4, 5];
let etudiant = {'nom':'Etudiant', 'ine':1};

for (let val of list) {
   console.log(val); // "3", "4", "5"
}

for (let idx in list) { // moyen mnémotechnique : "in" comme "in-dex"
   console.log(idx); // "0", "1", "2", 
}

for (let idx in etudiant) {
    console.log(`${idx} : ${etudiant[idx]}`);
    // nom : Etudiant 001
    // ine : 1
}
```

### L'objet Set

L'objet Set \(Ensemble en français\) permet de stocker des valeurs uniques, de n'importe quel type, que ce soit des valeurs d'un type primitif \(string, booléen,...\) ou des objets.

```js
const monObjSet = new Set([1, 2, 3, 4, 5, 5, 5, 6]); // Liste d'éléments
```

L'objet set supprimera les doublons, ainsi en bouclant sur la liste, on aura qu'une seule valeur pour le chiffre 5

```js
for (let chiffre of monObjSet) {
  console.log(chiffre) // 1, 2, 3, 4, 5, 6
}
```

On peut également vérifier la présence d'une valeur dans notre liste avec la méthode _**has**_ :

```js
console.log(monObjSet.has(1)); // Renvoie "true", car la liste contient bien le chiffre 1
```

Il existe d'autres méthodes permettant de manipuler un ensemble : add, clear, delete, entries , foreach, values.

```js
console.log(monObjSet.add(7)); // Ajoute le chiffre 7

console.log(monObjSet.delete(6)); // Supprime le chiffre 7 de la l'ensemble

console.log(monObjSet.entries()); // renvoie un iterateur avec l'ensemble des entrées
let iterator1 = monObjSet.entries();
console.log(iterator1.next().value); // renvoie [1, 1]
console.log(iterator1.next().value); // renvoie [2, 2]
// ...


console.log(monObjSet.forEach(funct)); permet d'exécuter une fonction donnée pour chaque valeur de l'ensemble
monObjSet.forEach(function(value1, value1, set){
    console.log(value1, value2);
})

console.log(monObjSet.values()); // renvoie un iterateur avec les valeurs de chaque élément de l'ensemble
let iterator2 = monObjSet.values();
console.log(iterator2.next().value); // renvoie 1
console.log(iterator2.next().value); // renvoie 2
// ...


console.log(monObjSet.clear()); // Permet de retirer tous les éléments d'un ensemble Set.
```

Pour connaitre la taille d'un ensemble, on utilise la propriété _**size**_ :

```js
const chiffrePairs = new Set();
chiffrePairs.add(2);
chiffrePairs.add(2);
chiffrePairs.add(6);

console.log(chiffrePairs.size); // Renvoie 2, car on supprime les doublons
```

L'objet Set a aussi la particularité de mixer objet et liste. On peut ainsi assigner une valeur de type objet à la variable monObjSet :

```js
monObjSet['type'] = {category:'Nombres entiers', root:'Nombres réels'};
```

```js
for (let type in monObjSet) {
  console.log(monObjSet[type].category) // Nombres entiers
}
```

### Calculs et transformations sur les listes avec map, filter et reduce

#### Map

Considérons la liste de politiciens suivante :

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

Pour extraire uniquement les noms en majuscule de chaque politicien, il existe différentes solutions comme celle-ci :

```js
let politiciens_noms = [];

for (let pol of politiciens) {
    politiciens_noms.push(pol.nom.toUpperCase());
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

La méthode donne accès dans son callback à chaque item du tableau depuis la variable **politicien**, à sa position \(**index\)** à l’intérieur du tableau, et enfin du tableau lui-même \(**array**\).

Avec cette méthode, vous n'aurez pas à vous inquiéter de l'index de la boucle \(en JavaScript classique\) ou d'utiliser la méthode push pour stocker vos éléments. De plus, la méthode renvoyant un Array, il est tout à fait possible d'appliquer une autre méthode sur celui-ci juste après la méthode map.

#### Filter

Cette méthode fait exactement ce que nom semble suggérer : à partir d'un tableau reçu en entrée, il le filtre en éliminant les éléments non désiré selon une condition déterminée.

Reprenons notre liste de politiciens et ne retenons que ceux de moins de 50 ans. Grâce à la méthode filter, il suffit de faire :

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

Si la fonction **map** permet de créer un nouveau tableau en transformant chaque élément d'un tableau, et si **filter** permet quant à lui de créer un nouveau tableau en supprimant des éléments selon une condition donnée, la méthode **reduce** permet de prendre tous les éléments du tableau pour les "réduire" à une unique valeur.

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



