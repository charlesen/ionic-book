## Composants

La majorité des développements sous Angular, et comme vous l'aurez compris, sous Ionic également \(Ionic étant en fin de compte un projet Angular\), est effectué au niveau des composants. Nous avons déjà étudier le composant Root, dont l'arborescence est la suivante :

```js
app.component.css
app.component.html
app.component.spec.ts
app.component.ts
app.module.ts
```

Nous avons aussi écrit un composant **Transaction** qui nous permettait d'afficher la liste de nos dernières transactions.

![](/assets/render_appcompo.png)

La création d'un nouveau composant se fait simplement en saisissant la commande suivante à la racine de votre projet ionic :

```bash
$ ionic g component monComposant
[OK] Generated a component named monComposant!


src/components/moncomposant.css
src/components/moncomposant.html
src/components/moncomposant.spec.ts
src/components/moncomposant.ts
src/components/components.module.ts
```

On voit ici qu'un module \(components.module.ts\) a aussi été créé. Rappelons que les modules sont chargés du bootstrapping \(démarrage\) d'un composant. C'est donc ce module qu'il faudra déclarer dans le module principal **src/app/app.module.ts **:

```js
// Modules
import { ComponentsModule } from '../components/components.module';

// ...

imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule, // Importer le module ici
    IonicModule.forRoot(MyApp, {
      // tabsPlacement: 'top',
      backButtonText: 'Retour'
    })
],

// ...
```

Il faut également modifiez le fichier **src/components/components.module.ts** comme ceci  :

```js
import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular"; // On rajoute cette ligne
import { MonComposantComponent } from './components/components';
@NgModule({
    declarations: [MonComposantComponent],
    imports: [IonicModule], // ...Et celle-ci
    exports: [MonComposantComponent]
})
export class ComponentsModule {}
```

Je vous rassure, vous n'aurez pas à faire tout cela à chaque création de composant, en fait l'intérêt de regrouper tout cela dans un module permet de créer de nouveaux composants, sans devoir les redéclarer dans toute l'application.

A présent vous pouvez appeler votre composant sous forme de tag dans n'importe quel fichier html de l'application.

```js
<moncomposant></moncomposant>
```



