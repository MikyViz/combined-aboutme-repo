<template>
  <div>
    <!-- Профессиональные навыки из ProfScils -->
    <ProfScils />
    
    <!-- Визуальное представление навыков -->
    <SkillsDisplay />
    
    <!-- Интерактивная шкала опыта -->
    <TimelineExperience />
  </div>
</template>

<script setup>
import SkillsDisplay from '@/components/SkillsDisplay.vue';
import TimelineExperience from '@/components/TimelineExperience.vue';
import ProfScils from '@/components/ProfScils.vue';
</script>

<style scoped>
div > * {
  margin-bottom: 2rem;
}
</style>
