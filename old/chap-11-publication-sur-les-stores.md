# Chap 11 - Publication sur les stores

Après le développement de votre application, la prochaine étape sera de la publier sur les stores et si ce n'est pas forcément l'étape la plus compliquée, elle peut s'avérer vite complexe, en particulier pour la publication sur l'Apple Store.

## Publication sur le Google Play Store

### Pré-requis

* [Java SDK](http://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html)
* [Android Studio](https://developer.android.com/studio/index.html)

### 

### Création d'un Keystore

le keystore est utilisé pour signer une application Android et donc certifier qu'elle a bien été emise par nous. Nous allons utiliser un outil nommé **keytool** inclut dans le SDK de Java.

Depuis la racine de votre projet, lancez la commande suivante :

```
$ keytool -genkey -v -keystore duckcoin_app.keystore -alias duckcoin_app -keyalg RSA -keysize 2048 -validity 10000

Entrez le mot de passe du fichier de clés :  
Ressaisissez le nouveau mot de passe : 
Quels sont vos nom et prénom ?
  [Unknown]:  EDOU NZE Charles
Quel est le nom de votre unité organisationnelle ?
Quel est le nom de votre entreprise ?
Quel est le nom de votre ville de résidence ?
Quel est le nom de votre état ou province ?
Quel est le code pays à deux lettres pour cette unité ?
Est-ce CN=EDOU NZE Charles, OU=Mobile-tuts, O=Mobile-tuts, L=Troyes, ST=Champagne-Ardenne, C=FR ?
```

Retenez bien le mot de passe saisi, car une fois que votre application sera publié sur le Google Play Store à l'aide de ce keystore, vous n'aurez pas d'autres choix que d'installer des mises à jour en vous basant sur celui-ci. Si vous perdez le fichier keystore, il vous suffira de le regénérer avec ce mot de passe. Si par contre vous perdez les deux et qu'une version de votre application existe déjà sur le store, vous ne pourrez plus la mettre à jour.

De plus, choisissez un alias assez a retenir. Le nom de votre application + **'\_app'** devrait suffire. Par exemple **duckcoin\_app**.

La commande a généré un fichier duckcoin\_app.keystore à la racine du projet. Gardez le précieusement et à l'abri du vol, ce serait dommage qu'un parfait inconnu publie version falsifié de votre application et se faisant passer pour vous.

### Création d'un package de production

Pour créer un package Android prêt à la production, il vous suffit de saisir la commande suivante :

```bash
$ ionic cordova build android --prod --release
```

Cette commande va générer un package **.apk** : **platforms/android/build/outputs/apk/monProjet.apk**.

il faut ensuite signer ce package :

```
$ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore duckcoin_app.keystore monProjet.apk duckcoin_app
```

Une fois l'application signée, la dernière est la compression du paquet avec un outil inclut dans le SDK d'Android :

```bash
$ zipalign -v 4 monProjet.apk monProjetMini.apk
```

Voilà. C'est ce fichier **monProjetMini.apk** que nous allons pouvons publier sur le store.

### Google Play Store

Une license délivrant le droit de publier sur le Google PlayStore coute 25 dollars pour un compte à vie. Pour se connecter il suffit simplement d'aller à cette adresse : [https://play.google.com/apps/publish/](https://play.google.com/apps/publish/). Cliquez ensuite sur le bouton "Créer une application" en haut en à droite :

![](/assets/google_playstore.png)![](/assets/playstore_2.png)

Remplissez le formulaire qui vous est proposé :![](/assets/playstore_3.png)

Ajoutez des captures d'écran dans les formats recommandés et validez :

![](/assets/playstore_4.png)

Il faut ensuite aller dans l'onglet **"Versions de l'application"** et cliquez sur **"Gérer la production" &gt; "Créer une version"**. C'est ici que l'on va pouvoir uploader notre APK avant de le publier :

![](/assets/playstore_6.png)

## Publication sur l'Apple Store

### Pré-requis

* Xcode 7 ou supérieur
* iOS 9
* Compte Developpeur Apple : [https://developer.apple.com/](https://developer.apple.com/).

Tout comme Android, Apple requiert un compte développeur pour pouvoir publier une application mobile.

### Création d'un package de production

```
> ionic cordova build ios --prod
```

### Création d'un "Provisioning profile" et publication sur l'Apple Store

La procédure est un peu moins évidente que sur Android et vous conseille la documentation Ionic très imagée :

[https://ionicframework.com/docs/intro/deploying/](https://ionicframework.com/docs/intro/deploying/)

* Procédure de déploiement d'une application sur les Store : [https://ionicframework.com/docs/intro/deploying/](https://ionicframework.com/docs/intro/deploying/)

## Publication automatisée avec Fastlane

Fastlane est un outil qui va nous permettre d'automatiser la plupart des actions que nous avons effectuées précédemment : création de profils et de certificats pour iOS, upload et signature de l'application,...De quoi gagner énormément de temps et pourquoi de l'argent.

## Installation

Sous iOS uniquement, assurez-vous de disposer de la dernière version du **Xcode command line tools** en faisant ceci depuis un terminal :

```bash
$ xcode-select --install
```

Fastlane dépendant du langage Ruby, il faut s'assurer qu'il est correctement installé, dépendances comprises \(ce qui est généralement déjà le cas, donc pas d'inquietude à avoir\)

Sous Ubuntu, il se peut que vous ayez des soucis de version Ruby, dans ce cas, faites ceci pour mettre à jour le langage :

```bash
$ sudo apt-get install ruby`ruby -e 'puts RUBY_VERSION[/\d+\.\d+/]'`-dev
```

Il ne vous reste plus qu'à installer fastlane de la manière suivante :

```bash
$ sudo gem install fastlane --verbose
$ gem install bundler # on installe quelques packages ruby dans notre OS
```

Pour plus d'informations sur l'installation, vous pouvez vous référer à la documentation officielle : [https://docs.fastlane.tools/getting-started/android/setup/](https://docs.fastlane.tools/getting-started/android/setup/)

Avant de lancer l'outil, on s'assure que l'on a bien ajouté les plateformes iOS et Android à notre projet :

```bash
$ ionic cordova platform add ios
$ ionic cordova platform add android
```

Puis, dans votre projet Ionic, lancez la commande suivante pour initialiser Fastlane :

```
$ fastlane init
```



**Plus d'informations sur Fastlane :**

* Automatic Ionic 2 Builds For iOS Using Fastlane : [https://devdactic.com/automatic-ionic-builds-fastlane/](https://devdactic.com/automatic-ionic-builds-fastlane/)
* Documentation Fastlane : [https://docs.fastlane.tools/](https://docs.fastlane.tools/)



