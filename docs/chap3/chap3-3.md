## Autres utilitaires

### Java SDK

#### Windows et Mac OS

Pour installer le SDK de Java sous Windows et Mac, il vous suffit de visiter le site de l'entreprise Oracle, qui détient et maintient le logiciel : [http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) et de choisir le fichier \(**.exe** pour Windows ou **.dmg** pour MacOS\) adapté à votre machine \(32 ou 64 bits\)

#### Linux

##### Mise à jour des dépôts

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
2. Ouvrez un invite de commandes \(CTRL + ALT + T\) et executer le fichier **/opt/android-studio/bin/studio.sh**.
3. Suivez le setup

Si votre OS est une machine 64-bit, vous aller devoir installer quelques dépendances logicielles :

```
$ sudo apt-get install libc6:i386 libncurses5:i386 libstdc++6:i386 lib32z1 libbz2-1.0:i386
```

### Xcode, ios-sim et ios-deploy \(Mac OS uniquement\)

Pour installer **Xcode**, il vous suffit de visiter l'url suivante [https://developer.apple.com/xcode/](https://developer.apple.com/xcode/), de choisir la version correspondant à votre Mac \(voir le lien suivant : [https://en.wikipedia.org/wiki/Xcode\#Version\_comparison\_table](https://en.wikipedia.org/wiki/Xcode#Version_comparison_table)\) et de cliquer sur **"Download"**.

Pour l'émulateur **ios-sim**, depuis votre terminal, saisissez la commande suivante :

```bash
$ sudo npm install -g ios-sim
$ ios-sim –version # Pour vérifier que tout s'est bien passé
```

On installe ensuite ios-deploy nécessaire pour tester votre application à partir de votre ipHOne par exemple :

```bash
$ sudo npm install -g ios-deploy
```

Si vous êtes sur une version de MacOS supérieur ou égale à El Capitain, il vous faudra rajouter le paramètre **--unsafe-perm**, sinon la commande précédente renverra un bug :

```bash
$ sudo npm install -g ios-deploy --unsafe-perm=true
```

### Git

Ionic utilise le gestionnaire de dépôt Git dans son workflow de développement actuel. Pour l'installer, rien de plus simple, il vous suffit d'aller à la page de téléchargement suivante : [https://git-scm.com/downloads](https://git-scm.com/downloads) et choisir le paquet correspondant à votre OS.

Sous Linux, il est également possible de l'installer en saisissant simplement la commande :

```
$ apt install git
```

### Installation via un script Bash \(Ubuntu\)

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

### Editeur de code

Vous pouvez bien évidemment utiliser l'éditeur de votre choix, mais s'il vous vient l'envie de tester autre chose, je vous propose ici deux éditeurs de code intéressants pour développer avec Ionic.

#### Visual Studio Code

![](/assets/vs_code.png)

Éditeur de code extensible développé par Microsoft pour Windows, Linux et OS X. C'est l'éditeur que je recommande le mieux, car il vous facilitera énormément la vie, grâce notamment à des composants proposés par la communauté des développeurs Ionic à installer directement dans l'éditeur.

**Télécharger :** [https://code.visualstudio.com/](https://code.visualstudio.com/)

#### Atom

![](/assets/atom-logo.png)

Éditeur de texte libre pour OS X, GNU/Linux et Windows développé par GitHub.

**Télécharger :** [https://atom.io/](https://atom.io/)

