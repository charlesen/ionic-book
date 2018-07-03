## Ionic Cloud \(PRO\)

Nous avons déjà parlé et avons même créé un compte au [chapitre 3](/chap3).

Ionic Cloud va vous permette de compiler votre projet sans devoir vous inquiéter de l'installation des packages nécessaires pour chaque plateforme cible \(Android, iOS\).

Pour pusher votre application sur le cloud, et si vous aviez choisi à la création du projet de l'héberger sur Ionic Pro, il vous suffira de faire :

```bash
$ git add .
$ git commit -m "Mon Application V 0.0.1"
$ git push ionic master
```

Il vous sera peut être demandé de vous authentifier si ce n'est déjà fait.

Si par contre vous aviez choisi d'héberger votre projet sur Github, vous devrez simplement pusher vers votre branche **origin** :

```bash
$ git add .
$ git commit -m "Mon Application V 0.0.1"
$ git push origin master
```

Si jamais vous souhaitez ne plus héberger votre application sur Github et tout rapatrier sur Ionic Cloud, il vous suffit de faire :

```bash
$ ionic link
? App ID 20e8461e is already set up with this app. Would you like to link it to a different app? Yes
```

Choisir **"yes"** à la question _**"? App ID UNEAPPID is already set up with this app. Would you like to link it to a different app?"**_

Choisissez ensuite Ionic Pro et l'outil s'occupera du reste. Puis dans votre espace Ionic, déconnectez votre application du service Git :![](/assets/ionic_pro_git.png)

Url : [https://dashboard.ionicframework.com](https://dashboard.ionicframework.com)

