## Démarrage de l'application DuckCoin

### Création du projet

Comme nous l'avons vu, il est possible de créer une application mobile à partir d'un dépôt git. C'est ce que nous allons faire pour l'application DuckCoin.

Ouvrez donc votre terminal et saisissez les commandes suivantes :

```
$ ionic start duckcoin https://github.com/charlesen/duckcoin-starter
```

![](/assets/ionic_screen_2.png)

Démarrez ensuite l'application avec la commande serve :

```
$ cd duckcoin
$ ionic serve -lc
```

![](/assets/screen_app1.png)

### Struction du projet

Faisons un peu le tour de l'anatomie d'un projet type sous Ionic.

### ./src/index.html

> C'est l'entrée principale du projet. Il faut se rappeler q'une application Hybride utilisation la technologie WebView du téléphonequi se comporte comme un mini-navigateur à l'intérieur duquel on peut afficher un site web, qui est votre projet.

A l'intérieur  de ce fichier, Ionic va aller chercher le tag **&lt;ion-app&gt;** à l'intérieur duquel vos différents écrans seront chargés.

```js
<ion-app></ion-app>
```

On retrouve également du code javascript, généré par Ionic et qu'il ne sera pas nécessaire de modifier :

```js
<!-- Ionic's root component and where the app will load -->
<ion-app></ion-app>

<!-- The polyfills js is generated during the build process -->
<script src="build/polyfills.js"></script>

<!-- The vendor js is generated during the build process
     It contains all of the dependencies in node_modules -->
<script src="build/vendor.js"></script>

<!-- The main bundle js is generated during the build process -->
<script src="build/main.js"></script>
```

## ./src/

C'est à l'intérieur que l'on retrouve le code de l'application à proprement. Lorsque l'on voudra rajouter de nouveaux écrans, de la logique métier,...c'est ici que cela se passera.

On retrouve du code écrit en TypeScript \(nous en reparlerons en détails au [chapitre 6](/chap6)\) dont l'extension de fichiers est **.ts**.

On retrouve aussi du htlm, du css,...

> **Ecran Mobile = 1 Fichier .ts + 1 Fichier .html + 1 Fichier .scss**

le fichier **src/app/app.module.ts** est le point d'entrée métier de notre application.

```js
@NgModule({
  declarations: [MyApp, ContactPage, HomePage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, ContactPage, HomePage],
  providers: []
})
export class AppModule {}
```

C'est dans ce fichier que l'on décide quelle composant \(ici MyApp\) sera le composant principal. On expliquera ces notions de composants dans le [chapitre 8](/chap8).

Dans le [chapitre suivant](/chap4), nous allons apprendre à customiser notre application pour qu'elle soit un peu plus à notre image.Mais en attendant, exerçons-vous un peu.

