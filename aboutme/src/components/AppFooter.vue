<template>
  <v-footer class="mt-8 pt-6 footer-background professional-nav">
    <v-container>
      <v-row>        
        <!-- About Section -->
        <v-col cols="12" md="4" class="text-center text-md-left">          
          <div class="text-h5 font-weight-bold mb-4 professional-title">
            {{ t('footer.title') }}
          </div>
          <div class="mb-4 professional-text">{{ t('footer.description') }}</div>
          <div>
            <v-btn icon variant="text" color="primary" class="mr-2 professional-icon professional-btn" href="mailto:vizenovsky@gmail.com">
              <v-icon>mdi-email</v-icon>
            </v-btn>
            <v-btn icon variant="text" color="primary" class="mr-2 professional-icon professional-btn" href="tel:+972583278593">
              <v-icon>mdi-phone</v-icon>
            </v-btn>
            <v-btn icon variant="text" color="primary" class="mr-2 professional-icon professional-btn" href="https://www.linkedin.com/in/mikyviz" target="_blank">
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
            <v-btn icon variant="text" color="primary" class="mr-2 professional-icon professional-btn" href="https://github.com" target="_blank">
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </div>
        </v-col>        
        
        <!-- Navigation -->
        <v-col cols="12" md="4" class="text-center">
          <div class="text-h6 font-weight-medium mb-4 professional-title">
            {{ t('footer.navigation') }}
          </div>
          <div class="d-flex flex-column">
            <v-btn variant="text" class="mb-1 professional-text" to="/">{{ t('footer.home') }}</v-btn>
            <v-btn variant="text" class="mb-1 professional-text" to="/about">{{ t('footer.about') }}</v-btn>
            <v-btn variant="text" class="mb-1 professional-text" to="/projects">{{ t('footer.projects') }}</v-btn>
            <v-btn variant="text" class="mb-1 professional-text" to="/npmPackages">NPM Packages</v-btn>
            <v-btn variant="text" class="mb-1 professional-text" to="/contactMe">{{ t('footer.contacts') }}</v-btn>
          </div>
        </v-col>        
        
        <!-- Tech Stack -->
        <v-col cols="12" md="4" class="text-center text-md-right">
          <div class="text-h6 font-weight-medium mb-4 professional-title">
            {{ t('footer.techStack') }}
          </div>
          <v-chip-group>
            <v-chip variant="outlined" class="ma-1 skill-pill">Vue.js</v-chip>
            <v-chip variant="outlined" class="ma-1 skill-pill">React.js</v-chip>
            <v-chip variant="outlined" class="ma-1 skill-pill">Vuetify</v-chip>
            <v-chip variant="outlined" class="ma-1 skill-pill">JavaScript</v-chip>
            <v-chip variant="outlined" class="ma-1 skill-pill">HTML5</v-chip>
            <v-chip variant="outlined" class="ma-1 skill-pill">CSS3</v-chip>
            <v-chip variant="outlined" class="ma-1 skill-pill">Node.js</v-chip>
            <v-chip variant="outlined" class="ma-1 skill-pill">PHP</v-chip>
            <v-chip variant="outlined" class="ma-1 skill-pill">Laravel</v-chip>
          </v-chip-group>
        </v-col>
      </v-row>

      <v-divider class="my-4"></v-divider>
      
      <!-- Footer Bottom -->      
      <div class="d-flex flex-column flex-md-row justify-space-between align-center">
        <div class="text-body-2 text-medium-emphasis professional-text">
          &copy; {{ (new Date()).getFullYear() }} Miky Vizenovsky. {{ t('footer.rights') }}
        </div>        <div class="text-body-2 text-medium-emphasis mt-2 mt-md-0 professional-text">
          {{ t('footer.madeWith') }} <v-icon color="red" size="small">mdi-heart</v-icon> {{ t('footer.and') }} <v-icon color="primary" size="small">mdi-vuejs</v-icon>
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
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* Переопределяем цвета текста в футере для темной темы */
.v-footer :deep(.professional-title) {
  color: #000000 !important;
}

.v-footer :deep(.professional-text) {
  color: #666666 !important;
}

/* Переопределяем цвет иконок */
.v-footer :deep(.v-icon) {
  color: #000000 !important;
}

/* Сохраняем красный цвет для сердечка */
.v-footer :deep(.v-icon.text-red) {
  color: #FF0000 !important;
}

.v-footer :deep(.mdi-heart) {
  color: #FF0000 !important;
}

/* Переопределяем цвет текста в кнопках */
.v-footer :deep(.v-btn) {
  color: #666666 !important;
}

/* Переопределяем текст с классом text-medium-emphasis */
.v-footer :deep(.text-medium-emphasis) {
  color: #666666 !important;
}

/* Переопределяем текст body-2 */
.v-footer :deep(.text-body-2) {
  color: #666666 !important;
}

.v-btn {
  text-transform: none;
}

.v-chip {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.v-chip:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.v-btn.v-btn--icon {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.v-btn.v-btn--icon:hover {
  transform: scale(1.2);
  background-color: rgba(var(--v-theme-primary), 0.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
