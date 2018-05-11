## Persistance de données

Maintenant que notre application a bien évolué, et que l'on peut même passé de la page de Login à la page d'accueil, il serait peut être intéressant de sauvegarder quelques données notamment notre session utilisateur.

Ionic propose un plugin de stockage de données facile à prendre en main. Le stockage se fait sous forme de paires clé / valeur et utilise une variété de moteurs de stockage différent, en choisissant le meilleur disponible en fonction de la plate-forme.

Lorsqu'il est exécuté dans un contexte d'application native, Ionic Storage vérifie d'abord la présence d'un plugin SQLite, beaucoup plus intéressant quand il s'agit de stocker des données d'une application mobile.

Si SQLite n'est pas disponible, c'est le cas par exemple lorsque l'on utilise notre application depuis un navigateur, Ionic Storage utilisera dans l'ordre IndexedDB, WebSQL et  localstorage :

**SQLite ==&gt; IndexedDB ==&gt; WebSQL ==&gt; localstorage**

## Installation

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

## Utilisation

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