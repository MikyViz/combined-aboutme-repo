<template>
  <v-container>
    <h2 class="text-center">Let's overview my projects!</h2>
    <v-img
      src="https://th.bing.com/th/id/OIG2.suTSjQHKdZTvDKkqeAsu?pid=ImgGn"
      aspect-ratio="2"
      class="my-6 hero"
    ></v-img>
    <div class="container">
      <h2>BackEnd & DB behind the scenes</h2>
      <v-row class="my-4">
        <v-col
          v-for="(backendItem, index) in backend"
          :key="index"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card class="my-card">
            <v-card-title>{{ backendItem.name }}</v-card-title>
            <v-subheader>git: {{ backendItem.git }}</v-subheader>
            <v-subheader>about: {{ backendItem.about }}</v-subheader>
          </v-card>
        </v-col>
      </v-row>
    </div>
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
<style scoped>
.my-card {
  width: 100%;
  background-color: rgba(
    255,
    255,
    255,
    0.5
  );
  padding: 20px; 
}
.hero.v-image {
  max-width: 100%;
  margin: auto;
  width: 100%;
}

</style>