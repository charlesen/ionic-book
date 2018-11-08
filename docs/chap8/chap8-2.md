## Directives

Une directive est un élément qui va nous permettre d'étendre des fonctionnalité html. Il en existe différents types :

* **Directive de type attribut** : vous en avez déjà vu, elles permettent de modifier du html. Citons par exemple _**text-center**_, une directive qui permet de centrer le contenu d'un élément, ou encore la directive _**padding**_, qui permet d'ajouter un padding à l'élément qui l'invoque.
* **Directive de type composant** : oui au risque de vous embrouiller un peu, un composant est en réalité une directive, mais dotée d'un template html. La directive est en quelque sorte l'atome, le composant la molécule.
* **Directive de type structure** : Ce type de directive est fait pour la manipulation du DOM et commence toujours par un **"\*"**. On peut citer parmi celles-ci deux que nous avons déjà utilisé à savoir **\*ngIf** et **\*ngFor**.

la création d'une directive se fait simplement en saisissant la commande suivante :

```bash
$ ionic g directive maDirective

[OK] Generated a directive named maDirective!
```

Créons par exemple une directive que nous appelerons **bolder** et qui permettra de mettre en gras l'élément qui l’appellerait.

```bash
$ ionic g directive bolder

[OK] Generated a directive named bolder                                                          !
```

On déclare ensuite une fois pour toute le "module mère" de toutes les directives dans le module root **src/app/app.module.ts** :

```js
// ...
//Modules
import {ComponentsModule} from '../components/components.module';
import {DirectivesModule} from '../directives/directives.module';
import { HttpClientModule } from '@angular/common/http';

//...

  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    DirectivesModule, // ICI
    IonicModule.forRoot(DuckCoinApp,{
        // tabsPlacement: 'top',
        backButtonText: 'Retour'
    })
  ],
```

Puis, on édite notre directive pour qu'il fasse ce que l'on souhaite, à savoir mettre du contenu en gras :

```js
import { Directive, ElementRef } from '@angular/core';

/**
 *  Directives.
 */
@Directive({
  selector: '[bolder]' // Attribute selector
})
export class BolderDirective {

  constructor(Element: ElementRef) {
    Element.nativeElement.style.fontWeight = 'bolder';
  }

}
```

Il ne nous reste plus qu'à utiliser notre nouvelle directive sur du contenu en page d'accueil par exemple :

```js
<span bolder>mon texte en gras</span>
```



