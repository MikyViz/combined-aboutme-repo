<template>  <v-app :class="{ 'professional-bg-light': !theme.global.current.value.dark, 'professional-bg-dark': theme.global.current.value.dark }">
    <v-main>      <v-app-bar color="surface" flat class="professional-nav" height="80">
        <v-container class="d-flex align-center" style="max-width: 100%;">
          <div class="professional-title professional-name font-weight-bold">MIKY VIZENOVSKY</div>
          <v-spacer></v-spacer>
          
          <!-- Desktop Navigation -->
          <div class="d-none d-md-flex align-center">
            <v-btn variant="text" class="mx-2 professional-text" to="/">HOME</v-btn>
            <v-btn variant="text" class="mx-2 professional-text" to="/about">ABOUT</v-btn>
            <v-btn variant="text" class="mx-2 professional-text" to="/projects">PROJECTS</v-btn>
            <v-btn variant="text" class="mx-2 professional-text" to="/npmPackages">NPM</v-btn>
            <v-btn variant="text" class="mx-2 professional-text" to="/contactMe">CONTACT</v-btn>
            
            <!-- Language Switcher -->
            <LanguageSwitcher class="mx-2" />
            
            <!-- Theme Toggle -->
            <v-btn 
              icon 
              variant="text"
              @click="toggleTheme"
              class="ml-2"
            >
              <v-icon>{{ themeIcon }}</v-icon>
            </v-btn>
          </div>
          
          <!-- Mobile Menu -->
          <v-app-bar-nav-icon
            variant="text"
            @click.stop="drawer = !drawer"
            class="d-md-none"
          ></v-app-bar-nav-icon>
        </v-container>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        temporary
      >
        <v-list>
          <v-list-item
            v-for="rout in routs"
            :key="rout.value"
            @click="navigateTo(rout.value)"
          >
            <v-list-item-title>{{ rout.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <router-view />
      
      <!-- Добавляем футер -->
      <AppFooter />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import { useTheme } from "vuetify";
import router from "./router";
import JSConfetti2 from 'js-confetti';
import AppFooter from '@/components/AppFooter.vue';
import LanguageSwitcher from '@/components/LanguageSwitcher.vue';
import { t, currentLocale } from '@/translations';
// import { useThemeStore } from "./stores/theme";

// const simchalesConfetti = new JSConfetti2();
// simchalesConfetti.addConfetti();

const drawer = ref(false);
const secondaryNav = ref(false);
const routs = computed(() => [
  {
    title: t('navigation.home'),
    value: "/",
  },
  {
    title: t('navigation.about'),
    value: "/about",
  },
  {
    title: t('navigation.projects'),
    value: "/projects", // Здесь можно добавить подменю для проектов, например: ["/frontEnd", "/backEnd"]
    // value: ["/frontEnd", "/backEnd"],
  },
  {
    title: "NPM Packages",
    value: "/npmPackages",
  },
  {
    title: t('navigation.contact'),
    value: '/contactMe',
  },
]);

watch(
  () => drawer.value,
  () => {
    secondaryNav.value = false;
  }
);

// Отслеживаем изменения языка
watch(
  () => currentLocale.value,
  (newLocale) => {
    console.log('Language changed to:', newLocale);
    document.querySelector('html').setAttribute('lang', newLocale);
  }
);

const theme = useTheme();
const selectedTheme = ref("light");

const themeIcon = computed(() => {
  return selectedTheme.value === 'dark' ? 'mdi-weather-sunny' : 'mdi-weather-night';
});

function toggleTheme() {
  selectedTheme.value = selectedTheme.value === 'light' ? 'dark' : 'light';
  theme.global.name.value = selectedTheme.value;
}

// Функция для переключения темы удалена, так как теперь используется только selectTheme

function navigateTo(value) {
  if (typeof value !== "object") {
    // Закрываем drawer после навигации
    drawer.value = false;
    router.push(value).catch((err) => {
      console.error("Navigation error:", err);
    });
  } else {
    secondaryNav.value = !secondaryNav.value;
  }
}

function navigateToSubmenu(route) {
  // Закрываем drawer и secondaryNav после навигации в submenu
  drawer.value = false;
  secondaryNav.value = false;
  router.push(route).catch((err) => {
    console.error("Navigation error:", err);
  });
}
</script>

<style scoped>
.pa-4 {
  padding: 16px;
}

/* Responsive professional name */
.professional-name {
  font-size: 0.75rem;
  white-space: nowrap;
  letter-spacing: 0.3px;
  max-width: none !important;
  overflow: visible !important;
  text-overflow: clip !important;
  flex-shrink: 0;
  width: auto !important;
}

@media (min-width: 400px) {
  .professional-name {
    font-size: 0.85rem;
  }
}

@media (min-width: 600px) {
  .professional-name {
    font-size: 1rem;
  }
}

@media (min-width: 960px) {
  .professional-name {
    font-size: 1.25rem;
  }
}

/* Стиль для селектора темы удален */
</style>
