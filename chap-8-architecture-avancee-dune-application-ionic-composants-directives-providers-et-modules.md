# Chap 8 - Architecture avancée d'une application Ionic : Composants, Directives, Providers, Services, Pipes, Modules, persistance de données et plugins natifs

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

Une directive est un élement qui va nous permettre d'étendre des fonctionnalité html. Il en existe différents types :

* **Directive de type attribut** : vous en avez déjà vu, elles permettent de modifier du html. Citons par exemple _**text-center**_, une directive qui permet de centrer le contenu d'un élement, ou encore la directive _**padding**_, qui permet d'ajouter un padding à l'élement qui l'invoque.
* **Directive de type composant** : oui au risque de vous embrouiller un peu, un composant est en réalité une directive, mais dotée d'un template html. La directive est en quelque sorte l'atome, le composant la molécule.
* **Directive de type structure** : Ce type de directive sont faite pour la manipulation du DOM et commencent toujours par un **"\*"**. On peut citer parmi celles que nous avons déjà utilisé les directives **\*ngIf** et **\*ngFor**.

la création d'une directive se fait simplement en saisissant la commande suivante :

```bash
$ ionic g directive maDirective

[OK] Generated a directive named maDirective!
```

Créons par exemple une directive que nous appelerons **bolder** et qui permettra de mettre en gras l'élément qui l'appelerait.

```bash
$ ionic g directive bolder

[OK] Generated a directive named bolder                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    !
```

On déclare ensuite une fois pour toute le "module mère" de toutes les directives dans le module root **src/app/app.module.ts** :

```js
// ...
//Modules
import {ComponentsModule} from '../components/components.module';
import {DirectivesModule} from '../directives/directives.module';
import { HttpClientModule } from '@angular/common/http';

//...

  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    DirectivesModule, // ICI
    IonicModule.forRoot(DuckCoinApp,{
        // tabsPlacement: 'top',
        backButtonText: 'Retour'
    })
  ],
```

Puis, on édite notre directive pour qu'il fasse ce que l'on souhaite, à savoir mettre du contenu en gras :

```js
import { Directive, ElementRef } from '@angular/core';

/**
 *  Directives.
 */
@Directive({
  selector: '[bolder]' // Attribute selector
})
export class BolderDirective {

  constructor(Element: ElementRef) {
    Element.nativeElement.style.fontWeight = 'bolder';
  }

}
```

Il ne nous reste plus qu'à utiliser notre nouvelle directive sur du contenu en page d'accueil par exemple :

```js
<span bolder>mon texte en gras</span>
```

## Services ou Providers

Comme nous l'avons vu, un composant permettant d'afficher du contenu à plusieurs endroits à partir d'un code unique. C'est le cas par exemple du composant **&lt;transaction&gt;&lt;/transaction&gt;** que l'on peut appeler dans n'importe qu'elle template html de notre application.

Supposons que l'on souhaite récupérer la liste des dernières transactions sous forme de tableau comme c'est le cas dans la classe **TransactionComponent** :

```js
export class TransactionComponent {

  transactions: any[] = [];

  constructor(private http: HttpClient) {
    this.http.get(`${apiUrl}/transactions`).subscribe(
      data => {
      this.transactions = data['transactions'];
    }, err => {
        console.log("Error occured.")
    });
  }

}
```

Une première solution serait de copier le code de cette classe. Mais si une autre page souhaite également avoir accès à cette même liste, la copie alors apparait comme une mauvaise solution.

C'est là qu'interviennent les **Services**, qui sont en fait des bouts de codes metiers, des méthodes, qui peuvent appeler dans d'autres pages, sans devoir les réecrire. On code une fois, on les réutilise partout.

Nous aurons par exemple besoin des services pour la gestion des sessions utilisateurs. En effet, à peu près toutes les pages de notre application auront besoin de s'assurer que notre utilisateur courant est bien connecté.

```
$ ionic g provider User

[OK] Generated a provider named User!
```

Cette commande va créer un nouveau service **User**, dans lequel nous déclarerons un certain nombre de méthodes pour la gestion de l'authentification, la création de comptes utilisateur,...

## Pipes

On en a déjà un peu parlé au chapitre. Les pipes permettent de modifier la forme d'un contenu avant son affichage. Citons quelques pipes intéressant :

* **currency** : permet de rajouter une devise avant la valeur sur laquelle on l'applique
* **date** : formatage de date
* **uppercase** : transforme du texte en majuscule
* lowercase : transforme du texte en miniscule
* **json** : affiche le contenu d'un objet ou d'un texte au format JSON
* ...

```js
let maVariable = "Hello mmi";
...
<span>{{maVariable | uppercase}}</span>
```

Pour plus de détails : [https://www.tutorialspoint.com/angular4/angular4\_pipes.htm](https://www.tutorialspoint.com/angular4/angular4_pipes.htm)

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

Maintenant que notre application a bien évolué, et que l'on peut même passé de la page de Login à la page d'accueil, il serait peut être intéressant de sauvegarder quelques données notamment notre session utilisateur.

Ionic propose un plugin de stockage de données facile à prendre en main. Le stockage se fait sous forme de paires clé / valeur et utilise une variété de moteurs de stockage différent, en choisissant le meilleur disponible en fonction de la plate-forme.

Lorsqu'il est exécuté dans un contexte d'application native, Ionic Storage vérifie d'abord la présence d'un plugin SQLite, beaucoup plus intéressant quand il s'agit de stocker des données d'une application mobile.

Si SQLite n'est pas disponible, c'est le cas par exemple lorsque l'on utilise notre application depuis un navigateur, Ionic Storage utilisera dans l'ordre IndexedDB, WebSQL et  localstorage :

**SQLite ==&gt; IndexedDB ==&gt; WebSQL ==&gt; localstorage**

### Installation

Nous allons tout d'abord installer le plugin SQLite :

```bash
$ ionic cordova plugin add cordova-sqlite-storage

Adding cordova-sqlite-storage to package.json

Saved plugin info for "cordova-sqlite-storage" to config.xml
```

Ensuite, il nous suffit d'installer Ionic Storage

```bash
$ npm install --save @ionic/storage
```

On déclare ce nouvel élément dans le module Root, pour qu'il puisse être appelé depuis n'importe quelle page :

**src/app/app.module.ts**

```js
//Modules
// ...
import { IonicStorageModule } from '@ionic/storage';

// ...
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    DirectivesModule,
    IonicModule.forRoot(DuckCoinApp,{
        // tabsPlacement: 'top',
        backButtonText: 'Retour'
    }),
    IonicStorageModule.forRoot({
      name: '__duckcoindb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
```

### Utilisation

Il vous suffit simplement d'injecter Ionic Storage dans la classe où vous souhaitez l'utiliser :

```js
import { Storage } from '@ionic/storage';

export class LoginPage {
  constructor(private storage: Storage) { }

  ...

  // On sauvegarde le statut de connexion
  storage.set('isConneted', true);

  // On peut aussi récupérer cette valeur pour s'assurer que l'utilisateur a le droit d'afficher une page
  storage.get('isConneted').then((val) => {
    console.log('Suis-je connecté ?', val);
  });
}
```

## Plugins natifs

En plus de composants purement visuel qui vous permettent de mettre en forme votre application, Ionic propose également des plugins natifs cette fois-ci pour interagir avec les fonctions dites natives de votre téléphone mobile. Ces plugins Ionic sont en réalité des wrappers des plugins Cordova/Phonegap. 

La liste de tous les plugins Ionic disponibles actuellement se trouve à l'adresse : [https://ionicframework.com/docs/native/](https://ionicframework.com/docs/native/)

Avant d'installer un plugin, il faut s'asurer que le package Ionic native est bien disponible, ce qui devrait être le cas dans une installation Ionic classique. Mais au besoin, il suffit de faire :

```bash
$ npm install @ionic-native/core --save
```

C'est à l'intérieur de ce package \(dossier\) que seront installés les autres plugins Ionic.

### Installation d'un plugin

Les plugins Ionic étant comme nous l'avons vu des versions remasterisées de plugins Cordova/Phonegap, l'installation se fera en deux étapes : installation de la version Ionic et installation de la version Cordova/Phonegap sur laquelle se base la précédente.

Pour installer la version "Ionic" du plugin il suffit de lancer une commande similaire à celle-ci :

```bash
$ npm install @ionic-native/mon_plugin_ionic --save
```

Puis, il ne reste plus qu'à installer le plugin Cordova/Phonegap correspondant :

```bash
$ ionic cordova plugin add mon_plugin_cordova
```

Chaque plugin possèdant sa propre documentation il est recommandé de suivre les instructions d'installation à partir de la documentation de chaque plugin, car certains plugins nécessitent des étapes supplémentaires pour une installation complète.

### Utilisation de quelques plugins

Ionic proposant un nombre assez vaste de composant, je vous propose de n'en étudier que quelques-uns parmi les plus intéressants. 

#### Camera

**Documentation** : https://ionicframework.com/docs/native/camera/

Ce plugin permet de prendre une photo ou d'enregistrer une vidéo.

## Exercez-vous

1\) Créez un nouveau composant nommé "transaction" qui affichera la liste des dernières transactions de la blockchain. Cette liste est à récupérer à l'adresse : [https://duckcoin.charlesen.fr/transactions](https://duckcoin.charlesen.fr/transactions).

2\) Appelez ce nouveau composant dans l'onglet Portefeuille

3\) Créez une directive que vous nommérez **"bigger"**. Celle-ci permettra d'augmenter la taille \(font-size\) de l'élement qui l'invoquerait.

4\) Ajustons un peu notre page de login en enregistrant en base de données le login au clic sur le bouton de validation, et en l'affichant en page d'accueil de façon à ce que l'on ait ce message :

```
Bonjour leLogin, 
Duckcoin, c'est la monnaie qui rend aimable, redonne le sourire et change la face du monde.
Elle a été faite pour des gens sympas, juste comme toi.
```

**P.S. :** vous aurez peut être surement de ça ;-\) : [https://ionicframework.com/docs/developer-resources/forms/](https://ionicframework.com/docs/developer-resources/forms/)

5\) Nous avons introduit les composants natifs proposé par Ionic [https://ionicframework.com/docs/native/](https://ionicframework.com/docs/native/). Utilisez un maximum d'entre eux et ajoutez-les à votre projet.

