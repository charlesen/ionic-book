## Composant Cards

Les cartes sont un bon moyen d'afficher des informations importantes à destination des utilisateurs. Ce pattern s'inspire des cartes de visite personnelles ou professionnelles que nous utilisons dans la vie courante.

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

