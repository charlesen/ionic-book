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