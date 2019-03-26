---
layout: Post
title:  Nodejs, la solution parfaite pour une startup ?
published:   2018-08-07
tag: Startups dev nodejs
author: Sylvain Pastor
comments: true
img: nodejs.png
description: AHH Nodejs… La REVOLUTION d’après ce qu’on voit sur le web. Linked, Airbnb, Uber et même la NASA en ont fait leur arme de prédilection...
---
![Nodejs](../.vuepress/public/img/uploads/nodejs.png)

AHH Nodejs… La REVOLUTION d’après ce qu’on voit sur le web. Linked, Airbnb, Uber et même la NASA en ont fait leur arme de prédilection. Par corrélation, Beaucoup de petites entreprises et de startups suivant leurs exemples, choisissent de tirer parti de cette technologie pour créer leurs applications. Mais est ce que c’est une bonne idée ? C’est ce que nous allons essayer de déterminer aujourd’hui.


## Node, est ce que c’est une révolution ?


Oui et encore oui ! En effet on parle d’opération I/O (entrée/sortie) non bloquantes, ce qui signifie en soit que grâce à la programmation asynchrone permise par le moteur Javascript V8, une opération n'empêchera pas l’exécution d’une autre.

``` js
var mongoose = require('mongoose');
var Page = require('../models/page.js');

exports.get = function(req, res) {

  // 1 -> renvoie des données (plus long que l’action 2)
  return Page.find(function(err, pages) {
  	 [...]
  });

  // 2 -> action rapide à faire,  s'exécutera plus rapidement que la première action.
  print(‘hello world’);

};
```

Dans cet exemple, si la recherche des données prend trop de temps ou renvoie une erreur, le **print(‘hello world’)** s'exécutera quand même sans attendre que la première opération soit terminée.

Pour reprendre l’exemple d’[open class room](https://openclassrooms.com/courses/des-applications-ultra-rapides-avec-node-js/node-js-mais-a-quoi-ca-sert):
Ceci est du code bloquant, situation que l’on rencontre souvent avec des technologies comme PHP, Ruby...

```
Télécharger un fichier
Afficher le fichier
Faire autre chose
```


Et ça est du code non bloquant

```
Télécharger un fichier
    Dès que c'est terminé, afficher le fichier
Faire autre chose
```


### Vitesse et ergonomie dans l’utilisation du programme final
De plus l’utilisation d’une programmation asynchrone et le code non bloquant facilite le temps nécessaire aux utilisateurs pour voir les actions comme complètes, car les choses peuvent se dérouler en arrière-plan pendant que l'utilisateur passe à d'autres tâches.
Les raison pour lesquelles vous devez inclure nodejs dans la partie développement de votre projet ?


Pour l’efficacité du langage bien sur ! Outre la popularité du javascript, l’utilisation **du même langage coté serveur et côté client** permet un grand “confort intellectuel” à vos/votre dev(s). Une équipe plus efficace et fonctionnelle réduira considérablement les coûts de développement ! Et c’est là que toutes les startups du monde digital disent “MERCI NODEJS”.

Par contre, il existe des cas pratiques où node n’utilisera pas son plein potentiel et les performance de ce dernier seront égale ( dans le pire des cas ) à l’utilisation d’un autre langage.  Je vous propose donc d’étudier un cas où l’utilisation de node est la plus utile.

![Voir le top des technologies utilisées par les devs](../.vuepress/public/img/uploads/technologies.jpg)

Source : [Thenewstack](http://thenewstack.io/javascript-popularity-surpasses-java-php-stack-overflow-developer-survey/)


### Passé en mode “Temps réel” !

Lorsqu’il est question de traiter un volume de donnée élevé mais dont le poids est faible (des messages, des likes, le nombre d’utilisateurs connectés... ), Nodejs fera parfaitement le job et vous permettra d’afficher ces informations en temps réel. C’est ce que l’on appelle des **applications en temps réel (RTA)**.

Quelques exemples de RTA bien connues:
* Trello
* Dropbox paper
* Google drive
* Messenger
* ...

Un module bien connue par les développeurs, qui permet de gérer le temps réel facilement est [socket.io](https://socket.io/). Ce dernier permet d’ouvrir une communication **bidirectionnelle** en temps réel entre le serveur et le client.


### Le contre exemple, l’utilisation poussé du CPU.
Les opérations lourdes de CPU bloqueront simplement les requêtes entrantes, rendant le plus grand avantage de Node.js inutile. Si vous envisagez de développer un logiciel lourd, essayez une autre technologie, plus adaptée, qui vous donnera de meilleurs résultats.


## NodeJs, une modularité sans limite
Grâce au [manager de packet NPM](https://www.npmjs.com/), vous pouvez inclure de nouvelle fonctionnalitées open source ou qui ont déjà été développées d’autres développeurs. Bien qu’elles ne soit pas toutes utiles, on tombe des fois sur des perles.

J’ai découvert récemment [Player](https://www.npmjs.com/package/player) qui permet de lancer de l’audio sur la machine qui fait tourner votre serveur Node. Parfait pour la réalisation de petits dispositifs musicaux !


## #JeSuisDevNodeJS
Pour terminer, je pense que lorsque l’utilisation de Nodejs est justifiée ce dernier peut être un avantage redoutable pour les startups (et autres type de jeunes entreprises) en terme d’efficacité et d’évolution.

Javascript étant un des langages web indétrôné pour développer des interfaces web dynamiques grâce notamment à des frameworks comme angularJs, emberJs, react, vuejs...  Son utilisation côté serveur est en soi une avancé à la fois pour les entreprises qui veulent se démarquer par leurs applications mais aussi pour les jeunes développeur web qui souhaite augmenter en quelques sortes leurs performances, leurs efficacités mais aussi leurs champs d’actions dans le monde du digital.
