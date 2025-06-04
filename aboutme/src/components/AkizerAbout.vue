<template>
  <v-container class="wrapper">
    <v-row>
      <v-col v-for="(card, index) in cards" :key="index" cols="12" md="6">
        <v-card :color="card.color" elevation="16" class="main">
          <v-card-title class="white--text">{{ card.title }}</v-card-title>
          <v-card-text>
            <HtmlRenderer :content="card.text" />
          </v-card-text>
          <v-card-actions>
            <v-img :src="card.image" height="500"></v-img>
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
    color: "indigo",
  },  {
    title: t('homepage.moosebroTitle'),
    text: t('homepage.moosebroText'),
    image: moosebroImg,
    color: "indigo",
  },
]);
</script>

<style scoped>
.main {
  margin: 40px;
  padding: 20px;
}
</style>
