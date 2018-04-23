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

Comme son nom peut le suggérer, ce composant va nous permettre d'ajouter une liste d'éléments à notre application



Documentation : 

### Composant Select

Le composant va nous permettre d'ajouter

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



