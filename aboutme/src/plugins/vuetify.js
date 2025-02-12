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
      light: { 
        dark: false,
        colors: { 
          primary: '#D7CCC8', // beige primary color
          secondary: '#A1887F', // lighter brown secondary color
          accent: '#FFC107', // light amber accent color
          error: '#FF5722', // red color for errors
          success: '#8BC34A', // light green color for success
          background: '#F5F5DC', // light beige background color
          surface: '#FAF3E0', // even lighter beige for surface
          text: '#5D4037', // dark brown text color
        },
      }
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
