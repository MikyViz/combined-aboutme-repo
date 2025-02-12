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
import { ref } from "vue";
import diplomeImg from "../assets/diplome.jpg";
import moosebroImg from "../assets/MOOSEBRO.jpg";
import HtmlRenderer from "./HtmlRenderer.vue";

const cards = ref([
  {
    title: "So, who am I?",
    text: `
      My name is Michael David Vizenovsky, and I am a FullStack
      developer.<br />I learned this interesting profession in the PROG
      institute 👉
      <a href="https://www.prog.co.il/" target="_blank"
        >https://www.prog.co.il/</a
      >
      <br />And I had the honor of attending the classes of the coolest
      programmers in Israel - Israel Dahan and Rahamim Hania.
    `,
    image: diplomeImg,
    color: "indigo",
  },
  {
    title: "MOOSEBRO",
    text: `
      In the development industry and in commercial projects, I am also known as "MOOSEBRO"
    `,
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
