<template>
  <v-footer class="mt-8 pt-6 footer-background">
    <v-container>
      <v-row>        <!-- Информация о сайте -->
        <v-col cols="12" md="4" class="text-center text-md-left">          <div class="text-h5 font-weight-bold mb-4">{{ t('footer.title') }}</div>
          <div class="mb-4">{{ t('footer.description') }}</div>
          <div>
            <v-btn icon variant="text" color="primary" class="mr-2" href="mailto:vizenovsky@gmail.com">
              <v-icon>mdi-email</v-icon>
            </v-btn>
            <v-btn icon variant="text" color="primary" class="mr-2" href="tel:+972583278593">
              <v-icon>mdi-phone</v-icon>
            </v-btn>
            <v-btn icon variant="text" color="primary" class="mr-2" href="https://www.linkedin.com/in/mikyviz" target="_blank">
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
            <v-btn icon variant="text" color="primary" class="mr-2" href="https://github.com" target="_blank">
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </div>
        </v-col>        <!-- Навигация -->
        <v-col cols="12" md="4" class="text-center">
          <div class="text-h6 font-weight-medium mb-4">{{ t('footer.navigation') }}</div>
          <div class="d-flex flex-column">
            <v-btn variant="text" class="mb-1" to="/">{{ t('footer.home') }}</v-btn>
            <v-btn variant="text" class="mb-1" to="/about">{{ t('footer.about') }}</v-btn>
            <v-btn variant="text" class="mb-1" to="/frontEnd">{{ t('footer.frontendProjects') }}</v-btn>
            <v-btn variant="text" class="mb-1" to="/backEnd">{{ t('footer.backendProjects') }}</v-btn>
            <v-btn variant="text" class="mb-1" to="/contactMe">{{ t('footer.contacts') }}</v-btn>
          </div>
        </v-col>        <!-- Технологии -->
        <v-col cols="12" md="4" class="text-center text-md-right">
          <div class="text-h6 font-weight-medium mb-4">{{ t('footer.techStack') }}</div>
          <v-chip-group>
            <v-chip color="primary" variant="outlined" class="ma-1">Vue.js</v-chip>
            <v-chip color="primary" variant="outlined" class="ma-1">React.js</v-chip>
            <v-chip color="primary" variant="outlined" class="ma-1">Vuetify</v-chip>
            <v-chip color="primary" variant="outlined" class="ma-1">JavaScript</v-chip>
            <v-chip color="primary" variant="outlined" class="ma-1">HTML5</v-chip>
            <v-chip color="primary" variant="outlined" class="ma-1">CSS3</v-chip>
            <v-chip color="primary" variant="outlined" class="ma-1">Node.js</v-chip>
          </v-chip-group>
        </v-col>
      </v-row>

      <v-divider class="my-4"></v-divider>
      
      <!-- Нижняя часть футера -->      <div class="d-flex flex-column flex-md-row justify-space-between align-center">
        <div class="text-body-2 text-medium-emphasis">
          &copy; {{ (new Date()).getFullYear() }} Miky Vizenovsky. {{ t('footer.rights') }}
        </div>
        <div class="text-body-2 text-medium-emphasis mt-2 mt-md-0">
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
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.05);
}

.v-btn {
  text-transform: none;
}

.v-chip {
  transition: all 0.3s ease;
}

.v-chip:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Анимация социальных иконок */
.v-btn.v-btn--icon {
  transition: transform 0.3s ease;
}

.v-btn.v-btn--icon:hover {
  transform: scale(1.2);
}
</style>
