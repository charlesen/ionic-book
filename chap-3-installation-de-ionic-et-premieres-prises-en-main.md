# Chap 3 - Installation de Ionic et première prise en main

Ionic utilise un certain nombre d'outils permettant de créer rapidement une application mobile. Pris séparement, ils sont plus ou moins efficace, voir indépendant, mais mis en ensemble, ils sont d'une redoutable efficacité.

Parmi ces outils nous pouvons citer principalement :

* **Ionic CLI** : c'est le couteau suisse de Ionic, un en de fonction disponible en ligne de commandes pour créer une application, la compiler, la déployer,...

* **Apache Cordova** : un framework open-source développé par la Fondation Apache. Il permet de créer des applications pour différentes plateformes en HTML, CSS et JavaScript.

* **NodeJS** : est un logiciel permettant de développer et d’exécuter du code JavaScript côté serveur, contrairement à ce qu’on a l’habitude de voir avec le javascript côté client.

* **NPM** : le gestionnaire de paquet de NodeJS

* **Angular** : un framework Javascript développé par Google

* **TypeScript** : un langage de programmation libre et open source développé par Microsoft qui a pour but d’améliorer et de sécuriser la production de code JavaScript.

* **SASS** : un langage de génération de feuilles de style \(CSS dynamique\)

* ...

## NodeJS et NPM

### NodeJS en bref

![](/assets/1200px-Node.js_logo.svg.png)

De puis son commencement, JavaScript, a été, comme vous le savez très certainement, est un langage dit côté client. Mais les choses ont quelque peu évolué avec NodeJS : cette technologie permet en effet d'executer du code écrit en JavaScript, aussi bien sur un navigateur \(côté client\), que côté serveur, tout comme des langages comme le Python ou encore le PHP.

De plus, NodeJS, à l'instar de Ionic, est Open Source, gratuit et disponible pour différentes plateformes \(Windows, Linux, Unix, Mac OS,...\)

### NPM : Node Package Manager

![](/assets/npm.png)

Comme son nom peut le suggérer, NPM est le gestionnaire de packet de NodeJS, qui étant très modulaire, voit son ecosystème  constamment enrichie par des modules développés par les membres de sa large communauté.

### Installation

#### Windows

Pour installer NodeJS, il suffit simplement d'aller à l'adresse : [https://nodejs.org/en/download/](https://nodejs.org/en/download/), de télécharger le gestionnaire d'installation au format **.msi** et se laisser guider. Le gestionnaire installera également NPM.

Ouvrez un invite de commande en saisissant Windows + R, puis cmd, et depuis cet invite, saisir :

```
node -v
```

Vous devriez voir s'afficher la version actuelle de NodeJs.

#### Mac OS

L'installation sous Mac OS est à peu près la même que sous Windows car il vous suffit de cliquer sur la version Node correspondant à cet OS. D'ailleurs en visitant simplement le site [https://nodejs.org/en/download/](https://nodejs.org/en/download/), une version adaptée à votre  système d'exploitation vous sera proposée automatiquement.

#### Linux \(Ubuntu\)

sous linux et en particulier Ubuntu, il vous suffit de saisir les commandes suivantes depuis un invite de commandes :

```
$ sudo apt-get update
$ sudo apt-get install nodejs npm
```

une fois l'installation effective, il faut encore créer les liens symboliques suivants :

```
$ sudo ln -s /usr/bin/nodejs /usr/local/bin/node
$ sudo ln -s /usr/bin/npm /usr/local/bin/npm
```

Pour vérifier que tout s'est bien passé, il vous suffit de saisir la commande suivante qui vous retournera la version actuelle de Node :

```
$ node -v

v8.11.1
```

## Ionic CLI et Cordova

Une fois Node et NPM installés, le reste se passera en ligne de commande. Ouvrez donc votre terminal préféré et saisissez les commandes suivantes pour installer Ionic et Cordova :

```
$ npm install -g ionic cordova
```

Le paramètre _"-g"_ permet une installation global de ces outils. De cette manière, vous n'aurez pas besoin d'être dans un repertoire particulier pour utiliser les commandes **ionic** ou **cordova**.

Avant d'aller plus loin, il sera peut etre nécessaire d'installer d'autres logiciels comme le SDK de Java ou celui d'Android. Si ces logiciels sont déjà installé, vous pourrez directement passer à la suite, sinon, suivez le guide.

## Autres utilitaires

### Java SDK

#### Windows

Pour installer le SDK de Java sous Windows, il vous suffit de visiter le site : [http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) et de choisir le fichier adapté à votre système d'exploitation \(32 ou 64 bits\)

#### Mac OS et Linux

##### Mise à jour des dépots

```
$ sudo add-apt-repository ppa:openjdk-r/ppa
$ sudo apt-get update
```

Installation d'OpenJDK

```
sudo apt-get install openjdk-8-jdk
```

### Android SDK

La meilleur façon d'installer le SDK d'Android est encore d'installer Android Studio. Pour ce faire, rien de plus simple, il suffit de visiter le site [https://developer.android.com/studio/index.html\#downloads](https://developer.android.com/studio/index.html#downloads) et de télécharger le paquet associé à votre OS.

#### Windows

Une fois le téléchargement effectué, vous n'aurez plus qu'à lancer l'installation en cliquant sur le fichier au format **.exe **et suivre le setup. L'installation du SDK se fera en même temps.

Voilà, c'est tout.

#### Mac OS

1. Lancer l'installation en cliquant sur le fichier au format **.dmg** téléchargé précédemment.
2. Glisser-déposer \(Drag-n-drop\) ensuite Android Studio dans le dossier Applications
3. Le setup devrait ensuite finaliser l'installation du SDK

Voilà.

#### Linux

1. Décompresser le fichier **.zip** téléchargé précédemment dans un dossier approprié. Je vous propose le dossier **/opt/** de manière à le partager entre les différents acteurs de votre OS.
2. Ouvrez un invite de commande \(CTRL + ALT + T\) et executer le fichier **/opt/android-studio/bin/studio.sh**. 
3. Suivez le setup

Si votre OS est une machine 64-bit, vous aller devoir installer quelques dépendances logicielles :

```
$ sudo apt-get install libc6:i386 libncurses5:i386 libstdc++6:i386 lib32z1 libbz2-1.0:i386
```

### Xcode \(Mac OS uniquement\)

Pour installer Xcode, il vous suffit de visiter l'url suivante [https://developer.apple.com/xcode/](https://developer.apple.com/xcode/) et de cliquer sur **"Download"**.

### Git

Ionic utilise le gestionnaire de dépôt Git dans son workflow de développement actuel. Pour l'installer, rien de plus simple, il vous suffit d'aller sur la page de téléchargement suivante : [https://git-scm.com/downloads](https://git-scm.com/downloads) et choisir le paquet correspondant à votre OS.

Sous Linux, il est également possible de l'installer en saisissant simplement la commande :

```
$ apt install git
```

## Installation via un script Bash \(Ubuntu\)

Un script trouvé sur github[^1] , et que j'ai un peu adapté, fait assez bien le travail, car il vous permet d'installer tous ces utilitaires via un seul fichier bash.

```bash
#!/bin/bash
# Ubuntu Developer Script For Ionic Framework
# Created by Nic Raboy
# http://www.nraboy.com
#
#
# Télécharge et configure les logiciels suivants :
#
#   Java JDK
#   Apache Ant
#   Android
#   Apache Cordova
#   Ionic Framework
#   Gradle

HOME_PATH=$(cd ~/ && pwd)
INSTALL_PATH=/opt
ANDROID_SDK_PATH=/opt/android-sdk
NODE_PATH=/opt/node
GRADLE_PATH=/opt/gradle

# x86_64 ou i686
LINUX_ARCH="$(lscpu | grep 'Architecture' | awk -F\: '{ print $2 }' | tr -d ' ')"

# Android Linux SDK pour les architectures x64 et x86
ANDROID_SDK_X64="http://dl.google.com/android/android-sdk_r24.4.1-linux.tgz"
ANDROID_SDK_X86="http://dl.google.com/android/android-sdk_r24.4.1-linux.tgz"


# Gradle
GRADLE_ALL="https://services.gradle.org/distributions/gradle-2.9-all.zip"

if [ "$LINUX_ARCH" == "x86_64" ]; then
    # Add i386 architecture
    dpkg --add-architecture i386
fi

# Mise à jour des dépots Ubuntu
apt-get update

cd ~/Desktop

if [ "$LINUX_ARCH" == "x86_64" ]; then

    wget -c "$ANDROID_SDK_X64" -O "android-sdk.tgz" --no-check-certificate
    wget -c "$GRADLE_ALL" -O "gradle.zip" --no-check-certificate

    tar zxvf "android-sdk.tgz" -C "$INSTALL_PATH"
    unzip "gradle.zip"
    mv "gradle-2.9" "$INSTALL_PATH"

    cd "$INSTALL_PATH" && mv "android-sdk-linux" "android-sdk"
    cd "$INSTALL_PATH" && mv "gradle-2.9" "gradle"

    # Dépendances pour les architecture x86
    apt-get install -qq -y libc6:i386 libgcc1:i386 libstdc++6:i386 libz1:i386

else

    wget -c "$ANDROID_SDK_X86" -O "android-sdk.tgz" --no-check-certificate
    wget -c "$GRADLE_ALL" -O "gradle.zip" --no-check-certificate

    tar zxvf "android-sdk.tgz" -C "$INSTALL_PATH"
    unzip "gradle.zip"
    mv "gradle-2.9" "$INSTALL_PATH"

    cd "$INSTALL_PATH" && mv "android-sdk-linux" "android-sdk"
    cd "$INSTALL_PATH" && mv "gradle-2.9" "gradle"

fi

cd "$INSTALL_PATH" && chown root:root "android-sdk" -R
cd "$INSTALL_PATH" && chmod 777 "android-sdk" -R

cd ~/

# MAJ du PATH de manière persistante
echo "export PATH=\$PATH:$ANDROID_SDK_PATH/tools" >> ".profile"
echo "export PATH=\$PATH:$ANDROID_SDK_PATH/platform-tools" >> ".profile"
echo "export PATH=\$PATH:$GRADLE_PATH/bin" >> ".profile"

# MAJ du PATH de manière temporaire le temps de l'installation
export PATH=$PATH:$ANDROID_SDK_PATH/tools
export PATH=$PATH:$ANDROID_SDK_PATH/platform-tools
export PATH=$PATH:$GRADLE_PATH/bin

# Installation du JDK, Apache Ant et Git
apt-get -qq -y install default-jdk ant
apt-get install git

# MAJ de la variable d'environnement JAVA_HOME
export JAVA_HOME="$(find /usr -type l -name 'default-java')"
if [ "$JAVA_HOME" != "" ]; then
    echo "export JAVA_HOME=$JAVA_HOME" >> ".profile"
fi

# Installation d'Apache Cordova et du framework Ioni
npm install -g cordova
npm install -g ionic

cd "$INSTALL_PATH" && chmod 777 "node" -R
cd "$INSTALL_PATH" && chmod 777 "gradle" -R

# Suppression des fichiers d'installation
cd ~/Desktop && rm "android-sdk.tgz"
cd ~/Desktop && rm "nodejs.tgz"
cd ~/Desktop && rm "gradle.zip"

echo "----------------------------------"
echo "Redémarrer votre session Ubuntu pour finaliser l'installation..."
```

Copier le code ci-dessus dans fichier install\_ionic.sh puis executer le :

```bash
$ chmod u+x install_ionic.sh
$ ./install_ionic.sh
```

Redémarrez ensuite votre machine.

Voilà, vous y êtes. On va donc pouvoir créer notre première application mobile.

## Première application Ionic

[^1]: Ubuntu Ionic Installer : [https://github.com/nraboy/ubuntu-ionic-installer/blob/master/ubuntu\_ionic\_installer.sh](https://github.com/nraboy/ubuntu-ionic-installer/blob/master/ubuntu_ionic_installer.sh)

