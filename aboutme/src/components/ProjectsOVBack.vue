<template>
  <v-container>
    <h2 class="text-center">Let's overview my projects!</h2>

    <v-container
    src="https://th.bing.com/th/id/OIG2.suTSjQHKdZTvDKkqeAsu?pid=ImgGn"
    >
      <!-- <v-img
              class="bg-grey-lighten-2"
              max-height="425"
              src="https://th.bing.com/th/id/OIG2.suTSjQHKdZTvDKkqeAsu?pid=ImgGn"
              cover
            ></v-img> -->

      <h2>BackEnd</h2>
      <v-container v-for="(backendItem, index) in backend" :key="index">
        <v-card height = '300' width="450">
          <v-card-title>{{ backendItem.name }}</v-card-title>
          <v-text>git: {{ backendItem.git }}</v-text>
          <v-text>about: {{ backendItem.about }}</v-text>
        </v-card>
      </v-container>
    </v-container>
  </v-container>
</template>
<script setup>
import { ref, onMounted } from "vue";

const backend = ref([
  {
    name: "aboutMeBE",
    git: "https://github.com/MikyViz/combined-aboutme-repo/tree/master/aboutmebe",
    about:
      "This is a simple REST API for this website. It is built with Node.js, Express, and SQLite(by sqlize). It is a simple API that allows users to create, read, update, and delete (CRUD) information about themselves and to leave their overviews about working with me😎",
  },
  {
    name: "ballonsCalcServer",
    git: "https://github.com/MikyViz/ballonsCalcServer",
    about:
      "This is server code for ballonsCalc application.It is built with Node.js, Express, and MySQL(by sqlize). It is simple API that provide to the app users and project manegment.",
  },
]);
</script>