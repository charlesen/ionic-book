# Chap 6 - Introduction au langage TypeScript, le futur de JavaScript



TypeScript est un langage de programmation libre et open source développé par Microsoft qui a pour but d'améliorer et de sécuriser la production de code JavaScript. Sortie en 2012, Il est vu par beaucoup comme le futur du Javascript, car se basant en sur la norme ECMAScript 6, celle déjà intégré au moteur JavaScript de la plupart des navigateurs et qui fera foi dans les prochaines années.

TypeScript c'est donc du JavaScript, avec de supers pouvoirs. 

Les fichiers définis dans ce langage ont pour extension **.ts**. Les navigateurs web ne sachant pas encore interprété du code en TypeScript pur, il est nécessaire de le compiler en JavaScript : on parle alors de transtypage.

## Installation

Ionic utilise une version _"interne"_ de TypeScript, mais pour nos tests nous allons devoir installer le package de manière globale.

```
> npm install -g typescript
```

## Un premier script

Créons un fichier à la racine du projet **demo\_typescript.ts** et tant qu'à faire ajoutons-y du contenu :

```
function ditBonjour(person) {
    return "Bonjour, " + person;
}

let user = "Raphael";

document.body.innerHTML = ditBonjour(user);

```

Il faut ensuite, compiler ce code pour générer un fichier .js interprétable par le navigateur.



## Comment TypeScript s'intègre à Ionic

En fait, TypeScript est présent partout ou presque dans Ionic.



