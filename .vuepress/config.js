
module.exports = {
  title: "Websylvain Développeur web",
  description: "Développeur et Consultant Web Freelance. L'indépendant qui ne vous laissera jamais seul !",
  base: '',
  head: [
    ['link',
      {rel:'stylesheet',
      href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
      integrity:"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",
      crossorigin:"anonymous"}],
    ['meta', { name: 'google-site-verification', content: 'E9stx9fFMrhjIARG8CVHxy_k9azsOf14AIYmH0_Lok0' }]
    /*['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]*/
  ],
  serviceWorker: false,
  plugins: {
    '@vuepress/google-analytics': {
      ga: 'UA-61964631-2',
    }
  },
  themeConfig: {
    domain: 'https://websylvain.com',
    social:{
        instagram: "http://www.instagram.com/websylvain.dev",
        facebook: "https://www.facebook.com/webDevHappiness",
        twitter: "http://www.twitter.com/@websylvain_dev",
        linkedin: "https://www.linkedin.com/in/websylvain/"
    },
    lastUpdated: 'Dernière mise à jour',
    nav: [
          {
            text: 'Accueil',
            link: '/'
          },
          {
            text: 'A propos',
            link: '/a-propos/',
          },
          {
            text: 'Projets',
            link: '/projects/'
          },
          {
            text: 'Les articles',
            link: '/posts/'
          },
          {
            text: 'Contact',
            link: '/contact/'
          }
    ],
    sidebar: {
      '/a-propos/': getDefaultSidebar("A propos"),
      '/posts/': getSideBarForPost()
    }
  }
}

function getDefaultSidebar (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'auteurs/sylvain-pastor.html',
      ]
    }
  ]
}

function getSideBarForPost(){
  return [
    {
      title: "Les derniers cas étudié",
      collapsable: false,
      children: [
        'case-study/sig-annuaire-balade',
      ]
    },
    {
      title: "Les derniers articles",
      collapsable: false,
      children: [
        'seo-vuejs-spa',
        'software-craftmanship-definition',
        'bonnes-mauvaises-habitudes-developpeur-web',
        'utiliser-plugin-pwa-vue-cli-3',
        'developpeur-web-partenaria-jooble'
      ]
    }
  ]
}
