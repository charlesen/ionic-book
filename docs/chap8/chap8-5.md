## Modules

Un module angular permet de regrouper en un seul endroit des composants, des directives, des pipes et des services de l'application. Vous n'aurez pas nécessairement besoin de créer des modules manuellement, car la création par exemple d'un composant le fera pour vous.

Prenons par exemple le module racine de notre application défini comme ceci :

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})

export class AppModule { }
```

Un code qui demande à être un peu commenté :

### Declarations

C'est un tableau des composants qui seront utilisés dans l'application.

```
declarations: [
   AppComponent,
   MonNouveauComponent
]
```

### Import

C'est un tableau des différents modules de l'application. C'est dans cette section que l'on déclare le module regroupant l'ensemble des composants.

### Providers

C'est ici que seront déclarés tous les services utilisés dans l'application.

### Bootstrap

On déclare ici le composant principal de l'application
