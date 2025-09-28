<template>
  <div class="family-guy-pattern pa-4">
    <!-- Family Guy стиль заголовок для страницы About -->
    <v-container>
      <v-row class="mb-6">
        <v-col cols="12" class="text-center">
          <h1 class="family-guy-title text-h3 mb-4">
            🎭 About Me - Like a Griffin Family Episode! 📺
          </h1>
          <p class="family-guy-text text-h6">
            "Holy crap! You want to know about me? Well, buckle up like you're in the Griffin living room!" 🛋️
          </p>
        </v-col>
      </v-row>
    </v-container>

    <!-- Профессиональные навыки из ProfScils -->
    <div class="family-guy-card ma-4">
      <ProfScils />
    </div>
    
    <!-- Визуальное представление навыков -->
    <div class="family-guy-card ma-4">
      <SkillsDisplay />
    </div>
    
    <!-- Интерактивная шкала опыта -->
    <div class="family-guy-card ma-4">
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
/* Family Guy стили для страницы About */
div > * {
  margin-bottom: 2rem;
}

.family-guy-card {
  background: rgba(var(--v-theme-surface), 0.8);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
}

.family-guy-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Анимация появления */
.family-guy-card:nth-child(1) {
  animation: slideInLeft 0.8s ease-out;
}

.family-guy-card:nth-child(2) {
  animation: slideInUp 0.8s ease-out 0.2s both;
}

.family-guy-card:nth-child(3) {
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
