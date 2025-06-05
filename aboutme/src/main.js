/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import { createPinia } from 'pinia'

// Подключаем стили шрифтов
import './assets/fonts.css'

// Components
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import emailjs from '@emailjs/browser'

// Composables
import { createApp } from 'vue'

// Analytics
import { inject } from '@vercel/analytics'

// SEO
import { createHead } from '@vueuse/head'

// EmailJS конфигурация
import { emailjsConfig } from './config/emailjs'

// Инициализация EmailJS с жестко закодированными значениями из конфиг файла
try {
  emailjs.init(emailjsConfig.publicKey);
  console.log('EmailJS initialized successfully with config:', 
    { serviceId: '✓', templateId: '✓', publicKey: '✓' });
} catch (error) {
  console.error('Failed to initialize EmailJS:', error);
}

const app = createApp(App)
const head = createHead()

registerPlugins(app)

// Оптимизация производительности
app.config.performance = true

// Добавляем аналитику в режиме production
if (process.env.NODE_ENV === 'production') {
  inject();
}

app.use(createPinia())
app.use(head)
app.use(router)
app.use(vuetify)

app.mount('#app')
