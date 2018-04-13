# Chap 5 - Utilisation des composants Ionic

Ionic est constitué de blocs d'élements de haut niveau appelés composants. Les composants vous permettent de créer rapidement une interface pour votre application. 

Le framework propose pléthore de composants, du bouton au toast, en passant par des listes d'élements, soit suffisament d'UI pour développer à peu près tout type d'application.

 Chaque composant à son propre API. Ce qui permet de l'exploiter au maximum. Etudions quelques uns d'entre eux qui nous serons bien utiles.



Liste des composants : [https://ionicframework.com/docs/components/](https://ionicframework.com/docs/components/)



## Exercez-vous

Dans cette série d'exercies, nous allons pouvoir améliorer un peu notre application. On va s'inspirer d'une design d'une application qui nommé Electroneum. 

Electroneum est une cryptomonnaie dédiée au secteur du mobile. Une application qui simule le processus de minage d'une cryptomonnaie existe et est disponible pour Android et prochainement pour iOS.

Application sur Android : [ https://play.google.com/store/apps/details?id=com.electroneum.mobile](https://play.google.com/store/apps/details?id=com.electroneum.mobile)

Dans cet TP, nous allons, à l'aide des composants tenter de nous rapprocher le plus possible de l'application \(voir screen en pièce jointe\)

1\) Créer une nouvelle page que vous nommérez Login. Ce sera notre page de connexion et d'inscription.

Faites que cette page soit la page par défaut, en modifiant le fichier **src/app/app.component.ts**

2\) Utilisez les composants Ionic pour rapprocher cette page le plus proches possible du screen ci-dessous, en adaptant au passage le style et le texte. De plus, vous rajoutez juste avant le bouton de login deux input pour saisir son identifiant et mot de passe. 

![](/assets/screen_electronum_login.png)

3\) Faites qu'au clic sur le bouton login on puisse accéder à  la page d'accueil avec les différents onglets \(voir pour inspiration la fonction gotoHome\(\) : [https://github.com/charlesen/duckcoin/blob/master/src/pages/profile/profile.ts](https://github.com/charlesen/duckcoin/blob/master/src/pages/profile/profile.ts) \)

 

