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

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: { 
        dark: false,
        colors: { 
          primary: '#000000', // Clean black
          secondary: '#666666', // Medium gray
          accent: '#0066FF', // Professional blue accent
          error: '#DC3545',
          success: '#28A745',
          warning: '#FFC107',
          info: '#17A2B8',
          background: '#FFFFFF', // Pure white background
          surface: '#F8F9FA', // Light gray for cards
          'surface-variant': '#E9ECEF',
          'on-background': '#212529',
          'on-surface': '#212529',
          'on-primary': '#FFFFFF',
          'on-secondary': '#FFFFFF',
          'on-accent': '#FFFFFF',
        },
      },
      dark: { 
        dark: true,
        colors: { 
          primary: '#FFFFFF', // White text on dark
          secondary: '#B5B5B5', // Light gray
          accent: '#3B9BFF', // Bright blue accent
          error: '#FF5252',
          success: '#4CAF50',
          warning: '#FFC107',
          info: '#2196F3',
          background: '#121212', // True dark background
          surface: '#1E1E1E', // Dark surface
          'surface-variant': '#2C2C2C',
          'on-background': '#FFFFFF',
          'on-surface': '#FFFFFF',
          'on-primary': '#000000',
          'on-secondary': '#000000',
          'on-accent': '#FFFFFF',
        },
      },
    },
    defaultTheme: 'light',
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})
