## Customisation

### Attributs de style

Ionic met à disposition un ensemble d'attributs qui peuvent être utilisés sur n'importe quel élément pour de modifier du texte, le centrer ou encore gérer les marges. À la différence de Bootstrap où on fait usage de classes css \(row, col,...\), ici on utilisera plutôt des attributs.

```js
<h2 text-center>Un texte centré</h2>
```

| Attribut | Style CSS correspondant | Description |
| :--- | :--- | :--- |
| text-left | text-align: left | Aligne du texte à gauche |
| text-right | text-align:right | Aligne du texte à droite |
| text-start | text-align:start | Identique à text-left si la direction d'écriture va de gauche vers la droite et text-right si la direction est de droite vers la gauche. |
| text-end | text-align:end | Identique à text-right si la direction d'écriture est de gauche vers la droite et de text-left si la direction est de droite vers la gauche. |
| text-center | text-align:center | Centre le contenu |
| text-justify | text-align:justify | Justifie le contenu |

Une liste beaucoup plus exhaustive se trouve dans la documentation, qui est extrêmement bien faite [https://ionicframework.com/docs/theming/css-utilities/](https://ionicframework.com/docs/theming/css-utilities/)

On va pouvoir utiliser ces attributs directement dans nos pages. Centrons par exemple le h2 de la page d'accueil et justifions le contenu du texte qui le suit :

**src/pages/home/home.html**

```js
<ion-header>
  <ion-navbar color="duckcoin">
    <ion-title>Duckcoin</ion-title>
  </ion-navbar>
</ion-header>

<ion-content padding>
  <h2 text-center>La monnaie solidaire</h2> <!-- ICI -->
  <p text-justify> <!-- Et Là -->
    DuckCoin, c'est la monnaie qui rend aimable, redonne le sourire et change la face du monde.
    Elle a été faite pour des gens sympas, juste comme toi.
  </p>
  ...
</ion-content>
```

![](/assets/screen_home_5.png)

### Grille CSS responsive

Ionic propose également un système de grille css pour permettre une meilleur gestion de blocs de contenus. Il est assez similaire dans sa syntaxe à celui que propose Bootstrap.

```js
<h2>Profil utilisateur</h2>
<ion-grid>
  <ion-row>
    <ion-col col-lg-1>
      <img src="assets/imgs/logo.jpg"/>
    </ion-col>
    <ion-col>
      Charles E.
    </ion-col>
    <ion-col>
      Développeur Web et Mobile
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col>
      Intérêt pour la finance, la blockchain, les technologies mobiles et le O'tacos
    </ion-col>
  </ion-row>
</ion-grid>
```

![](/assets/screen_profile_5.png)

Pour plus de détails, merci de consulter la documentation correspondante : [https://ionicframework.com/docs/theming/responsive-grid/](https://ionicframework.com/docs/theming/responsive-grid/)

### Utilisation de SASS

Ionic est construit sur Sass \(Syntactically Awesome Stylesheets\), un langage de génération de feuilles de style, robuste et facile à prendre en main. En fait si vous savez déjà définir une feuille de style, ce langage ne vous choquera pas trop. Grâce à cette technologie embarquée dans Ionic, nous allons non seulement pouvoir définir des styles génériques pour notre application, qui pourront être utilisé à plusieurs endroits différents, mais nous pourrons également changer les styles par défaut des attributs et composants Ionic.

La définition ou la redéfinition de style css dynamique se fait depuis le fichier **src/theme/variables.scss** :

```js
// Named Color Variables
// --------------------------------------------------
// Named colors makes it easy to reuse colors on various components.
// It's highly recommended to change the default colors
// to match your app's branding. Ionic uses a Sass map of
// colors so you can add, rename and remove colors as needed.
// The "primary" color is the only required color in the map.

$colors: (
  primary:    #488aff,
  secondary:  #32db64,
  danger:     #f53d3d,
  light:      #f4f4f4,
  dark:       #222,
  duckcoin:   #df4932 // Notre première valeur SASS
);
```

Vous pouvez ici effectuer des changements sur les valeurs par défaut des thèmes primaire, secondaire, ...Et ils s'appliqueront automatiquement à l'ensemble de vos composants.

```
<ion-header>
  <ion-navbar color="duckcoin">
    <ion-title>Duckcoin</ion-title>
  </ion-navbar>
</ion-header>
```

Ici la barre de navigation aura comme couleur de fond \(background\) celle définie dans le fichier de variables scss et comme couleur de texte du blanc. Si vous voulez autre chose que du blanc, disons du jaune, vous devriez modifier votre style comme ceci :

**src/theme/variables.scss**

```
$colors: (
  primary:    #488aff,
  secondary:  #32db64,
  danger:     #f53d3d,
  light:      #f4f4f4,
  dark:       #222,
  duckcoin: (
    base: #df4932,
    contrast: yellow
  )
);
```

![](/assets/screen_home_4.png)

Il est également possible d'appeler des variables définis dans ce fichier **src/theme/variables.scss** directement dans nos fichiers scss. Changeons par exemple la couleur du bouton présent dans l'onglet Profil :

**src/pages/profile/profile.scss**

```js
page-profile {
  button[ion-button] {
    background: color($colors, duckcoin, base);
  }
}
```

qui est l'équivalent css de :

```js
page-profile {
  button[ion-button] {
    background: #df4932;
  }
}
```

![](/assets/screenprofile_1.png)

De manière générale, les Variables Sass vous permettent de définir une valeur une fois, puis de l'utiliser à plusieurs endroits différents. Une variable commence toujours par un signe dollar \($\) et est initialisé comme une propriété CSS classique.

Supposons par exemple que l'on souhaite imposer une largeur maximale sur un certain nombre de composants de notre application \(des images, boutons,...\). On pourrait par exemple faire ceci dans le fichier variables.css :

**src/theme/variables.scss**

```js
$max-width: 400px;
```

Puis dans une ou plusieurs feuilles de style scss invoquer notre variable :

```js
div {
    width:$max-width;
}
```

On pourrait même faire des calculs sur la variable  :

```js
img {
    width : $max-width/10;
}
```



