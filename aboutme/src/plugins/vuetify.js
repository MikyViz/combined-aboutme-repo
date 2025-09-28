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
          primary: '#4A90E2', // Питер's синяя рубашка
          secondary: '#F5A623', // желтый как у Гомера (но мы тут Family Guy)
          accent: '#7ED321', // яркий зеленый как трава во дворе Гриффинов
          error: '#D0021B', // красный как помада у Лоис
          success: '#50E3C2', // мятный зеленый
          warning: '#F5A623', // оранжевый
          info: '#4A90E2', // синий
          background: '#F8F9FA', // очень светлый фон как в мультике
          surface: '#FFFFFF', // чистый белый для карточек
          'surface-variant': '#E3F2FD', // светло-голубой
          'on-background': '#212529', // темный текст на светлом фоне
          'on-surface': '#212529',
          'on-primary': '#FFFFFF',
          'on-secondary': '#000000',
          'on-accent': '#000000',
        },
      },
      dark: { 
        dark: true,
        colors: { 
          primary: '#5DADE2', // более яркий синий для темной темы
          secondary: '#F39C12', // оранжевый Питера в темном варианте
          accent: '#58D68D', // яркий зеленый
          error: '#E74C3C', // красный
          success: '#2ECC71', // зеленый успех
          warning: '#F39C12', // оранжевый предупреждение
          info: '#3498DB', // синий инфо
          background: '#1A1A2E', // темно-синий фон как ночное небо в Квохоге
          surface: '#16213E', // темно-синяя поверхность
          'surface-variant': '#0F3460', // еще темнее синий
          'on-background': '#EAEDED', // светлый текст на темном фоне
          'on-surface': '#EAEDED',
          'on-primary': '#FFFFFF',
          'on-secondary': '#000000',
          'on-accent': '#000000',
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
