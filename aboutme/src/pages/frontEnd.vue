<template>
  <div class="family-guy-pattern pa-4">
    <!-- Family Guy заголовок для Frontend проектов -->
    <v-container>
      <v-row class="mb-6">
        <v-col cols="12" class="text-center">
          <h1 class="family-guy-title text-h3 mb-4 family-guy-bounce">
            🎨 Frontend Projects - Like Peter's TV Shows! 📺
          </h1>
          <p class="family-guy-text text-h6">
            "Holy crap! These projects are better than The A-Team reruns!" 🚀
          </p>
        </v-col>
      </v-row>
    </v-container>
    
    <!-- Компонент с проектами -->
    <div class="family-guy-card ma-4">
      <ProjectsOVFront />
    </div>
  </div>
</template>

<script setup>
import ProjectsOVFront from '@/components/ProjectsOVFront.vue';
</script>

<style scoped>
.family-guy-card {
  background: rgba(var(--v-theme-surface), 0.9);
  border-radius: 15px;
  padding: 20px;
  border: 3px solid var(--v-theme-accent);
  transition: all 0.3s ease-in-out;
  animation: slideInUp 0.8s ease-out;
}

.family-guy-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
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
</style>
