<template>
  <v-container>
    <h3>{{ t('about.skills') }}</h3>
    <v-row>
      <v-col v-for="(skill, index) in skills" :key="index" cols="12" md="4" sm="6">
        <v-card 
          class="skill-card"
          :elevation="hoveredSkill === index ? 12 : 2"
          @mouseover="hoveredSkill = index"
          @mouseleave="hoveredSkill = null"
        >
          <v-progress-circular
            :model-value="skill.level"
            :size="100"
            :width="15"
            :color="getColorByLevel(skill.level)"
          >{{ skill.level }}%</v-progress-circular>
          <v-card-title>{{ skill.name }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { t } from '@/translations';
const hoveredSkill = ref(null);
const skills = ref([
  { name: 'JavaScript', level: 90 },
  { name: 'Vue.js', level: 85 },
  { name: 'React.js', level: 83 },
  { name: 'HTML/CSS', level: 95 },
  { name: 'Node.js', level: 80 },
  { name: 'Vuetify', level: 85 },
  { name: 'MySQL', level: 82 },
  { name: 'Docker', level: 75 },
]);

function getColorByLevel(level) {
  if (level >= 90) return 'green';
  if (level >= 80) return 'blue';
  if (level >= 70) return 'purple';
  return 'orange';
}
</script>

<style scoped>
.skill-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  transition: transform 0.3s ease;
}
.skill-card:hover {
  transform: translateY(-10px);
}
</style>
