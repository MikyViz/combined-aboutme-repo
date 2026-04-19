<template>  
  <v-container class="fade-in">
    <v-row class="d-flex align-center">
      <v-col cols="12" md="4" class="d-flex justify-center">
        <div class="professional-photo-wrapper">
          <v-img
            :src="profilePhoto"
            alt="Professional Photo"
            class="professional-photo"
            contain
          />
        </div>
      </v-col>
      <v-col cols="12" md="8">        
        <h1 class="welcome-title professional-title" :class="titleColorClass">
          {{ t('welcome.greeting') }}
        </h1>
        <h2 class="welcome-subtitle professional-subtitle slide-in-left" :class="subtitleColorClass">
          {{ t('welcome.subtitle1') }}
        </h2>
        <h2 class="welcome-subtitle professional-subtitle slide-in-right" :class="subtitleColorClass">
          {{ t('welcome.subtitle2') }}
        </h2>
        <div class="mt-4">
          <p class="professional-text text-h6" :class="subtitleColorClass">
            "Building scalable solutions with modern technologies"
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
import profilePhoto from '@/assets/me2.png';

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

/* Professional Photo Styles */
.professional-photo-wrapper {
  width: 100%;
  max-width: 350px;
  overflow: hidden;
  border: 2px solid #000000;
  transition: all 0.3s ease;
}

.professional-photo {
  width: 100%;
  height: auto;
  filter: grayscale(0%);
  transition: filter 0.3s ease;
}

.professional-photo-wrapper:hover .professional-photo {
  filter: grayscale(0%) brightness(1.05);
}

/* Dark theme photo border */
.v-theme--dark .professional-photo-wrapper {
  border-color: #ffffff;
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