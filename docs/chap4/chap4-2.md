## Templates et création de nouvelles pages

### Racine de toutes les pages

Considérons le fichier **src/app/app.html**, c'est à partir de ce fichier que seront "générées" toutes les autres pages.

```js
<ion-nav [root]="rootPage"></ion-nav>
```

On y définit un paramètre rootPage qui sera en fait le composant à afficher par défaut, une sorte d'index. Ce paramètre rootPage est lui-même déclaré dans le fichier **app.component.ts**.

```
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage; // <!-- ICI

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
```

On pourrait tout à fait remplacer le rootPage par une autre page, la page de Minage par exemple.

```js
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { MiningPage } from '../pages/mining/mining'; // <!-- ICI

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage :any = MiningPage; // <!-- et LÀ

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
```

Ce qui ferait que par défaut, lorsque votre application se lancera on aura par défaut cette page de Minage au lieu de la page affichant des onglets.

| ![](/assets/screen_duck_2.png) | ![](/assets/duck_screen_min1.png) |
| :--- | :--- |
| Onglet Minage | Page de minage simple |

### Création d'une nouvelle page

Pour créer une nouvelle page, il vous suffit de saisir la commande **ionic g page LeNomDeLaPage**  :

```
$ ionic g page Profile
[OK] Generated a page named Profile!
```

_**"g"**_ pour _**"generate"**_.

Dans cet exemple, j'ai créé une nouvelle page qui va nous permettre d'afficher un profil utilisateur. Cette commande m'a automatiquement générer le triplet : **fichier .ts + fichier .html + fichier .scss**.

![](/assets/screen_22.png)

**profile.ts**

```js
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
```

**profile.html**

```js
<!--
  Generated template for the ProfilePage page.

  See http://ionicframework.com/docs/components/#navigation for more info on
  Ionic pages and navigation.
-->
<ion-header>

  <ion-navbar>
    <ion-title>Profile</ion-title>
  </ion-navbar>

</ion-header>


<ion-content padding>

</ion-content>
```

**profile.scss**

```js
page-profile {

}
```

Ajoutons à présent cette nouvelle page à notre système d'onglet comme ceci :

**src/pages/tabs/tabs.ts**

```js
import { Component } from '@angular/core';

import { MiningPage } from '../mining/mining';
import { WalletPage } from '../wallet/wallet';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile'; // On importe la nouvelle page ICI

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MiningPage;
  tab3Root = WalletPage;
  tab4Root = ProfilePage; // On créé le nouvel onglet

  constructor() {

  }
}
```

**src/pages/tabs/tabs.html**

```js
<ion-tabs>
  <ion-tab [root]="tab1Root" tabTitle="Accueil" tabIcon="home"></ion-tab>
  <ion-tab [root]="tab2Root" tabTitle="Minage" tabIcon="information-circle"></ion-tab>
  <ion-tab [root]="tab3Root" tabTitle="Portefeuille" tabIcon="contacts"></ion-tab>
  <!-- Affichage du nouvel onglet -->
  <ion-tab [root]="tab4Root" tabTitle="Profil" tabIcon="person"></ion-tab>
</ion-tabs>
```

Il faut ensuite déclarer cette nouvelle page dans le module principale, pour que la communauté des pages puissent le connaitre et pouvoir eventuellement l'appeler si besoin. Pour cela, il vous faut modifier le fichier src/app/app.module.ts de la manière suivante :

```js
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MiningPage } from '../pages/mining/mining';
import { WalletPage } from '../pages/wallet/wallet';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile'; // On importe la nouvelle page ICI
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MiningPage,
    WalletPage,
    HomePage,
    ProfilePage, // On la déclare ici
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MiningPage,
    WalletPage,
    HomePage,
    ProfilePage, // Et là
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
```

Après enregistrement vous devriez voir ceci s'afficher à présent :

![](/assets/screen_profile_1.png)

### Navigation entre différentes pages

Pour passer d'une page, par exemple de la page de Profil, à la page d'accueil par exemple, on utilise ce que l'on appelle le controleur de navigation \(NavController\), que vous avez du voir apparaître dans chaque page.

**src/pages/profile/profile.ts**

```js
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'; // ICI


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { // Et là
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
```

Dans ce fichier, ajoutez la fonction gotoHome suivante :

```js
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'; // ICI

import { HomePage } from '../home/home'; // On importe la Page d'accueil

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { // Et là
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  /**
  ** Cette fonction permet d'aller à la page d'accueil
  **/
  gotoHome() {
    this.navCtrl.push(HomePage, {
      un_parametre: 'Je suis un paramètre'
    });
  }

}
```

Puis, modifions un peu le fichier **src/pages/profile/profile.ts **pour afficher un bouton qui nous permettra d’appeler cette action :

```js
<ion-header>

  <ion-navbar color="duckcoin">
    <ion-title>Profile</ion-title>
  </ion-navbar>

</ion-header>

<ion-content padding>
Profil utilisateur
<button ion-button (click)="gotoHome()">Aller à l'accueil</button>
</ion-content>
```

Qui donne le résultat suivant :  
\| ![](/assets/screen_profile_3.png) \| ![](/assets/screen_profile_4.png) \|

L'élément button fait partie des composants que propose Ionic. Dans le [chapitre suivant](/chap5/), nous ferons le tour de ces principaux composants et apprendrons à la customiser.

