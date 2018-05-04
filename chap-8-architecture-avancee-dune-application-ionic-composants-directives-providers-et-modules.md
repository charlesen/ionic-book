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

Une fois le plugin installé, il faut le déclarer dans le module principal de l'application :

**src/app/app.module.ts **

```js
...

import { MonPlugin } from '@ionic-native/mon_plugin';

...

@NgModule({
  ...

  providers: [
    ...
    MonPlugin
    ...
  ]
  ...
})
export class AppModule { }
```

### Utilisation de quelques plugins

Ionic proposant un nombre assez vaste de composant, je vous propose de n'en étudier que quelques-uns parmi les plus intéressants.

#### Camera

**Documentation** : [https://ionicframework.com/docs/native/camera/](https://ionicframework.com/docs/native/camera/)

Ce plugin permet de prendre une photo ou d'enregistrer une vidéo en utilisant l'objet **navigator.camera **introduit par l'HTML5.

##### Installation

Pour l'installation, il suffit simplement de lancer les commandes suivantes  :

```bash
$ ionic cordova plugin add cordova-plugin-camera
$ npm install --save @ionic-native/camera
```

On le déclare ensuite dans NgModule :

```js
...

import { Camera } from '@ionic-native/camera';

...

@NgModule({
  ...

  providers: [
    ...
    Camera
    ...
  ]
  ...
})
export class AppModule { }
```

##### Utilisation

Nous allons appeler ce plugin depuis la page de profil de notre application DuckCoin. Il suffit d'éditer le fichier **src/pages/profile/profile.ts** comme ceci :

```js
// ...
// Plugins
import { Camera, CameraOptions } from '@ionic-native/camera';

// TabsPage

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  image : any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera) { // On déclare l'objet camera ici
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  // ...

  getPicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData contient une image en Base64:
      this.image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

}
```

On peut ensuite appeler cette fonction depuis le fichier **src/pages/profile/profile.html**

```js
<ion-header>

  <ion-navbar color="duckcoin">
    <ion-title>Profile</ion-title>
  </ion-navbar>

</ion-header>

<ion-content padding>
  ...

  <button ion-button (click)="getPicture()">Photo</button>
  <ion-card *ngIf="image">
    <img src="{{image}}" />
    <ion-card-content>
      <ion-card-title>
        Une photo depuis la camera
      </ion-card-title>
    </ion-card-content>
  </ion-card>
</ion-content>
```

Etant donné qu'il s'agit d'une fonction native, si vous cliquez sur le bouton **"Photo"** depuis votre navigateur, il ne se passera rien. Nous verrons au chapitre 9 comment tester votre application depuis l'application Ionic view ou à directement partir de votre téléphone.

![](/assets/screen_camera_1.png)![](/assets/screen_camera_2.png)![](/assets/screen_camera_3.png)



#### Geolocation

**Documentation** : [https://ionicframework.com/docs/native/geolocation/](https://ionicframework.com/docs/native/geolocation/)

Ce plugin permet de récupérer des informations liées à la géolocalisation de l'appareil \(latitude et longitude\). Les technologies utilisés par le plugin pour effectuer cette géolocalisation sont le GPS, la La radio-identification \(RFID\), les adresses MAC des bornes WiFi et Bluetooth, ainsi que les identifiants de cellule GSM / CDMA.

##### Installation

Il suffit de lancer les commandes suivantes :

```bash
$ ionic cordova plugin add cordova-plugin-geolocation --variable GEOLOCATION_USAGE_DESCRIPTION="Cette application a besoin de votre accord pour vous localiser"
$ npm install --save @ionic-native/geolocation
```

Il faut également, à cause d'iOS, modifier le fichier **config.xml** comme-ci :

```js
<edit-config file="*-Info.plist" mode="merge" target="NSLocationWhenInUseUsageDescription">
    <string>Cette application a besoin de votre accord pour vous localiser</string>
</edit-config>
```

Avec les nouvelles réglementations, il faut en effet permettre de manière claire à l'utilisateur de choisir d'être géolocalisé ou non.

##### Utilisation

```js
import { Geolocation } from '@ionic-native/geolocation';

...

constructor(private geolocation: Geolocation) {}

...

this.geolocation.getCurrentPosition().then((resp) => {
 // resp.coords.latitude : contient la valeur de la latitude
 // resp.coords.longitude : : contient la valeur de la longitude
}).catch((error) => {
  console.log('Il y a une erreur', error);
});

let watch = this.geolocation.watchPosition();
watch.subscribe((data) => {
 // data.coords.latitude
 // data.coords.longitude
});
```

#### Network

**Documentation** : [https://ionicframework.com/docs/native/network/](https://ionicframework.com/docs/native/network/)

Ce plugin permet d'intéragir avec le réseau sur lequel le téléphone est connecté.

##### Installation

```bash
$ ionic cordova plugin add cordova-plugin-network-information
$ npm install --save @ionic-native/network
```

##### Utilisation

```js
import { Network } from '@ionic-native/network';

constructor(private network: Network) { }

...

// On se branche à l'évènement onDisconnect pour effectuer une ou plusieurs action en cas de 
// déconnexion au réseau (wifi, 4g,...)
let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
  console.log('network was disconnected :-(');
});

// Arrête la surveillance du réseau
disconnectSubscription.unsubscribe();


// On se branche à l'évènement onConnect pour effectuer une ou plusieurs actions en cas de 
// connexion réussie au réseau (wifi, 4g,...)
let connectSubscription = this.network.onConnect().subscribe(() => {
  console.log('network connected!');
  // Connexion réussie ! Le setTimeout est une astuce pour récupérer correctement le statut de connexion
  setTimeout(() => {
    if (this.network.type === 'wifi') {
      console.log('Nous sommes connectés en Wifi');
    }
  }, 3000);
});

// On arrete la surveillance
connectSubscription.unsubscribe();
```

L'objet **network.type** peut prendre les valeurs suivantes  : **unknown, ethernet, wifi, 2g, 3g, 4g, cellular, none.**

#### Device

**Documentation** : [https://ionicframework.com/docs/native/device/](https://ionicframework.com/docs/native/device/)

Ce plugin renvoie tout un ensemble d'informations liées au téléphone portable.

##### Installation

```bash
$ ionic cordova plugin add cordova-plugin-device
$ npm install --save @ionic-native/device
```

##### Utilisation

```js
import { Device } from '@ionic-native/device';

constructor(private device: Device) { }

...

console.log('UUID du téléphone : ' + this.device.uuid);
```

Le plugin permet de récupérer les valeurs suivantes :

* **this.device.cordova** : la version de Cordova
* **this.device.model** : renvoie le nom du modèle ou du produit de l'appareil. La valeur est définie par le fabricant du périphérique et peut être différente d'une version à l'autre du même produit.
* **this.device.platform** : retourne le système d'exploitation du téléphone \(android, ios,..\)
* **this.device.uuid** : retourne l'identifiant unique du téléphone.
* **this.device.version** : renvoie la version du système d'exploitation
* **this.device.manufacturer** : retourne le nom du fabricant de l'appareil mobile
* **this.device.isVirtual** : methode permettant de savoir si l'application est utilisé depuis un émulateur de smartphone \(voir [Chapitre 9](/chap-9-debogage-tests-et-monitoring.md)\)
* **this.device.serial** : renvoie le numéro de série de l'appareil

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

