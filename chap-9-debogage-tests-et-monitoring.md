# Chap 9 - Tests et débogages avancés



Une fois développée, votre application mobile ne sera pérenne dans le temps que grâce à des tests poussés et une bonne gestion des bugs. Il se peut qu'un certain nombre de petites anomalies soit présentes à votre insu apres que vous ayez de développer, mais ce n'est pas bien grave si le gros des soucis est corriger en amont : vos utilisateurs cibles vous diront merci, et surtout, vous ne décevrez pas.



## Tester son application mobile

### Depuis votre navigateur

C'est la manière la plus simple pour tester votre application et comme nous l'avons il suffit de saisir la commande "serve" pour lancer votre application mobile dans un navigateur :

```
$ ionic start -lc
```

Pour information :

* **l :** ce paramètre permet d'afficher votre application dans le mode lab, avec la possibilité de switcher entre les vues Android, iOS ou d'avoir les deux en même temps
* **c :** permet d'afficher les logs depuis la console \(terminal\)



### Depuis Ionic View

Ionic View est une application mobile qui vous permettra de visualiser vos projets Ionic après les avoir "pushé" sur le cloud à partir de votre compte Ionic PRO. Nous y reviendrons plus en détails au [chapitre 10](/chap-10-ionic-et-son-ecosysteme-cloud-lab-et-creator.md).



L'application Ionic View n'existe actuellement que pour Android et iOS[^1]. Pour commencer à utiliser Ionic View, il vous suffit de le télécharger sur un des stores



### Depuis l'emulateur



## Debogages

C'est surement la partie la moins drôle quand on développe en général, mais fort heureusement avec Ionic et Angular les choses sont un peu moins douloureuse, la plupart des bugs étant explicites et dans certains cas on indique même ce qu'il faut faire.

Faisons le tour de quelques méthodes qui vont vous aider à debugger efficacement votre application mobile.





[^1]: L'application Ionic View pour iOS est à l'heure où j'écris ces quelques lignes indisponible sur l'Apple Store, ayant été désactivé par la plateforme qui lui propose le fait d'être une application permettant d'executer d'autres applications. Selon Apple, chaque application doit disposer de son propre contexte d'execution et ce que fait Ionic View enfreindrait sa politique interne.

