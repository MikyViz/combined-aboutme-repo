<template>
  <v-container>
    <h2 class="text-center">Let's overview my projects!</h2>
    <v-container>
      <h3>FrontEnd</h3>
      <v-container v-for="(frontendItem, index) in frontend" :key="index">
        <h3>{{ frontendItem.name }}</h3>
        <h3>{{ frontendItem.git }}</h3>
        <v-carousel show-arrows="hover" hide-delimiters>
          <v-carousel-item
            v-for="(projectImg, index) in frontendItem.imgs"
            :key="index"
          >
            <v-card>
              <v-card-item>
                <v-img :src="projectImg" height="350px"></v-img>
              </v-card-item>
            </v-card>
          </v-carousel-item>
        </v-carousel>
        <div>
          <p>{{ frontendItem.about }}</p>
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
import { ref, onMounted } from "vue";

// Импорт всех изображений из указанной папки
const imgFiles = import.meta.glob('../assets/projects/**/*.{png,jpg,jpeg}');

const frontend = ref([
  {
    name: "BallonsCalc",
    git: "https://github.com/MikyViz/ballonsCalc",
    about: `BallonsCalc, it's application  that help to calculate how many ballons and helium you have to buy for your ballons style, how many it will cost, and witch price you will ask for your ballons working.`,
    // imgs: [
    //   "../assets/ballonscalc/2024-07-14-162649.png",
    //   "../assets/ballonscalc/2024-07-14-223921.png",
    //   "../assets/ballonscalc/2024-07-14-224116.png",
    // ],
    folder: "ballonscalc",
    imgs: [],
  },
]);
const backend = ref([
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

const loadImages = async () => {
  for (const proj of frontend.value) {
    const loadedImgs = [];
    for (const path in imgFiles) {
      if (path.includes(proj.folder)) {
        const module = await imgFiles[path]();
        loadedImgs.push(module.default);
      }
    }
    proj.imgs = loadedImgs;
  }

  for (const proj of backend.value) {
    const loadedImgs = [];
    for (const path in imgFiles) {
      if (path.includes(proj.folder)) {
        const module = await imgFiles[path]();
        loadedImgs.push(module);
      }
    }
    proj.imgs = loadedImgs;
  }
};


onMounted(() => {
  loadImages();
});
</script>