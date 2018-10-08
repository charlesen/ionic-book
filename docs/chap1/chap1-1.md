## Une méthode pour les gouverner tous

Il existe différentes façons de développer un produit à destination des mobinautes : le web mobile, l'hybride et le natif.

### Applications web mobiles

Une application web mobile est une version allégée d'un site internet, optimisée pour les écrans de petites tailles \(smartphone, tablette, TV connectée,...\). On parle la plupart du temps de site responsive, car il s'adapte aux caractériques de l'écran du navigateur web. Avec le [PWA, concept abordé au chapitre 12](/chap12), les applications web mobiles sont en passe de dominer le traffic issus des appareils mobiles.

### Applications hybrides

Vous vous rappelez du seigneur des anneaux ? Oui ? Et bien les technologies dites _**"hybrides"**_ sont au mobile, ce que l'anneau de Sauron est à l'univers imaginée par Tolkien[^1].

Une application est dite _**hybride**_ si elle est développée pour les smartphones avec les outils classiques du web.

Les applications mobiles hybrides permettent aux développeurs de réutiliser leurs compétences existantes en développement web. Car, c'est bien connu, les développeurs n'aiment pas être bloqués par des contraintes \(maitriser Java, avoir absolument un Mac ou un PC windows,...\) imposées par des plates-formes propriétaires.

Le développement d'applications mobiles hybrides est aujoud'hui la méthode la plus attrayante pour la rentabilité d'une organisation. Pourquoi embaucher un développeur pour chaque plate-forme lorsque vous pouvez embaucher un développeur et les cibler toutes grâce à des technologies aussi connues que HTML, CSS et JavaScript?.

Les smartphones Android, iOS ou autre, embarquent dans leur noyau une technologie appellée **WebView** permettant d'executer du code web au sein d'un environnement natif. Ainsi, il est possible de lancer la caméra de votre téléphone \(natif\), via une simple fonction Javascript \(web\). Ce qui donnerait ceci par exemple :

```js
function capturePhoto() {
    // Prend une photo en utilisant la fonction camera du téléphone
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 50,
        destinationType: destinationType.DATA_URL
    });
}
```

Pas de panique, ce code écrit en JavaScript n'aura bientôt plus beaucoup de secrets pour vous.

### Applications natives

Une application mobile est dite native, si le développement effectué pour la créer \(et donc le langage de programmation\) est spécifique à la plateforme cible.

| Plateforme cible | Langage de Programmation |
| :--- | :--- |
| Android \(Google\) | Java, Kotlin |
| iOS \(Apple\) | Objective-C, Swift |
| Windows Phone \(Microsoft\) | C-Sharp \(C\#\) |
| ...etc |  |



