## Ionic CLI et Cordova

Une fois Node et NPM installés, le reste se passera en ligne de commandes. Ouvrez donc votre terminal préféré et saisissez les commandes suivantes pour installer Ionic et Cordova :

```
$ sudo npm install -g ionic cordova
```

Le paramètre _**"-g"**_ permet une installation globale de ces outils. De cette manière, vous n'aurez pas besoin d'être dans un repertoire particulier pour utiliser les commandes **ionic** ou **cordova, **sauf pour des actions comme la compilation qui requiert d'être à l'intérieur d'un projet.

Ce paramètre implique aussi que vous devrez lancer les commandes précédentes en tant qu'Admin sous Windows \(clic-droit, démarrer l'invite de commande en tant qu'administrateur\) et que sous Linux, vous êtes obligé d'utiliser le _"sudo"_. Il bien sûr possible de se passer d'un "sudo" en bricolant un peu sa config npm[^2], mais cela dépasse l'objet de ce livre.

Avant d'aller plus loin, il sera nécessaire d'installer d'autres logiciels comme le SDK de Java ou celui d'Android. Si ces logiciels sont déjà installé, vous pourrez directement passer à la suite, sinon, suivez le guide. Ils nous aideront surtout durant la phase de compilation de nos projets vers les OS cibles \(Android, iOS,...\).

