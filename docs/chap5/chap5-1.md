## Composant Bouton

Pour ajouter un composant de type bouton[^1] à votre application mobile, il suffit simplement de faire...attention, très grand moment ... :

```js
<button ion-button>Mon bouton</button>
```

Tada ! Ce n'est pas plus compliqué que ça. Il s'agit en fait d'un élément html button avec un attribut ionic **ion-button **qui permettent simple de rajouter du style css.

On peut aussi customiser un peu ce bouton grâce à des [directives, concept abordé au chapitre 8](/chap8). Ajustons par exemple la couleur des différents boutons grâce à la directive **"color"**:

```js
<button ion-button color="light">Mon bouton clair</button>
<button ion-button>Mon bouton par défaut (primary)</button>
<button ion-button color="secondary">Mon bouton avec couleur secondaire</button>
<button ion-button color="danger">Mon bouton rouge</button>
<button ion-button color="dark">Mon bouton noir</button>
```

![](/assets/composant_boutons_1.png)

on peut également retirer le background pour n'afficher que la bordure dans la couleur définie grâce à la directive **outline** :

```js
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

[^1]: Dans la version 4 de Ionic, le composant Button déclaré **&lt;button ion-button&gt;&lt;button&gt;** deviendra  **&lt;ion-button&gt;&lt;/ion-button&gt;**

