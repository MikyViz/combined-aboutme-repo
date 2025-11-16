<template>
  <v-container class="family-guy-pattern">
    <h2 class="text-center family-guy-title mb-6">
      {{ t('projects.page.title') }}
    </h2>
    
    <v-container>
      <h3 class="family-guy-title mb-4">{{ t('projects.page.sectionTitle') }}</h3>
      
      <v-row>
        <v-col 
          v-for="(frontendItem, index) in frontend" 
          :key="index"
          cols="12" 
          md="6"
          class="mb-6"
        >
          <v-card 
            class="family-guy-card project-card" 
            :class="`animate-project-${index + 1}`"
            elevation="8"
          >
            <v-card-title class="family-guy-title d-flex align-center">
              <v-icon :icon="frontendItem.icon" class="mr-2 family-guy-icon" />
              {{ t(frontendItem.nameKey) }}
            </v-card-title>
            
            <v-card-subtitle class="family-guy-text mb-2">
              <v-btn 
                :href="frontendItem.git" 
                target="_blank" 
                variant="outlined" 
                color="primary"
                class="family-guy-btn"
                prepend-icon="mdi-github"
                size="small"
              >
                GitHub
              </v-btn>
              <v-chip 
                v-if="frontendItem.npm"
                :href="frontendItem.npm" 
                clickable
                color="success" 
                variant="outlined"
                class="family-guy-btn ml-2"
                size="small"
              >
                📦 NPM
              </v-chip>
              <v-btn 
                v-if="frontendItem.site"
                :href="frontendItem.site" 
                target="_blank"
                variant="outlined" 
                color="secondary"
                class="family-guy-btn ml-2"
                prepend-icon="mdi-open-in-new"
                size="small"
              >
                🌐 Live Demo
              </v-btn>
            </v-card-subtitle>

            <v-carousel 
              v-if="frontendItem.imgs && frontendItem.imgs.length > 0"
              show-arrows="hover" 
              hide-delimiters
              class="mb-4"
            >
              <v-carousel-item
                v-for="(projectImg, imgIndex) in frontendItem.imgs"
                :key="imgIndex"
              >
                <v-card>
                  <v-card-item>
                    <v-img 
                      :src="projectImg" 
                      height="350px"
                      class="family-guy-image"
                    />
                  </v-card-item>
                </v-card>
              </v-carousel-item>
            </v-carousel>

            <v-card-text class="family-guy-text">
              <p>{{ t(frontendItem.descKey) }}</p>
              
              <!-- Family Guy цитата для каждого проекта -->
              <v-alert 
                type="info" 
                variant="tonal" 
                class="mt-4"
                :icon="false"
              >
                <template v-slot:prepend>
                  <v-icon>mdi-format-quote-open</v-icon>
                </template>
                <em>{{ t(frontendItem.quoteKey) }}</em>
                <br>
                <small>- {{ t(frontendItem.quoteAuthorKey) }}</small>
              </v-alert>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
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
import { t } from '@/translations';

// Импорт всех изображений из указанной папки
const imgFiles = import.meta.glob('../assets/projects/**/*.{png,jpg,jpeg,gif}');

const frontend = ref([
  {
    nameKey: "projects.transportControl.name",
    descKey: "projects.transportControl.description",
    quoteKey: "projects.transportControl.quote",
    quoteAuthorKey: "projects.transportControl.quoteAuthor",
    git: "https://phpstack-1063351-5511176.cloudwaysapps.com/auth",
    folder: "transport-control",
    site: "https://phpstack-1063351-5511176.cloudwaysapps.com/auth",
    imgs: [],
    icon: "mdi-bus"
  },
  {
    nameKey: "projects.ballonsCalc.name",
    descKey: "projects.ballonsCalc.description",
    quoteKey: "projects.ballonsCalc.quote",
    quoteAuthorKey: "projects.ballonsCalc.quoteAuthor",
    git: "https://github.com/MikyViz/ballonsCalc",
    folder: "ballonscalc",
    imgs: [],
    icon: "mdi-balloon"
  },
  {
    nameKey: "projects.moneySale.name",
    descKey: "projects.moneySale.description",
    quoteKey: "projects.moneySale.quote",
    quoteAuthorKey: "projects.moneySale.quoteAuthor",
    git: "https://github.com/MikyViz/ExchangeRateApp",
    folder: "moneySale",
    imgs: [],
    icon: "mdi-currency-usd"
  },
  {
    nameKey: "projects.aboutMe.name",
    descKey: "projects.aboutMe.description",
    quoteKey: "projects.aboutMe.quote",
    quoteAuthorKey: "projects.aboutMe.quoteAuthor",
    git: "https://github.com/MikyViz/combined-aboutme-repo/tree/master/aboutme",
    folder: "aboutme",
    imgs: [],
    icon: "mdi-web"
  },
  {
    nameKey: "projects.mooseBroWeather.name",
    descKey: "projects.mooseBroWeather.description",
    quoteKey: "projects.mooseBroWeather.quote",
    quoteAuthorKey: "projects.mooseBroWeather.quoteAuthor",
    git: "https://github.com/MikyViz/MooseBroWeather",
    site: "https://mikyviz.github.io/MooseBroWeather/",
    folder: "moosebroweather",
    imgs: [],
    icon: "mdi-weather-partly-cloudy"
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

<style scoped>
.project-card {
  background: rgba(var(--v-theme-surface), 0.95);
  border: 3px solid var(--v-theme-primary);
  transition: all 0.3s ease-in-out;
  height: 100%;
}

.project-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  border-color: var(--v-theme-accent);
}

/* Анимации появления для проектов */
.animate-project-1 {
  animation: slideInLeft 0.8s ease-out;
}

.animate-project-2 {
  animation: slideInRight 0.8s ease-out 0.2s both;
}

.animate-project-3 {
  animation: slideInLeft 0.8s ease-out 0.4s both;
}

.animate-project-4 {
  animation: slideInRight 0.8s ease-out 0.6s both;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Hover эффект для карточек */
.project-card:hover .family-guy-icon {
  animation: bounce 0.6s ease-in-out;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) scale(1);
  }
  40% {
    transform: translateY(-5px) scale(1.1);
  }
  60% {
    transform: translateY(-3px) scale(1.05);
  }
}

/* Стиль для чипов */
.v-chip {
  transition: all 0.2s ease;
}

.v-chip:hover {
  transform: scale(1.05);
}
</style>