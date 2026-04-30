<template>
  <v-container class="fade-in">
    <h2 class="text-center professional-title mb-6">
      {{ t('backendProjects.page.title') }}
    </h2>
    
    <v-img
      src="../assets/beckgroundHero.png"
      aspect-ratio="2"
      class="my-6 hero professional-avatar"
    ></v-img>
    
    <div class="container">
      <h2 class="professional-title mb-4">{{ t('backendProjects.page.sectionTitle') }}</h2>
      <v-row class="my-4">
        <v-col
          v-for="(backendItem, index) in backend"
          :key="index"
          cols="12"
          sm="6"
          md="6"
        >
          <v-card 
            class="my-card professional-card glass-card"
            :class="`animate-backend-${index + 1}`"
          >
            <v-card-title class="professional-title d-flex align-center">
              <v-icon :icon="backendItem.icon" class="mr-2 professional-icon" />
              {{ t(backendItem.nameKey) }}
            </v-card-title>
            
            <v-card-subtitle class="professional-text mb-2">
              <v-btn 
                :href="backendItem.git" 
                target="_blank" 
                variant="outlined" 
                color="primary"
                class="professional-btn"
                prepend-icon="mdi-github"
                size="small"
              >
                GitHub Repository
              </v-btn>
            </v-card-subtitle>
            
            <v-card-text class="professional-text">
              <p>{{ t(backendItem.descKey) }}</p>
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
    git: "https://github.com/MikyViz/combined-aboutme-repo/tree/master/aboutmebe",
    icon: "mdi-api"
  },
  {
    nameKey: "backendProjects.ballonsCalcServer.name",
    descKey: "backendProjects.ballonsCalcServer.description",
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
.my-card:hover .card-icon {
  animation: spin 0.6s ease-in-out;
}

@keyframes spin {
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.2); }
  100% { transform: rotate(360deg) scale(1); }
}
</style>