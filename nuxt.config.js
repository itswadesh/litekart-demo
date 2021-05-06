require('dotenv').config()
const axios = require('axios')
const { API_URL, head, HOST } = require('./config')
const PROXY = process.env.API_URL || API_URL

export default {
  mode: 'universal',
  head,
  loading: '~/components/ui/Loading.vue',
  css: [],
  plugins: [
    { src: '~/plugins/VueYoutube.js', mode: 'client' },
    { src: '~/plugins/swal.js', mode: 'client' },
    { src: '~/plugins/filters.js' },
    { src: '~/plugins/init.js', mode: 'client' },
    { src: '~/plugins/lazy.js', mode: 'client' },
    { src: '~/plugins/scroll.js', mode: 'client' },
    { src: '~/plugins/carousel.js', mode: 'client' },
    { src: '~/plugins/vue-slider-component', mode: 'client' } // Price slider
  ],
  buildModules: ['@nuxtjs/tailwindcss'],
  modules: [
    '~/modules/routes',
    '@nuxtjs/robots',
    '@nuxtjs/axios',
    // '@nuxtjs/proxy',
    // '@nuxtjs/sitemap',
    '@nuxtjs/font-awesome',
    '@nuxtjs/pwa',
    '@nuxtjs/toast',
    'cookie-universal-nuxt'
  ],
  toast: {
    theme: 'bubble',
    position: 'top-center',
    singleton: true
  },
  axios: {
    // host: PROXY,
    // baseURL: '/api/',
    // browserBaseURL: '/api/',
    // prefix: '/api/',
    proxy: true,
    credentials: true
  },
  proxy: {
    '/api/': PROXY,
    '/auth': PROXY,
    '/images': PROXY
  },
  generate: {
    dir: 'dist',
    fallback: true
  },
  build: {
    babel: {
      presets({ isServer }) {
        const targets = isServer ? { node: 'current' } : { ie: 11 }
        return [[require.resolve('@babel/preset-env'), { targets }]]
      },
      plugins: [
        '@babel/syntax-dynamic-import',
        '@babel/transform-runtime',
        '@babel/transform-async-to-generator'
      ]
    },
    parallel: true
  }
  // sitemap: {
  //   path: '/sitemap.xml',
  //   hostname: HOST,
  //   cacheTime: 1000 * 60 * 15,
  //   gzip: true,
  //   exclude: ['/my/', '/my/**'],
  //   routes() {
  //     return axios.all([
  //       axios.get(PROXY + '/api/products?limit=100'),
  //       axios.get(PROXY + '/api/categories?limit=300')
  //     ])
  //       .then(axios.spread((product, category) => [
  //         // ...product.data.data.map(product => `/${product.slug}?id=${product._id}`),
  //         ...category.data.data.map(category => `/${category.slug}/`)
  //       ]))
  //   }
  // }
}
