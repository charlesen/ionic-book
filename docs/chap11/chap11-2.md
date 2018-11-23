## Publication sur l'Apple Store

### Pré-requis

* Xcode 7 ou supérieur
* iOS 9
* Un identifiant Apple \([https://appleid.apple.com/](https://appleid.apple.com/)\) ou un compte Développeur payant \([https://developer.apple.com/](https://developer.apple.com/)\).

Tout comme Android, Apple requiert de signer votre application mobile et il nous faudra donc générer un provisioning profile. La bonne nouvelle est que depuis iOS 9, il est tout à fait possible de développer, puis tester son application sans disposer d'un compte développeur payant.

Cependant, pour la publication sur l'iTunes Store, vous aurez besoin d'être affilié au programme de développeurs Apple coutant 99€ par an.

La procédure est un peu moins évidente et je vous conseille la documentation Ionic très imagée à l'adresse : [https://ionicframework.com/docs/intro/deploying/](https://ionicframework.com/docs/intro/deploying/).

Il faut globalement un certain nombre d'étapes permettant la signature de votre application et son authentification en tant que produit apple.

### Création d'un package de production

```bash
$ ionic cordova build ios --prod
```

### Création d'un "Provisioning profile"

#### En utilisant votre Apple ID

1. Ouvrez les préférences Xcode \(Xcode &gt; Preferences…\)
2. Cliquez sur l'onglet Accounts
3. Connectez-vous si nécessaire avec vos identifiants Apple en faisant _**+ &gt; Add Apple ID**_…

Une fois connecté, vous verrez s'afficher dans le tableau du bas \_Votre Nom \(Personal Team\) \_avec le rôle User.

#### En utilisant votre compte développeur \(nécessaire pour la publication\)

La procédure est un peu plus complexe. N'hésitez pas à prendre connaissance des étapes sur le site d'Apple : [https://help.apple.com/xcode/mac/current/\#/dev60b6fbbc7](https://help.apple.com/xcode/mac/current/#/dev60b6fbbc7)

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

### Création d'un package IPA \(iOS App Store Package\)

#### Depuis Xcode

Ouvrez votre projet depuis Xcode en cliquant sur le fichier **platform/ios/monProjet.xcodeproj**. Sélectionnez votre projet dans Xcode et dans l'onglet général, catégorie **Signing**, remplacez la **Team** par celle que vous avez créée précédemment.

![](/assets/ionic_profile_prov_1.png)

Une fois la sélection faite, vous ne devriez plus avoir le message d'erreur en rouge.

![](/assets/ionic_profile_prov_2.png)

Vous êtes prêt à compiler votre Projet.

Toujours dans Xcode, non loin du bouton de compilation \(icon play\) , changez le device cible en **Generic iOS Device**. Une fois que cela a été fait, faites **Product &gt; Archive**. Cette étape va simplement créer votre application en package interpretable par les appareils Apple. Suivez les étapes dans la popup qui s'ouvre en sélectionnant l'option **Automatically manage signing **\(Si vous ne disposez pas encore d''un Certificat, l'outil vous aidera à le faire\).

![](/assets/ios_distribution_001.png)

Une fois l'Upload effectué, vous devriez voir s'afficher cette popup avec un message le message **"Upload Successful"**.

![](/assets/ios_distribution_002.png) 

#### Depuis Ionic PRO

Dans Ionic PRO, allez dans **Code &gt; Builds**, puis cliquez sur le bouton en forme de package à droite \(celui du milieu sur l'image ci-dessous\) pour compiler votre projet.

Une fois la compilation terminée, téléchargez le fichier IPA.

![](/assets/ionic_build.png)

Si vous disposez d'un ordinateur Mac, un **ionic cordova run ios --device** devrait vous permettre de tester votre application depuis votre smartphone et s'assurer que la configuration s'est bien passée avant d'exporter votre application au format IPA.

Pour plus d'informations sur les étapes annexes, n'hésitez pas à visite les pages suivantes :

* Packaging iOS : [https://ionicframework.com/docs/pro/package/ios.html](https://ionicframework.com/docs/pro/package/ios.html)
* Build Ionic : [https://ionicframework.com/docs/cli/cordova/build/](https://ionicframework.com/docs/cli/cordova/build/)

### Publication sur Itunes Connect

Url : [https://appstoreconnect.apple.com/](https://appstoreconnect.apple.com/)

Dans la section **"Mes apps"**, ajouter une nouvelle application en cliquant sur le bouton "+". Complétez le formulaire qui apparaît, en ajoutant le nom de l'ID du fichier config.xml dans l'item UGS.

![](/assets/itunes_connect_1.png)

Complétez les informations liées à l'application \(nom, description,..\), puis dans la partie App version, ajoutez des images et surtout importez votre fichier compilé en allant dans la section **"Builds"**.

![](/assets/ios_distribution_003.png)

Dès que vous êtes prêt, cliquez sur **Submit for Review**, et priez que le technicien Apple qui s'occupera de valider votre application ne sois pas trop dur avec vous.

N'hésitez surtout à visitez la page [https://ionic.mobiletuto.com/chap11/](https://ionic.mobiletuto.com/chap11/) et à y poser vos questions, si vous rencontrez des difficultés dans la publication

### Annexes :

* iOS Platform Guide \(Cordova\) : [https://cordova.apache.org/docs/fr/8.x/guide/platforms/ios/index.ht](https://cordova.apache.org/docs/fr/8.x/guide/platforms/ios/index.html)
* Distribute Your App \(Doc Apple Officielle\) : [https://help.apple.com/xcode/mac/current/\#/dev8b4250b57](https://help.apple.com/xcode/mac/current/#/dev8b4250b57)
* Deploying Capacitor Applications to iOS development distribution [https://www.joshmorony.com/deploying-capacitor-applications-to-ios-development-distribution/](https://www.joshmorony.com/deploying-capacitor-applications-to-ios-development-distribution/)



