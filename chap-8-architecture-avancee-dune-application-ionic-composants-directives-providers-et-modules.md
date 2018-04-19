# Chap 8 - Architecture avancée d'une application Ionic : Composants, Modules, Directives, Providers, Services, Pipes et persistance de données

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

## Modules

## Directives

## Providers

## Services

## Pipes

## Persistance de données





