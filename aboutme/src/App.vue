<template>  <v-app :class="{ 'family-guy-gradient-light': !theme.global.current.value.dark, 'family-guy-gradient-dark': theme.global.current.value.dark, 'family-guy-pattern': true }">
    <v-main>      <v-app-bar color="primary" prominent="true" class="family-guy-nav">
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
          class="family-guy-icon"
        ></v-app-bar-nav-icon>
        <v-toolbar-title class="family-guy-title">🏠 Griffin Family Style - Miky Vizenovsky</v-toolbar-title>
        <v-spacer></v-spacer>
        
        <!-- Переключатель языка -->
        <LanguageSwitcher class="mr-2" />
          <v-menu>
          <template v-slot:activator="{ props }">            <v-btn 
              v-bind="props"
              icon
              class="ml-3 family-guy-btn family-guy-bounce"
            >
              <v-icon class="family-guy-icon">{{ themeIcon }}</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(themeOption, i) in themeOptions"
              :key="i"
              @click="selectTheme(themeOption.value)"
            >
              <v-list-item-title>
                {{ themeOption.icon }} {{ themeOption.name }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
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
                :key="secondaryRout"                @click="navigateTo(secondaryRout)"
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

const themeOptions = [
  { name: "Light (Quahog Day)", value: "light", icon: "☀️" },
  { name: "Dark (Quahog Night)", value: "dark", icon: "🌙" }
];

const themeIcon = computed(() => {
  const current = selectedTheme.value;
  switch(current) {
    case 'light': return 'mdi-weather-sunny';
    case 'dark': return 'mdi-weather-night';
    default: return 'mdi-theme-light-dark';
  }
});

function selectTheme(themeName) {
  selectedTheme.value = themeName;
  theme.global.name.value = themeName;
    // Находим выбранную тему в списке опций
  const themeOption = themeOptions.find(option => option.value === themeName);
  
  // Add confetti with the selected theme icon
  simchalesConfetti.addConfetti({
    emojis: [themeOption?.icon || '✨'], 
    confettiRadius: 6,
    confettiNumber: 100,
  });
}

// Функция для переключения темы удалена, так как теперь используется только selectTheme

function navigateTo(value) {
  if (typeof value !== "object") {
    router.push(value).catch((err) => {
      console.error("Navigation error:", err);
    });
  } else {
    secondaryNav.value = !secondaryNav.value;
  }
}
</script>

<style scoped>
.pa-4 {
  padding: 16px;
}

/* Стиль для селектора темы удален */
</style>
