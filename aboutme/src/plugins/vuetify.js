/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { aliases, mdi } from 'vuetify/iconsets/mdi'


// Composables
import { createVuetify } from 'vuetify'
import { brown, green } from 'vuetify/util/colors'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      green: { 
        dark: true,
        colors: { 
          primary: '#1E244F', 
          secondary: '#1E244F', 
          accent: '#CDDC39', 
          error: '#FF5722', 
          success: '#00E676',
          background: '#2B521E',
          surface: '#1E244F',
          text: '#1E244F',
        },
      },
      brown: { 
        dark: false,
        colors: { 
          primary: '#1E244F', 
          secondary: '#1E244F', 
          accent: '#CDDC39', 
          error: '#FF5722', 
          success: '#00E676',
          background: brown.darken4,
          surface: '#1E244F',
          text: '#1E244F',
        },
      },
    },
    defaultTheme: 'dark',
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})
