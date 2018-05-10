## Installation et premier script

Ionic utilise une version _"interne"_ de TypeScript, mais pour nos tests nous allons devoir installer le package de manière globale.

```
> npm install -g typescript
```

Créons à présent un fichier à la racine du projet **demo\_typescript.ts** et tant qu'à faire ajoutons-y du contenu :

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
-rw-rw-r--   1 charles charles   6180 avril 11 22:14 config.xml
-rw-rw-r--   1 charles charles    131 avril 13 07:12 demo_typescript.js
-rw-rw-r--   1 charles charles    133 avril 13 07:04 demo_typescript.ts
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
