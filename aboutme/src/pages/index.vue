<template>
  <!-- <HelloWorld /> -->
  <v-row class="d-flex justify-center">
    <v-col cols = "12">
      <Wellcome />
    </v-col>
    <v-col cols = "10" class="d-flex justify-center">
    <AkizerAbout />
    </v-col>
  </v-row>
</template>

<script setup>
import { useHead } from '@vueuse/head';

// Добавляем мета-теги для SEO
useHead({
  title: 'Miky Vizenovsky - Frontend Developer',
  meta: [
    {
      name: 'description',
      content: 'Портфолио Miky Vizenovsky - Front-end разработчика с опытом создания современных веб-приложений на Vue.js'
    },
    {
      name: 'keywords',
      content: 'Frontend Developer, Vue.js, JavaScript, Web Development, Portfolio, Miky Vizenovsky'
    },
    {
      property: 'og:title',
      content: 'Miky Vizenovsky - Frontend Developer Portfolio'
    },
    {
      property: 'og:description',
      content: 'Ознакомьтесь с портфолио и проектами Miky Vizenovsky - Front-end разработчика'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Miky Vizenovsky - Frontend Developer Portfolio'
    },
    {
      name: 'twitter:description',
      content: 'Портфолио и проекты Front-end разработчика'
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
/* Добавляем анимации для компонентов */
:deep(.v-col) {
  transition: transform 0.5s ease;
}

:deep(.v-col:hover) {
  transform: scale(1.02);
}
</style>
