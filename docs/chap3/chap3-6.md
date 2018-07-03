## Exercez-vous

1\) Créez, si ce n'est déjà fait, l'application duckcoin comme expliqué précédemment

```
$ ionic start duckcoin https://github.com/charlesen/duckcoin-starter
$ cd duckcoin
```

2\) Faites le tour de l'application pour découvrir un petit peu son architecture

![](/assets/archi_duckcoin.png)

3\) Renommer les différents onglets :

* Home en _**Accueil**_

* About en _**Minage**_

  * Contact en _**Portefeuille**_

  * Que se passe t-il dans la console à chaque enregistrement ?

4\) Faites les modifications suivantes dans les onglets

* **Accueil** : changez le contenu de l'onglet par le contenu de la page d'accueil du site [https://duckcoin.charlesen.fr](https://duckcoin.charlesen.fr). Et renommer la page, de **Home** à _**Duckcoin**_. \(**src/pages/home/home.html\). **Les images sont à placer dans le dossier **src/assets/imgs**.

* **Minage** : Changer l'intitulé de la page en _**Minage**_.

* **Portefeuille** : Changer l'intitulé de la page en _**Portefeuille**_.

5\) Éditez le fichier **theme/variables.scss** et modifier le contenu de la façon suivante :

```js
// Named Color Variables
// --------------------------------------------------
// Named colors makes it easy to reuse colors on various components.
// It's highly recommended to change the default colors
// to match your app's branding. Ionic uses a Sass map of
// colors so you can add, rename and remove colors as needed.
// The "primary" color is the only required color in the map.

$colors: (
  primary:    #488aff,
  secondary:  #32db64,
  danger:     #f53d3d,
  light:      #f4f4f4,
  dark:       #222,
  duckcoin :  #df4932 // <!-- ICI
);
```

Enregistrez, puis dans le fichier **src/pages/home/home.html**, effectuez les modifications suivantes

```
<ion-header>
  <ion-navbar color="duckcoin"><!-- ICI -->
    <ion-title>Home</ion-title>
  </ion-navbar>
</ion-header>

<ion-content padding>
  LE CONTENU QUE VOUS AVEZ MODIFIÉ JUSTE AVANT ;-)
</ion-content>
```

Que s'est-il passé ?

Faites la même chose pour l'ensemble des onglets.

6\) Adaptez le code hexadécimal de la couleur duckcoin pour qu'il soit le plus proche de vos goûts. Le meilleur code couleur sera utilisé dans la suite du projet :-\)

7\) Renommez les fichiers **about.html** en **mining.html**, **about.scss** en **mining.scss**, **about.scss** en **mining.scss**, **about.ts** en **mining.ts**. Puis, renommer le dossier **about** \(src/pages/about\) en **mining** \(src/pages/mining\).

Dans le fichier **mining.ts**, remplacez **AboutPage** par **MiningPage**.

Que se passe-t-il dans la console ? Dans votre navigateur ? Quelles solutions proposeriez-vous ? Voir par exemple le contenu du fichier src/pages/mining/mining.ts.

![](/assets/ionic_error2.png)

8\) Éditer le fichier **src/app/app.module.ts** de manière à corriger le maximum d'erreurs.

9\) Effectuez les actions précédentes pour l'onglet Portefeuille \(renommage + résolutions de bugs\) : **contact.html** en **wallet.html**, **contact.scss** en **wallet.scss**, **contact.scss** en **wallet.scss**, **contact.ts** en **wallet.ts**.

![](/assets/screen_duck_2.png)

10\) Ajustez le style CSS de la page d'accueil pour rendre le contenu de l'onglet un peu plus joli : **src/pages/home/home.scss**. N'hésitez pas utiliser l'inspecteur de votre navigateur \(F12\).

11\) Nous allons à présent lier notre application au service Ionic PRO. Dans votre invite de commandes, faites :

```
$ ionic link
✔ Looking up your apps - done!

? Which app would you like to link (Use arrow keys)
❯ Create a new app
  Duckcoin-starter (94d675be)
  Duckcoin (20e8461e)
```

Dans la liste qui vous est proposée, choisir l'application que vous avez créée depuis votre espace Ionic PRO.

Il vous sera également proposé d'héberger votre application soit sur Github, soit sur le cloud Ionic. Pour les raisons de ce TP nous utiliserons Ionic PRO, mais vous pouvez très bien aussi utilisé github \(votre code source sera alors public\).

```
> ionic git remote
> git remote add ionic git@git.ionicjs.com:charlesen/duckcoin-starter.git
[OK] Added remote ionic.
[OK] Project linked with app 94d675be!
```

Editez ensuite le fichier **ionic.config.json**. Que remarquez-vous ?

[^1]: Ubuntu Ionic Installer : [https://github.com/nraboy/ubuntu-ionic-installer/blob/master/ubuntu\_ionic\_installer.sh](https://github.com/nraboy/ubuntu-ionic-installer/blob/master/ubuntu_ionic_installer.sh)

[^2]: _How to prevent permission errors_ : [https://docs.npmjs.com/getting-started/fixing-npm-permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions)

