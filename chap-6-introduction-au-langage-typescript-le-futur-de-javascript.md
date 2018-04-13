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



Créons une classe Licence et ajoutons-y des paramètres

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



