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
        <template v-if="$vuetify.display.mdAndUp">
          <v-btn icon="mdi-magnify" variant="text"></v-btn>
          <v-btn icon="mdi-filter" variant="text"></v-btn>
        </template>
        <!-- <v-btn @click="toggleTheme"
          ><v-icon>mdi-theme-light-dark</v-icon></v-btn
        > -->

        <v-select
          chips
          label="Theme"
          :items="['💡', '🌚', '🖍️', '💩']"
          variant="underlined"
          v-model="currentThemeIcon"
          @update:model-value="toggleTheme"
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
            <v-container v-if="Array.isArray(rout.value) && secondaryNav">
              <v-list-item
                v-for="secondaryRout in rout.value"
                :key="secondaryRout"
                @click="navigateTo(secondaryRout)"
              >
                <v-list-item-title>{{
                  secondaryRout.slice(1)
                }}</v-list-item-title>
              </v-list-item>
            </v-container>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, watch } from "vue";
import { useTheme } from "vuetify";
import router from "./router";
import JSConfetti2 from 'js-confetti'
// import { useThemeStore } from "./stores/theme";

const simchalesConfetti = new JSConfetti2() //🎉
simchalesConfetti.addConfetti() //🎉

const drawer = ref(false);
const secondaryNav = ref(false);
const routs = ref([]);
routs.value = [
  {
    title: "Nice to meet you",
    value: "/",
  },
  {
    title: "Professional skills",
    value: "/about",
  },
  {
    title: "My projects",
    value: ["/frontEnd", "/backEnd"],
  },
  // {
  //   title: 'Contact me',
  //   value: '/about',
  // },
];

watch(
  () => drawer.value,
  () => {
    secondaryNav.value = false;
  }
);

const theme = useTheme();

const currentThemeIcon = ref("🌚");
const selectedTheme = ref("dark");

function toggleTheme() {
  console.log('2pizza');
  switch (currentThemeIcon.value) {
    case "💡":
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

    default:
      selectedTheme.value = "dark";

      break;
  }
  console.log("Toggle Theme called");
  console.log("Current Theme Icon:", currentThemeIcon.value);
  console.log("Current Theme:", selectedTheme.value);
  theme.global.name.value = selectedTheme.value;
  simchalesConfetti.addConfetti({
  emojis: [currentThemeIcon.value], // Replace with your desired symbols or emojis
  confettiRadius: 6,
  confettiNumber: 100,
})
  // theme.global.current.value = selectedTheme.value;

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
</style>
