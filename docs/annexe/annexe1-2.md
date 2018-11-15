---
description: >-
  Listing de bugs couramment rencontrés dans le cadre du développement d'une
  application Ionic
---

# Annexe 1 : Bugs courants et solutions

Vous trouverez dans cet annexe tout un ensemble de bugs couramment rencontrés, mais aussi leurs solutions. Cette liste n'est évidemment pas exhaustive, mais permet de cibler la plupart des exceptions bloquantes durant la phase de développement et de compilation.

### **Problème : webpackJsonp not found**

#### **Solution**

**\(**[**https://forum.ionicframework.com/t/webpackjsonp-not-found-when-running-ionic-starter-aws/97458/3**](https://forum.ionicframework.com/t/webpackjsonp-not-found-when-running-ionic-starter-aws/97458/3)**\)                                                    
**

dans le fichier index.html, ajouter le fichier **build/vendor.js**:

```js
<!-- The polyfills js is generated during the build process -->
<script src="build/polyfills.js"></script>


<!-- all code from node_modules directory is here -->
<script src="build/vendor.js"></script> //<-- Ajouter ici !

<!-- The bundle js is generated during the build process -->
<script src="build/main.js"></script>
```

De plus, si vous avez activez le Service Worker, pensez aussi à déclarer ce fichier vendor.js comme ceci :

**src/service-worker.js**

```js
// pre-cache our key assets
self.toolbox.precache(
  [
    './build/main.js',
    './build/main.css',
    './build/vendor.js', //<-- Ajouter ici !
    './build/polyfills.js',
    'index.html',
    'manifest.json'
  ]
);
```

Il ne vous reste plus qu'à redemarrer l'application :

```bash
$ ionic serve -lc
```

Si l’erreur persiste, pensez aussi à mettre à jour app-script \(la dernière version\) :

```bash
$ npm install @ionic/app-scripts@latest --save-dev
```

### **Problème : Build –prod enoent error**

#### **Solution**

**Mettre à jour @ionic/app-scripts**

```bash
$ npm install @ionic/app-scripts@latest --save-dev
```

### **Problème : Error: ENOENT**

**no such file or directory, open \*www/build/0.main.js.map in undefined at line undefined, col undefined, pos undefined at BuildError.Error \(native\)                                                    
**

**Solution :                                                    
**Ce bug apparait quand vous souhaitez livrer votre application en prod avec la commande ionic package build…

Le problème vient de source MAP, utile en developpement, mais qu’il faut désactiver lorsque l’on souhaite passer en prod

Dans le fichier **package.json**, il faut supprimer la clé : **ionic\_generate\_source\_map                                                    
**

### **Problème : TypeError: Cannot read property 'substr' of undefined**

#### **Détails **

Ce bug apparait généralement Lorsque vous essayez de livrer votre application ou simplement la compiler \(build\).

```bash
source-map/lib/source-node.js:95
varcode=nextLine.substr(0,mapping.generatedColumn -
^
TypeError:Cannotread property'substr'ofundefined
```

#### **Solution**

Le problème apparait surtout quand vous avez déclaré deux **composants/pages/module**s dans le même dossier \(Par exemple une page de Dialogue ou modal à l'intérieur d'une page classique\).

```bash
# Page home
.src/pages/home/home/home.ts
.src/pages/home/home/home.scss
.src/pages/home/home/home.html


# Modal
.src/pages/home/home/modal/modal.ts
```

Il faut donc séparer les composants et les définir chacun dans un dossier comme ceci :

```bash
$ ionic g page modal
```

Vous devriez vous retrouver avec la nouvelle arborescence suivante :

```bash
# Page home
.src/pages/home/home/home.ts
.src/pages/home/home/home.scss
.src/pages/home/home/home.html


# Page modal
.src/pages/modal/modal/modal.ts
.src/pages/modal/modal/modal.scss
.src/pages/modal/modal/modal.html
```

### **Problème : A problem occurred configuring root project 'android'**

#### **Details**

```bash
Failed to install the following SDK components:
[Android SDK Platform 26]
The SDK directory (/opt/android-sdk) is not writeable,
please update the directory permissions.
```

#### **Solution**

Le problème apparait lorsque vous souhaitez créer votre paquet Android avec Ionic update. Pour le résoudre, passer à une version inférieur d’Android ou supérieur. La plupart il s’agit de passer à une version inférieur \(Modifier les fichiers **package.json** et **config.xml**\). Ex : 6.2.3 vers 6.2.0.**                                                    
**

#### **Superposition de la barre d’état avec l'entête de l’application**

#### **Solution 1**

Dans le fichier **app.component.ts**, modifier la méthode **initializeApp** et ajouter la ligne suivante :

```js
this.statusBar.overlaysWebView(false);
```

#### **Solution 2**

Editer le fichier **confix.xml **:

```js
<platformname="ios">
    <preferencename="StatusBarOverlaysWebView" value="false"/>
</platform>
```

Voir la solution détaillée ici : [**https://ionicframework.com/docs/native/status-bar/**](https://ionicframework.com/docs/native/status-bar/)

### **Ionic WKWebView : Requetes HTTP ne passent pas**

#### Solutions

##### Solution 1 : Utiliser la version native Ionic de HTTP + Angular HTTPClient

Vous trouverez le plugin HTTP Natif à l'adresse [https://ionicframework.com/docs/native/http/](https://ionicframework.com/docs/native/http/). Seul soucis, ce plugin ne fonctionnera pas sur le web, donc c'est vraiment pas terrible si vous développer votre application en le testant sur un navigateur. Pour contourner ce soucis, il vous faudra utiliser un autre plugin nommé ionic-native-http-connection-backend que vous trouverez à l'adresse : [https://github.com/sneas/ionic-native-http-connection-backend](https://github.com/sneas/ionic-native-http-connection-backend).

```bash
$ ionic cordova plugin add cordova-plugin-advanced-http
$ npm install --save @ionic-native/http
$ npm install --save ionic-native-http-connection-backend
```

Il vous suffira ensuite de mettre à jour le fichier **app.module.ts** comme ceci :

```bash
import { NgModule } from '@angular/core';
import { HttpBackend, HttpXhrBackend } from '@angular/common/http';
import { NativeHttpModule, NativeHttpBackend, NativeHttpFallback } from 'ionic-native-http-connection-backend';
import { Platform } from 'ionic-angular';

@NgModule({
    declarations: [],
    imports: [
        NativeHttpModule
    ],
    bootstrap: [],
    entryComponents: [],
    providers: [
        {provide: HttpBackend, useClass: NativeHttpFallback, deps: [Platform, NativeHttpBackend, HttpXhrBackend]},
    ],
})
export class AppModule {
}
```

Ainsi, lorsque que vous serez sur le web, Ionic utilisera le client HTTP angular classique \(@angular/common/http\), et sur appareil il utilisera le plugin natif HTTP.

```js
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class Api {
  constructor(public http: HttpClient) {

  }
  action_post(datas) {
   let monToken = 'UnTokenSecurise'
   const headers = new HttpHeaders({
          'Authorization': 'Basic ' + monToken,
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=utf-8',
        });
   const httpOptions = {
          headers: headers,
          observe: 'response'
        };
   let json_datas = JSON.stringify(datas);
   this.http.post('monURL', json_datas, httpOptions)
          .timeout(30000)
          .subscribe(data => {
          ...
          })
  }
}
```

##### Solution 2 : Configurer le CORS

Si vous avez la main sur le serveur avec lequel votre application communique, le plus simple serait de mettre à jour le CORS en acceptant les requetes provenant de [http://localhost:8080](http://localhost:8080).

Vous pouvez visiter le site [https://enable-cors.org/](https://enable-cors.org/) pour savoir comment configurer votre serveur.

##### Solution 3 : Repasser à l’ancien WebView \(UIWebView\)

C'est la solution la moins intéressante, car en effet WKWebview à la webview recommandé pour les développement sur Ionic. D'ailleurs iOS semble beaucoup moins tolérer UIWebView.

N'hésitez pas à consulter les articles suivants pour plus d'informations :

* [**https://blog.ionicframework.com/wkwebview-for-all-a-new-webview-for-ionic/**](https://blog.ionicframework.com/wkwebview-for-all-a-new-webview-for-ionic/)

* [**https://ionicframework.com/docs/wkwebview/**](https://ionicframework.com/docs/wkwebview/)

### **Failed to find Build Tools revision XX.X.X**

#### **Solution 1 : **Mettre à jour Android Build Tools

```bash
$ android list sdk -a | grep "Android SDK Platform-tools"(Un numéro est à récupérer au début)
$ android update sdk -a -u -t NUMERO_PRECEDENT
```

**Source :**[**https://stackoverflow.com/questions/36683726/failed-to-find-build-tools-revision-23-0-1**](https://stackoverflow.com/questions/36683726/failed-to-find-build-tools-revision-23-0-1)

#### Solution 2 : **Utiliser le SDK Manager**

```bash
$ $ANDROID_HOME/tools/bin/sdkmanager "build-tools;26.X.X""platforms;android-26"
```

### Ionic Native HTTP : plugin\_not\_installed

```bash
plugin_not_installed
at Monitoring.log (http://localhost:60000/build/vendor.js:60552:23188)
at Api.webpackJsonp.31.Api.logging (http://localhost:60000/build/main.js:2536:77)
at ? (http://localhost:60000/build/main.js:3113:27)
at t.invoke (http://localhost:60000/build/polyfills.js:3:14976)
at Object.onInvoke (http://localhost:60000/build/vendor.js:4484:37)
at t.invoke (http://localhost:60000/build/polyfills.js:3:14916)
at r.run (http://localhost:60000/build/polyfills.js:3:10143)
at ? (http://localhost:60000/build/polyfills.js:3:20242)
at t.invokeTask (http://localhost:60000/build/polyfills.js:3:15660)
at Object.onInvokeTask (http://localhost:60000/build/vendor.js:4475:37)
```

Ce bug apparait dans Ionic view lorsque vous effectuez des requetes http à l'aide du plugin natif HTTP, depuis une version non encore pris en charge dans l'application Ionic View. En effet, comme [nous l'avons vu](/chap9/README.md), cette application permet de tester d'autres applications en créeant un environnement de test où sont installés un certain nombre de plugins natifs selon leur version \(voir listing ci-dessous\). Problème, Ionic Native HTTP n'est disponible \(Mai 2018\) que pour les versions supérieures ou égales à 1.8.1.

#### Solution

Vous devrez installer une version du plugin natif HTPP pris en charge dans Ionic View et faire un peu de nettoyage au passage.

**package.json**

```bash
"cordova-plugin-advanced-http": "^X.Y.Z",
# Devient
"cordova-plugin-advanced-http": "1.8.1",
```

**config.xml**

```bash
<plugin name="cordova-plugin-advanced-http" spec="^X.Y.Z" />
# Devient
<plugin name="cordova-plugin-advanced-http" spec="1.8.1" />
```

Et petit nettoyage avant "réinstallation" de tous les plugins.

```bash
$ ionic cordova platform rm android
$ ionic cordova platform rm ios
$ rm -rf node_modules/ platforms/ plugins/ www/
$ npm install --save --save-exact
$ ionic cordova platform add android
$ ionic cordova platform add ios
```

Si vous souhaitez tout de même conserver votre version actuelle du pluging, vous n'aurez pas d'autres choix \(pour le moment\) que de compiler votre application vous-même, puis de la tester depuis votre mobile ou depuis un émulateur comme expliqué au [chapitre 9](/chap9/README.md).

Liste de plugins actuellement \(Mai 2018\) supportés dans Ionic View :

```bash
card.io.cordova.mobilesdk 2.1.0 "CardIO"
com-intel-security-cordova-plugin 2.0.3 "APP Security API"
com.darktalker.cordova.screenshot 0.1.5 "Screenshot"
com.paypal.cordova.mobilesdk 3.5.0 "PayPalMobile"
cordova-admob-sdk 0.8.0 "AdMob SDK"
cordova-base64-to-gallery 4.1.2 "base64ToGallery"
cordova-instagram-plugin 0.5.5 "Instagram"
cordova-launch-review 2.0.0 "Launch Review"
cordova-plugin-3dtouch 1.3.5 "3D Touch"
cordova-plugin-actionsheet 2.3.3 "ActionSheet"
cordova-plugin-add-swift-support 1.6.2 "AddSwiftSupport"
cordova-plugin-admob-free 0.10.0 "Cordova AdMob Plugin"
cordova-plugin-advanced-http 1.8.1 "Advanced HTTP plugin"
cordova-plugin-app-event 1.2.0 "Application Events"
cordova-plugin-apprate 1.3.0 "AppRate"
cordova-plugin-battery-status 1.2.4 "Battery"
cordova-plugin-ble-central 1.1.4 "BLE"
cordova-plugin-bluetooth-serial 0.4.7 "Bluetooth Serial"
cordova-plugin-brightness 0.1.5 "Brightness"
cordova-plugin-calendar 4.6.0 "Calendar"
cordova-plugin-camera 2.4.1 "Camera"
cordova-plugin-compat 1.1.0 "Compat"
cordova-plugin-contacts 2.3.1 "Contacts"
cordova-plugin-datepicker 0.9.3 "DatePicker"
cordova-plugin-device 1.1.6 "Device"
cordova-plugin-device-motion 1.2.5 "Device Motion"
cordova-plugin-device-orientation 1.0.7 "Device Orientation"
cordova-plugin-dialogs 1.3.3 "Notification"
cordova-plugin-email-composer 0.8.7 "EmailComposer"
cordova-plugin-geolocation 2.4.3 "Geolocation"
cordova-plugin-globalization 1.0.7 "Globalization"
cordova-plugin-google-analytics 1.8.3 "Google Universal Analytics Plugin"
cordova-plugin-health 1.0.0 "Cordova Health"
cordova-plugin-image-picker 1.1.1 "ImagePicker"
cordova-plugin-inappbrowser 1.6.1 "InAppBrowser"
cordova-plugin-insomnia 4.3.0 "Insomnia (prevent screen sleep)"
cordova-plugin-ionic 1.1.8 "IonicCordova"
cordova-plugin-ios-keychain 3.0.1 "KeyChain Plugin for Cordova iOS"
cordova-plugin-media 3.0.1 "Media"
cordova-plugin-mixpanel 3.1.0 "Mixpanel"
cordova-plugin-music-controls 2.0.0 "MusicControls"
cordova-plugin-nativeaudio 3.0.9 "Cordova Native Audio"
cordova-plugin-nativestorage 2.2.2 "NativeStorage"
cordova-plugin-network-information 1.3.3 "Network Information"
cordova-plugin-request-location-accuracy 2.2.1 "Request Location Accuracy"
cordova-plugin-safariviewcontroller 1.4.7 "SafariViewController"
cordova-plugin-screen-orientation 2.0.1 "Screen Orientation"
cordova-plugin-secure-storage 2.6.8 "SecureStorage"
cordova-plugin-shake 0.6.0 "Shake Gesture Detection"
cordova-plugin-sim 1.3.3 "SIM"
cordova-plugin-splashscreen 4.0.3 "Splashscreen"
cordova-plugin-statusbar 2.2.4-dev "StatusBar"
cordova-plugin-stripe 1.5.3 "cordova-plugin-stripe"
cordova-plugin-taptic-engine 2.1.0 "Taptic Engine"
cordova-plugin-themeablebrowser 0.2.17 "ThemeableBrowser"
cordova-plugin-touch-id 3.2.0 "Touch ID"
cordova-plugin-tts 0.2.3 "TTS"
cordova-plugin-vibration 2.1.5 "Vibration"
cordova-plugin-whitelist 1.3.2 "Whitelist"
cordova-plugin-x-socialsharing 5.1.8 "SocialSharing"
cordova-plugin-x-toast 2.6.0 "Toast"
cordova-plugin-zip 3.1.0 "cordova-plugin-zip"
cordova-promise-polyfill 0.0.2 "cordova-promise-polyfill"
cordova-sms-plugin 0.1.11 "Cordova SMS Plugin"
cordova-sqlite-storage 2.0.4 "Cordova sqlite storage plugin"
cordova-universal-clipboard 0.1.0 "Clipboard"
de.appplant.cordova.plugin.local-notification 0.8.5 "LocalNotification"
de.appplant.cordova.plugin.printer 0.7.1 "Printer"
ionic-plugin-keyboard 2.2.1 "Keyboard"
phonegap-plugin-barcodescanner 6.0.7 "BarcodeScanner"
phonegap-plugin-mobile-accessibility 1.0.5-dev "Mobile Accessibility"
uk.co.workingedge.phonegap.plugin.launchnavigator 4.0.4 "Launch Navigator"
```

Source : [https://ionicframework.com/docs/pro/view.html\#plugin-support](https://ionicframework.com/docs/pro/view.html#plugin-support)

### Error: Node Sass does not yet support your current environment: Linux 64-bit with Unsupported runtime \(59\)

#### Détails

Le bug peut apparaitre lorsque vous tenter simplement de visualiser votre application depuis votre navigateur en lançant la commande **ionic serve** depuis un ordinateur Linux 64-bit.

#### Solution

Pour résoudre le problème, il vous suffit de lancer la commande suivante.

```bash
$ npm rebuild node-sass
```

Cela mettra un peu de temps, mais pas de panique c'est tout à fait normal.

Vous pourrez à présent relancer la commande **ionic serve** qui devrait passer sans soucis.

Annexes : Ionic Commons problems [https://devdactic.com/10-ionic-problems/](https://devdactic.com/10-ionic-problems/)

### VOUS NE POUVEZ PAS INSTALLER CETTE APPLICATION CAR UN AUTRE UTILISATEUR A DÉJÀ INSTALLÉ UNE VERSION INCOMPATIBLE SUR CE PÉRIPHÉRIQUE

#### Détails

En essayant d'installer votre propre application depuis Play Store, il un message vous dit que "Vous ne pouvez pas installer cette application car un autre utilisateur a déjà installé une version incompatible sur ce périphérique".

Ce bug apparait si vous avez fait du débogage USB de votre application sur le téléphone depuis lequel vous avez tenté d'installer l'application.

#### Solution

Connectez votre téléphone à votre ordinateur en USB. Une fois les autorisations validées, faites :

```bash
$ adb shell pm uninstall fr.lepackage.appli
Success
```

Où le **fr.lepackage.appli** est le package de votre application \(voir fichier config.xml\)

Tout devrait rentrer dans l'ordre à présent

### xcode-select: error: tool 'xcodebuild'

#### Détails

_xcode-select: error: tool 'xcodebuild' requires Xcode, but active developer directory '/Library/Developer/CommandLineTools' is a command line tools instance_

Le bug apparait généralement lorsque vous essayer de compiler un projet sous MacOS en lançant par exemple :

```bash
$ ionic cordova run ios # compilation + démarrage du projet sur device ou émulateur
```

#### Solution

La solution est simple, il suffit de lancer les commandes suivantes depuis un invite de commande

```bash
$ xcode-select --install # Installation de Command Line Tools si nécessaire.
$ sudo xcode-select -s /Library/Developer/CommandLineTools # Activation de l'outil command line
$ sudo xcode-select -s /Applications/Xcode.app/Contents/Developer # Ce chemin peut être différent, XCode pouvant par exemple être installé dans le dossier Utilitaires (Utilities)
```

Il suffit ensuite de relancer l'action de compilation de votre projet.

### Error ITMS-90717: "Invalid App Store Icon. The App Store Icon in the asset catalog in 'YourApp.app' can't be transparent nor contain an alpha channel."

#### Détails

Le bug apparait lors de la soumission de votre application sur le playstore \(via l'Application Loader par exemple\). Apple est assez strict en ce qui concerne le format des images.

#### Solution

Vous pouvez utiliser un éditeur de photo avancé pour modifier votre image de manière à supprimer le canal alpha, ou alors, vous pouvez utiliser un plugin npm nommé **imagemagick**.

```bash
$ npm install imagemagick
```

Et ensuite depuis votre projet Ionic, faire ceci :

```bash
$ find ./resources/ -name "*.png" -exec convert "{}" -alpha off "{}" \;
```

La commande va simplement rechercher tous les fichier au format png et supprimer le canal alpha. Vous pouvez également régénérer les ressources de votre application :

```bash
$ ionic cordova resources --force
```

Cela devrait résoudre le problème. Il ne vous reste plus qu'à soumettre à nouveau votre application.



npm WARN deprecated circular-json@0.5.9: CircularJSON is in maintenance only, flatted is its successor.

npm ERR! Unexpected end of JSON input while parsing near '...":{"webpack":"./bin/w'

##  Crash NPM

### Détails

npm WARN deprecated circular-json@0.5.9: CircularJSON is in maintenance only, flatted is its successor.

npm ERR! Unexpected end of JSON input while parsing near '...":{"webpack":"./bin/w'

Package install failed, see above.

Ce bug apparait généralement en tentant d'installer un package npm ou en voulant par exemple démarer un nouveau projet angular avec la commande _**ng new**_.

### Solution 

Supprimer le cache npm 

```bash
$ npm cache clean --force
```

Puis recommencez l'action qui a échoué.

