<template>  <v-app :class="{ 'professional-bg-light': !theme.global.current.value.dark, 'professional-bg-dark': theme.global.current.value.dark }">
    <v-main>      <v-app-bar color="surface" flat class="professional-nav" height="80">
        <v-container class="d-flex align-center">
          <v-toolbar-title class="professional-title professional-name font-weight-bold">MIKY VIZENOVSKY</v-toolbar-title>
          <v-spacer></v-spacer>
          
          <!-- Desktop Navigation -->
          <div class="d-none d-md-flex align-center">
            <v-btn variant="text" class="mx-2 professional-text" to="/">HOME</v-btn>
            <v-btn variant="text" class="mx-2 professional-text" to="/about">ABOUT</v-btn>
            <v-btn variant="text" class="mx-2 professional-text" to="/frontEnd">FRONTEND</v-btn>
            <v-btn variant="text" class="mx-2 professional-text" to="/backEnd">BACKEND</v-btn>
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
            <!-- 👇submenu -->
            <v-container v-if="Array.isArray(rout.value) && secondaryNav">              <v-list-item
                v-for="(secondaryRout, index) in rout.value"
                :key="secondaryRout"                @click="navigateToSubmenu(secondaryRout)"
              >
                <v-list-item-title>{{
                  index === 0 ? t('navigation.frontendProjects') : t('navigation.backendProjects')
                }}</v-list-item-title>
              </v-list-item>
            </v-container>
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

const simchalesConfetti = new JSConfetti2() //🎉
simchalesConfetti.addConfetti() //🎉

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
    value: ["/frontEnd", "/backEnd"],
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
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 180px;
}

@media (min-width: 400px) {
  .professional-name {
    font-size: 0.85rem;
    max-width: 220px;
  }
}

@media (min-width: 600px) {
  .professional-name {
    font-size: 1rem;
    max-width: 100%;
  }
}

@media (min-width: 960px) {
  .professional-name {
    font-size: 1.25rem;
  }
}

/* Стиль для селектора темы удален */
</style>
