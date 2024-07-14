<template>
  <v-container>
    <h2 class="text-center">Let's overview my projects!</h2>
    <v-container>
      <h3>FrontEnd</h3>
      <v-carousel show-arrows="hover" hide-delimiters>
        <v-carousel-item
          v-for="(FrontendtItem, index) in Frontend"
          :key="index"
        >
          <v-card>
            <v-card-title>{{ FrontendItem.name }}</v-card-title>
            <v-card-item>
              <v-img :src="FrontendItem.img" height="200px"></v-img>
            </v-card-item>
          </v-card>
        </v-carousel-item>
      </v-carousel>
    </v-container>
    <v-container>
      <h3>BackEnd/DB</h3>
      <v-carousel show-arrows="hover" hide-delimiters>
        <v-carousel-item v-for="(BackendItem, index) in Backend" :key="index">
          <v-card>
            <v-card-title>{{ BackendItem.name }}</v-card-title>
            <v-card-item>
              <v-img :src="BackendItem.img" height="200px"></v-img>
            </v-card-item>
          </v-card>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </v-container>
</template>
<script setup>
import { ref } from "vue";

const Frontend = ref([
  {
    name: "BallonsCalc",
    git: "https://github.com/MikyViz/ballonsCalc",
    imgs: [
      "https://www.clipartkey.com/mpngs/m/210-2104705_html-logo-png-transparent-background.png",
      ""
      ],
  },
 
]);
const Backend = ref([
  {
    name: "JavaScript",
    img: "https://networksynapse.net/wp-content/uploads/2020/11/js-1232x616.png",
  },
  {
    name: "Node.js",
    img: "https://apipilot.com/wp-content/uploads/2023/01/4.png",
  },
  {
    name: "Sequelize DB",
    img: "https://th.bing.com/th/id/OIP.dcQcS2jeF7zNTNWygTlYoAHaIk?rs=1&pid=ImgDetMain",
  },
  {
    name: "MySQL",
    img: "https://th.bing.com/th/id/OIP.lIIc_svaWdGdEJuEk7TBlgHaHa?rs=1&pid=ImgDetMain",
  },
]);
</script>