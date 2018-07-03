## Quand faire le choix d'un développement Hybride

Une application hybride est avant tout une application native. Elle est téléchargée à partir d'un app store ou d'une tout autre place de marché. Elle a les mêmes fonctionnalités natives et à peu près les mêmes performances que toute application construite avec un SDK natif.

Une application hybride s'exécute dans une sorte de navigateur en mode plein écran, appelé _**WebView**_, invisible pour l'utilisateur. Grâce à des plugins natifs personnalisables, elle peut accéder aux fonctionnalités natives d'un périphérique mobile \(caméra, contacts, agenda,...\), sans que le code saisi par le développeur ne soit directement lié à l'appareil.

Cela signifie que les applications hybrides peuvent fonctionner sur n'importe quelle plate-forme ou périphérique, tout cela à partir d'une base de code unique, tout en offrant une convivialité et un aspect natifs.

Le schema en couche ci-dessous permet une meilleure comparaison de ce qu'une application hybride est vis-à-vis du natif et du web mobile :![](/assets/webview_schema.jpg)

Avant de vous engager dans un développement mobile, il est important de bien évaluer les avantages et les inconvénients de chacunes de ces méthodes. Voici quelques questions à se poser pour vous aider à vous lancer :

* Quelles plates-formes mobiles souhaitez-vous cibler ? Android ? iOS ? Windows Phone ?
* Voulez-vous distribuer votre application via un app Store ?
* Cherchez-vous à utiliser une ou plusieurs fonctionnalités clés de l'appareil mobile ?
* Quelles sont vos capacités techniques et/ou celle de votre équipe de développement ?

N'hésitez pas à noter ces questions, à y répondre, puis à les poser aux personnes pour ou avec qui vous prévoyez de travailler.

Voilà plus en détail ce que ces différentes questions peuvent impliquer.

### Quelles plates-formes mobiles souhaitez-vous cibler ?

Si vous souhaitez cibler plus d'une plate-forme mobile, vous avez alors plusieurs choix possibles. Cela va de soi.

Et de toute évidence, le web mobile offre la solution la plus attrayante, surtout si vous possédez déjà une version web de ce que vous souhaitez développer pour les mobiles. Dans ce cas, une version adapatée aux mobiles \(responsive\) de votre site peut être suffisante.

Mais, un développement hybride peut être aussi une excellente alternative.

Si ce que vous souhaitez proposer ne requiert pas d'avoir de très très grosses performances logiciels, alors le natif n'est surement pas une bonne idée. Sauf si vous ne voyez aucun inconvénient à recruter 3 développeurs différents ou à exploiter celui que vous avez déjà \(si ce n'est vous\) et le priver de vacances jusqu'à ce que mort s'en suive. Bon j'exagère un peu, mais c'est à peu près ça.

Préparez-vous de toute façon, si votre choix se porte sur le natif, à parler couramment l'Objective-C ou le Swift pour iOS, Java ou Kotlin pour Android, et C-Sharp \(C \#\) pour Windows Phone \(actuellement Windows 10 Mobile\), pour ne citer que ces trois plateformes.

### Voulez-vous distribuer votre application via un app Store ?

Si vous souhaitez distribuer votre application via une boutique d'applications mobiles, vous devrez alors créer soit une application hybride, soit une native. Vous aurez dans tous les cas besoin d'un site internet qui servira de plateforme à vos utilisateurs au cas où ils rencontreraient des problèmes avec votre application mobile.

Sinon, là aussi une application web mobile ou [PWA](/chap12) devrait suffire.

### Vous cherchez à utiliser des fonctionnalités clés de l'appareil mobile?

Grâce aux PWA \(Progressive Web Apps\), on peut faire énormément de choses depuis un site mobile et utiliser des fonctionnalités qui dans le passé n'étaient accessibles qu'en développement natif ou hybride. Je consacre un chapitre entier à cette technologie à la [fin de ce livre](/chap12).

Mais si les fonctions que vous ciblez dépassent le cadre du PWA, là aussi pas le choix, vous devrez passer par l'Hybride ou le natif. Et si vous souhaitez être irréprochable niveau interface utilisateur et performance, alors le natif devra être votre premier choix.

### Quelles sont vos capacités techniques et/ou celle de votre équipe de développement ?

Grande question encore et loin d'être la moins importante. Si vous avez une grosse équipe de développement, vous êtes alors à l'abri de nombreux soucis. Vous aurez le choix d'utiliser l'une ou autre des trois méthodes précédentes. Vous êtes riche et vous le valez bien.

Vous aurez besoin, pour créer une application native, de développeurs expérimentés, maîtrisant à la fois les SDK \(outils de développement\)  et les langages de programmation de chaque plate-forme que vous souhaitez cibler.

Mais si vous souhaitez ne pas mettre à profit autant de compétences techniques pour un miniscule projet qui ne vous rapportera pas plus de 1% de votre chiffre d'affaires, alors cela vaudrait peut être la peine de réfléchir à l'option Hybride qui pourrait vous faire économiser énormément de temps et d'argent. Payez ensuite des vacances à vos collaborateurs avec l'argent économisé via une prime d'intéressement ou exceptionnelle par exemple.

Dans la plupart des cas, développer en mode hybride offre le meilleur rapport qualité/prix, surtout si vous démarrez une première version de votre application. Ça tombe bien, Ionic permet la création d'applications hybrides et ce livre est là pour vous aider à décoller de la meilleure façon qui soit.

