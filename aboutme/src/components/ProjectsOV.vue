<template>
  <v-container>
    <h2 class="text-center">Let's overview my projects!</h2>
    <v-container>
      <h3>FrontEnd</h3>
      <v-container v-for="(FrontendItem, index) in Frontend" :key="index">
        <h3>{{ FrontendItem.name }}</h3>
        <h3>{{ FrontendItem.git }}</h3>
        <v-carousel show-arrows="hover" hide-delimiters>
          <v-carousel-item
            v-for="(projectImg, index) in FrontendItem.imgs"
            :key="index"
          >
            <v-card>
              <v-card-item>
                <v-img :src="projectImg" height="200px"></v-img>
              </v-card-item>
            </v-card>
          </v-carousel-item>
        </v-carousel>
        <div>
          <p>{{ FrontendItem.about }}</p>
        </div>
      </v-container>
    </v-container>

    <!-- <v-container>
      <h3>BackEnd</h3>
      <v-container v-for="(FrontendItem, index) in Frontend" :key="index">
        <h3>{{ FrontendItem.name }}</h3>
        <h3>{{ FrontendItem.git }}</h3>
        <v-carousel show-arrows="hover" hide-delimiters>
          <v-carousel-item
            v-for="(projectImg, index) in FrontendItem.imgs"
            :key="index"
          >
            <v-card>
              <v-card-item>
                <v-img :src="projectImg" height="200px"></v-img>
              </v-card-item>
            </v-card>
          </v-carousel-item>
        </v-carousel>
        <div>
          <p>{{ FrontendItem.about }}</p>
        </div>
      </v-container>
    </v-container> -->
    
  </v-container>
</template>
<script setup>
import { ref } from "vue";

const Frontend = ref([
  {
    name: "BallonsCalc",
    git: "https://github.com/MikyViz/ballonsCalc",
    about: `BallonsCalc, it's application  that help to calculate how many ballons and helium you have to buy for your ballons style, how many it will cost, and witch price you will ask for your ballons working.`,
    imgs: [
      "../assets/ballonscalc/2024-07-14-162649.png",
      "../assets/ballonscalc/2024-07-14-223921.png",
      "../assets/ballonscalc/2024-07-14-224116.png",
    ],
  },
]);
const Backend = ref([
  // {
  //   name: "JavaScript",
  //   img: "https://networksynapse.net/wp-content/uploads/2020/11/js-1232x616.png",
  // },
  // {
  //   name: "Node.js",
  //   img: "https://apipilot.com/wp-content/uploads/2023/01/4.png",
  // },
  // {
  //   name: "Sequelize DB",
  //   img: "https://th.bing.com/th/id/OIP.dcQcS2jeF7zNTNWygTlYoAHaIk?rs=1&pid=ImgDetMain",
  // },
  // {
  //   name: "MySQL",
  //   img: "https://th.bing.com/th/id/OIP.lIIc_svaWdGdEJuEk7TBlgHaHa?rs=1&pid=ImgDetMain",
  // },
]);
</script>