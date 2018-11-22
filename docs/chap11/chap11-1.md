## Publication sur le Google Play Store

### Pré-requis

* [Java SDK](http://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html)
* [Android Studio](https://developer.android.com/studio/index.html)

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
$ ionic cordova build android --release
```

Cette commande va générer un package **.apk** : **platforms/android/build/outputs/apk/monProjet.apk**.

il faut ensuite signer ce package :

```bash
$ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore duckcoin_app.keystore monProjet.apk duckcoin_app
```

Une fois l'application signée, la dernière est la compression du paquet avec un outil inclut dans le SDK d'Android :

```bash
$ zipalign -v 4 monProjet.apk monProjetMini.apk
```

Voilà. C'est ce fichier **monProjetMini.apk** que nous allons pouvons publier sur le store.

Vous pouvez également créer un fichier bash et faire toutes les étapes plus rapidement. Sous Linux, créez un fichier **package.sh** contenant les lignes suivante

```bash
ionic cordova build android --release
jarsigner -tsa http://timestamp.digicert.com -verbose -sigalg SHA1withRSA -digestalg SHA1 -storepass motDePasse -keystore duckcoin_app.keystore platforms/android/build/outputs/apk/android-release-unsigned.apk monAlias
zipalign -v 4 platforms/android/build/outputs/apk/android-release-unsigned.apk monProjetMini.apk

```

Il vous suffit ensuite de rendre executable ce fichier et de lancer le script.

```bash
$ chmod u+x package.sh
$ ./package.sh
```

### Google Play Store

Une license délivrant le droit de publier sur le Google PlayStore coute 25 dollars pour un compte à vie. Pour se connecter il suffit simplement d'aller à cette adresse : [https://play.google.com/apps/publish/](https://play.google.com/apps/publish/). Cliquez ensuite sur le bouton "Créer une application" en haut en à droite :

| ![](/assets/google_playstore.png) | ![](/assets/playstore_2.png) |
| :--- | :--- |
|  |  |

Remplissez le formulaire qui vous est proposé

![](/assets/playstore_3.png)

et ajoutez des captures d'écran dans les formats recommandés, avant de valider le tout

![](/assets/playstore_4.png)

Il faut ensuite aller dans l'onglet **"Versions de l'application"** et cliquez sur **"Gérer la production" &gt; "Créer une version"**. C'est ici que l'on va pouvoir uploader notre APK avant de le publier :

![](/assets/playstore_6.png)

