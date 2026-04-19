<template>  
  <v-container class="fade-in">
    <v-row>
      <v-col cols="12" md="8">        
        <h1 class="welcome-title professional-title text-right" :class="titleColorClass">
          {{ t('welcome.greeting') }}
        </h1>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center align-center">
      <v-col cols="12" md="10">
        <h2 class="welcome-subtitle professional-subtitle text-center slide-in-left" :class="subtitleColorClass">
          {{ t('welcome.subtitle1') }}
        </h2>
        <h2 class="welcome-subtitle professional-subtitle text-md-right text-lg-left text-sm-center slide-in-right" :class="subtitleColorClass">
          {{ t('welcome.subtitle2') }}
        </h2>
        <div class="text-center mt-4">
          <p class="professional-text text-h6 gradient-text" :class="subtitleColorClass">
            "Crafting digital experiences with passion and precision"
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { t } from '@/translations';
import { computed } from 'vue';
import { useTheme } from 'vuetify';

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
/* Professional modern styles for welcome section */
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

.welcome-title:hover {
  transform: scale(1.02);
  transition: transform 0.3s ease;
}

/* Avatar styles */
.v-avatar {
  border: 4px solid;
  border-color: rgb(var(--v-theme-primary));
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
}

.v-avatar:hover {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
}

/* Responsive typography */
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