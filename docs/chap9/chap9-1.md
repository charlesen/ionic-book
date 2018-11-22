## Tester son application mobile

### Depuis votre navigateur

C'est la manière la plus simple pour tester votre application et comme nous l'avons il suffit de saisir la commande "serve" pour lancer votre application mobile dans un navigateur :

```bash
$ ionic serve -lc
```

Pour information :

* **l :** ce paramètre permet d'afficher votre application dans le mode lab, avec la possibilité de switcher entre les vues Android, iOS ou d'avoir les deux en même temps
* **c :** permet d'afficher les logs depuis la console \(terminal\)

### Depuis Ionic Dev App

* Google Play Store : [https://play.google.com/store/apps/details?id=com.ionicframework.view](https://play.google.com/store/apps/details?id=io.ionic.devapp&hl=en)

* Apple Store : [https://itunes.apple.com/us/app/ionic-view-test-share-ionic-apps/id1271789931](https://itunes.apple.com/us/app/ionic-devapp/id1233447133?ls=1&mt=8)

C'est sûrement l'une de mes méthodes préférées. Grâce à cette application vous allez pouvoir tester votre application en temps réel. En effet, en lançant simplement la commande **ionic serve -c**, l'application Ionic Dev App vous permet  ensuite de visualiser votre propre application, et tester ainsi tout un ensemble de composants natifs.

Seule condition, il faut que votre ordinateur soit connecté au même réseau que votre smartphone.

L'avantage de cette application par rapport à Ionic view est que vous n'avez pas besoin de pusher vos développement sur Ionic PRO. Il vous suffit simplement de redémarrer votre instance en local pour voir les changements s'appliquer sur Ionic Dev app.

| ![](/assets/ionic_dev_app.png) | ![](/assets/ionic_devapp_2.png) |
| :--- | :--- |
| Ionic Dev App au chargement | Une fois l'application détectée |

### Depuis l'émulateur

Pour lancer votre application depuis un émulateur, il suffit de lancer la commande suivante

```
$ ionic cordova run android # ou 'ios' si vous ciblez cette plateforme et êtes sous Mac
```

La commande va d'abord vérifier si un appareil mobile est connecté à l'ordinateur \(voir partie suivante\), avant de lancer l'émulateur par défaut.

### Depuis votre appareil mobile

Commencez par brancher votre appareil mobile à l'aide d'un câble usb. Il faut ensuite modifier un peu la configuration de votre smartphone pour qu'il puisse communiquer avec votre ordinateur.

#### Android

Sur Android, il faut tout d'abord passer votre appareil en mode développeur. Pour ce faire, rien de plus simple il suffit d'aller dans :

```markdown
Paramètres > A propos du téléphone > Informations sur le logiciel
```

Appuyez ensuite plusieurs fois sur le Numéro de version jusqu'à ce qu'un message vous indique que vous êtes désormais en mode développeur.

Une fois le mode développeur activé, il vous suffit d'aller dans :

```markdown
Paramètres > Options de développement > Débogage USB
```

Puis, activez le débogage USB.

![](/assets/screen_debogage_usb.png)

Un message s'affichera pour vous demander de valider cette autorisation. Appuyez sur **OK** pour confirmer cette action.

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

Sélectionnez votre appareil mobile et cliquez sur **Inspect** pour visualiser votre application

![](/assets/screen_debug_android_1.png)![](/assets/screen_debug_android_2.png)

#### iOS

Il est également possible de tester votre application depuis votre smarphone iOS.

Il vous suffit de lancer votre projet depuis Xcode de la manière suivante :

```bash
$ open platforms/ios/Votre_Appli.xcodeproj
```

Si vous n'avez pas encore ajouté iOS comme plateforme cible, il n y aura pas de dossier platform/ios. Il vous suffira, pour l'avoir , de lancer la commane suivante :

```
$ ionic cordova platform add ios
```

Une fois votre projet ouvert dabs Xcode, connectez votre iPhone à votre Mac et acceptez de faire confiance à votre ordinateur si demandé. Puis à droite du bouton play, choissiez à partir de quelle appareil votre application sera lancée.

![](/assets/running_ios.png)

Par défaut, ce sont les emulateurs qui s'affichent, mais en cliquant sur la liste des devices, vous pourrez sélectionner votre appareil mobile fraichement connecté en USB.

Une fois la connection effectuée, il ne vous restera plus qu'à cliquer sur le bouton play pour démarrer vos tests ou alors de lancer la commande suivante :

```bash
$ ionic cordova run ios --device
```



