# Chap 10 - Ionic et son écosystème : Cloud, Lab, View et Creator

## Ionic Cloud \(PRO\)

Nous avons déjà parlé et avons même créé un compte au [chapitre 3](/chap-3-installation-de-ionic-et-premieres-prises-en-main.md).

Ionic Cloud va vous permette de compiler votre projet sans devoir vous inquieter de l'installation des packages nécessaires pour chaque plateforme cible \(Androi, iOS\).

Pour pusher votre application sur le cloud, et si vous aviez choisi à la création du projet de l'héberger sur Ionic Pro, il vous suffira de faire :

```bash
$ git add .
$ git commit -m "Mon Application V 0.0.1"
$ git push ionic master
```

Il vous sera peut être demandé de vous authentifier si ce n'est déjà fait.

Si par contre vous aviez choisi d'héberger votre projet sur Github, vous devrez simplement pusher vers votre branche **origin** :

```js
$ git add .
$ git commit -m "Mon Application V 0.0.1"
$ git push origin master
```

Url : [https://dashboard.ionicframework.com](https://dashboard.ionicframework.com)

## Ionic Lab

Il s'agit d'une vue spéciale de votre application sur un navigateur suite au lancement du projet depuis votre console. Vous avez la possibilité de tester le rendu de votre application pour iOS, Android et Windows Phone :

![](/assets/ionic_lab.png)

## Ionic View

C'est l'application qui vous permettra de tester d'autres applications. On peut aussi la configurer depuis Ionic PRO.

Url : [https://dashboard.ionicframework.com](https://dashboard.ionicframework.com)

Une fois l'application téléchargée, il vous suffit de l'ouvrir, de vous connecter avec vos idenfiants Ionci PRO, pour voir s'afficher vos différentes applications :

![](/assets/ionic_view_duck_1.png)![](/assets/ionic_view_duck_2.png)

Grâce au mecanisme de push avec Git, chaque mise à jour de code mettra aussi à jour votre application sur Ionic View.

L'onglet suivant vous permet de visualiser une application à partir de son identifiant ou de son QR Code :

![](/assets/ionic_view_duck_4.png)

Et le suivant permet la gestion de ses paramètres utilisateurs

![](/assets/ionic_view_duck_5.png)

## Ionic Creator

Creator est le logiciel _Wysiwyg_ qui va vous permettre de créer votre application, sans saisir de code. Un editeur en ligne vous est proposé, pour produire maquette, voir appli de production en quelques minutes.

![](/assets/screen_creator.png)

Une fois votre travail effectué, il est possible d'exporter le projet.

![](/assets/ionic_creator_3.png)

Certaines fonctionnalités ne sont pas disponibles pour la version gratuite.

Url : [https://creator.ionic.io](https://creator.ionic.io)

## Ionic market

Le market place de Ionic propose des plugins, templates ou du tout en un prêt à l'emploi. Pratique quand on a peu ou pas d'inspiration, ou quand ne souhaite juste pas réinventer la roue.

Url  : [https://market.ionicframework.com/](https://market.ionicframework.com/)

