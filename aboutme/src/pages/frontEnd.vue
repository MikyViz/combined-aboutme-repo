<template>
  <div class="pa-4">
    <!-- Professional frontend projects page -->
    <v-container>
      <v-row class="mb-6">
        <v-col cols="12" class="text-center">
          <h1 class="professional-title text-h3 mb-4 fade-in">
            Frontend Projects
          </h1>
          <p class="professional-text text-h6 slide-in-right">
            Modern user interfaces with exceptional UX
          </p>
        </v-col>
      </v-row>
    </v-container>
    
    <!-- Projects component -->
    <div class="professional-card glass-card ma-4">
      <ProjectsOVFront />
    </div>
  </div>
</template>

<script setup>
import ProjectsOVFront from '@/components/ProjectsOVFront.vue';
</script>

<style scoped>
.professional-card {
  padding: 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: slideInUp 0.8s ease-out;
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
