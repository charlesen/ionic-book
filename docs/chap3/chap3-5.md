## Démarrage de l'application DuckCoin

### Création du projet

Comme nous l'avons vu, il est possible de créer une application mobile à partir d'un dépôt git. C'est ce que nous allons faire pour l'application DuckCoin.

Ouvrez donc votre terminal et saisissez les commandes suivantes :

```
$ ionic start duckcoin https://github.com/charlesen/duckcoin-starter
```

![](/assets/ionic_screen_2.png)

Démarrez ensuite l'application avec la commande serve :

```
$ cd duckcoin
$ ionic serve -lc
```

![](/assets/screen_app1.png)

Ajoutons ensuite les plateformes Android et iOS à notre projet comme ceci :

```
$ ionic cordova platform add android
$ ionic cordova platform add ios
```

### Struction du projet

Faisons un peu le tour de l'anatomie d'un projet type sous Ionic.

### config.xml

Ce fichier est utilisé pour gérer toute la configuration de la partie native de l'application. C'est ici par exemple que vous rajouterez les autorisations nécessaires pour l'utilisation de la Camera dans votre application. Chaque plugin ajouté à votre application sera rajouté automatiquement à ce fichier.

C'est aussi dans ce fichier que vous devriez renseigner le numéro de version de votre application, utile dans l'étape de publication sur les stores \(Google ou Apple Store par exemple\)

```js
<?xml version='1.0' encoding='utf-8'?>
<widget id="io.ionic.starter" version="0.0.1" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
    <name>monAppli</name>
    <description>Une application de test</description>
    <author email="hello@charlesen.fr" href="http://ionicframework.com/">Charles EDOU NZE</author>
    <content src="index.html" />
    <access origin="*" />
    <allow-intent href="http://*/*" />
    <allow-intent href="https://*/*" />
    <allow-intent href="tel:*" />
    <allow-intent href="sms:*" />
    <allow-intent href="mailto:*" />
    <allow-intent href="geo:*" />
    <preference name="ScrollEnabled" value="false" />
    <preference name="android-minSdkVersion" value="19" />
    ...
```

### ionic.config.json

Ce fichier contient des informations de base sur votre application \(nom de l'application, App ID...\), et est utilisé notamment pour uploader votre application sur le cloud Ionic.

### package.json

C'est le fichier de configuration de Node. A la création d'un projet, Ionic lance automatiquement la commande **npm install**, qui va installer un certain nombre de paquets en arrière-plan et stockés dans le dossier **node\_modules**. C'est grâce à ce fichier **package.json** que npm sait quel paquet installé dans le projet

### ./platforms

Ce dossier contient les versions "natives" de l'application. Un dossier a été ajouté pour chaque plateforme cible. Pour afficher la liste des plateformes actuellement supportées, il suffit de faire : 

```bash
$ ionic cordova platform list

> cordova platform ls
Installed platforms:
  android 7.0.0
  ios 4.5.4
Available platforms: 
  browser ~5.0.1
  ios ~4.5.4
  osx ~4.0.1
  windows ~5.0.0
  www ^3.12.0

```

### ./plugins

Le dossier contient tous les plugins Cordova utilisés par l'application. Pour rappel, un plugin un conteneur faisant appel à des fonctions natives \(voir repertoire **platforms/\[NOM\_PLATEFORME\]/CordovaLib**\) à partir d'un code JavaScript.

### ./resources

Ce dossier contient les différentes icônes de l'application et le splashscreen \(image au chargement de l'application\). 

### ./src/

C'est à l'intérieur que l'on retrouve le code de l'application à proprement. Lorsque l'on voudra rajouter de nouveaux écrans, de la logique métier,...c'est ici que cela se passera.

On retrouve du code écrit en TypeScript \(nous en reparlerons en détails au [chapitre 6](/chap6)\) dont l'extension de fichiers est **.ts**.

On retrouve aussi du htlm, du css,...

> **Ecran Mobile = 1 Fichier .ts + 1 Fichier .html + 1 Fichier .scss**

le fichier **src/app/app.module.ts** est le point d'entrée métier de notre application.

```js
@NgModule({
  declarations: [MyApp, ContactPage, HomePage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, ContactPage, HomePage],
  providers: []
})
export class AppModule {}
```

C'est dans ce fichier que l'on décide quelle composant \(ici MyApp\) sera le composant principal. On expliquera ces notions de composants dans le [chapitre 8](/chap8).

Dans le [chapitre suivant](/chap4), nous allons apprendre à customiser notre application pour qu'elle soit un peu plus à notre image.Mais en attendant, exerçons-vous un peu.

### ./src/index.html

> C'est l'entrée principale du projet. Il faut se rappeler q'une application Hybride utilise la technologie WebView du téléphone qui se comporte alors comme un mini-navigateur à l'intérieur duquel on peut afficher un site web, qui est votre projet.

A l'intérieur  de ce fichier, Ionic va aller chercher le tag **&lt;ion-app&gt;** à l'intérieur duquel vos différents écrans seront chargés.

```js
<ion-app></ion-app>
```

On retrouve également du code javascript, généré par Ionic et qu'il ne sera pas nécessaire de modifier :

```js
<!-- Ionic's root component and where the app will load -->
<ion-app></ion-app>

<!-- The polyfills js is generated during the build process -->
<script src="build/polyfills.js"></script>

<!-- The vendor js is generated during the build process
     It contains all of the dependencies in node_modules -->
<script src="build/vendor.js"></script>

<!-- The main bundle js is generated during the build process -->
<script src="build/main.js"></script>
```



### tsconfig.json et tslint.json

Ces fichiers sont utilisé par TypeScript et décrivre notamment la manière dont celui-ci doit être compilé. Vous n'aurez pas nécessairement de les configurer vous-même, les valeurs par défaut étant suffisantes.

### ./www

Ce dossier, qui est auto-généré, contient la version web de votre application mobile. C'est grâce à ce dossier que vous pouvez visualer l'application depuis un navigateur.

