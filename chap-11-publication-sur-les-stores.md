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
  [Unknown]:  Mobile-tuts 
Quel est le nom de votre entreprise ?
  [Unknown]:  Mobile-tuts
Quel est le nom de votre ville de résidence ?
  [Unknown]:  Troyes
Quel est le nom de votre état ou province ?
  [Unknown]:  Champagne-Ardenne
Quel est le code pays à deux lettres pour cette unité ?
  [Unknown]:  FR
Est-ce CN=EDOU NZE Charles, OU=Mobile-tuts, O=Mobile-tuts, L=Troyes, ST=Champagne-Ardenne, C=FR ?
  [non]:oui
```

Retenez bien le mot de passe saisi, car une fois que votre application sera publié sur le Google Play Store à l'aide de ce keystore, vous n'aurez pas d'autres choix que d'installer des mises à jour en vous basant sur celui-ci. Si vous perdez le fichier keystore, il vous suffira de le regénérer avec ce mot de passe. Si par contre vous perdez les deux et qu'une version de votre application existe déjà sur le store, vous ne pourrez plus la mettre à jour.

De plus, choisissez un alias assez a retenir. Le nom de votre application + **'\_app'** devrait suffire. Par exemple **duckcoin\_app**.

La commande a généré un fichier duckcoin\_app.keystore à la racine du projet. Gardez le précieusement et à l'abri du vol, ce serait dommage qu'un parfait inconnu publie version falsifié de votre application et se faisant passer pour vous.

cd

### Création d'un package de production

Pour créer un package Android prêt à la production, il vous suffit de saisir la commande suivante :

```bash
$ ionic cordova build android --prod --release
```

cd

il faut ensuite signer ce package :

```
$ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore HelloWorld-release-unsigned.apk alias_name
```

cd

## Annexe

* Procédure de déploiement d'une application sur les Store : [https://ionicframework.com/docs/intro/deploying/](https://ionicframework.com/docs/intro/deploying/)



