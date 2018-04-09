# Chap 3 - Installation de Ionic et premières prises en main

Ionic utilise un certain nombre d'outils permettant de créer rapidement une application mobile. Pris séparement, ils sont relativement efficace, mais mis en ensemble, ils sont d'une redoutable efficacité.

Parmi ces outils nous pouvons citer principalement Ionic CLI, Cordova, Node et NPM.

## NodeJS et NPM

### Qu'est ce que NodeJS ?

![](/assets/1200px-Node.js_logo.svg.png)

De puis son commencement, JavaScript, a été, comme vous le savez très certainement, est un langage dit côté client. Mais les choses ont quelque peu évolué avec NodeJS : cette technologie permet en effet d'executer du code écrit en JavaScript, aussi bien sur un navigateur \(côté client\), que côté serveur, tout comme des langages comme le Python ou encore le PHP.

De plus, NodeJS, à l'instar de Ionic, est Open Source, gratuit et disponible pour différentes plateformes \(Windows, Linux, Unix, Mac OS,...\)

### NPM : Node Package Manager

![](/assets/npm.png)

Comme son nom peut le suggérer, NPM est le gestionnaire de packet de NodeJS, qui étant très modulaire, voit son ecosystème  constamment enrichie par des modules développés par les membres de sa large communauté.

### Installation

#### Windows

Pour installer NodeJS, il suffit simplement de visiter l'adresse : [https://nodejs.org/en/download/](https://nodejs.org/en/download/) et de télécharger de gestionnaire d'installation au format **.msi** et se laisser guider. Le gestionnaire installera également NPM.

#### Linux \(Ubuntu\)

sous linux et en particulier Ubuntu, il vous suffit, depuis un invite de commande, de saisir :

```
$ sudo apt-get update
$ sudo apt-get install nodejs npm
```

une fois l'installation effective, il faut encore créer les liens symboliques suivants :

```
$ sudo ln -s /usr/bin/nodejs /usr/local/bin/node
$ sudo ln -s /usr/bin/npm /usr/local/bin/npm
```

Pour vous vérifier que tout s'est bien passé, il vous suffit de saisir la commande suivante qui vous retournera la version actuelle de Node

```
$ node -v

v8.11.1
```



#### Mac OS

Ionic CLI et Cordova

