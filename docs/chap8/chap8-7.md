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

Il sera intéressant par la suite de créer un provider spécifique au plugin Storage pour faciler les transactions avec la base de données du téléphone.

## Intégration de Firebase

![](/assets/logo-standard-firebase.png)

Firebase est une plateforme mobile proposée par Google qui permet d'héberger en NoSQL et en temps réel des bases de données, de l'authentification sociale, des notifications, ou encore des services de stockages de fichiers ou de monitoring d'applications.

Pour l'intégrer à notre projet Ionic, nous allons utiliser une librairie nommé AngularFire.

### Installation d'AngularFire

A ce stade, vous devriez déjà avoir  Angular CLI installé sur votre machine. Mais si ce n'est pas le cas faites simplement :

```bash
$ npm install -g @angular/cli
```

On peut ensuite installer AngularFire et ses dépendances

```bash
$ npm install angularfire2 firebase promise-polyfill --save
$ npm install rxjs@6 rxjs-compat@6 --save
```

On va ensuite :

* Déclarer le plugin dans le module principale
* Configurer votre projet avec les identifiants Firebase
* Initialiser FirebaseAjouter AngularFireDatabase dans la liste des providers

**app.module.ts**

```js
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// On importe ici tous les éléments nécessaires au fonctionnement de Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

export const firebaseConfig = {
  apiKey: "xxxxxxxxxx",
  authDomain: "your-domain-name.firebaseapp.com",
  databaseURL: "https://your-domain-name.firebaseio.com",
  storageBucket: "your-domain-name.appspot.com",
  messagingSenderId: '<your-messaging-sender-id>'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
```

Pour avoir accces aux données firebaseConfig il faut se connecter à votre console Firebase à l'adresse [https://console.firebase.google.com](https://console.firebase.google.com)

Il vous faudra donc disposer d'un compte Google pour y avoir accès.

![](/assets/firebase_step3.png)

![](/assets/firebase_step_1.png)

Une fois la création effectuée, cliquez sur l'icone en forme de balise \(à droite de l'icône Android\)

![](/assets/firebase_step4.png)

Puis récupérez la configuration qui vous est proposée et complétez le contenu de la constante firebaseConfig :

```js
export const firebaseConfig = {
  apiKey: "xxxxxxxxxx",
  authDomain: "your-domain-name.firebaseapp.com",
  databaseURL: "https://your-domain-name.firebaseio.com",
  storageBucket: "your-domain-name.appspot.com",
  messagingSenderId: '<your-messaging-sender-id>'
};
```

Il ne vous reste plus qu'à exploiter toute la puissance de Firebase.

### Annexe : pour aller plus loin

* Documentation AngularFire : [https://github.com/angular/angularfire2/blob/master/docs/ionic/v3.md](https://github.com/angular/angularfire2/blob/master/docs/ionic/v3.md)
* Authentification Facebook et Google sur Ionic avec Firebase : [https://github.com/angular/angularfire2/blob/master/docs/ionic/authentication.md](https://github.com/angular/angularfire2/blob/master/docs/ionic/authentication.md)
* Prise en main de Firebase dans Ionic [https://javebratt.com/ionic-firebase-tutorial-intro/](https://javebratt.com/ionic-firebase-tutorial-intro/)
* Store data inside Ionic : https://ionicacademy.com/store-data-inside-ionic/



