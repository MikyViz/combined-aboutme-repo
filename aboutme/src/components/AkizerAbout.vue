<template>
  <v-container class="wrapper family-guy-pattern">
    <v-row>
      <v-col v-for="(card, index) in cards" :key="index" cols="12" md="6">
        <v-card 
          :color="card.color" 
          elevation="16" 
          class="main family-guy-card"
          :class="{ 'family-guy-bounce': index === 0 }"
        >
          <v-card-title class="family-guy-title text-white">
            {{ card.icon }} {{ card.title }}
          </v-card-title>
          <v-card-text class="family-guy-text">
            <HtmlRenderer :content="card.text" />
            <div class="mt-3 text-center">
              <em class="family-guy-text">"{{ card.quote }}"</em>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-img 
              :src="card.image" 
              height="400"
              class="family-guy-image"
              contain
            />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from "vue";
import { t } from '@/translations';
import diplomeImg from "../assets/diplome.jpg";
import moosebroImg from "../assets/MOOSEBRO.jpg";
import HtmlRenderer from "./HtmlRenderer.vue";

const cards = computed(() => [
  {
    title: t('homepage.aboutMeTitle'),
    text: t('homepage.aboutMeText'),
    image: diplomeImg,
    color: "primary",
    icon: "🎓",
    quote: "Just like Stewie with his evil plans, I plan amazing websites!"
  },  
  {
    title: t('homepage.moosebroTitle'),
    text: t('homepage.moosebroText'),
    image: moosebroImg,
    color: "secondary",
    icon: "🫎",
    quote: "As Brian would say: 'This moose is quite sophisticated!'"
  },
]);
</script>

<style scoped>
.main {
  margin: 40px;
  padding: 20px;
  transition: all 0.3s ease-in-out;
}

.main:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3) !important;
}

/* Дополнительные Family Guy стили */
.family-guy-card {
  background: linear-gradient(135deg, var(--v-theme-surface) 0%, var(--v-theme-surface-variant) 100%);
  border: 3px solid var(--v-theme-primary);
}

.wrapper {
  position: relative;
}

/* Анимация для карточек */
.v-col:nth-child(1) .main {
  animation: slideInLeft 0.8s ease-out;
}

.v-col:nth-child(2) .main {
  animation: slideInRight 0.8s ease-out;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
