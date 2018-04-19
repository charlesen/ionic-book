# Chap 8 - Architecture avancée d'une application Ionic : Composants, Directives, Providers, Services, Pipes, Modules et persistance de données

## Composants

La majorité des développements sous Angular, et comme vous l'aurez compris, sous Ionic également \(Ionic étant en fin de compte un projet Angular\), est effectué au niveau des composants. Nous avons déjà étudier le composant Root, dont l'arborescence est la suivante :

```js
app.component.css
app.component.html
app.component.spec.ts
app.component.ts
app.module.ts
```

Nous avons aussi écrit un composant **Transaction** qui nous permettait d'afficher la liste de nos dernières transactions.

![](/assets/render_appcompo.png)

La création d'un nouveau composant se fait simplement en saisissant la commande suivante à la racine de votre projet ionic :

```bash
$ ionic g component monComposant
[OK] Generated a component named monComposant!


src/components/moncomposant.css
src/components/moncomposant.html
src/components/moncomposant.spec.ts
src/components/moncomposant.ts
src/components/components.module.ts
```

On voit ici qu'un module \(components.module.ts\) a aussi été créé. Rappelons que les modules sont chargés du bootstrapping \(démarrage\) d'un composant. C'est donc ce module qu'il faudra déclarer dans le module principal **src/app/app.module.ts **:

```js
// Modules
import { ComponentsModule } from '../components/components.module';

// ...

imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule, // Importer le module ici 
    IonicModule.forRoot(MyApp, {
      // tabsPlacement: 'top',
      backButtonText: 'Retour'
    })
],

// ...
```

Il faut également modifiez le fichier **src/components/components.module.ts** comme ceci  :

```js
import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular"; // On rajoute cette ligne
import { MonComposantComponent } from './components/components';
@NgModule({
    declarations: [MonComposantComponent],
    imports: [IonicModule], // ...Et celle-ci
    exports: [MonComposantComponent]
})
export class ComponentsModule {}
```

Je vous rassure, vous n'aurez pas à faire tout cela à chaque création de composant, en fait l'intérêt de regrouper tout cela dans un module permet de créer de nouveaux composants, sans devoir les redéclarer dans toute l'application.

A présent vous pouvez appeler votre composant sous forme de tag dans n'importe quel fichier html de l'application.

```js
<moncomposant></moncomposant>
```

## Directives

## Providers

## Services

## Pipes

## Modules

Un module angular permet de regrouper en un seul endroit des composants, des directives, des pipes et des services de l'application. Vous n'aurez pas nécessairement besoin de créer des modules manuellement, car la création par exemple d'un composant le fera pour vous.

Prenons par exemple le module racine de notre application défini comme ceci :

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})

export class AppModule { }
```

Un code qui demande à être un peu commenté :

### Declarations

C'est un tableau des composants qui seront utilisés dans l'application.

```
declarations: [
   AppComponent,
   MonNouveauComponent
]
```

### Import

C'est un tableau des différents modules de l'application. C'est dans cette section que l'on déclare le module regroupant l'ensemble des composants.

### Providers

C'est ici que seront déclarés tous les services utilisés dans l'application.

### Bootstrap

On déclare ici le composant principal de l'application

## Persistance de données

## Exercez-vous

1\) Créez un nouveau composant nommé "transaction" qui affichera la liste des dernières transactions de la blockchain. Cette liste est à récupérer à l'adresse : [https://duckcoin.charlesen.fr/transactions](https://duckcoin.charlesen.fr/transactions).

2\) Appelez ce nouveau composant dans l'onglet Portefeuille

