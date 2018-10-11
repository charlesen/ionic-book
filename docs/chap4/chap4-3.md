## Exercez-vous

1\) Créez la page **Profile** précédente et configurez là pour quelle soit dans le thème de l'application. Corrigez les bugs éventuels.\(C.f Exercez-vous du chapitre précédent\)

2\) Dans la fonction **gotoHome**, remplacez **"push"** par **"setRoot" **: **this.navCtrl.setRoot\(UnePage\)**. Que constatez-vous ?

3\) Éditez le fichier **app.module.ts **de la manière suivante :

```js
...
@NgModule({
  declarations: [
    MyApp,
    MiningPage,
    WalletPage,
    HomePage,
    ProfilePage, // On la déclare ici
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
        tabsPlacement: 'top',
        backButtonText: 'Retour'
    })
  ],
  ...
```

Que remarquez-vous ?

4\) Allez à l'adresse suivante : [https://ionicframework.com/docs/components](https://ionicframework.com/docs/components)

Comment à partir des informations qu'y s'y trouve peut-on rajouter une liste d'éléments en page d'accueil \(voir screen suivant\)

![](/assets/screen_home_2.png)

**Astuces :**

```
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

5\) Testez d'autres composants

6\) Créez une page Setting et ajoutez à cette page un formulaire avec des éléments simples : nom, prénom, adresse,...

