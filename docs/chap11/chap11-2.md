## Publication sur l'Apple Store

### Pré-requis

* Xcode 7 ou supérieur
* iOS 9
* Compte Developpeur Apple : [https://developer.apple.com/](https://developer.apple.com/).

Tout comme Android, Apple requiert un compte développeur pour pouvoir publier une application mobile.

La procédure est un peu moins évidente et je vous conseille la documentation Ionic très imagée à l'adresse : [https://ionicframework.com/docs/intro/deploying/](https://ionicframework.com/docs/intro/deploying/)

Il faut globalement un certain nombre d'étapespermettant la signature de votre application et son authentification en tant que produit apple.

### Création d'un package de production

```
> ionic cordova build ios --prod
```

### Création d'un "Provisioning profile"

On va tout d'abord générer un certificat en local, en ligne de commande :

```
$ openssl genrsa -out ios-prod.key 2048
$ openssl req -new -key ios-prod.key -out ios-prod.csr
```

Puis, depuis votre compte de développeur Apple, allez à la section **"Certificates"** \([https://developer.apple.com/account/ios/certificate/](https://developer.apple.com/account/ios/certificate/)\) et dans P**roduction**, créez un nouveau certificat apple en cliquant sur le bouton "+". Quand cela vous sera demandé, utiliser le fichier **ios-prod.csr** généré précédemment.

![](/assets/apple_certificat_1.png)

Une fois le certificat créé, vous pourrez télécharger un fichier au format **.cer** : **ios\_distribution.cer**.

Vous devrez après cela créer un Identifiant d'application, car nous en aurons besoin durant la création du Provisioning Profiles.

Dans **Identifiers &gt; App IDs**, cliquez sur le bouton "+" et compléter le formulaire qui vous est proposé en donnant un nom à votre application, et en précisant le l'**App ID** \(il est recommandé d'utiliser le même que celui que l'on retrouve dans le fichier config.xml, à la section widget

```
<widget id="fr.duckcoin.monappli.ionic" version="1.0.5" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
```

![](/assets/identifier_1.png)

Après la création d'un identifiant d'application, Il faut aller dans la section **Provisioning Profiles &gt; Distribution** et cliquer sur le bouton "+" également.

Choisissez **"App store"** dans la partie Distribution, puis cliquez sur **"Continuer"**.

![](/assets/provisionning_1.png)

Choisissez ensuite l'App ID créé précédemment, ainsi que le certificat.

Donnez un nom à votre Profil, puis appuez sur Continuer.

Télécharger le fichier **.mobileprovision **et stocker le en lieu sûr.

Il faut pour finir, le convertir le certificat **.cer** en fichier **.p12**.

```bash
$ openssl x509 -inform DER -outform PEM -in ios_distribution.cer -out ios_distribution.cer.pem
$ openssl pkcs12 -export -inkey ios-prod.key -in ios_distribution.cer.pem -out certificates-prod.p12
```

Si vous souhaitez passer par le cloud Ionic \([https://dashboard.ionicframework.com](https://dashboard.ionicframework.com)\) pour compiler votre projet, vous aurez besoin des fichiers **certificates-prod.p12** et **.mobileprovision**. Cette étape est malheureusement payante dans la nouvelle version de Ionic PRO.

Depuis le menu Settings &gt; Certificates, ajoutez un nouveau profil :

![](/assets/ionic_cloud_certs.png)

Puis éditez le formulaire qui s'affichera en ajoutant le fichier **.p12** dans la partie **App Development/Store Certificate**, le fichier **.mobileprovision** dans la partie **Provisioning Profile**. Saisissez un mot de passe, si vous l'avez fait en créant votre certificat en local.

> **P.S. :** il est également possible d'importer votre fichier **keystore** Android dans la section correspondante.



Dans Ionic PRO, allez dans **Code &gt; Builds**, puis cliquer le bouton en forme de package à droite \(celui du milieu sur l'image ci-dessous\) pour compiler votre projet

![](/assets/ionic_build.png)

Si vous disposez d'un ordinateur Mac, un **ionic cordova run ios --device** devrait vous permettre de tester que la configuration s'est bien passée avant d'exporter votre application au format IPA.

Pour plus d'informations sur les étapes annexes, n'hésitez pas à visite la page suivante : [https://ionicframework.com/docs/pro/package/ios.html](https://ionicframework.com/docs/pro/package/ios.html)

