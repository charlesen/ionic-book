## Exercez-vous

Dans cette série d'exercices, nous allons pouvoir améliorer un peu notre application en nous inspirant du design d'une application mobile nommée Electroneum.

Electroneum est une cryptomonnaie dédiée au secteur du mobile. Une application de la cryptomonnaie existe et est disponible pour Android et prochainement pour iOS.

* Version Android : [ https://play.google.com/store/apps/details?id=com.electroneum.mobile](https://play.google.com/store/apps/details?id=com.electroneum.mobile)

Dans ce TP, nous allons, à l'aide des composants que nous avons étudié et bien d'autres, tenter de nous rapprocher le plus possible de l'application \(voir les captures d'écran ci-dessous\)

1\) Créez une nouvelle page que vous nommerez Login. Ce sera notre page de connexion et d'inscription.

Faites que cette page soit la page par défaut, en modifiant le fichier **src/app/app.component.ts**

2\) Utilisez les composants Ionic pour rapprocher cette page le plus proche possible du screen ci-dessous, en adaptant au passage le style et le texte.

![](/assets/login_img.jpg)

De plus, vous rajouterez juste avant le bouton de login deux input pour saisir son identifiant et mot de passe.

3\) Faites qu'au clic sur le bouton login on puisse accéder à  la page d'accueil avec les différents onglets \(voir pour inspiration la fonction gotoHome\(\) : [https://github.com/charlesen/duckcoin/blob/master/src/pages/profile/profile.ts](https://github.com/charlesen/duckcoin/blob/master/src/pages/profile/profile.ts) \)

4\) Sans modifier l'onglet Accueil, adaptez les autres onglets Minage, Portefeuille

P.S. : Ionic propose un ensemble d'icônes que l'on peut intégrer facilement dans l'application.

```js
<ion-icon name="home"></ion-icon>
```

La liste de toutes les icônes disponibles se trouve à l'adresse  [https://ionicframework.com/docs/ionicons/](https://ionicframework.com/docs/ionicons/)

**Minage**

![](/assets/miner_img.jpg)

**Portefeuille**  
![](/assets/wallet_img.jpg)

Améliorez les onglets Profil et More \(page Settings créé dans le TP précédent\) avec différents autres composants. Dans l'onglet Setting on pourra par exemple avoir la possibilité de choisir plusieurs devises différentes et d'en cocher une par défaut, ou encore de choisir la langue par défaut,...laissez libre cours à votre imagination ;-\)

## Annexes

* Liste des composants Ionic et Documentation : [https://ionicframework.com/docs/components/](https://ionicframework.com/docs/components/)



