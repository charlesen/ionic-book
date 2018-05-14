## Composant Liste

Comme son nom peut le suggérer, ce composant va nous permettre d'ajouter une liste d'éléments à notre application. Affichons par exemple la liste des principales cryptomonnaies selon leur capitalisation en avril 2018 :

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

**src/pages/mapage/mapage.ts**

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

