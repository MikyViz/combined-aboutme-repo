<template>
  <div>
    <v-menu location="bottom">
      <template v-slot:activator="{ props }">
        <v-btn
          variant="text"
          v-bind="props"
          :prepend-icon="getCurrentLocale.icon"
          color="primary"
          class="lang-switcher-btn"
        >
          {{ getCurrentLocale.name }}
          <v-icon class="ml-1">mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="locale in availableLocales"
          :key="locale.code"
          :active="currentLocale === locale.code"
          @click="changeLocale(locale.code)"
        >
          <template v-slot:prepend>
            <v-icon :icon="locale.icon" class="mr-2"></v-icon>
          </template>
          <v-list-item-title>{{ locale.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup>
import { availableLocales, currentLocale, setLocale, getCurrentLocale } from '@/translations';

const changeLocale = (locale) => {
  console.log('Changing locale to:', locale);
  setLocale(locale);
};
</script>

<style scoped>
.lang-switcher-btn {
  min-width: 120px;
  margin-right: 8px;
  margin-left: 8px;
  transition: background-color 0.3s ease;
}

.lang-switcher-btn:hover {
  background-color: rgba(var(--v-theme-primary), 0.1);
}
</style>
