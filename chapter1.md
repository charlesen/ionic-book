# Chapitre 1 - Une brêve histoire du mobile

## Il était une fois...

Il y a longtemps, fort fort longtemps, en année technologique bien sûr, le natif était roi et les développeurs d'applications mobiles ses sujets. Les temps de développement étaient en moyenne estimés en mois, la paie était attractive et les dev étaient des demi-dieux. Nul ou presque ne pouvait prétendre proposer une première version, la v1, en moins d’une journée sans passer pour un illuminé, pire un hérétique. Je vous l'ai dit, c’était il y a fort longtemps.

Vous vouliez afficher du contenu issu d’une API publique sur un BlackBerry Bold 9000 ? Une petite image et quelques lignes de texte sur un HTC Dream tout neuf , tout mignon ? Par de soucis, il vous fallait tout simplement connaître le Java.

Si vous aviez le malheur de vouloir visualiser vos articles de blog et ceux de vos pages préférés depuis votre iPhone 3G en passant par un flux RSS créés par vos soins, il vous fallait absolument connaître l’Objective-C. Sinon, à moins d'avoir un gros budget, vous seriez contraint de passer votre chemin et plus que ça !

Avec le temps, de nombreux projets ont vu le jour pour permettre à tout de se lancer dans l'univers impoyable du développement mobile et Ionic est surement celui qui est le plus abouti à l'heure où j'écris ces quelques lignes.

### Une méthode pour les gouverner tous

Il existe plusieurs types de méthodes de développement pour atteindre les mobinautes : le web mobile, le natif et l'hybride.

#### Applications web mobile

Une application web mobile est une version allégée d'un site internet, optimisée pour les écrans de petites tailles \(smartphone, tablette, TV connectée,...\). On parle la plupart du temps de site responsive, car il s'adapte aux caractériques de l'écran du navigateur web.

#### Applications natives

Une application mobile est dite native, si le développement effectué pour la créer \(et donc le langage de programmation\) est spécifique à une plateforme cible.

| Plateforme cible | Langage de Programmation |
| :--- | :--- |
| Androig \(Google\) | Java, Kotlin |
| iOS \(Apple\) | Objective-C, Swift |
| Windows Phone \(Microsoft\) | C-Shart \(C\#\) |
| ...etc |  |

#### Applications hybrides

Vous vous rappelez du seigneur des anneaux ? Oui ? Et bien le développement hybride est au mobile, ce que l'anneau de Sauron est à la terre du milieu.

Une application est dite _**hybride**_ si elle est développée pour les smartphones avec les outils classiques du web \(html, javascript, css\).

Les applications mobiles hybrides permettent aux développeurs de réutiliser leurs compétences existantes dans le développement web. Car, c'est bien connu, les développeurs n'aiment pas être bloqués par des contraintes \(maitriser Java, avoir un Mac,...\) imposées par des plates-formes propriétaires.

Le développement d'applications mobiles hybrides semble attrayant pour la rentabilité d'une organisation. Pourquoi embaucher un développeur pour chaque plate-forme lorsque vous pouvez embaucher un développeur et cibler tous par le biais de HTML, CSS et JavaScript? Eh bien, la réalité est un peu plus compliquée.

Les smartphones Android, iOS ou autre, embarque dans leur noyau interne une technologie appellée \*\*WebView\*\* permettant d'executer du code web au sein d'un environnement natif. Ainsi, il est possible de lancer la caméra de votre téléphone, via une simple fonction Javascript. Ce qui donnera ça :

```js
function capturePhoto() {
    // Prend une photo en utilisant la fonction camera du téléphone
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 50,
        destinationType: destinationType.DATA_URL
    });
}
```

Pas de panique, on expliquera tout cela dans un prochain chapitre.

### Pourquoi et quand faire le choix d'un développement Hybride

Considérons le schema ci-dessous qui décrit les couches utilisées dans chaque méthode de développemnt :![](/assets/webview_schema.jpg)

Avant de vous engager dans un développement mobile, il est important de bien évaluer les avantages et les inconvénients de chacunes des méthodes présentées ci-dessus. Voici quelques questions à se poser pour vous aider à vous lancer :

* Quelles plates-formes mobiles souhaitez-vous cibler ?
* Voulez-vous distribuer votre application via les app Store ?
* Vous cherchez à utiliser des fonctionnalités clés de l'appareil mobile?
* Quelles sont vos capacités techniques et/ou celle de votre équipe de développement ?

N'hésitez pas à noter ces questions, y répondre, puis à les poser à vos interlocuteurs.

Voilà plus en détail ce que ces différentes questions impliques.

#### Quelles plates-formes mobiles souhaitez-vous cibler ?

Si vous souhaitez cibler plus d'une plate-forme mobile, vous avez alors plusieurs choix possibles.

De toute évidence, le Web offre la solution la plus attrayante, surtout si vous possédez déjà une version web de ce que vous souhaitez développer pour les mobile. Votre cible sera dans ce cas un navigateur mobile.

Un développement hybride peut être aussi dans ce cas de figure une excellente alternative.

Si ce que vous souhaitez proposer ne requiert pas d'avoir de grosses performances logiciels, alors le natif n'est surement pas une bonne idée. Sauf si vous ne voyez aucun inconvénient à recruter 3 développeurs différents ou à exploiter celui que vous avez déjà \(si ce n'est vous\). Dans tous les cas, préparez-vous à parler couramment l'Objective-C ou le Swift pour iOS, Java pour Android, et C-Sharp \(C \#\) pour Windows Phone, pour ne citer que ces trois plateformes.

#### Voulez-vous distribuer votre application via les app Store ?

Si vous souhaitez distribuer votre application via une boutique d'applications mobiles, vous devrez alors créer soit une application hybride, soit une native. Vous aurez dans tous les cas besoin d'un site internet qui servira de plateforme à vos utilisateurs au cas où ils rencontreraient des problèmes.

#### Vous cherchez à utiliser des fonctionnalités clés de l'appareil mobile?

Là aussi pas le choix, vous devrez passer par l'Hybride ou le natif. Et si vous souhaitez être irréprochable au niveau interface utilisateur et performance, alors le natif devra être votre premier choix.

#### Quelles sont vos capacités techniques et/ou celle de votre équipe de développement ?

Grande question encore et loin d'être la moins importante. Si vous avez une grosse équipe de développement, vous êtes alors à l'abri de nombreux soucis. Vous aurez le choix d'utiliser l'une autre des trois méthodes précédentes.

Si vous décidez de créer une application native, vous aurez besoin de développeurs expérimentés maîtrisant à la fois les SDK \(outils de développement\)  et les langages de programmation de chaque plate-forme que vous souhaitez cibler.

D'autre part, les applications Web et hybrides sont créées à l'aide de technologies du Web telles que HTML, CSS et JavaScript. Vous pouvez avoir une équipe qui peut cibler plusieurs plates-formes avec un seul ensemble de technologies. Cela vaut la peine alors de réfléchir à l'option Hybride qui pourrait vous faire économiser énormément de temps et d'argent.

Ça tombe bien, Ionic permet la création d'applications hybrides et ce livre est là pour vous aider à décoller de la meilleure des façons.



## Pourquoi choisir Ionic ?



