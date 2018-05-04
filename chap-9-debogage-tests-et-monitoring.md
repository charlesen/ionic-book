# Chap 9 - Tests et débogages avancés

Une fois développée, votre application mobile ne sera pérenne dans le temps que grâce à des tests poussés et une bonne gestion des bugs. Il se peut qu'un certain nombre de petites anomalies soit présentes à votre insu apres que vous ayez de développer, mais ce n'est pas bien grave si le gros des soucis est corriger en amont : vos utilisateurs cibles vous diront merci, et surtout, vous ne décevrez pas.

## Tester son application mobile

### Depuis votre navigateur

C'est la manière la plus simple pour tester votre application et comme nous l'avons il suffit de saisir la commande "serve" pour lancer votre application mobile dans un navigateur :

```bash
$ ionic start -lc
```

Pour information :

* **l :** ce paramètre permet d'afficher votre application dans le mode lab, avec la possibilité de switcher entre les vues Android, iOS ou d'avoir les deux en même temps
* **c :** permet d'afficher les logs depuis la console \(terminal\)

### Depuis Ionic View

Ionic View est une application mobile qui vous permettra de visualiser vos projets Ionic après les avoir "pushé" sur le cloud à partir de votre compte Ionic PRO. Nous y reviendrons plus en détails au [chapitre 10](/chap-10-ionic-et-son-ecosysteme-cloud-lab-et-creator.md).

L'application Ionic View n'existe actuellement que pour Android et iOS[^1]. Pour commencer à utiliser Ionic View, il vous suffit de le télécharger sur un des stores :

* Google Play Store : [https://play.google.com/store/apps/details?id=com.ionicframework.view](https://play.google.com/store/apps/details?id=com.ionicframework.view)
* Apple Store : [https://itunes.apple.com/us/app/ionic-view-test-share-ionic-apps/id1271789931](https://itunes.apple.com/us/app/ionic-view-test-share-ionic-apps/id1271789931)

Pour visualiser votre application, vous devez donc lancer la commande suivante :

```bash
$ git push ionic master
```

Une fois le push effectué, ouvrez Ionic View et testez votre application.

![](/assets/ionic_view_screen_1.png)

### Depuis Ionic Dev App

* Google Play Store : [https://play.google.com/store/apps/details?id=com.ionicframework.view](https://play.google.com/store/apps/details?id=io.ionic.devapp&hl=en)

* Apple Store : [https://itunes.apple.com/us/app/ionic-view-test-share-ionic-apps/id1271789931](https://itunes.apple.com/us/app/ionic-devapp/id1233447133?ls=1&mt=8)

C'est surement l'une de mes méthodes favorites. Grâce à cette application vous allez pouvoir tester votre application en temps réel. En effet, en lançant simplement la commande **ionic serve -c**, l'application Ionic Dev App vous permet  ensuite de visualiser votre propre application, et tester ainsi tout un ensemble de composants natifs.

Seule condition, il faut que votre ordinateur soit connecté au même réseau que votre smartphone.

L'avantage de cette application par rapport à Ionic view est que vous n'avez pas besoin de pusher vos développement sur Ionic PRO. Il vous suffit simplement de rédemarrer votre instance en local pour voir les changements s'appliquer sur Ionic Dev app.

![](/assets/ionic_dev_app.png)

### Depuis l'emulateur

Pour lancer votre application depuis un émulateur, il suffit de lancer la commande suivante

```
$ ionic cordova run android
```

La commande va d'abord vérifier si un appareil mobile est connecté à l'ordinateur \(voir partie suivante\), avant de lancer l'émulateur par défaut.

### Depuis votre appareil mobile

Commencez par brancher votre appareil mobile à l'aide d'un cable usb. Il faut ensuite modifier un peu la configuration de votre smartphone pour qu'il puisse communiquer avec votre ordinateur.

#### Android

Sur Android, il faut tout d'abord passer votre appareil en mode développeur. Pour ce faire, rien de plus simple il suffit d'aller dans :

```markdown
**Paramètres** > **A propos du téléphone** > **Informations sur le logiciel**.
```

Appuyez ensuite plusieurs fois sur le Numéro de version jusqu'à ce qu'un message vous indique que vous êtes désormais en mode développeur.

Une fois le mode développeur activé, il vous suffit d'aller dans :

```markdown
**Paramètres** > **Options de développement** > **Débogage USB**.
```

Puis, activez le débogage USB.

![](/assets/screen_debogage_usb.png)

J'ai effectué ces modifications depuis un Samsung Galaxy A5, mais les noms de menus restent à peu près les mêmes.

Il vous suffit ensuite de lancer la commande suivante et d'attendre bien patiemment le lancement \(quelques secondes\) :

```
$ ionic cordova run android


Built the following apk(s): 
	./platforms/android/app/build/outputs/apk/debug/app-debug.apk

ANDROID_HOME=/opt/android-sdk
JAVA_HOME=/usr/lib/jvm/default-java
No target specified, deploying to device '330045dab57053bf'.

none
Skipping build...

Built the following apk(s): 
	./platforms/android/app/build/outputs/apk/debug/app-debug.apk

Using apk: ./platforms/android/app/build/outputs/apk/debug/app-debug.apk

Package name: fr.duckcoin.mobile

LAUNCH SUCCESS

[OK] Your app has been deployed.
     Did you know you can live-reload changes from your app with --livereload?


```

Une fois que vous avez démarré votre, il est possible de la visualiser en même temps depuis votre navigateur Google Chrome. Pratique lorsque l'on se rend compte qu'un bug, qui n'apparaissait pas durant les tests sur le web, apparait subitement lorsque l'on passe sur mobile. On est pas toujours à l'abri de ce genre d'écart en les tests en local et ceux effectués sur une machine réelle.

Dans Chrome, ouvrez l'inspecteur \(F12\), puis cliquez sur le menu avec les trois petits point verticaux en haut à droite \(voir image ci-dessous\) et allez dans **More tools &gt; Remote devices**

![](/assets/screen_debug_remote_android.png)

Selectionnez votre appareil mobile et cliquez sur **Inspect** pour visualiser votre application

![](/assets/screen_debug_android_1.png)![](/assets/screen_debug_android_2.png)

cd

#### iOS



## Debogage de l'application

C'est surement la partie la moins drôle quand on développe en général, mais fort heureusement avec Ionic et Angular les choses sont un peu moins douloureuse, la plupart des bugs étant explicites et dans certains cas on indique même ce qu'il faut faire.

Faisons le tour de quelques méthodes qui vont vous aider à debugger efficacement votre application mobile.

### L'indétronable console.log\(\) et console.info\(\)

Vous avez surement du l'utiliser au moins une fois dans vos développements JavaScript.

La méthode de logging de l'objet Console vous permet d'afficher le contenu d'une variable, du texte, un message...bref, à peu près tout, de votre code source vers le navigateur web.

```
console.log("Ceci est un message à mon navigateur web...Mayday ! Mayday !")
```

Il est possible de jouer sur le type d'affichage

### Inspection du code source

La plupart des navigateurs dispose désormais d'un outil d'inspection de code source, disponible par exemple depuis la touche F12 ou clic-droit - **"Inspecter..."**.

![](/assets/screen_console_1.png)

Une application Ionic étant écrit en JavaScript, CSS et Html, vous n'aurez plus qu'à visualiser votre code et ajuster les choses au besoin : style CSS manquant ou non adapté, une image en 404,...

![](/assets/screen_console_2.png)

### Point d'arrêt \(Breakpoint\)

Il est également possible d'ajouter des points d'arrêts dans votre code source. Très pratique quand on se demande pour un bout de code ne fonctionne pas et que l'on souhaite avancer pas à pas jusqu'à trouver la source du problème.

Vous avez le choix d'ajouter ce point d'arrêt depuis votre navigateur ou alors depuis votre code source à l'aide du mot clé **"debugger"** :

```js
let maVariable = "Je suis une variable";
....

// L'execution du code prendra fin ici...Pour avancer, faites F10 sur Chrome
debugger;

if (maVariable) {
  alert(maVariable)
}
```

### Logs de la console + Gestionnaire d'erreurs Ionic

Ces deux élément, assez vous indique souvent d'où vient le problème et surtout comment le résoudre. Il est parfois nécessaire de redémarrer votre projet depuis la console pour la recompilation permette un retour de bug plus explicite, voir, dans de rares cas, corrige le bug.

![](/assets/bug_ionic.png)

![](/assets/ionic_bug_2.png)

## Exercez-vous

1\) Traquez tous les méchants bugs de votre application en utilisant une ou plusieurs des méthodes citées précédemment.

