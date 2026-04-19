<template>
  <!-- Professional Modern Homepage -->
  <div class="pa-4">
    <v-row class="d-flex justify-center">
      <v-col cols="12" class="text-center mb-4">
        <h1 class="professional-title text-h3 mb-2 fade-in">
          Welcome to My Portfolio
        </h1>
        <p class="professional-text text-h6 slide-in-left">
          Transforming ideas into elegant digital solutions
        </p>
      </v-col>
      
      <v-col cols="12">
        <Wellcome />
      </v-col>
      <v-col cols="12" md="10" class="d-flex justify-center">
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
  title: 'Miky Vizenovsky - Full Stack Developer 💻',
  meta: [
    {
      name: 'description',
      content: 'Portfolio of Miky Vizenovsky - Full Stack Developer specializing in Vue.js, React, Node.js and modern web technologies'
    },{
      name: 'keywords',
      content: 'Frontend Developer, Full Stack Developer, Vue.js, React, JavaScript, Web Development, Portfolio, Miky Vizenovsky'
    },
    {
      property: 'og:title',
      content: 'Miky Vizenovsky - Full Stack Developer 💻'
    },
    {
      property: 'og:description',
      content: 'Explore the portfolio of Miky Vizenovsky - Full Stack Developer with expertise in modern web technologies'
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
.professional-pattern {
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
