## Exercez-vous

1\) Créez un nouveau projet comme expliqué précédemment

2\) Que pouvez-vous remarquer dans l'arborescence de fichiers d'Angular...vis-à-vis de Ionic

3\) A l'aide de la commande suivante, générez un nouveau Composant nommé  **"transaction"** :

```bash
$ ng g c transaction
```

Que s'est-il passé ? Ouvrez le fichier **src/app/transaction/transaction.component.ts** et examinez-le.

4\) Ouvrez le fichier **src/app/app.component.html**, et remplacez le contenu ci-dessous \(on ne gardera que le logo d'Angular\)

```js
<h2>Here are some links to help you start: </h2>
<ul>
  <li>
    <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
  </li>
  <li>
    <h2><a target="_blank" rel="noopener" href="https://github.com/angular/angular-cli/wiki">CLI Documentation</a></h2>
  </li>
  <li>
    <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
  </li>
</ul>
```

Par le code suivant :

```js
<app-transaction></app-transaction>
```

Que s'est-il passé dans ce qui est affiché dans votre navigateur ?

**P.S :** notre application a désormais l'architecture suivante :

* **DuckWeb**
  * **Transaction**

5\) Remplacez le contenu du fichier **src/app/transaction/transaction.component.html**. Quel changement dans votre navigateur ?

6\) Ouvrez le fichier **src/app/transaction/transaction.component.ts** dans le constructeur, définissez  une liste de transactions comme vu dans le TP précédent, puis modifiez le fichier **src/app/transaction/transaction.component.html**, de manière à avoir le résultat suivant :

![](/assets/render_appcompo.png)

Que pouvez-vous conclure sur le rôle d'un composant ? Comprenez-vous mieux comment fonctionne les composants Ionic ?

7\) Dans le fichier **src/app/transaction/transaction.component.ts**, ajoutez les lignes suivantes dans la partie dédiée aux imports :

```js
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
```

Puis modifiez le fichier comme ceci :

```js
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl='https://duckcoin.charlesen.fr';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactions: any = [];
  constructor(private http: HttpClient) {
    // On récupère du contenu via une requete Http Get
    this.http.get(`${apiUrl}/transactions`).subscribe(
      data => {
      this.transactions = data['transactions'];
    }, err => {
        console.log("Une erreur s'est produite.")
    });
    //...
  }

  ngOnInit() {
  }

}
```

Vous avez planté normalement. Savez-vous pourquoi ?

```
No provider for HttpClient!
```

Dans le fichier **src/app/app.module.ts** ajoutez les lignes suivantes :

```js
import { HttpClientModule } from '@angular/common/http';
// ...
imports: [
    BrowserModule,
    HttpClientModule,
    // ...
    IonicModule.forRoot(MyApp, {
      // tabsPlacement: 'top',
      backButtonText: 'Retour'
    })
  ],
...
```

Grâce à l'utilisation du module http, vous pouvez facilement récupérer des données directement depuis le site hébergeant la blockchain.

Vous retrouverez les sources, ainsi que les corrections des exercices de ce TP à l'adresse:

[https://github.com/charlesen/ionic-book/tree/master/examples/duckweb](https://github.com/charlesen/ionic-book/tree/master/examples/duckweb)

## Annexes

* _Build Your First Angular App_, de Dan Wahlin, Développeur Google 
  * [https://scrimba.com/p/pQxesM/ce4baHb](https://scrimba.com/p/pQxesM/ce4baHb)
* Angular Tutorial :
  * [https://www.tutorialspoint.com/angular4/index.htm](https://www.tutorialspoint.com/angular4/index.htm)
  * [https://angular-2-training-book.rangle.io/](https://angular-2-training-book.rangle.io/) 
* Documentation officielle :
  * [https://angular.io/docs](https://angular.io/docs)
  * [https://cli.angular.io/](https://cli.angular.io/)



