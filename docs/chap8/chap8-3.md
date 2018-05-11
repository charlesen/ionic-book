## Services/Providers

Comme nous l'avons vu, un composant permettant d'afficher du contenu à plusieurs endroits à partir d'un code unique. C'est le cas par exemple du composant **&lt;transaction&gt;&lt;/transaction&gt;** que l'on peut appeler dans n'importe qu'elle template html de notre application.

Supposons que l'on souhaite récupérer la liste des dernières transactions sous forme de tableau comme c'est le cas dans la classe **TransactionComponent** :

```js
export class TransactionComponent {

  transactions: any[] = [];

  constructor(private http: HttpClient) {
    this.http.get(`${apiUrl}/transactions`).subscribe(
      data => {
      this.transactions = data['transactions'];
    }, err => {
        console.log("Error occured.")
    });
  }

}
```

Une première solution serait de copier le code de cette classe. Mais si une autre page souhaite également avoir accès à cette même liste, la copie alors apparait comme une mauvaise solution.

C'est là qu'interviennent les **Services**, qui sont en fait des bouts de codes metiers, des méthodes, qui peuvent appeler dans d'autres pages, sans devoir les réecrire. On code une fois, on les réutilise partout.

Nous aurons par exemple besoin des services pour la gestion des sessions utilisateurs. En effet, à peu près toutes les pages de notre application auront besoin de s'assurer que notre utilisateur courant est bien connecté.

```
$ ionic g provider User

[OK] Generated a provider named User!
```

Cette commande va créer un nouveau service **User**, dans lequel nous déclarerons un certain nombre de méthodes pour la gestion de l'authentification, la création de comptes utilisateur,...

