# Chap 6 - Introduction au langage TypeScript, le futur de JavaScript

TypeScript est un langage de programmation libre et open source développé par Microsoft qui a pour but d'améliorer et de sécuriser la production de code JavaScript. Sortie en 2012, Il est vu par beaucoup comme le futur du Javascript, car se basant sur la norme ECMAScript 6, celle déjà intégré au moteur JavaScript de la plupart des navigateurs et qui fera foi dans les prochaines années.

TypeScript c'est donc du JavaScript, avec de supers pouvoirs, utilisé d’ailleurs par la plupart des Frameworks JavaScript du moment :  React, Angular, Express, VueJS,...

![](/assets/typescript_framework_1.png)![](/assets/typescript_framework_2.png)

Les fichiers définis dans ce langage ont pour extension **.ts**. Les navigateurs web ne sachant pas encore interprété du code en TypeScript pur, il est nécessaire de le compiler en JavaScript : on parle alors de transtypage.

## Comment TypeScript s'intègre à Ionic

En fait, TypeScript est présent partout ou presque dans Ionic. Les classes définies dans les fichiers .ts de chaque page sont écrites, comme vous vous en doutiez sûrement, en TypeScript :

```js
export class HomePage {
  selected : any = '';
  items : any = [];
  constructor(public navCtrl: NavController) {
    this.items = [
      {'title':'Bitcoin', 'currency':'btc', 'price':'5000€'},
      {'title':'Ethereum', 'currency':'eth', 'price':'500€'},
      {'title':'Ripple', 'currency':'xrp', 'price':'0.4€'}
    ];
  }

  itemSelected(item) {
    this.selected =item;
  }

}
```

Voyons à présent plus en détails comment fonctionne le langage de programmation.

