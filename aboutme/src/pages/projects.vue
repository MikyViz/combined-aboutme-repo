<template>
  <div class="pa-4">
    <!-- Professional projects page -->
    <v-container>
      <v-row class="mb-6">
        <v-col cols="12" class="text-center">
          <h1 class="professional-title text-h3 mb-4 fade-in">
            My Projects
          </h1>
          <p class="professional-text text-h6 slide-in-right">
            Full-stack solutions: from modern UIs to robust backends
          </p>
        </v-col>
      </v-row>

      <!-- All Projects in one grid -->
      <v-row>
        <v-col
          v-for="(project, index) in allProjects"
          :key="index"
          cols="12"
          md="6"
          class="mb-6"
        >
          <v-card
            class="professional-card glass-card project-card"
            :class="`animate-project-${(index % 4) + 1}`"
            elevation="0"
          >
            <v-card-title class="professional-title d-flex align-center">
              <v-icon :icon="project.icon" class="mr-2 professional-icon" />
              {{ t(project.nameKey) }}
            </v-card-title>

            <v-card-subtitle class="professional-text mb-2">
              <!-- Role/Participation badges -->
              <div class="mb-3">
                <v-chip
                  v-for="role in project.roles"
                  :key="role"
                  :color="getRoleColor(role)"
                  variant="flat"
                  size="small"
                  class="mr-2 mb-1 role-chip"
                >
                  {{ role }}
                </v-chip>
              </div>

              <!-- Links -->
              <v-btn
                v-if="project.git"
                :href="project.git"
                target="_blank"
                variant="outlined"
                color="primary"
                class="professional-btn"
                prepend-icon="mdi-github"
                size="small"
              >
                GitHub
              </v-btn>
              <v-chip
                v-if="project.npm"
                :href="project.npm"
                clickable
                color="success"
                variant="outlined"
                class="skill-pill ml-2"
                size="small"
              >
                NPM
              </v-chip>
              <v-btn
                v-for="(siteLink, siteIndex) in Array.isArray(project.site) 
                  ? project.site 
                  : project.site 
                  ? [project.site] 
                  : []"
                :key="siteIndex"
                :href="siteLink"
                target="_blank"
                variant="outlined"
                color="secondary"
                class="professional-btn ml-2"
                prepend-icon="mdi-open-in-new"
                size="small"
              >
                View Project
              </v-btn>
            </v-card-subtitle>

            <v-carousel
              v-if="project.imgs && project.imgs.length > 0"
              show-arrows="hover"
              hide-delimiters
              class="mb-4"
            >
              <v-carousel-item
                v-for="(projectImg, imgIndex) in project.imgs"
                :key="imgIndex"
              >
                <v-card>
                  <v-card-item>
                    <v-img
                      :src="projectImg"
                      height="350px"
                      class="professional-avatar"
                    />
                  </v-card-item>
                </v-card>
              </v-carousel-item>
            </v-carousel>

            <v-card-text class="professional-text">
              <p>{{ t(project.descKey) }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { t } from '@/translations';
import PlaceholderImg from '@/assets/Placeholder.png';

// Import images
const imgFiles = import.meta.glob("../assets/projects/**/*.{png,jpg,jpeg,gif}");

const allProjects = ref([
  {
    nameKey: "projects.mikuderech.name",
    descKey: "projects.mikuderech.description",
    git: "https://phpstack-1063351-5511176.cloudwaysapps.com/auth",
    folder: "transport-control",
    site: ["https://phpstack-1063351-5511176.cloudwaysapps.com/auth"],
    imgs: [],
    icon: "mdi-bus",
    roles: ["Frontend"],
  },
  {
    nameKey: "projects.mikuderechRequest.name",
    descKey: "projects.mikuderechRequest.description",
    git: "",
    folder: "mikuderechRequest",
    site: ["https://p.mikuderech.co.il/"],
    imgs: [],
    icon: "mdi-bus-stop-covered",
    roles: ["Frontend", "Backend", "API"],
  },
  {
    nameKey: "projects.ballonsCalc.name",
    descKey: "projects.ballonsCalc.description",
    git: "https://github.com/MikyViz/ballonsCalc",
    folder: "ballonscalc",
    imgs: [],
    icon: "mdi-balloon",
    roles: ["Frontend", "Backend"],
  },
  {
    nameKey: "projects.moneySale.name",
    descKey: "projects.moneySale.description",
    git: "https://github.com/MikyViz/ExchangeRateApp",
    folder: "moneySale",
    imgs: [],
    icon: "mdi-currency-usd",
    roles: ["Frontend"],
  },
  {
    nameKey: "projects.aboutMe.name",
    descKey: "projects.aboutMe.description",
    git: "https://github.com/MikyViz/combined-aboutme-repo/",
    folder: "aboutme",
    imgs: [],
    icon: "mdi-web",
    roles: ["Frontend", "Backend", "API", "Database"],
  },
  {
    nameKey: "projects.mooseBroWeather.name",
    descKey: "projects.mooseBroWeather.description",
    git: "https://github.com/MikyViz/MooseBroWeather",
    site: ["https://mikyviz.github.io/MooseBroWeather/"],
    folder: "moosebroweather",
    imgs: [],
    icon: "mdi-weather-partly-cloudy",
    roles: ["Frontend"],
  },
  {
    nameKey: "projects.mbw.name",
    descKey: "projects.mbw.description",
    git: "https://github.com/MikyViz/MBW",
    folder: "mbw",
    imgs: [],
    icon: "mdi-weather-partly-lightning",
    roles: ["Frontend"],
  },
  {
    nameKey: "projects.keymapConverter.name",
    descKey: "projects.keymapConverter.description",
    git: "https://github.com/MikyViz/keymapConverter",
    site: [
      "https://marketplace.visualstudio.com/items?itemName=MooseBro.keymap-converter",
      "https://chromewebstore.google.com/detail/klngleclidpnlbioohliekakoffbeiao?utm_source=item-share-cb",
    ],
    folder: "keymap-converter",
    imgs: [],
    icon: "mdi-keyboard-variant",
    roles: ["Frontend", "Extension Dev"],
  },
]);

// Role color mapping
const getRoleColor = (role) => {
  const colorMap = {
    'Frontend': 'primary',
    'Backend': 'secondary',
    'E2E': 'success',
    'API': 'info',
    'Database': 'warning',
    'Extension Dev': 'purple',
  };
  return colorMap[role] || 'default';
};

const loadImages = async () => {
  // Load images for all projects
  for (const proj of allProjects.value) {
    if (!proj.folder) {
      // If no folder, use placeholder
      proj.imgs = [PlaceholderImg];
      continue;
    }
    
    const loadedImgs = [];
    for (const path in imgFiles) {
      if (path.includes(proj.folder)) {
        const module = await imgFiles[path]();
        loadedImgs.push(module.default);
      }
    }
    // If no images found, use placeholder
    proj.imgs = loadedImgs.length > 0 ? loadedImgs : [PlaceholderImg];
  }
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

.role-chip {
  font-weight: 600;
  letter-spacing: 0.5px;
}

/* Анимации появления для проектов */
.animate-project-1 {
  animation: fadeInUp 0.8s ease-out;
}

.animate-project-2 {
  animation: fadeInUp 0.8s ease-out 0.2s backwards;
}

.animate-project-3 {
  animation: fadeInUp 0.8s ease-out 0.4s backwards;
}

.animate-project-4 {
  animation: fadeInUp 0.8s ease-out 0.6s backwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.8s ease-out;
}

.slide-in-right {
  animation: slideInRight 0.8s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
