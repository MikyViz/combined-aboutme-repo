<template>
  <v-footer class="mt-8 pt-6 footer-background family-guy-nav">
    <v-container>
      <v-row>        
        <!-- Информация о сайте в стиле Family Guy -->
        <v-col cols="12" md="4" class="text-center text-md-left">          
          <div class="text-h5 font-weight-bold mb-4 family-guy-title">
            🏠 {{ t('footer.title') }}
          </div>
          <div class="mb-4 family-guy-text">{{ t('footer.description') }}</div>
          <div class="mb-3 family-guy-text">
            <em>"Holy crap! This footer is better than Cleveland's comebacks!" 😄</em>
          </div>
          <div>
            <v-btn icon variant="text" color="primary" class="mr-2 family-guy-icon family-guy-btn" href="mailto:vizenovsky@gmail.com">
              <v-icon>mdi-email</v-icon>
            </v-btn>
            <v-btn icon variant="text" color="primary" class="mr-2 family-guy-icon family-guy-btn" href="tel:+972583278593">
              <v-icon>mdi-phone</v-icon>
            </v-btn>
            <v-btn icon variant="text" color="primary" class="mr-2 family-guy-icon family-guy-btn" href="https://www.linkedin.com/in/mikyviz" target="_blank">
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
            <v-btn icon variant="text" color="primary" class="mr-2 family-guy-icon family-guy-btn" href="https://github.com" target="_blank">
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </div>
        </v-col>        
        
        <!-- Навигация в стиле Family Guy -->
        <v-col cols="12" md="4" class="text-center">
          <div class="text-h6 font-weight-medium mb-4 family-guy-title">
            🧭 {{ t('footer.navigation') }}
          </div>
          <div class="d-flex flex-column">
            <v-btn variant="text" class="mb-1 family-guy-btn family-guy-text" to="/">🏠 {{ t('footer.home') }}</v-btn>
            <v-btn variant="text" class="mb-1 family-guy-btn family-guy-text" to="/about">👨‍💻 {{ t('footer.about') }}</v-btn>
            <v-btn variant="text" class="mb-1 family-guy-btn family-guy-text" to="/frontEnd">🎨 {{ t('footer.frontendProjects') }}</v-btn>
            <v-btn variant="text" class="mb-1 family-guy-btn family-guy-text" to="/backEnd">⚙️ {{ t('footer.backendProjects') }}</v-btn>
            <v-btn variant="text" class="mb-1 family-guy-btn family-guy-text" to="/npmPackages">📦 NPM Packages</v-btn>
            <v-btn variant="text" class="mb-1 family-guy-btn family-guy-text" to="/contactMe">📧 {{ t('footer.contacts') }}</v-btn>
          </div>
        </v-col>        
        
        <!-- Технологии в стиле Family Guy -->
        <v-col cols="12" md="4" class="text-center text-md-right">
          <div class="text-h6 font-weight-medium mb-4 family-guy-title">
            ⚡ {{ t('footer.techStack') }}
          </div>
          <v-chip-group>
            <v-chip color="primary" variant="outlined" class="ma-1 family-guy-btn">Vue.js 🖖</v-chip>
            <v-chip color="secondary" variant="outlined" class="ma-1 family-guy-btn">React.js ⚛️</v-chip>
            <v-chip color="accent" variant="outlined" class="ma-1 family-guy-btn">Vuetify 💎</v-chip>
            <v-chip color="primary" variant="outlined" class="ma-1 family-guy-btn">JavaScript 🚀</v-chip>
            <v-chip color="secondary" variant="outlined" class="ma-1 family-guy-btn">HTML5 📄</v-chip>
            <v-chip color="accent" variant="outlined" class="ma-1 family-guy-btn">CSS3 🎨</v-chip>
            <v-chip color="primary" variant="outlined" class="ma-1 family-guy-btn">Node.js 🌟</v-chip>
          </v-chip-group>
        </v-col>
      </v-row>

      <v-divider class="my-4"></v-divider>
      
      <!-- Нижняя часть футера в стиле Family Guy -->      
      <div class="d-flex flex-column flex-md-row justify-space-between align-center">
        <div class="text-body-2 text-medium-emphasis family-guy-text">
          &copy; {{ (new Date()).getFullYear() }} Miky Vizenovsky. {{ t('footer.rights') }} 🏠
        </div>        <div class="text-body-2 text-medium-emphasis mt-2 mt-md-0 family-guy-text">
          {{ t('footer.madeWith') }} <v-icon color="red" size="small">mdi-heart</v-icon> {{ t('footer.and') }} <v-icon color="primary" size="small">mdi-vuejs</v-icon> (just like Peter loves his beer! 🍺)
        </div>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup>
import { t } from '@/translations';
</script>

<style scoped>
.footer-background {
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.15);
  background: linear-gradient(135deg, var(--v-theme-surface) 0%, var(--v-theme-surface-variant) 100%);
  border-top: 3px solid var(--v-theme-primary);
}

.v-btn {
  text-transform: none;
}

.v-chip {
  transition: all 0.3s ease;
  border-radius: 20px !important;
}

.v-chip:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: wiggle 0.5s ease-in-out;
}

/* Family Guy анимация покачивания */
@keyframes wiggle {
  0%, 7% { transform: translateY(-3px) scale(1.05) rotateZ(0deg); }
  15% { transform: translateY(-3px) scale(1.05) rotateZ(-5deg); }
  20% { transform: translateY(-3px) scale(1.05) rotateZ(5deg); }
  25% { transform: translateY(-3px) scale(1.05) rotateZ(-5deg); }
  30% { transform: translateY(-3px) scale(1.05) rotateZ(5deg); }
  35% { transform: translateY(-3px) scale(1.05) rotateZ(-2deg); }
  40%, 100% { transform: translateY(-3px) scale(1.05) rotateZ(0deg); }
}

/* Анимация социальных иконок в стиле Family Guy */
.v-btn.v-btn--icon {
  transition: all 0.3s ease;
  border-radius: 50% !important;
}

.v-btn.v-btn--icon:hover {
  transform: scale(1.3) rotate(15deg);
  background-color: rgba(var(--v-theme-primary), 0.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Анимация навигационных кнопок */
.family-guy-btn:hover {
  background-color: rgba(var(--v-theme-primary), 0.1) !important;
  transform: scale(1.05) !important;
}
</style>
