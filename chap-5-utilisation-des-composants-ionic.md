# Chap 5 - Utilisation des composants Ionic

Ionic est constitué de blocs d'élements de haut niveau appelés composants. Les composants vous permettent de créer rapidement une interface pour votre application.

Le framework propose pléthore de composants, du bouton au toast, en passant par des listes d'éléments, soit suffisament d'UI pour développer à peu près tout type d'application.

Chaque composant à son propre API. Ce qui permet de l'exploiter au maximum. Etudions quelques-uns d'entre eux qui nous seront bien utiles.

Liste des composants : [https://ionicframework.com/docs/components/](https://ionicframework.com/docs/components/)

Faisons le tour de quelques composants intéressants.

## Composant Bouton

Pour ajouter un comosant de type bouton à votre application mobile, il suffit simplement de faire \(attention, grand moment\) :

```js
<button ion-button>Mon bouton</button>
```

Tada ! Ce n'est pas plus compliqué que ça.

On peut aussi customiser un peu ce bouton grâce à des [directives, concepte abordé au chapitre 8](/chap-8-architecture-avancee-dune-application-ionic-composants-directives-providers-et-modules.md). Ajustons par exemple la couleur des différents boutons :

```js
<button ion-button color="light">Mon bouton clair</button>
<button ion-button>Mon bouton par défaut (primary)</button>
<button ion-button color="secondary">Mon bouton avec couleur secondaire</button>
<button ion-button color="danger">Mon bouton rouge</button>
<button ion-button color="dark">Mon bouton noir</button>
```

![](/assets/composant_boutons_1.png)

on peut également retirer le background pour n'afficher que la bordure dans la couleur définie grâce à la directive **outline** :

```
<ion-header>

  <ion-navbar color="duckcoin">
    <ion-title>Ma Page</ion-title>
  </ion-navbar>

</ion-header>


<ion-content padding>
  <button ion-button outline>Mon bouton par défaut (primary)</button>
  <button ion-button color="secondary" outline>Mon bouton avec couleur secondaire</button>
  <button ion-button color="danger" outline>Mon bouton rouge</button>
  <button ion-button color="dark" outline>Mon bouton noir</button>
</ion-content>
```

![](/assets/composant_boutons_3.png)

Ou encore retirer les bordures du boutons avec la directive **clear** :

```js
<ion-header>

  <ion-navbar color="duckcoin">
    <ion-title>Ma Page</ion-title>
  </ion-navbar>

</ion-header>


<ion-content padding>
  <button ion-button clear>Mon bouton par défaut (primary)</button>
  <button ion-button color="secondary" clear>Mon bouton avec couleur secondaire</button>
  <button ion-button color="danger" clear>Mon bouton rouge</button>
  <button ion-button color="dark" clear>Mon bouton noir</button>
</ion-content>
```

![](/assets/composant_boutons_2.png)

Documentation : [https://ionicframework.com/docs/components/\#buttons](https://ionicframework.com/docs/components/#buttons)

### Composant Liste

Comme son nom peut le suggérer, ce composant va nous permettre d'ajouter une liste d'éléments à notre application. Affichons par exemple la liste des principales cryptomonnaies en avril 2018 :

**src/pages/mapage/mapage.html**

```js
<ion-header>
  <ion-navbar color="duckcoin">
    <ion-title>Ma Page</ion-title>
  </ion-navbar>
</ion-header>
<ion-content padding>
  <ion-list>
    <ion-list-header text-center>
      TOP 10 des cryptos en Avril 2018
    </ion-list-header>
    <ion-item *ngFor="let crypto of cryptos">
      <strong>{{ crypto.name }}</strong> vaut environ {{ crypto.price}}
    </ion-item>
  </ion-list>
</ion-content>
```

src/pages/mapage/mapage.ts

```js
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-mapage',
  templateUrl: 'mapage.html',
})
export class MaPagePage {
  cryptos: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cryptos = [
      { 'name': 'Bitcoin', 'price': '$8883,45' },
      { 'name': 'Ethereum', 'price': '$$635,25' },
      { 'name': 'Ripple', 'price': '$0,873466' },
      { 'name': 'Bitcoin Cash', 'price': '$1 392,80' },
      { 'name': 'EOS', 'price': '$11,57' },
      { 'name': 'Litecoin', 'price': '$150,95' },
      { 'name': 'Cardano', 'price': '$0,288146' },
      { 'name': 'Stellar', 'price': '$0,373197' },
      { 'name': 'IOTA', 'price': '$2,12' },
      { 'name': 'NEO', 'price': '$76,89' }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

}
```

Qui donne :

![](/assets/composant_liste_2.png)

Documentation : [https://ionicframework.com/docs/components/\#lists](https://ionicframework.com/docs/components/#lists)

### Composant Select

Le composant est similaire au tag htlml &lt;select&gt;&lt;/select&gt; et va donc nous permettre d'afficher une liste de choix. Affichons par exemple ici la liste des 5 premières cryptomonnaies par capitalisation boursière :

```js
<ion-header>
  <ion-navbar color="duckcoin">
    <ion-title>Ma Page</ion-title>
  </ion-navbar>
</ion-header>
<ion-content padding>
  <ion-list>
    <ion-list-header text-center>
    TOP 10 des cryptos en Avril 2018
    </ion-list-header>
    <ion-item>
      <ion-label>Choisir dans la liste</ion-label>
      <ion-select [(ngModel)]="gaming">
        <ion-option value="btc">Bitcoin</ion-option>
        <ion-option value="xrp">Ethereum</ion-option>
        <ion-option value="xrp">Ripple</ion-option>
        <ion-option value="bch">Bitcoin Cash</ion-option>
        <ion-option value="eos">EOS</ion-option>
        <ion-option value="ltc">Litecoin</ion-option>
      </ion-select>
    </ion-item>
  </ion-list>
</ion-content>
```

![](/assets/composant_select.png)

Documentation : [https://ionicframework.com/docs/components/\#select](https://ionicframework.com/docs/components/#select)

### Composant Cards

Les cartes sont un bon moyen d'afficher des informations importantes à destination des utilisateurs. Ce pattern s'inspire des carte de visite que nous utilisons dans la vie courante.

```js
<ion-header>

  <ion-navbar color="duckcoin">
    <ion-title>Ma Page</ion-title>
  </ion-navbar>

</ion-header>


<ion-content padding>
  <ion-card>

    <ion-card-header>
      Charles EDOU NZE
    </ion-card-header>

    <ion-card-content>
      <p>Profession : Ingénieur informatique</p>
      <p>Localisation : Troyes</p>
      <p>Site internet : https://charlesen.fr</p>
    </ion-card-content>

  </ion-card>
</ion-content>
```

![](/assets/composant_cards_1.png)

Il est également possible de combiner carte et liste d'éléments comme ceci :

```js
<ion-header>
  <ion-navbar color="duckcoin">
    <ion-title>Ma Page</ion-title>
  </ion-navbar>
</ion-header>
<ion-content padding>
  <ion-card>
    <ion-card-header text-center>
      Formations en cours
    </ion-card-header>
    <ion-list>
      <button ion-item>
         <ion-icon name="logo-android" item-start></ion-icon>
         Développer pour Android
      </button>
      <button ion-item>
         <ion-icon name="logo-apple" item-start></ion-icon>
         Développer pour iOS
      </button>
      <button ion-item>
         <ion-icon name="logo-angular" item-start></ion-icon>
         Développer avec Angular
      </button>
      <button ion-item>
         <ion-icon name="bug" item-start></ion-icon>
         Déboggage avancé en JS
      </button>
    </ion-list>
  </ion-card>
</ion-content>
```

![](/assets/composant_cards_2.png)

Ou tout simplement reproduire un design assez proche de réseaux sociaux comme Instagram :

```js
<ion-header>
  <ion-navbar color="duckcoin">
    <ion-title>Ma Page</ion-title>
  </ion-navbar>
</ion-header>
<ion-content padding>
  <ion-card>
    <img src="assets/imgs/duckcoin-mini.png" />
    <ion-card-content>
      <ion-card-title>
        DuckCoin
      </ion-card-title>
      <p>
        C'est la monnaie qui rend aimable, redonne le sourire et change la face du monde. Elle a été faite pour des gens sympas, juste comme toi.
      </p>
    </ion-card-content>
    <ion-row no-padding>
      <ion-col>
        <button ion-button clear small color="duckcoin" icon-medium icon-start>
          J'aime <ion-icon name='heart'></ion-icon>
        </button>
      </ion-col>
      <ion-col text-right>
        <button ion-button clear small color="duckcoin" icon-medium icon-start>
          Partager <ion-icon name='share-alt'></ion-icon>
        </button>
      </ion-col>
    </ion-row>
  </ion-card>
</ion-content>
```

![](/assets/composant_card_3.png)

Documentation : [https://ionicframework.com/docs/components/\#cards](https://ionicframework.com/docs/components/#cards)

### Composant Fab \(Floating Action Buttons\)

Ce composant est issu du Material Design, un ensemble de règles de design proposées par Google et qui est utilisé notamment à partir de la version 5.0 du système d'exploitation Android. Il s'agit d'un élément en forme de cercle qui permet, au clic, d'afficher d'autres éléments actionnables eux aussi par clic.

```
<ion-fab bottom right>
  <button ion-fab mini><ion-icon name="add"></ion-icon></button>
  <ion-fab-list side="top">
    <button ion-fab><ion-icon name="contacts"></ion-icon></button>
    <button ion-fab><ion-icon name="send"></ion-icon></button>
  </ion-fab-list>
</ion-fab>
```

On peut choisir d'afficher notre fab sur une tout au position que en bas à droite \(**bottom right**\). Affichons-le par exemple en haut à gauche

```
<ion-fab top left>
  <button ion-fab mini><ion-icon name="add"></ion-icon></button>
  <ion-fab-list side="top">
    <button ion-fab><ion-icon name="contacts"></ion-icon></button>
    <button ion-fab><ion-icon name="send"></ion-icon></button>
  </ion-fab-list>
</ion-fab>
```

![](/assets/composant_fab_2.png)

N'hésitez pas au besoin à adapter votre style scss comme ci :

**src/pages/mapage.scss**

```
ion-fab[top] {
  top:60px;
}
```

De plus, pour modifier la direction d'affichage de la liste d'action, il suffit de modifier la valeur du paramètre side à l'intérieur du tag **&lt;ion-fab-list&gt;**.

```
<ion-fab top left>
  <button ion-fab mini><ion-icon name="add"></ion-icon></button>
  <ion-fab-list side="bottom">
    <button ion-fab><ion-icon name="contacts"></ion-icon></button>
    <button ion-fab><ion-icon name="send"></ion-icon></button>
  </ion-fab-list>
</ion-fab>
```

![](/assets/composant_fab_3.png)

Documentation : [https://ionicframework.com/docs/api/components/fab/FabButton/](https://ionicframework.com/docs/api/components/fab/FabButton/)

## Exercez-vous

Dans cette série d'exercices, nous allons pouvoir améliorer un peu notre application. On va s'inspirer du design d'une application mobile nommée Electroneum.

Electroneum est une cryptomonnaie dédiée au secteur du mobile. Une application de la cryptomonnaie existe et est disponible pour Android et prochainement pour iOS.

* Version Android : [ https://play.google.com/store/apps/details?id=com.electroneum.mobile](https://play.google.com/store/apps/details?id=com.electroneum.mobile)

Dans ce TP, nous allons, à l'aide des composants tenter de nous rapprocher le plus possible de l'application \(voir screen en pièce jointe\)

1\) Créez une nouvelle page que vous nommérez Login. Ce sera notre page de connexion et d'inscription.

Faites que cette page soit la page par défaut, en modifiant le fichier **src/app/app.component.ts**

2\) Utilisez les composants Ionic pour rapprocher cette page le plus proche possible du screen ci-dessous, en adaptant au passage le style et le texte.

![](/assets/login_img.jpg)

De plus, vous rajouterez juste avant le bouton de login deux input pour saisir son identifiant et mot de passe.

3\) Faites qu'au clic sur le bouton login on puisse accéder à  la page d'accueil avec les différents onglets \(voir pour inspiration la fonction gotoHome\(\) : [https://github.com/charlesen/duckcoin/blob/master/src/pages/profile/profile.ts](https://github.com/charlesen/duckcoin/blob/master/src/pages/profile/profile.ts) \)

4\) Sans modifier l'onglet Accueil, adaptez les autres onglets Minage, Portefeuille

P.S. : Ionic propose un ensemble d'icônes que l'on peut intégrer facilement dans l'appli.

```js
<ion-icon name="home"></ion-icon>
```

La liste de toutes les icônes disponibles se trouve à l'adresse  [https://ionicframework.com/docs/ionicons/](https://ionicframework.com/docs/ionicons/)

![](/assets/miner_img.jpg)![](/assets/wallet_img.jpg)

5\) Améliorez les onglets Profil et More \(page Settings créé dans le TP précédent\) avec différents autres composants. Dans l'onglet Setting on pourra par exemple avoir la possibilité de choisir plusieurs devises différentes et d'en cocher une par défaut, ou encore de choisir la langue par défaut,...laissez libre cours à votre imagination ;-\)

## Annexes

* Liste des composants Ionic et Documentation : [https://ionicframework.com/docs/components/](https://ionicframework.com/docs/components/)



