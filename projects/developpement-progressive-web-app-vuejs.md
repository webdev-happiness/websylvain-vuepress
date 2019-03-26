---
project: true
layout: Project
title:  Progressive web app en VueJs
description: Mise en place et usage des technologies nécessaires à la création d'une application web progressive.
img: mockup-pwa-weather.jpg
client: websylvain
role: Intégration et développement web
link: https://pwa-weather.websylvain.com/#/
missionPicture: mockup-pwa-weather-app.png
listElements:
  - name: Vue.js
    text: Vue.js est un Framework Javascript open source. A la fois léger et modulaire, il facilite grandement le développement d'interface utilisateur dynamique.
    img:  vuejs.jpg
  - name: Vuex
    text: VueX est une librairie qui permet de gérer un système centralisé de state pour vos composants. Elle est inspirée par la logique Flux.
    img:  vuejs.jpg
  - name: Webpack
    text: Webpack est un module bundler incontournable aujourd'hui dans le développement d'application en javascript. Il permet de séparer en module indépendant les différentes ressources lors du développement, de minifier le tout, préparer une version packagée, légère et exécutable pour la production.
    img: webpack.jpg
  - name: Vuetify
    text: Vuetify est une bibliothèque de composants réutilisables pour vuejs permettant de mettre en place facilement une expérience utilisateur digne des grandes applications de google grâce à un design minimal et clair appelé "MATERIAL DESIGN".
    img: vuetify.jpg

bottomPicture: screen-pwa-weather-app.jpg
---

L'enjeu des P.W.A ( pour progressive web app) n'est plus une simple légende... Nous sommes aujourd'hui capable de proposer aux utilisateurs [l'expérience d'une application native grâce au technologies web](https://websylvain.com/dev/progressive/webapp/technologies/progressive-web-apps)

L'application météo est parfait pour répondre à cet objectif, en effet plusieurs spécificités sont necessaires à son bon fonctionnement. Elle doit être conforme aux recommandation faite par google quant au P.W.A.

**App Like et responsive**: L' application doit avoir un design et une expérience d'usage similaire à une application native. Bien entendu, elle doit aussi s'adapter automatique à la taille de l'écran sur lequelle elle est consultée.

**Connectivity independant**: contrairement à un simple site web; si le smartphone n'est pas connecté au wifi ou au réseau 3G, 4G [...], les contenus ayant été consultés lors d'une précédente visite sont toujours accessibles.

**Linkable & discoverable** et **Easily installable**: Doit pouvoir être accessible, consultée et ajoutée à l'écran d'accueil du smartphone grâce à une simple URL.

**Safe**: Toute les requètes faites par l' application doivent être sécurisées.

**Fresh**: L'usager doit toujours avoir accès à la dernière version de l'application. Au même titre que lorsque l'on consulte un site web nous avons accès à la dernière version en production.

**Benefit From Native Features**: Elle doit être capable de fournir à l'utilisateur les informations météorologique de l'endroit où il se trouve grâce a la fonction GPS de son support mobile (téléphone, tablette, laptop...).

Disponible sur ce [repo github](https://github.com/webdev-happiness/progressive-weather-app)