## Composant Select

Ce composant permet un rendu du tag html **&lt;select&gt;&lt;/select&gt;** et va donc nous permettre d'afficher une liste de choix. Affichons par exemple ici la liste des 5 premières cryptomonnaies par capitalisation boursière :

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

