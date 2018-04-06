# Chap 2 - Cas pratique : DuckCoin, la cryptomonnaie sur mobile

Explorer Ionic et son écosystème peut vite devenir très long, alors pour faire à peu près le tour du sujet, je vous propose dans ce livre de partir d'un projet concret qui va nous permettre d'aborder tous les concepts techniques dont vous aurez besoin pour lancer votre propre application mobile.

Après réflexion, et aimant surfer sur les tendances technologiques du moment, j'aimerais vous proposer d'explorer l'univers des cryptomonnaie en développant une application que l'on appelera **DuckCoin**.

C’est à la une de quasiment tous les journaux d’information. Par une seule semaine sans que l’on vous parle ci et là du Bitcoin, de Ripple ou d’une autre crypto-monnaie en vogue.

Une crypto-monnaie est selon Wikipédia :

> Une monnaie virtuelle utilisable sur un réseau informatique décentralisé, de pair à pair

Dit autrement, c’est comme remplacer ses euros, ses dollars ou ses francs CFA par une devise stockée en ligne ou directement dans votre ordinateur ou clé usb. Bitcoin, la plus célèbre des crypto-monnaies et celle qui vaut le plus chère, a été lancé quelques temps seulement après la crise financière de 2008 : la fameuse crise des subprimes.

Quelques années plus tard, on dénombre plus de 1000 crypto-monnaies selon le site internet [CoinMarketCap](https://coinmarketcap.com/) pour une capitalisation boursière \(valeur au prix du marché de l’ensemble des crypto-monnaies en circulation\) de plus de 740 milliards de dollars. C’est juste énorme et ce n’est rien comparé au potentiel de ce nouveau marché.

## Principales crypto-monnaies

### Bitcoin

Bitcoin est une devise virtuelle pair-à-pair décentralisée qui fonctionne grâce à ses utilisateurs, sans autorité centrale ni intermédiaire. Elle vaut à l’heure où j’écris ces quelques lignes autour de 6 616,51 dollars, soit environ 5 405,71 euros, soit plus de 3,5 millions de Franc CFA. C’est juste énorme.

**1 Bitcoin = €5 405,71**

### Ripple

Ripple est un système de règlement brut en temps réel, un marché des changes et un réseau de transfert de fonds. Également appelé le Ripple Transaction Protocol ou Protocole Ripple, il est construit sur un protocole Internet distribué et open source, un registre de consensus et une monnaie native appelée XRP. Lancé en 2012, le réseau Ripple a pour objectif de permettre des transactions financières mondiales sécurisées, instantanées et presque gratuites, de toute taille sans rejets de débit.

Ripple et Bitcoin utilisent une méthode différente pour parvenir à un consensus réseau. Ripple utilise un processus de consensus itératif, tandis que Bitcoin utilise le « Proof of Work » \(minage\). Par conséquent, Ripple est plus rapide que Bitcoin. La finalisation des transactions ne prend que quelques secondes.

**1 Ripple = €0,382906**

### Ethereum

Ethereum est une devise virtuelle développée sur une plateforme logicielle ouverte basée sur la technologie blockchain qui permet aux développeurs de créer et déployer des applications décentralisées qui exécutent des contrats intelligents \(_**« smart contracts »**_\). C’est fin 2013 que Vitalik Buterin, un chercheur et développeur en crypto-monnaie, propose Ethereum.

À l’instar de Bitcoin, Ethereum est un réseau de blockchain publique. Bien qu’il existe des différences techniques considérables entre les deux, la distinction la plus importante est que Bitcoin et Ethereum diffèrent considérablement en termes d’objectifs et de capacités.Tandis que la blockchain bitcoin est utilisée pour suivre la propriété d’une devise virtuelle \(Bitcoins\), la blockchain Ethereum se concentre sur l’exécution du code de programmation de toute application décentralisée.

**1 Ethereum = €300,78**

## La Blockchain pour les nuls

Selon Wikipédia :

> Une blockchain, ou chaîne de blocs, est une technologie de stockage et de transmission d'informations sans organe de contrôle. Techniquement, il s'agit d'une base de données distribuée dont les informations envoyées par les utilisateurs et les liens internes à la base sont vérifiés et groupés à intervalles de temps réguliers en blocs, l'ensemble étant sécurisé par cryptographie, et formant ainsi une chaîne

Une blockchain contient des données créées par différents utilisateurs dans le temps et chaque acteur ou noeud de la blockchain possède une copie de celle-ci.

Il existe différents types de blockchains : celles qui sont privés, c'est à dire qu'un nombre limité d'acteurs, choisi arbitrairement, a le droit d'agir sur la blockchain, et celles qui sont publiques et donc accessibles à tout le monde sans aucune restriction. Comme l'a dit le mathématicien Jean-Paul Delahaye, une blockchain publique comme celle de Bitcoin peut être assimilée à

> un très grand cahier, que tout le monde peut lire librement et gratuitement, sur lequel tout le monde peut écrire, mais qui est impossible à effacer et indestructible._ _

Une image valant mieux qu'un discours, voici comment on pourrait représenter la technologie Blockchain de manière simple :

![](/assets/fonctionnement-blockchain1.png)

![](/assets/blck-schema.png)

```
                                   Source : Blockchain France
```

Les applications de la Blockchain sont multiples car elle permet d'éliminer les tiers de confiance habituels que sont les banques, les assurances, les notaires,...et même l'Etat.

Si l'euro a de la valeur aujourd'hui c'est d'abord parce que cette valeur nous la lui accordons et que les banques et les Etats européens veillent à ce que cela soit toujours le cas en limitant sa quantité et sa provenance \(BCE\), en punissant pénalement la création de fausses monnaies,...

Avec la blockchain, ces tiers de confiance peuvent s'en aller en paix, la confiance étant répartie entre les différents acteurs du réseau blockchain. Rien ne nous empêche alors de créer notre propre monnaie, la distribuer et de la valoriser auprès d'un large panel de développeurs d'applications mobiles enthousiastes. C'est ce que nous allons dans les prochains chapitres avec la cryptomonnaie **DuckCoin**.

## Duckcoin : principes de fonctionnement

DuckCoin sera comme nous l'avons déjà dit une crypto-monnaie basée sur une blockchain publique. L'application mobile que nous allons développer tout au long de ce livre portera le même nom.

De plus, la monnaie fonctionnera à peu près sur le même principe que le Bitcoin, en tout cas en ce qui concerne son architecture.

Ce livre n'étant pas consacré à la Blockchain et aux cryptomonnaies, vous n'êtes pas obligé de lire la suite de ce chapitre et pouvez directement passer à la suite. Mais si vous êtes un tant soit peu curieux, alors restez, vous ne serez pas dessus je pense.

### Construction de la Blockchain

Pour développer la blockchain sur laquelle sera construite notre cryptomonnaie, nous allons utiliser le langage de programmation Python, qui est assez simple à maîtriser.

```py
class Blockchain(object):
    def __init__(self):
        self.chain = []
        self.transactions = []

    def new_block(self):
        # Permet la création d'un nouveau block qui sera à la chaine de blocs
        pass

    def new_transaction(self):
        # Ajoute une nouvelle transaction à la liste des transactions. 
        # Un bloc peut contenir plusieurs transactions, toutes les unes que les autres
        pass

    @staticmethod
    def hash(block):
        # Permet le hashage d'un Bloc
        pass

    @property
    def last_block(self):
        # Renvoie le dernier bloc de la chaine
        pass
```

La classe Blockchain sera responsable de la gestion de la chaîne. Elle va stocker les transactions et pourra grâce à des méthodes ajouter de nouvelles transactions ou de nouveaux blocs à la chaîne. 

Pour l'affichage et les interactions avec la blockchain, nous utiliseront un framework Python nommé Flask, robuste et très simple à prendre en main. Tous les détails vous pourrez les trouver directement à l'adrese du projet : [https://duckcoin.charlesen.fr/](https://duckcoin.charlesen.fr/)

Création, stockage

