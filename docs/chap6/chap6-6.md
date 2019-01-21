## Les constantes

Une constante comme son nom l'indique est censée de ne pas être modifiée ou redéfinie par la suite. On pourra par exemple y stocker l'URL d'une API :

```js
const apiUrl = 'https://duckcoin.charlesen.fr';
```

Ou encore se créer un fichier de configuration pour notre application :

**src/config/config.ts**

```js
const is_localhost = window.location.hostname == 'localhost';
const is_production = false;

// Urls API
const url_local = '/api';
const url_test = 'https://duckcoin.charlesen.fr/api_v1';
const url_dev = is_localhost ? url_local : url_test;
const url_prod = is_localhost ? url_local : 'https://duckcoin.charlesen.fr/api_v2';

export const Config = {
  app_id: 'b457q7za', // générer au hasard les amis ;-)
  production: !is_localhost && is_production,
  api_url: is_production ? url_prod : url_dev
  db_name:'nom_de_ma_base_de_donnees'
};
```

Que l'on peut ensuite appeler n'importe où, depuis la page d'accueil par exemple :

**src/pages/home/home.ts**

```js
// config
import { Config } from '../../config/config';
```



