const BLOG = {
  title: '翼轸的小站',
  author: '翼轸',
  email: 'wz@wzweb.cf',
  link: 'https://yizhensite.vercel.app',
  description: 'This gonna be an awesome website.',
  lang: 'zh-CN',
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#ffffff', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#111827', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Nobelium in a folder
  since: 2021, // if leave this empty, current year will be used.
  postsPerPage: 7,
  sortByDate: false,
  showAbout: true, // WIP
  showArchive: true, // WIP
  socialLink: 'null',
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  analytics: {
    provider: '', // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.craigary.net/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.craigary.net , don't end with a slash
      domainId: 'ed4eb72b-f7dd-4499-ae5f-dfa9b796b9be' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: '' // e.g: G-XXXXXXXXXX
    }
  },
  comment: {
    // support provider: gitalk, utterances, cusdis
    provider: '', // leave it empty if you don't need any comment plugin
    gitalkConfig: {
      repo: '', // The repository of store comments
      owner: '',
      admin: [],
      clientID: '',
      clientSecret: '',
      distractionFreeMode: false
    },
    utterancesConfig: {
      repo: ''
    },
    cusdisConfig: {
      appId: '7f6e33f6-7356-4521-b22c-5e9e4e996eff', // data-app-id
      host: 'https://cusdis.com', // data-host, change this if you're using self-hosted version
      scriptSrc: 'https://cusdis.com/js/cusdis.es.js' // change this if you're using self-hosted version
    }
  }
}
// export default BLOG
module.exports = BLOG
