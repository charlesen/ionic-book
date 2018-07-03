## Exercez-vous

1\) On veut afficher la liste des dernières transactions de la Blockchain sous forme de liste dans l'onglet Accueil, tout en bas du texte de bienvenue.On définit la liste de transactions ci-dessous :

```js
    this.transactions = [
      {
        'sender': 'charles',
        'recipient': 'maxime',
        'amount': 100,
      },
      {
        'sender': 'charles',
        'recipient': 'raphael',
        'amount': 100,
      },
      {
        'sender': 'charles',
        'recipient': 'doreen',
        'amount': 100,
      },
      {
        'sender': 'charles',
        'recipient': 'louis-joseph',
        'amount': 100,
      },
      {
        'sender': 'charles',
        'recipient': 'elise',
        'amount': 100,
      },
      {
        'sender': 'charles',
        'recipient': 'germain',
        'amount': 100,
      },
      {
        'sender': 'charles',
        'recipient': 'anthony',
        'amount': 100,
      },
      {
        'sender': 'charles',
        'recipient': 'pol',
        'amount': 100,
      },
      {
        'sender': 'charles',
        'recipient': 'vincent',
        'amount': 100,
      },
      {
        'sender': 'charles',
        'recipient': 'nicolas',
        'amount': 100,
      },
      {
        'sender': 'charles',
        'recipient': 'kevin',
        'amount': 100,
      },
      {
        'sender': 'charles',
        'recipient': 'willy',
        'amount': 100,
      },
      {
        'sender': 'charles',
        'recipient': 'elodie',
        'amount': 100,
      },
      {
        'sender': 'charles',
        'recipient': 'adrien',
        'amount': 100,
      },
      {
        'sender': 'charles',
        'recipient': 'romain',
        'amount': 100,
      },
      {
        'sender': 'charles',
        'recipient': 'quentin',
        'amount': 100,
      },
      {
        'sender': 'charles',
        'recipient': 'jean-etienne',
        'amount': 100,
      },
      {
        'sender': 'charles',
        'recipient': 'gael',
        'amount': 100,
      }
    ];
```

En vous basant sur ce qui a été fait précédemment avec la liste des cryptomonnaies Bitcoin, Ethereum et Ripple, faites en sorte que l'on puisse visualiser la liste des dernières transactions en Page d'accueil.

![](/assets/transaction_list_1.png)

2\) Le signe dollar \($\) de la liste est ajouté automatiquement grâce à un pipe Angular \(concept abordé au [chapitre 7](/chap7)\). Comment d'après la documentation suivante, est-il possible de remplacer le $ en € ? Puis € en DRT ? [https://angular.io/api/common/CurrencyPipe](https://angular.io/api/common/CurrencyPipe).

![](/assets/transact_2.png)

3\) Faites qu'en cliquant sur une ligne de la transaction, on affiche une fenêtre modale, avec le résumé de la transaction :

[https://ionicframework.com/docs/components/\#modals](https://ionicframework.com/docs/components/#modals)

**P.S :** il est possible de passer des paramètres à une fenêtre modale, puis de les récupérer dans la fenêtre concernée :

Ouverture de la fenêtre avec passage de paramètres :

```
import { ModalController } from 'ionic-angular';
import { MaPageModal } from './modal/modal'; // la page modale est dans le même dossier que la principale

export class MaPage {
  constructor(public modalCtrl: ModalController) {
  }

  presentModal() {
    let modal = this.modalCtrl.create(ModalPage, {'monParam':'Ceci est un paramètre'});
    modal.present();
  }
}
```

Récupération des données dans la classe de la fenêtre :

```js
export class MaPageModal {
  unParamVenuDeLoin : any;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    this.unParamVenuDeLoin = this.params.get('monParam')
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
```

## Annexes

* Documentation sur les méthodes Map, filter et Reduce :
  * [https://code.tutsplus.com/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-2620](https://code.tutsplus.com/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209)
  * [https://scotch.io/tutorials/list-processing-with-map-filter-and-reduce](#)



