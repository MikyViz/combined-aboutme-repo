<template>
  <div class="pa-4">
    <!-- Professional modern about page -->
    <v-container>
      <v-row class="mb-6">
        <v-col cols="12" class="text-center">
          <h1 class="professional-title text-h3 mb-4 fade-in">
            About Me
          </h1>
          <p class="professional-text text-h6 slide-in-left">
            Experienced developer crafting innovative solutions
          </p>
        </v-col>
      </v-row>
    </v-container>

    <!-- Professional skills -->
    <div class="professional-card glass-card ma-4">
      <ProfScils />
    </div>
    
    <!-- Skills visualization -->
    <div class="professional-card glass-card ma-4">
      <SkillsDisplay />
    </div>
    
    <!-- Timeline experience -->
    <div class="professional-card glass-card ma-4">
      <TimelineExperience />
    </div>
  </div>
</template>

<script setup>
import SkillsDisplay from '@/components/SkillsDisplay.vue';
import TimelineExperience from '@/components/TimelineExperience.vue';
import ProfScils from '@/components/ProfScils.vue';
</script>

<style scoped>
/* Professional modern styles for about page */
div > * {
  margin-bottom: 2rem;
}

.professional-card {
  padding: 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.professional-card:nth-child(1) {
  animation: slideInLeft 0.8s ease-out;
}

.professional-card:nth-child(2) {
  animation: slideInUp 0.8s ease-out 0.2s both;
}

.professional-card:nth-child(3) {
  animation: slideInRight 0.8s ease-out 0.4s both;
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
</style>
