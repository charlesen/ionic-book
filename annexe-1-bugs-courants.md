---
description: >-
  Listing de bugs couramment rencontrés dans le cadre du développement d'une
  application Ionic
---

# Annexe 1 : Bugs courants et solutions

Vous trouverez dans cet annexe tout un ensemble de bugs couramment rencontrés, mais aussi leurs solutions. Cette liste n'est évidemment pas exhaustive, mais permet de cibler la plupart des exceptions bloquantes durant la phase de développement et de compilation.

## **Problème : webpackJsonp not found**

### **Solution**

**\(**[**https://forum.ionicframework.com/t/webpackjsonp-not-found-when-running-ionic-starter-aws/97458/3**](https://forum.ionicframework.com/t/webpackjsonp-not-found-when-running-ionic-starter-aws/97458/3)**\)  
**

dans le fichier index.html, ajouter le fichier **build/vendor.js**:

```js
<!-- The polyfills js is generated during the build process -->
<script src="build/polyfills.js"></script>


<!-- all code from node_modules directory is here -->
<script src="build/vendor.js"></script> //<-- Ajouter ici !

<!-- The bundle js is generated during the build process -->
<script src="build/main.js"></script>
```

Pensez redemarrer l'application :

```bash
$ ionic serve -lc
```

Si l’erreur persiste, pensez à mettre à jour app-script \(la dernière version\) :

```bash
$ npm install @ionic/app-scripts@latest --save-dev
```



## **Problème : Build –prod enoent error**

### **Solution**

**Mettre à jour @ionic/app-scripts**

```
$ npm install @ionic/app-scripts@latest --save-dev
```

## **Problème : Error: ENOENT**

**no such file or directory, open \*www/build/0.main.js.map in undefined at line undefined, col undefined, pos undefined at BuildError.Error \(native\)  
**

**Solution :  
**Ce bug apparait quand vous souhaitez livrer votre application en prod avec la commande ionic package build…

Le problème vient de source MAP, utile en developpement, mais qu’il faut désactiver lorsque l’on souhaite passer en prod

Dans le fichier **package.json**, il faut supprimer la clé : **ionic\_generate\_source\_map  
**

## **2.4. Problème : TypeError: Cannot read property 'substr' of undefined**

### **Détails **

Ce bug apparait généralement Lorsque vous essayez de livrer votre application ou simplement la compiler \(build\).

```
source-map/lib/source-node.js:95
varcode=nextLine.substr(0,mapping.generatedColumn -
^
TypeError:Cannotread property'substr'ofundefined
```

### **Solution**

Le problème apparait surtout quand vous avez déclaré deux composants/pages/module dans le même dossier \(Par exemple une page de Dialogue ou modal à l'intérieur d'une page classique\). 

```
# Page home
.src/pages/home/home/home.ts
.src/pages/home/home/home.scss
.src/pages/home/home/home.html


# Modal
.src/pages/home/home/modal/modal.ts
```

Il faut donc séparer les composants et les définir chacun dans un dossier comme ceci : 

```
$ ionic g page modal
```

Vous devriez vous retrouver avec la nouvelle arborescence suivante : 

```

# Page home
.src/pages/home/home/home.ts
.src/pages/home/home/home.scss
.src/pages/home/home/home.html


# Page modal
.src/pages/modal/modal/modal.ts
.src/pages/modal/modal/modal.scss
.src/pages/modal/modal/modal.html



```

## **Problème : A problem occurred configuring root project 'android'**

### **Details**

```bash
Failed to install the following SDK components:
[Android SDK Platform 26]
The SDK directory (/opt/android-sdk) is not writeable,
please update the directory permissions.
```

### **Solution**

Le problème apparait lorsque vous souhaitez créer votre paquet Android avec Ionic update. Pour le résoudre, passer à une version inférieur d’Android ou supérieur. La plupart il s’agit de passer à une version inférieur \(Modifier les fichierspackage.jsonetconfig.xml\). Ex : 6.2.3 vers 6.2.0.**  
**

## **Superposition de la barre d’état avec l'entête de l’application**

### **Solution 1**

Dans le fichierapp.component.ts, modifier la méthodeinitializeAppet ajouter la ligne suivante :

```bash
this.statusBar.overlaysWebView(false);
```

### **Solution 2**

Editer le fichier **confix.xml **:

```js
<platformname="ios">
<preferencename="StatusBarOverlaysWebView"value="false"/>
</platform>
```



Voir la solution détaillée ici : [**https://ionicframework.com/docs/native/status-bar/**](https://ionicframework.com/docs/native/status-bar/)



## **Ionic WKWebView**

### **Requetes HTTP ne passent pas**

### Solution 

* Utiliser la version native Ionic de HTTP\(@ionic-native/http\) : [https://ionicframework.com/docs/native/http/](https://ionicframework.com/docs/native/http/)

* Configurer le CORS côté serveur pour accepter les requetes provenant [http://localhost:8080](http://localhost:8080)

* Repasser à l’ancien WebView

**  
**

Voir la solution détaillée ici : 

* [**https://blog.ionicframework.com/wkwebview-for-all-a-new-webview-for-ionic/**](https://blog.ionicframework.com/wkwebview-for-all-a-new-webview-for-ionic/)

* [**https://ionicframework.com/docs/wkwebview/**](https://ionicframework.com/docs/wkwebview/)

**  
**

## **Failed to find Build Tools revision XX.X.X**

### **Solution 1 : **Mettre à jour Android Build Tools

```bash
$ android list sdk -a | grep "Android SDK Platform-tools"(Un numéro est à récupérer au début)
$ android update sdk -a -u -t NUMERO_PRECEDENT
```

**Source :**[**https://stackoverflow.com/questions/36683726/failed-to-find-build-tools-revision-23-0-1**](https://stackoverflow.com/questions/36683726/failed-to-find-build-tools-revision-23-0-1)



### Solution 2 : **Utiliser le SDK Manager**

```bash
$ $ANDROID_HOME/tools/bin/sdkmanager "build-tools;26.X.X""platforms;android-26"
```

  


