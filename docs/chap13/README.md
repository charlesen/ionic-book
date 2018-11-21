# Chap 13 - Introduction à Ionic 4

## Ouverture aux autres Frameworks et standardisation

Au moment de la rédaction de cette page, Ionic est dans sa version 4 Beta.

Cette version constitue une avancée majeure dans les capacités sous-jacentes du Framework mobile, en mettant l'accent notamment sur les performances, la compatibilité et l'extensibilité globale. Bien que la V4 s'intègre toujours profondément à Angular via le package **@ionic/angular**, elle est désormais ouverte aux autres framework JavaScript tels que Vue[^2], React, Preact, etc...

_**Exemple avec VueJS**_

```bash
$ npm install @ionic/vue
```

_**main.js**_

```js
import Vue from 'vue';
import App from './App.vue';

import { Ionic } from '@ionic/vue';

Vue.use(Ionic);
new Vue({
  render: h => h(App)
}).$mount('#app');
```

Une liberté dans le choix de son Framework certes, mais rien ne vous empêche de n'utiliser aucun framework. C'est un choix que l'on évite la plupart du temps de peur de ne devoir réinventer la roue, mais oui, vous êtes tout à fait libre d'utiliser ce que vous voulez avec Ionic et ça c'est une mini-révolution.

En s'alignant sur les standards du Web, cette V4 beta permet au noyau du Framework Ionic de s’appuyer sur le modèle orienté composant, un standard pris en charge par tous les navigateurs modernes, plutôt que sur un modèle «_fait maison»_. Cela implique donc un temps de chargement plus rapide, de meilleures performances et moins de code inutile pour prendre en compte tous les types de moteur de rendu différents \(WebKit ou Blink, Gecko,...\). Moins de patchs pour plus de performance.

## Système de routage

Dans une application Ionic 3, on ne souciait pas vraiment de nos urls, tout se passait dans le **push**, **pop** et le **setRoot**. On avancait, on reculait, on allait directement dans une page. Une SPA \(single page application\) des plus classiques. Le système de routage interne nous passait un peu sous les yeux, sans trop nous déranger.

Avec cette version 4, on retrouve un système de routage qui va nous permettre d'avoir de belles urls, d'y passer des paramètres et de les récupérer dans nos contrôleurs, comme on peut le retrouver dans la plupart des Framework du web. Très pratique quand on fait aussi du PWA. Ce système de routing[^1] est directement influencé par Angular qui dans sa dernière version  encourage le passage à ce nouveau type de navigation.

## Cordova Vs Capacitor

Dans cette nouvelle version du Framework, un fort accent est mis sur Capacitor qui a mon avis prendra définitivement la place de Cordova. Rappelons que Cordova permet la communication entre votre code JavaScript et les éléments du mobile \(caméra, contact, sms,...\), tout comme Capacitor qui a en plus l'avantage de vraiment se conformer aux API et standards actuels du web. Capacitor est un fils spirituel de Cordova qui a su incorporer en son sein ce qui a fait le succès de projet comme React Native et Turbolinks, deux projets reconnus pour leur rapidité d'exécution.

Étant donné que les plugins Cordova sont compatibles avec les plugins Capacitor, la transition devrait se faire sans trop de mal.

## Une documentation épurée

Je trouvais déjà personnellement que la documentation Ionic était surement l'une des meilleures du marché, mais avec cette version 4, elle a été complètement repensée pour vous permettre d'être encore plus efficace dans vos développements.

Elle actuellement accesible à l'adresse [https://beta.ionicframework.com/docs/](https://beta.ionicframework.com/docs/)

![](/assets/ionic-v4-docs.png)

J'aime particulièrement la partie dédié au PWA qui a été améliorée avec un exemple de déploiement sur Firebase. Avant on devait presque fouiller pour trouver des informations de qualité. Aujourd'hui c'est chose faite. Merci.

![](/assets/ionic-v4_screen_pwa.png)

[^1]: Angular Router : [https://angular.io/guide/router](https://angular.io/guide/router)

[^2]: Ionic VueJS : [https://github.com/ionic-team/ionic/tree/master/vue](https://github.com/ionic-team/ionic/tree/master/vue)

