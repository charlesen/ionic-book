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
let valeur_binary: number = 0b1010;
let valeur_octal: number = 0o744;
let valeur_hex: number = 0xf00d;
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
let year: number = 2018;
let sentence: string = `Salut, mon name est ${ fullName }. Nous sommes en ${ year }.
                        J'aurai ${ age + 1 } ans à la fin de l'année.`;
```

Ceci est l'équivalent de concaténer des chaines de caractères avec le signe "+".

### Les tableaux

```js
let list_nombres_premiers: number[] = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
```

### Any

On l'utilise quand on ne sait pas trop qu'elle type de données on aura à traiter. C'est souvent le cas quand on utilise un API propriétaire.

```js
let variableMystere: any = 4;
variableMystere = "c'est une chaine de caractère";
variableMystere = false; // ou un booléen finalement
```



