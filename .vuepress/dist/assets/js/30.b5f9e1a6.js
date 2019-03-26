(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{317:function(e,s,t){e.exports=t.p+"assets/img/vue-cli-3.4503740f.png"},389:function(e,s,t){"use strict";t.r(s);var a=t(43),n=Object(a.a)({},function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("img",{attrs:{src:t(317),alt:"Vue 3 CLI"}}),e._v(" "),a("a",{attrs:{href:"https://cli.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Voir la documentation officielle"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Traduction de l'"),a("a",{attrs:{href:"https://naturaily.com/blog/pwa-vue-cli-3",target:"_blank",rel:"noopener noreferrer"}},[e._v("article paru dans naturaily.com"),a("OutboundLink")],1),e._v(" le 6 aout 2018")]),e._v(" "),a("p",[e._v("Dans un article précédent à propos de Vue CLI 3.0 j'ai mentionner que le support du plugin PWA était a mon avis une des meilleures fonctionnalités. Dans ce post, j'aimerais vous introduire au monde de la "),a("strong",[e._v("PWA en utilisant Vue CLI 3.0")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"avant-toute-chose-qu-est-que-le-pwa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#avant-toute-chose-qu-est-que-le-pwa","aria-hidden":"true"}},[e._v("#")]),e._v(" Avant toute chose, qu'est que le PWA ?")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://websylvain.com/posts/progressive-web-apps.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Progressive Web App"),a("OutboundLink")],1),e._v(" est un concept qui améliore l'expérience utilisateur dans les applications web, en les rendant fiables, rapides et accueillantes, selon la description de Google Developper.Lors de Goofle I/O « 17 à propos de la présentation des PWA, il a été mentionner que dans le top 1000 des apps mobiles contre le top 1000 des web mobiles caractéristiques, les mobiles wev ont 3 fois plus de visiteurs uniques que les apps natives, mais ce qui est plus intéressant sont les statiques à propos du temps moyen passer dessus.")]),e._v(" "),a("p",[e._v("Les utilisateurs d'apps Natives y passent plus de 20 fois plus de temps que les utilisateurs de web mobiles ! cette statistique est écrasante ! mais il y a une explication a ça ! les Apps natives son t plus accueillantes que les pages web. il est bien plus facile de juste taper sur une icône sur son écran d'accueil que le taper une longue URL. les app Natives son aussi conçu pour les mobiles, que ce soit en termes de design graphique, de caractéristiques et du point de vue technique. Contrairement au web apps, les app natives ont des notifications push, accès a votre caméra, votre micro, mais est que c'est toujours vrai ? Non ! PWA peut faire ça aussi !")]),e._v(" "),a("h2",{attrs:{id:"les-caracteristiques-des-pwa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#les-caracteristiques-des-pwa","aria-hidden":"true"}},[e._v("#")]),e._v(" Les caractéristiques des PWA")]),e._v(" "),a("p",[e._v("PWA est une stratégie orientée mobile de création d'application web, voici comment Google décrit sur son site les 3 caractéristiques clés des PWA :")]),e._v(" "),a("ul",[a("li",[e._v("fiables,")]),e._v(" "),a("li",[e._v("rapides,")]),e._v(" "),a("li",[e._v("Accueillantes,\nmais qu'est ce que ça signifie vraiment pour l'utilisateur ?")])]),e._v(" "),a("p",[e._v("Selon moi, ça signifie :")]),e._v(" "),a("ul",[a("li",[e._v("accessible hors ligne - pour fournir de la fiabilité")]),e._v(" "),a("li",[e._v("rapide sur dans toutes les conditions de réseau et n'importe quel appareil,")]),e._v(" "),a("li",[e._v("installable sur votre écran d'accueil - pour être accueillant")])]),e._v(" "),a("p",[e._v("Vous pourrez trouver dans lighthoiuse et la section checkliste et tout au long de l'article d'autres caractéristiques.")]),e._v(" "),a("h2",{attrs:{id:"pwa-dans-vue-—-premier-contact"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pwa-dans-vue-—-premier-contact","aria-hidden":"true"}},[e._v("#")]),e._v(" PWA dans Vue — premier contact")]),e._v(" "),a("p",[e._v("Vue CLI 3.0 introduit une structure de plugin d'application, merci, car grâce a ça vous pouvez facilement ajouter le plugin PWA a vos app quand vous le voulez.")]),e._v(" "),a("p",[e._v("Pour ajouter le plugin PWA a un projet d'app Vue CLI 3.0 existants, tapez simplement dans votre console :")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("vue add @vue/pwa\n")])])]),a("p",[e._v("Vue CLI genetators vas créer tous les fichiers nécessaires pour faire votre app PWA ready.")]),e._v(" "),a("p",[e._v("quand depuis le début vous savez que vous avez besoin de PWA dans votre nouvelle app vous pouvez utiliser")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("vue create "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("app-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("p",[e._v("et simplement choisir dans le configurateur l'option 'PWA support'")]),e._v(" "),a("p",[e._v("Quand vous avez installé votre plugin ou créé votre app, vous trouverez dans l'arbre de votre app 3 fichiers qui sont cruciaux dans les app PWA.")]),e._v(" "),a("p",[e._v("ces fichiers sont :")]),e._v(" "),a("ul",[a("li",[e._v("manifest.json")]),e._v(" "),a("li",[e._v("registerServiceWorker.js")]),e._v(" "),a("li",[e._v("et quelques autres moins intéressants.")])]),e._v(" "),a("p",[e._v("Je les décrirais plus en détail les plus importantes dans les prochaines sections de cet article.")]),e._v(" "),a("h2",{attrs:{id:"rendez-votre-web-app-installable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rendez-votre-web-app-installable","aria-hidden":"true"}},[e._v("#")]),e._v(" Rendez votre web app installable")]),e._v(" "),a("p",[e._v("Une de manière de rendre votre app plus accueillante est de la rendre installable. Grâce à ça les utilisateurs peuvent avoir un accès facile a votre site juste d'en simple tap sur l'icône de leur écran d'accueil, ce qui est beaucoup plus rapide et facile que de taper une URL entière. Pour rendre cela possible, vous avez juste à créer et/ou remplir le fichier manifest. Les manifest fournis les informations cruciales à propos de votre application, comme les noms de l'app, une icône a affiché sur l'écran ou plus. Vous pouvez trouver la liste entière des réglages dans la documentation officielle "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Manifest",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN web doc"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Vue CLI 3.0 et le plugin PWA vont créer un fichier manifest.json par défaut pour vous, mais rappelez-vous de le personnaliser pour vos besoins ! voici a a quoi ressemble le fichier manifest.json par défaut (le fichier est situé dans le dossier /public) :")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"pwa"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"short_name"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"pwa"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"icons"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"src"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/img/icons/android-chrome-192x192.png"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"sizes"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"192x192"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"type"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"image/png"')]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"src"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/img/icons/android-chrome-512x512.png"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"sizes"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"512x512"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"image/png"')]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"start_url"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/index.html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"display"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"standalone"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"background_color"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"# 000000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"theme_color"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"#4DBA87"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("Le template PWA va aussi générer un ensemble d'icônes qui seront utilisées pour représenter votre app sur les mobiles. Imo, est une bonne référence de la taille de ce que vous devriez utiliser pour que votre app soit jolie sur un écran d'accueil.")]),e._v(" "),a("p",[e._v("manifest.json n'est pas le seul endroit ou vous pouvez jeter un œil pour rendre votre app installable. Quelques autres réglages peuvent être effectués depuis le fichier vue.config.js, vous pouvez y changer des caractéristiques comme la couleur du thème, la couleur MS Tile, ou indiquer que votre app ne supporte pas les appareils Apple avant iOS 11.3 (vous pouvez lire plus à propos du support des PWA sur les appareils Apple dans la section appareils Apple).")]),e._v(" "),a("p",[e._v("Pour une liste complète des réglages que vous pouvez faire dans le fichier vue.config.js et des exemples, jetez un œil "),a("a",{attrs:{href:"https://www.npmjs.com/package/@vue/cli-plugin-pwa/v/3.0.0-rc.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("ici"),a("OutboundLink")],1),e._v(" :")]),e._v(" "),a("h2",{attrs:{id:"les-services-workers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#les-services-workers","aria-hidden":"true"}},[e._v("#")]),e._v(" Les Services Workers")]),e._v(" "),a("p",[e._v("Service Workers est un script qui tourne en arrière-plan et qui permet a votre app de fonctioner en ligne, mais aussi hors ligne, ce qui est une des caractéristiques des PWA.")]),e._v(" "),a("p",[e._v("La principale caractéristique des services workers utiliser dans les PWA et leur capacité a intercepté et gérer les requêtes serveur qui d'habitude sont faites en utilisant le cache, mais merci aux services workers, car vous pouvez faire bien plus que mettre en cacher vos requêtes réseau. en utilisant les services workers vous pouvez aussi faire des synchronisations en arrière plan et des notifications push.")]),e._v(" "),a("p",[e._v("Pour faire fonctionner vos 'Services Workers' aujourd'hui, il y a deux prérequis :")]),e._v(" "),a("h3",{attrs:{id:"_1-prise-en-charge-du-navigateur"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-prise-en-charge-du-navigateur","aria-hidden":"true"}},[e._v("#")]),e._v(" 1. prise en charge du Navigateur")]),e._v(" "),a("p",[e._v("Pendant très longtemps, le problème crucial avec les 'service workers' était un manque de soutien de tous les navigateurs. Aujourd'hui, la situation\nparait plus optimiste et la plupart des navigateurs prennent en charge les SW. vous pouvez trouver plus de détails sur la page de Jake Archibald.")]),e._v(" "),a("h3",{attrs:{id:"_2-https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-https","aria-hidden":"true"}},[e._v("#")]),e._v(" 2. HTTPS")]),e._v(" "),a("p",[e._v("Les Services Workers sont une chose très puissante.il peut fabriquer et filtrer vos data ou détourner des connexions. C'est pour ça que l'HTTPS est si important.")]),e._v(" "),a("p",[e._v("si vous voulez en lire plus sur les Services Worker, je vous recommande de vous regarder de façon plus approfondie "),a("a",{attrs:{href:"https://developers.google.com/web/fundamentals/primers/service-workers/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ici"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"que-devont-nous-mettre-en-cache-et-comment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#que-devont-nous-mettre-en-cache-et-comment","aria-hidden":"true"}},[e._v("#")]),e._v(" Que devont nous mettre en cache et comment ?")]),e._v(" "),a("blockquote",[a("p",[e._v("Il y a seulement deux choses de difficiles dans les sciences informatiques :\nla validation des caches et nommer les choses")]),e._v(" "),a("p",[e._v("~ Phil Karlton")])]),e._v(" "),a("p",[e._v("Pour que votre app fonctionne hors ligne, il est important de mettre en cache les fichiers appropriés et les ressources d'une manière appropriée. dans les cas d'application web, ça sera le plus souvent :")]),e._v(" "),a("ul",[a("li",[e._v("les principaux Javascripts de l'app et les fichiers CSS")]),e._v(" "),a("li",[e._v("les fonts")]),e._v(" "),a("li",[e._v("les images")]),e._v(" "),a("li",[e._v("les requêtes HTTP cruciales")])]),e._v(" "),a("p",[e._v("il n'y a pas de règle universelle sur ce que vous devez mettre en cache dans votre application, donc la décision finale vous devez la faire selon ce qui est le meilleur pour votre application")]),e._v(" "),a("p",[e._v("Il y a une décision que vous devez prendre dans ce cas : comment aller vous mettre en cache ces fichiers.")]),e._v(" "),a("p",[e._v("Vue CLI 3.0 utilise sous le capot "),a("strong",[e._v("workbox")]),e._v(" pour faire fonctionner les services workers, voici quelques stratégies disponibles :")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("cacheFirst")]),e._v(" "),a("ul",[a("li",[e._v("correspond le mieux : Fonts, Images")])])]),e._v(" "),a("li",[a("p",[e._v("networkFirst")]),e._v(" "),a("ul",[a("li",[e._v("correspond le mieux : requêtes réseau")])])]),e._v(" "),a("li",[a("p",[e._v("staleWhileRevalidate")]),e._v(" "),a("ul",[a("li",[e._v("correspond le mieux : pour les fichiers JS et CSS qui ne sont pas précacher")])])])]),e._v(" "),a("p",[e._v("Voici a quoi cela peu ressembler dans les fichiers Vue Service Worker, le code Service Worker est assez explicite :")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[e._v("workbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("setConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  debug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\nworkbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("precaching"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("precacheAndRoute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\nworkbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("routing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("registerRoute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token regex"}},[e._v("/\\.(?:png|gif|jpg|jpeg|svg)$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  workbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("strategies"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("staleWhileRevalidate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    cacheName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"images"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("workbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("expiration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Plugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        maxEntries"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        maxAgeSeconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("30")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("24")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("60")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("60")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 30 jours")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\nworkbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("routing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("registerRoute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("RegExp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://some-fancy-api.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  workbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("strategies"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("networkFirst")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    cacheName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"api"')]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\nworkbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("routing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("registerRoute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("RegExp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://fonts.(?:googleapis|gstatic).com/(.*)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  workbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("strategies"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cacheFirst")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    cacheName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"googleapis"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("workbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("expiration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Plugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        maxEntries"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("30")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("Rappelez-vous d'enregistrer vos services worker dans votre app. Vue CLI a créer le fichier "),a("strong",[e._v("registerServiceWorker")]),e._v(" pour vous, et voilà a quoi il ressemble :")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" register "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"register-service-worker"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("NODE_ENV")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"production"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("register")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token string"}},[e._v("`")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[e._v("${")]),e._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("BASE_URL")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[e._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("service-worker.js`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ready")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"App is being served from cache by a service worker.\\n"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"For more details, visit https://goo.gl/AFskqB"')]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cached")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Content has been cached for offline use."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("updated")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"New content is available; please refresh."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("offline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"No internet connection found. App is running in offline mode."')]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Error during service worker registration:"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("NOTE : rappeler vous de donner le même nom au fichier service worker que ceux dans registerServiceWorker. Dans ce cas service-worker.js.")]),e._v(" "),a("p",[e._v("pour plus d'information sur l'utilisation de workbox jeter un œil "),a("a",{attrs:{href:"https://developers.google.com/web/tools/workbox/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ici"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"acces-hardware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acces-hardware","aria-hidden":"true"}},[e._v("#")]),e._v(" Accès hardware")]),e._v(" "),a("p",[e._v("Un des plus grands avantages des apps mobiles native est l'accessibilité aux caractéristiques hardware comme la camera, la géolocalisation, Bluetooth, etc., mais de nos jours même les applications web peuvent avoir accès a beaucoup de caractéristiques de vos mobiles ou ordinateur portables. Bien sûr, beaucoup dépendent de votre navigateur, et les apps mobiles natives continuent d'avoir un meilleur accès, mais les web apps n'ont pas de quoi avoir honte.")]),e._v(" "),a("p",[e._v("Si vous êtes intéressé par ce que le web peut faire aujourd'hui vous devriez visiter ce "),a("a",{attrs:{href:"https://whatwebcando.today/",target:"_blank",rel:"noopener noreferrer"}},[e._v("lien"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Je vais passer la manière dont on implémente accès a la camera ou au Bluetooth dans votre app Vue, parce que ce n'est pas le propos de cet article et le web est plein de ressources mieux écrites sur comment utiliser ses caractéristiques natives.")]),e._v(" "),a("h2",{attrs:{id:"pwa-sur-les-appareils-apple"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pwa-sur-les-appareils-apple","aria-hidden":"true"}},[e._v("#")]),e._v(" PWA sur les appareils Apple")]),e._v(" "),a("p",[e._v("PWA est une technologie largement supporter par google, c'est grâce à ça quelle fonctionne sur tous les appareils Android, mais c'est légèrement plus problématique sur les appareils iOS.")]),e._v(" "),a("p",[e._v("Apple a déjà montré la prise en charge des PWA sur les appareils iOS, donc ce n'est qu'une question de temps. Ils ont cependant beaucoup de travail devant eux pour être aussi bons que Google dans ce domaine.")]),e._v(" "),a("p",[e._v("La version iOS 11.3 est une lueur d'espoir pour les PWA. cette mise a jour arrive avec la prise en charge des caractéristiques fondamentales des PWA sur les appareils mobiles Apple, comme les services workers et les fichiers manifest de l'app.")]),e._v(" "),a("p",[e._v("Même avec ça, développer une app pour un appareil Apple demande beaucoup plus de concentration de la part du développeur qu'il est nécessaire pour une app Android. il reste des problèmes avec l'écran de démarrage, les boutons de l'écran d'accueil, la navigation, la persistance des données, etc.")]),e._v(" "),a("p",[e._v("certain de ces problèmes on été hacker par netguru développeurs, vous pouvez lire plus a ce propos "),a("a",{attrs:{href:"https://www.netguru.co/codestories/few-tips-that-will-make-your-pwa-on-ios-feel-like-native",target:"_blank",rel:"noopener noreferrer"}},[e._v("ici"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Générer un écran de démarrage est beaucoup plus facile avec l'outil Appscope.")]),e._v(" "),a("h2",{attrs:{id:"lighthouse-et-la-liste-pwa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lighthouse-et-la-liste-pwa","aria-hidden":"true"}},[e._v("#")]),e._v(" Lighthouse et la liste PWA")]),e._v(" "),a("p",[e._v("PWA est soutenu par Google, ils ont sorti des outils et des notes, qui pourraient vous aider à écrire votre PWA parfaite.")]),e._v(" "),a("p",[e._v("Lighthouse est un plugin inclus dans Chrome qui vous permet de faire un audit de votre application selon différents angles, l'un d'eux est aussi la PWA. l'audit Lighthouse des PWA va automatiquement vérifié pour vous les caractéristiques telles que :")]),e._v(" "),a("ul",[a("li",[e._v("l'enregistrement des services worker,")]),e._v(" "),a("li",[e._v("la configuration de l'écran de démarrage,")]),e._v(" "),a("li",[e._v("la réponse du site hors ligne,")]),e._v(" "),a("li",[e._v("la présence de l'HTTPS,")]),e._v(" "),a("li",[e._v("la vitesse en connexion 3G,")]),e._v(" "),a("li",[e._v("et beaucoup d'autres")])]),e._v(" "),a("p",[e._v("L'audit PWA Lighthouse vérifiera seulement les parties requises par la liste de base des PWA, mais même s'il y a des choses que vous devrez vérifier manuellement comme : que fonctionnement avec différents navigateurs, que chaque page a une URL ou que les transitions de page ne donnent pas l'impression d'être bloqué par la connexion réseau.")]),e._v(" "),a("h2",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[e._v("Les PWA ont encore un long chemin à faire, mais c'est sur de très bons rails !")]),e._v(" "),a("p",[e._v("j'espère qu'Apple va bientôt prendre en charge complètement les PWA parce que ça aiderait les PWA à devenir bien plus une technologie populaire. Merci a Vue CLI 3.0, car faire des apps PWA est de la tarte, et merci a la structure en plugin qui vous permet de facilement inclure les PWA dans vos projets a n'importe quel moment du développement.")]),e._v(" "),a("p",[e._v("Tout ce dont vous avez besoin de vous préoccuper c'est de préparer les graphismes et prendre les décisions sur ce que vous voulez mettre en cache, le plugin PWA Vue fera le sale boulot pour vous.")])])},[],!1,null,null,null);n.options.__file="utiliser-plugin-pwa-vue-cli-3.md";s.default=n.exports}}]);