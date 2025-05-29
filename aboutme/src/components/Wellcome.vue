<template>  <v-container>
    <v-row>
      <v-col cols="8">
        <h1 class="welcome-title text-right" :class="titleColorClass">{{ $t('welcome.greeting') }}</h1>
      </v-col>
      </v-row>
      <v-row class= "d-flex justify-center">
        <v-avatar
        size="150">
        <v-img height="100%"
        src="../assets/me.jpeg"
        cover></v-img>
      </v-avatar>
      <v-col cols="10">
        <h2 class="welcome-subtitle text-center" :class="subtitleColorClass">{{ $t('welcome.subtitle1') }}</h2>
        <h2 class="welcome-subtitle text-md-right text-lg-left text-sm-center" :class="subtitleColorClass">{{ $t('welcome.subtitle2') }}</h2>
      </v-col>
  </v-row>
</v-container>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import { useTheme } from 'vuetify';

const i18n = useI18n();
const theme = useTheme();

// Динамические цвета в зависимости от темы
const titleColorClass = computed(() => {
  return theme.global.current.value.dark ? 'text-white' : 'text-grey-darken-3';
});

const subtitleColorClass = computed(() => {
  return theme.global.current.value.dark ? 'text-grey-lighten-1' : 'text-grey-darken-1';
});
</script>

<style scoped>
/* Дополнительные стили для анимации */
.welcome-title {
  animation: fadeInUp 0.8s ease-out;
}

.welcome-subtitle {
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Эффект при наведении */
.welcome-title:hover {
  transform: scale(1.02);
  transition: transform 0.3s ease;
}

/* Резервные стили на случай если CSS переменные не загрузились */
h1 {
  font-size: 2.5rem;
}
h2 {
  font-size: 1.5rem;
}

@media (min-width: 600px) {
  h1 {
    font-size: 3.5rem;
  }
  h2 {
    font-size: 1.5rem;
  }
}

@media (min-width: 960px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
}
@media (min-width: 1264px) {
  h1 {
    font-size: 5rem;
  }
  h2 {
    font-size: 3.5rem;
  }
}
</style>