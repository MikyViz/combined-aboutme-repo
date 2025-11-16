<template>
  <v-container class="family-guy-pattern">
    <h2 class="text-center family-guy-title mb-6">
      {{ t('backendProjects.page.title') }}
    </h2>
    
    <v-img
      src="https://content.internetvideoarchive.com/content/hdphotos/15302/015302/015302_1108x623_638654883664951015.jpg"
      aspect-ratio="2"
      class="my-6 hero family-guy-image"
    ></v-img>
    
    <div class="container">
      <h2 class="family-guy-title mb-4">{{ t('backendProjects.page.sectionTitle') }}</h2>
      <v-row class="my-4">
        <v-col
          v-for="(backendItem, index) in backend"
          :key="index"
          cols="12"
          sm="6"
          md="6"
        >
          <v-card 
            class="my-card family-guy-card"
            :class="`animate-backend-${index + 1}`"
          >
            <v-card-title class="family-guy-title d-flex align-center">
              <v-icon :icon="backendItem.icon" class="mr-2 family-guy-icon" />
              {{ t(backendItem.nameKey) }}
            </v-card-title>
            
            <v-card-subtitle class="family-guy-text mb-2">
              <v-btn 
                :href="backendItem.git" 
                target="_blank" 
                variant="outlined" 
                color="primary"
                class="family-guy-btn"
                prepend-icon="mdi-github"
                size="small"
              >
                GitHub Repository
              </v-btn>
            </v-card-subtitle>
            
            <v-card-text class="family-guy-text">
              <p>{{ t(backendItem.descKey) }}</p>
              
              <!-- Family Guy цитата -->
              <v-alert 
                type="info" 
                variant="tonal" 
                class="mt-4"
                :icon="false"
              >
                <template v-slot:prepend>
                  <v-icon>mdi-format-quote-open</v-icon>
                </template>
                <em>{{ t(backendItem.quoteKey) }}</em>
                <br>
                <small>- {{ t(backendItem.quoteAuthorKey) }}</small>
              </v-alert>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { t } from '@/translations';

const backend = ref([
  {
    nameKey: "backendProjects.aboutMeBE.name",
    descKey: "backendProjects.aboutMeBE.description",
    quoteKey: "backendProjects.aboutMeBE.quote",
    quoteAuthorKey: "backendProjects.aboutMeBE.quoteAuthor",
    git: "https://github.com/MikyViz/combined-aboutme-repo/tree/master/aboutmebe",
    icon: "mdi-api"
  },
  {
    nameKey: "backendProjects.ballonsCalcServer.name",
    descKey: "backendProjects.ballonsCalcServer.description",
    quoteKey: "backendProjects.ballonsCalcServer.quote",
    quoteAuthorKey: "backendProjects.ballonsCalcServer.quoteAuthor",
    git: "https://github.com/MikyViz/ballonsCalcServer",
    icon: "mdi-server"
  },
]);
</script>
<style scoped>
.my-card {
  width: 100%;
  background: rgba(var(--v-theme-surface), 0.95);
  padding: 20px; 
  border: 3px solid var(--v-theme-secondary);
  border-radius: 15px;
  transition: all 0.3s ease-in-out;
  height: 100%;
}

.my-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  border-color: var(--v-theme-accent);
}

.hero.v-image {
  max-width: 100%;
  margin: auto;
  width: 100%;
  border-radius: 15px;
}

/* Анимации появления для backend проектов */
.animate-backend-1 {
  animation: slideInUp 0.8s ease-out;
}

.animate-backend-2 {
  animation: slideInUp 0.8s ease-out 0.3s both;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hover эффект для иконок */
.my-card:hover .family-guy-icon {
  animation: spin 0.6s ease-in-out;
}

@keyframes spin {
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.2); }
  100% { transform: rotate(360deg) scale(1); }
}
</style>