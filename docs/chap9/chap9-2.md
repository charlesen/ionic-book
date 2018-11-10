## Débogage de l'application

C'est sûrement la partie la moins drôle quand on développe en général, mais fort heureusement avec Ionic et Angular les choses sont un peu moins douloureuse, la plupart des bugs étant explicites et dans certains cas on indique même ce qu'il faut faire.

Faisons le tour de quelques méthodes qui vont vous aider à debugger efficacement votre application mobile.

### L’indétrônable console.log\(\) et son copain console.info\(\)

Vous avez du l'utiliser au moins une fois dans vos développements JavaScript.

La méthode de logging de l'objet Console vous permet d'afficher le contenu d'une variable, du texte, un message...bref, à peu près tout, de votre code source vers le navigateur web.

```js
console.log("Ceci est un message à mon navigateur web...Mayday ! Mayday !")
```

### Inspection du code source

La plupart des navigateurs dispose désormais d'un outil d'inspection de code source, disponible par exemple depuis la touche F12 ou clic-droit - **"Inspecter..."**.

![](/assets/screen_console_1.png)

Une application Ionic étant écrit en JavaScript, CSS et Html, vous n'aurez plus qu'à visualiser votre code et ajuster les choses au besoin : style CSS manquant ou non adapté, une image en 404,...

![](/assets/screen_console_2.png)

### Point d'arrêt \(Breakpoint\)

Il est également possible d'ajouter des points d'arrêts dans votre code source. Très pratique quand on se demande pour un bout de code ne fonctionne pas et que l'on souhaite avancer pas à pas jusqu'à trouver la source du problème.

Vous avez le choix d'ajouter ce point d'arrêt depuis votre navigateur ou alors depuis votre code source à l'aide du mot clé **"debugger"** :

```js
let maVariable = "Je suis une variable";
....

// L'exécution du code prendra fin ici...Pour avancer, faites F10 sur Chrome
debugger;

if (maVariable) {
  alert(maVariable)
}
```

### Logs de la console + Gestionnaire d'erreurs Ionic

Ces deux élément, assez vous indique souvent d'où vient le problème et surtout comment le résoudre. Il est parfois nécessaire de redémarrer votre projet depuis la console pour la recompilation permette un retour de bug plus explicite, voir, dans de rares cas, corrige le bug.

![](/assets/bug_ionic.png)

![](/assets/ionic_bug_2.png)

