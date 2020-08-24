import colors from 'vuetify/es5/util/colors'

export default {
 
  mode: 'spa',

  target: 'server',
  
  head: {
    script: [
      {
        src: 'imageMapResizer.min.js'
      }
    ],
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  
  css: [
  ],
 
  plugins: [
  ],
 
  components: true,
 
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth'
  ],

  auth: {

    strategies: {
      local: {
        endpoints: {
          login: { url: '/login', method: 'post', propertyName: 'access_token' },
          logout: { url: '/logout', method: 'post' },
          user: { url: '/user', method: 'get' , propertyName: 'user'}
        },
      }
    },

    redirect: {
      login: '/auth/login',
      home: '/level/4',
    },
  },

  axios: {
    baseURL: 'http://ad5d960e6cad.ngrok.io/api',
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    rtl:true,
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  
  build: {
  }
}
