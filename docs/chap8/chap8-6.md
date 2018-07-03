## Plugins natifs

En plus de composants purement visuel qui vous permettent de mettre en forme votre application, Ionic propose également des plugins natifs cette fois-ci pour interagir avec les fonctions dites natives de votre téléphone mobile. Ces plugins Ionic sont en réalité des wrappers des plugins Cordova/Phonegap.

La liste de tous les plugins Ionic disponibles actuellement se trouve à l'adresse : [https://ionicframework.com/docs/native/](https://ionicframework.com/docs/native/)

Avant d'installer un plugin, il faut s’assurer que le package Ionic native est bien disponible, ce qui devrait être le cas dans une installation Ionic classique. Mais au besoin, il suffit de faire :

```bash
$ npm install @ionic-native/core --save
```

C'est à l'intérieur de ce package \(dossier\) que seront installés les autres plugins Ionic.

### Installation d'un plugin

Les plugins Ionic étant comme nous l'avons vu des versions remastérisées de plugins Cordova/Phonegap, l'installation se fera en deux étapes : installation de la version Ionic et installation de la version Cordova/Phonegap sur laquelle se base la précédente.

Pour installer la version "Ionic" du plugin il suffit de lancer une commande similaire à celle-ci :

```bash
$ npm install @ionic-native/mon_plugin_ionic --save
```

Puis, il ne reste plus qu'à installer le plugin Cordova/Phonegap correspondant :

```bash
$ ionic cordova plugin add mon_plugin_cordova
```

Chaque plugin possédant sa propre documentation il est recommandé de suivre les instructions d'installation à partir de la documentation de chaque plugin, car certains plugins nécessitent des étapes supplémentaires pour une installation complète.

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

Ionic proposant un nombre assez vaste de composant, je vous propose de n'en étudier que quelques-uns parmi les plus intéressants. Et pour les tester de manière optimale, nous allons utiliser l'application Ionic Dev App, dont nous parlons plus en détails au [chapitre 10](/chap10/README.md).

L'application existe pour Android et iOS :

* Google Play Store : [https://play.google.com/store/apps/details?id=com.ionicframework.view](https://play.google.com/store/apps/details?id=io.ionic.devapp&hl=en)

* Apple Store : [https://itunes.apple.com/us/app/ionic-view-test-share-ionic-apps/id1271789931](https://itunes.apple.com/us/app/ionic-devapp/id1233447133?ls=1&mt=8)

Une fois l'application installée, vous devrez vous connecter avec vos identifiants Ionic PRO, et démarrer votre projet mobile :

```bash
$ ionic serve -c
```

Connectez ensuite votre téléphone au même réseau wi-fi que votre ordinateur, puis lancez Ionic Dev App pour voir apparaître Votre application DuckCoin.

![](/assets/ionic_devapp_2.png)

Nous pouvons à présent tester quelques plugins natifs.

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

Il ne vous reste plus qu'à cliquer sur le bouton PHOTO et accepter l'autorisation d'accéder aux photos.

| ![](/assets/screen_camera_1.png) | ![](/assets/screen_camera_2.png) |
| :---: | :---: |
| ![](/assets/screen_camera_3.png) |  |

#### Geolocation

**Documentation** : [https://ionicframework.com/docs/native/geolocation/](https://ionicframework.com/docs/native/geolocation/)

Ce plugin permet de récupérer des informations liées à la géolocalisation de l'appareil \(latitude et longitude\). Les technologies utilisés par le plugin pour effectuer cette géolocalisation sont le GPS, la La radio-identification \(RFID\), les adresses MAC des bornes Wi-Fi et Bluetooth, ainsi que les identifiants de cellule GSM / CDMA.

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

Ce plugin permet d’interagir avec le réseau sur lequel le téléphone est connecté.

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

// On se branche à l’événement onDisconnect pour effectuer une ou plusieurs action en cas de
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

// On arrête la surveillance
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
* **this.device.isVirtual** : méthode permettant de savoir si l'application est utilisé depuis un émulateur de smartphone \(voir [Chapitre 9](/chap9)\)
* **this.device.serial** : renvoie le numéro de série de l'appareil



