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

Il existe différents types de blockchains : celles qui sont privés, c'est à dire qu'un nombre limité d'acteurs, choisi arbitrairement, a le droit d'agir sur la blockchain, et celles qui sont publiques et donc accessibles à tout le monde sans aucune restriction. Comme l'a dit le mathématicien Jean-Paul Delahaye, la blockchain peut être assimilée à

> un très grand cahier, que tout le monde peut lire librement et gratuitement, sur lequel tout le monde peut écrire, mais qui est impossible à effacer et indestructible._ _

Une image valant mieux qu'un discours, voici comment on pourrait représenter la technologie Blockchain de manière simple :

![](/assets/fonctionnement-blockchain1.png)

![](/assets/blck-schema.png)

                                                                          **Source : Blockchain France**





