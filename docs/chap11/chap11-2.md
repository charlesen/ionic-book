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





