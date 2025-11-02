<template>
  <!-- Family Guy Style Homepage -->
  <div class="family-guy-pattern pa-4">
    <v-row class="d-flex justify-center">
      <v-col cols="12" class="text-center mb-4">
        <h1 class="family-guy-title text-h3 mb-2">
          🏠 Welcome to Quahog... I mean, My Portfolio! 🏠
        </h1>
        <p class="family-guy-text text-h6">
          Just like the Griffin family, I'm here to entertain and maybe learn something new! 📺
        </p>
      </v-col>
      
      <v-col cols="12">
        <Wellcome />
      </v-col>
      <v-col cols="10" class="d-flex justify-center">
        <AkizerAbout />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head';
import Wellcome from '@/components/Wellcome.vue';
import AkizerAbout from '@/components/AkizerAbout.vue';

// Добавляем мета-теги для SEO
useHead({
  title: 'Miky Vizenovsky - Family Guy Style Portfolio 🏠',
  meta: [
    {
      name: 'description',
      content: 'Welcome to Quahog! Portfolio Miky Vizenovsky - Frontend Developer в стиле Family Guy с современными веб-технологиями'
    },{
      name: 'keywords',
      content: 'Frontend Developer, Vue.js, JavaScript, Web Development, Portfolio, Miky Vizenovsky, Family Guy Style, Quahog'
    },
    {
      property: 'og:title',
      content: 'Miky Vizenovsky - Family Guy Style Portfolio 🏠'
    },
    {
      property: 'og:description',
      content: 'Welcome to Quahog! Ознакомьтесь с портфолио Miky Vizenovsky в стиле Family Guy'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },    {
      name: 'twitter:title',
      content: 'Miky Vizenovsky - Family Guy Style Portfolio 🏠'
    },
    {
      name: 'twitter:description',
      content: 'Welcome to Quahog! Портфолио Frontend разработчика в стиле Family Guy'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://mikyvizenovsky.com/' // Замените на ваш настоящий домен
    }
  ]
});
</script>

<style scoped>
/* Family Guy стиль анимации */
:deep(.v-col) {
  transition: transform 0.5s ease;
}

:deep(.v-col:hover) {
  transform: scale(1.02);
}

/* Дополнительная анимация для главной страницы */
.family-guy-pattern {
  background-attachment: fixed;
}

/* Эффект плавного появления */
.v-row {
  animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
