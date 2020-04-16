let env = require('dotenv').config()
export default {

  mode: 'universal',
  /*
   ** Headers of the page
   */
   head: {
    title: 'Particeep Movie App with Vue.Js',
    meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: process.env.npm_package_description || '',
    },
    ],
    link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700,900|Lora:400,500,600,700|Montserrat:200,300,400,500,600,700,800|Rubik:300,400,500,700,900&display=swap' },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
   loading: false,
  /*
   ** Global CSS
   */
   css: [
   '~assets/styles/app.css'
   ],
  /*
   ** Plugins to load before mounting the App
   */
   plugins: [
    '~plugins/observeVisibility'
   ],
  /*
   ** Nuxt.js modules
   */
   modules: [
   '@nuxtjs/axios',
   ],

   axios : {
    baseUrl : 'https://api.themoviedb.org/3'
  },
  /*
   ** Build configuration
   */
   build: {
    /*
     ** You can extend webpack config here
     */
     postcss : {
      plugins : {
        tailwindcss : './tailwind.config.js'
      }
    },
    extend(config, ctx) {},
  },
};
