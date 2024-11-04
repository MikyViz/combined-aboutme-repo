<template>
  <v-container>
    <h2 class="text-center">Let's overview my projects!</h2>
    <v-container>
      <h3>FrontEnd</h3>
      <v-container v-for="(frontendItem, index) in frontend" :key="index">
        <h3>{{ frontendItem.name }}</h3>
        <h3><a target="_blank" :href='frontendItem.git'>{{ frontendItem.git }}</a></h3>
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
      <v-container v-for="(backendItem, index) in backend" :key="index">
        <h3>{{ backendItem.name }}</h3>
        <h3>{{ backendItem.git }}</h3>
        <v-carousel show-arrows="hover" hide-delimiters>
          <v-carousel-item
            v-for="(projectImg, index) in backendItem.imgs"
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
          <p>{{ backendItem.about }}</p>
        </div>
      </v-container>
    </v-container> -->
  </v-container>
</template>
<script setup>
import { ref, onMounted } from "vue";

// Импорт всех изображений из указанной папки
const imgFiles = import.meta.glob('../assets/projects/**/*.{png,jpg,jpeg,gif}');

const frontend = ref([
  {
    name: "BallonsCalc",
    git: "https://github.com/MikyViz/ballonsCalc",
    about: `BallonsCalc, it's application  that help to calculate how many ballons and helium you have to buy for your ballons style, how many it will cost, and witch price you will ask for your ballons working.`,
    folder: "ballonscalc",
    imgs: [],
  },
  {
    name: "moneySale",
    git: "https://github.com/MikyViz/ExchangeRateApp",
    about: `An application for calculating the value of currency, designed not only for purely practical use, but also for educational and entertaining purposes.`,
    folder: "moneySale",
    imgs: [],
  },
  {
    name: "AboutMe",
    git: "https://github.com/MikyViz/combined-aboutme-repo/tree/master/aboutme",
    about: `Code of this site📝`,
    folder: "aboutme",
    imgs: [],
  },
]);
// const backend = ref([
 
// ]);

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

  // for (const proj of backend.value) {
  //   const loadedImgs = [];
  //   for (const path in imgFiles) {
  //     if (path.includes(proj.folder)) {
  //       const module = await imgFiles[path]();
  //       loadedImgs.push(module);
  //     }
  //   }
  //   proj.imgs = loadedImgs;
  // }
};


onMounted(() => {
  loadImages();
});
</script>