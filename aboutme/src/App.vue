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
        <v-btn @click="toggleTheme"
          ><v-icon>mdi-theme-light-dark</v-icon></v-btn
        >
        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
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
]

watch(
  () => drawer.value,
  () => {
    secondaryNav.value = false;
  }
);

const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}

function navigateTo(value) {
  if (typeof value !== 'object') {
    router.push(value).catch(err => {
      console.error('Navigation error:', err);
    });
  } else {
    secondaryNav.value = !secondaryNav.value;
  }
}
</script>

<style scoped></style>
