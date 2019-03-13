const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** SEO meta 設２
   */
  head: {
    title: 'B.P.S Design 布札空間創藝',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0'
      },
      { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '室內設計,建築設計,空間設計,高雄,B.P.S Design,布札空間創藝'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          '前身是由陳雅昌(Jack Interion Stuido)個人工作室發展而來，1998年於高雄創立。2007年陳淑鈴加入改制為建築室內設計裝修公司，陳雅昌建築室內設計師帶領建築、室內裝修設計及工程團隊創作、建造多樣貌作品，從室內空間到整棟建築都呈現堅實持衡風格和水準。'
      },
      // fb seo
      {
        hid: 'og-title',
        property: 'og:title',
        content: 'B.P.S Design 布札空間創藝'
      },
      {
        hid: 'og-description',
        property: 'og:description',
        content:
          '前身是由陳雅昌(Jack Interion Stuido)個人工作室發展而來，1998年於高雄創立。2007年陳淑鈴加入改制為建築室內設計裝修公司，陳雅昌建築室內設計師帶領建築、室內裝修設計及工程團隊創作、建造多樣貌作品，從室內空間到整棟建築都呈現堅實持衡風格和水準。'
      },
      { hid: 'og-type', property: 'og:type', content: 'website' },
      {
        hid: 'og-site_name',
        property: 'og:site_name',
        content: 'B.P.S Design 布札空間創藝'
      },
      {
        hid: 'og-url',
        property: 'og:url',
        content: 'https://bpsdesign.com/'
      },
      {
        hid: 'og-image',
        property: 'og:image',
        content: 'https://bpsdesign.com/seo-fb.jpg'
      },
      { property: 'og:locale', content: 'zh_TW' },
      // twitter seo
      { hid: 'twitter-card', name: 'twitter:card', content: 'app' },
      {
        hid: 'twitter-site',
        name: 'twitter:site',
        content: 'B.P.S Design 布札空間創藝'
      },
      {
        hid: 'twitter-description',
        name: 'twitter:description',
        content:
          '前身是由陳雅昌(Jack Interion Stuido)個人工作室發展而來，1998年於高雄創立。2007年陳淑鈴加入改制為建築室內設計裝修公司，陳雅昌建築室內設計師帶領建築、室內裝修設計及工程團隊創作、建造多樣貌作品，從室內空間到整棟建築都呈現堅實持衡風格和水準。'
      },
      {
        hid: 'twitter-app:name:iphone',
        name: 'twitter:app:name:iphone',
        content: 'B.P.S Design 布札空間創藝'
      },
      {
        hid: 'twitter-app:name:ipad',
        name: 'twitter:app:name:ipad',
        content: 'B.P.S Design 布札空間創藝'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // 引入 google font 字體
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Cinzel:400,900'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    '~assets/styles/normalize.css',
    '~assets/styles/global.scss'
    // 'element-ui/lib/theme-chfalk/index.css',
    // 'swiper/dist/css/swiper.css',
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/i18n.js' }
    // { src: '@/plugins/element-ui' },
    // { src: '~/plugins/vue-awesom-swiper', ssr: false },
    // { src: '~/plugins/scroll-magic.js', ssr: false },
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // 全域 sass 變數設定
    '@nuxtjs/style-resources'
  ],
  // 全域 sass (變數、mixin、extend... ) 檔案引入設定
  styleResources: {
    scss: ['./assets/styles/variables.scss']
  },

  // i18n 路由
  router: {
    middleware: 'i18n'
  },

  /*
   ** 設置 Axios 預設值
   */
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000'
    // credentials: false
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
