# Chap 6 - Introduction au langage TypeScript, le futur de JavaScript

TypeScript est un langage de programmation libre et open source développé par Microsoft qui a pour but d'améliorer et de sécuriser la production de code JavaScript. Sortie en 2012, Il est vu par beaucoup comme le futur du Javascript, car se basant en sur la norme ECMAScript 6, celle déjà intégré au moteur JavaScript de la plupart des navigateurs et qui fera foi dans les prochaines années.

TypeScript c'est donc du JavaScript, avec de supers pouvoirs, utilisé par la plupart des Frameworks JavaScript du moment.

![](/assets/typescript_framework_1.png)![](/assets/typescript_framework_2.png)

Les fichiers définis dans ce langage ont pour extension **.ts**. Les navigateurs web ne sachant pas encore interprété du code en TypeScript pur, il est nécessaire de le compiler en JavaScript : on parle alors de transtypage.

## Installation

Ionic utilise une version _"interne"_ de TypeScript, mais pour nos tests nous allons devoir installer le package de manière globale.

```
> npm install -g typescript
```

## Un premier script

Créons un fichier à la racine du projet **demo\_typescript.ts** et tant qu'à faire ajoutons-y du contenu :

**demo\_typescript.ts**

```js
function ditBonjour(person) {
    return "Bonjour, " + person;
}

let user = "Raphael";

document.body.innerHTML = ditBonjour(user);
```

Il faut ensuite, compiler ce code pour générer un fichier .js interprétable par le navigateur.

```js
$ tsc demo_typescript.ts 
$ ls -l
total 304
-rw-rw-r--   1 cee cee   6180 avril 11 22:14 config.xml
-rw-rw-r--   1 cee cee    131 avril 13 07:12 demo_typescript.js
-rw-rw-r--   1 cee cee    133 avril 13 07:04 demo_typescript.ts
```

**demo\_typescript.js**

```js
function ditBonjour(person) {
    return "Bonjour, " + person;
}
var user = "Raphael";
document.body.innerHTML = ditBonjour(user);
```

Bien évidemment le contenu du fichier **demo\_typescript.js **est strictement le même que celui du fichier **.ts**, car ce code est relativement simple.

Mais tout l'intérêt de TypeScript est surtout de pouvoir ajouter à JavaScript des notions de classes, d'interface, d'héritage ou de Polymorphisme,...

Créons une classe Licence et ajoutons-y des paramètres et quelques méthodes au passage.

## Types de base

Contrairement à JavaScript où les types sont définis au remplissage d'une variable, TypeScript propose un typage de variable beaucoup plus fort.

La définition générale d'une variable se fait de la manière suivante :

```js
let nomDeLaVariable: leTypeDeBase [= valeur par défaut - Optionnel];
```

### Booléens

```js
let isConnected: boolean = false;
```

### Nombres

```js
let valeur_decimal: number = 6;
let valeur_hex: number = 0xf00d;
let valeur_binary: number = 0b1010;
let valeur_octal: number = 0o744;
```

### String

```js
let color: string = "blue";
color = 'red'; # On a le choix entre les guillemets simples ou doubles
```

Chose intéressante pour les chaînes de caractères, il est possible de les utiliser sous forme de template, un truc que l'on rencontrait jusqu'à lors dans des langages de haut niveau comme Python.

```js
let fullName: string = `Charles EDOU NZE`;
let age: number = 30;
let sentence: string = `Salut, mon name est ${ fullName }.
                        J'aurai ${ age + 1 } ans à la fin de l'année.`;
```

Ceci est l'équivalent de concaténer des chaines de caractères avec le signe "+".

### Les tableaux

```js
let list_nombres_premiers: number[] = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
```

### Any

On l'utilise quand on ne sait pas trop qu'elle type de données on aura à traiter. C'est souvent le cas quand on utilise un API proprietaire.

```
let variableApi: any = 4;
variableApi = "c'est une chaine de caractère";
variableApi = false; // ou un booléan finalement
```

## Les Classes

Un des gros avantages de TypeScript est la possibilité de créer des classes, ce qui n'était pas tout à fait \(au sens strict\) en JavaScript, même s'il était possible de créer un genre de classe avec l'attribut prototype.

```js
class classeMmi {
    intervenant: string;
    etudiants: string[];
    constructor(intervenant: string, etudiants:string[]) {
        this.intervenant = intervenant;
        this.etudiants = etudiants;
    }
    getIntervenant() {
        return "L'intervenant actuel s'appelle " + this.intervenant;
    }
    getEtudiants() {
         return this.etudiants;
    }
}

let classeLPMim = new classeMmi("charles", ['etudiant1','etudiant_n']);
classeLPMim.getIntervenant() // Retourne L'intervenant actuel s'appelle charles
```

cd

## Comment TypeScript s'intègre à Ionic

En fait, TypeScript est présent partout ou presque dans Ionic. Les classes définit dans les fichiers .ts de chaque page sont écrit, comme vous vous en doutiez surement, en TypeScript :

```js
export class HomePage {
  selected : any = '';
  items : any = [];
  constructor(public navCtrl: NavController) {
    this.items = [
      {'title':'Bitcoin', 'currency':'btc', 'price':'5000€'},
      {'title':'Ethereum', 'currency':'eth', 'price':'500€'},
      {'title':'Ripple', 'currency':'xrp', 'price':'0.4€'}
    ];
  }

  itemSelected(item) {
    this.selected =item;
  }

}
```

## Exercez-vous

1\) Dans le fichier demo, ajouter la liste d'éléments suivante :

```
let transactions = [
    {''}
]
```

cd

