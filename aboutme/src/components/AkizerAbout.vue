<template>
  <v-container class="wrapper fade-in">
    <v-row>
      <v-col v-for="(card, index) in cards" :key="index" cols="12" md="6">
        <v-card 
          :color="card.color" 
          elevation="0" 
          class="main glass-card professional-card"
          :class="{ 'floating': index === 0 }"
        >
          <v-card-title class="professional-title text-white">
            {{ card.icon }} {{ card.title }}
          </v-card-title>
          <v-card-text class="professional-text">
            <HtmlRenderer :content="card.text" />
            <div class="mt-3 text-center">
              <em class="professional-subtitle">"{{ card.quote }}"</em>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-img 
              :src="card.image" 
              height="400"
              class="professional-avatar"
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
    icon: "",
    quote: "Passionate about creating exceptional digital experiences"
  },  
  {
    title: t('homepage.moosebroTitle'),
    text: t('homepage.moosebroText'),
    image: moosebroImg,
    color: "secondary",
    icon: "",
    quote: "Innovation meets creativity in every project"
  },
]);
</script>

<style scoped>
.main {
  margin: 40px;
  padding: 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.main:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2) !important;
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
