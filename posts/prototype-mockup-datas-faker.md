---
layout: Post
title:  Développement web et prototypage de données
published:   2018-07-01
tag: prototype
author: Sylvain Pastor
img: uploads/startup-meeting.jpg
comments: true
description: Lorsqu'il est question d'un projet web à créer, t'as peut être pas envie de te casser la tête à créer une base de données, ni à produire un jeu de données pertinent. C'est là que FAKER.js fait son entrée.
---

Lorsqu'il est question d'un projet web à créer, t'as peut être pas envie de te casser la tête à créer une base de données, ni à produire un jeu de données pertinent. C'est là que FAKER.js fait son entrée.

## Présentation de Faker

Faker c'est un module qui existe pour plusieurs langages (Javascript, PHP) et qui va permettre de générer de "fausses données" utilisables par la suite dans vos applications. Dans cet article, je vais vous présenter Faker.js qui est la version de [Marak](https://github.com/Marak) disponible sur [ce repository github](https://github.com/marak/Faker.js/).

Pour l'installer, il vous suffit de faire un petit coup de...

```
$ npm install faker --save
```

Faker prend tout son intérêt quand l'application (en FRONT) que l'on développe devra faire appel à une **API REST** pour récupérer des datas et par la suite les afficher. Dans cette situation, nous pouvons utiliser faker pour créer un jeu de données semblable à celui qui devra être transmis par l'Api une fois que le soft sera plus avancé dans son développement.

### Un module hyper complet
Ce module te permet de créer n'importe quel jeu de donnée de la manière la plus simple au monde. Faker, c'est un objet qui embarque un grand nombre de méthodes vous permettant d'obtenir des données au format souhaité.  

Grâce à son api, Faker vous propose un certain nombre de "catégories" de données. Prenons l'exemple de la catégorie "adress", il vous êtes possible de générer via des méthodes:

- le nom de la rue → faker.address.streetAddress()
- la ville → faker.address.city()
- le code postal → faker.address.zipCode()
- ...

``` js
const  faker  =  require('faker');

var user = {
    nom: faker.name.findName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
    description: faker.lorem.sentences(),
    adress: faker.address.streetAddress() + faker.address.city() + faker.address.country()
}

module.exports = user;
```

## Structurer ses données avec faker
Naturellement, prototyper des jeux de données, ça ne veut pas dire qu'on se fou complètement de la structure de ces dernières. Fais donc attention à ce que les données soit structurées de la même façon que celles qui te seront transmise une fois en production. Il est important de **prévoir avec clarté les différents schémas de données, collections et autres** lorsque vous générez un faux jeu de données...
