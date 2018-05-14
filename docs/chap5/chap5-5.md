## Composant Fab \(Floating Action Buttons\)

Ce composant est issu du Material Design, un ensemble de règles de design proposés par Google et présent notamment dès la version 5.0 du système d'exploitation Android. Il s'agit d'un élément en forme de cercle qui permet, au clic, d'afficher d'autres éléments actionnables eux aussi par clic.

```js
<ion-fab bottom right>
  <button ion-fab mini><ion-icon name="add"></ion-icon></button>
  <ion-fab-list side="top">
    <button ion-fab><ion-icon name="contacts"></ion-icon></button>
    <button ion-fab><ion-icon name="send"></ion-icon></button>
  </ion-fab-list>
</ion-fab>
```

On peut choisir d'afficher notre fab sur une tout au position que en bas à droite \(**bottom right**\). Affichons-le par exemple en haut à gauche

```js
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

```js
ion-fab[top] {
  top:60px;
}
```

De plus, pour modifier la direction d'affichage de la liste d'action, il suffit de modifier la valeur du paramètre side à l'intérieur du tag **&lt;ion-fab-list&gt;**.

```js
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

