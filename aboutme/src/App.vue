<template>
  <v-app>
    <v-main>
      <v-app-bar color="indigo" prominent="true">
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>About Miky Vizenovsky 🫎</v-toolbar-title>
        <v-spacer></v-spacer>
        
        <!-- Переключатель языка -->
        <LanguageSwitcher class="mr-2" />
        
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn 
              v-bind="props"
              icon
              class="ml-3"
            >
              <v-icon>{{ themeIcon }}</v-icon>
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

        <v-select
          chips
          label="Theme"
          :items="['🧸', '🌚', '🖍️', '💩', '🌈']"
          variant="underlined"
          v-model="currentThemeIcon"
          @update:model-value="toggleTheme"
          class="theme-select"
        ></v-select>
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
                :key="secondaryRout"
                @click="navigateTo(secondaryRout)"
              >
                <v-list-item-title>{{
                  index === 0 ? $t('navigation.frontendProjects') : $t('navigation.backendProjects')
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
import { useI18n } from 'vue-i18n';
// import { useThemeStore } from "./stores/theme";

const simchalesConfetti = new JSConfetti2() //🎉
simchalesConfetti.addConfetti() //🎉

const i18n = useI18n();
const drawer = ref(false);
const secondaryNav = ref(false);
const routs = computed(() => [
  {
    title: i18n.t('navigation.home'),
    value: "/",
  },
  {
    title: i18n.t('navigation.about'),
    value: "/about",
  },
  {
    title: i18n.t('navigation.projects'),
    value: ["/frontEnd", "/backEnd"],
  },
  {
    title: i18n.t('navigation.contact'),
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
  () => i18n.locale.value,
  (newLocale) => {
    console.log('Language changed to:', newLocale);
    localStorage.setItem('userLocale', newLocale);
    document.querySelector('html').setAttribute('lang', newLocale);
  }
);

const theme = useTheme();
const currentThemeIcon = ref("🌚");
const selectedTheme = ref("dark");

const themeOptions = [
  { name: "Light", value: "light", icon: "🧸" },
  { name: "Dark", value: "dark", icon: "🌚" },
  { name: "Green", value: "green", icon: "🖍️" },
  { name: "Brown", value: "brown", icon: "💩" },
  { name: "Neon", value: "neon", icon: "🌈" }
];

const themeIcon = computed(() => {
  const current = selectedTheme.value;
  switch(current) {
    case 'light': return 'mdi-weather-sunny';
    case 'dark': return 'mdi-weather-night';
    case 'green': return 'mdi-pine-tree';
    case 'brown': return 'mdi-earth';
    case 'neon': return 'mdi-neon-lamp';
    default: return 'mdi-theme-light-dark';
  }
});

function selectTheme(themeName) {
  selectedTheme.value = themeName;
  theme.global.name.value = themeName;
  
  // Update the icon in the dropdown
  const themeOption = themeOptions.find(option => option.value === themeName);
  if (themeOption) {
    currentThemeIcon.value = themeOption.icon;
  }
  
  // Add confetti with the selected theme icon
  simchalesConfetti.addConfetti({
    emojis: [themeOption?.icon || '✨'], 
    confettiRadius: 6,
    confettiNumber: 100,
  });
}

function toggleTheme() {
  console.log('2pizza');
  switch (currentThemeIcon.value) {
    case "🧸":
      selectedTheme.value = "light";
      break;
    case "🌚":
      selectedTheme.value = "dark";
      break;
    case "🖍️":
      selectedTheme.value = "green";
      break;
    case "💩":
      selectedTheme.value = "brown";
      break;
    case "🌈":
      selectedTheme.value = "neon";
      break;
    default:
      selectedTheme.value = "dark";
      break;
  }
  
  theme.global.name.value = selectedTheme.value;
  simchalesConfetti.addConfetti({
    emojis: [currentThemeIcon.value],
    confettiRadius: 6,
    confettiNumber: 100,
  });
}

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

.theme-select {
  max-width: 150px;
}
</style>
