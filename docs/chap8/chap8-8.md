## Exercez-vous

1\) Créez un nouveau composant nommé "transaction" qui affichera la liste des dernières transactions de la blockchain. Cette liste est à récupérer à l'adresse : [https://duckcoin.charlesen.fr/transactions](https://duckcoin.charlesen.fr/transactions).

2\) Appelez ce nouveau composant dans l'onglet Portefeuille

3\) Créez une directive que vous nommerez **"bigger"**. Celle-ci permettra d'augmenter la taille \(font-size\) de l’élément qui l'invoquerait.

4\) Créez un Pipe que vous nommerez _**devise**_ que vous utiliserez dans votre liste de transactions pour convertir la valeur \(amount\) de chaque transaction en dollar, en Livre sterling et en tout autre monnaie qui vous viendrait à l'esprit.

```js
{{transact.amount | devise:'dollar'}}
{{transact.amount | devise:'pound'}}
```

* **1 Livre sterling est égale 1,15 Euro**
* **1 Dollar américain est égal à 0,88 Euro**

![](/assets/duckcoin_devise.png)

4\) Ajustons un peu notre page de login en enregistrant en base de données le login au clic sur le bouton de validation, et en l'affichant en page d'accueil de façon à ce que l'on ait ce message :

```
Bonjour leLogin,
Duckcoin, c'est la monnaie qui rend aimable, redonne le sourire et change la face du monde.
Elle a été faite pour des gens sympas, juste comme toi.
```

**P.S. :** vous aurez sûrement besoin de ça ;-\) : [https://ionicframework.com/docs/developer-resources/forms/](https://ionicframework.com/docs/developer-resources/forms/)

5\) Nous avons introduit les composants natifs proposés par Ionic [https://ionicframework.com/docs/native/](https://ionicframework.com/docs/native/). Utilisez un maximum d'entre eux et ajoutez-les à votre projet.

