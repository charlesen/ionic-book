## Persistance de données

Maintenant que notre application a bien évolué, et que l'on peut même passé de la page de Login à la page d'accueil, il serait peut être intéressant de sauvegarder quelques données notamment notre session utilisateur.

Ionic propose un plugin de stockage de données facile à prendre en main. Le stockage se fait sous forme de paires clé / valeur et utilise une variété de moteurs de stockage différent, en choisissant le meilleur disponible en fonction de la plate-forme.

Par la suite nous étudierons Firebase, un outil super pratique pour créer une application mobile sans se soucier de la partie backend \(serveur, base de donnée, monitoring,...\)

## Utilisation de Ionic Storage

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

Il sera intéressant par la suite de créer un provider spécifique au plugin Storage pour faciler nos transactions avec la base de données du téléphone.

## Intégration de Firebase

[https://javebratt.com/ionic-firebase-tutorial-intro/](https://javebratt.com/ionic-firebase-tutorial-intro/)

