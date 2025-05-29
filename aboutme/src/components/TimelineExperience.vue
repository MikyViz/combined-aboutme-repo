<template>
  <v-container>
    <h2 class="text-h4 mb-6">{{ $t('about.experience') }}</h2>
    <v-timeline align="start" side="end" line-thickness="4">
      <v-timeline-item
        v-for="(item, i) in timelineItems"
        :key="i"
        :dot-color="item.color"
        :icon="item.icon"
        size="large"
      >        <template v-slot:opposite>
          <div :class="['text-'+item.color, 'font-weight-bold']">
            {{ $t(`timeline.periods.${item.yearKey}`) }}
          </div>
        </template><v-card 
          elevation="5" 
          class="timeline-card v-motion"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: i * 200 } }"
          :class="{ 'on-hover': hover === i }" 
          @mouseover="hover = i" 
          @mouseleave="hover = null"
        >
          <v-card-title>{{ $t(`timeline.${item.key}.title`) }}</v-card-title>
          <v-card-subtitle>{{ $t(`timeline.${item.key}.subtitle`) }}</v-card-subtitle>
          <v-card-text>{{ $t(`timeline.${item.key}.text`) }}</v-card-text>
          <v-card-actions v-if="item.link">
            <v-btn :color="item.color" variant="tonal" :href="item.link" target="_blank">
              {{ $t('timeline.moreDetails') }} <v-icon class="ml-2">mdi-open-in-new</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const i18n = useI18n();
const hover = ref(null);

const timelineItems = [  {
    yearKey: 'year2010',
    color: 'indigo',
    icon: 'mdi-school',
    key: 'start',
    link: null
  },  {
    yearKey: 'year2023Start',
    color: 'blue',
    icon: 'mdi-code-tags',
    key: 'basics',
    link: null
  },
  {
    yearKey: 'year2023Middle',
    color: 'green',
    icon: 'mdi-vuejs',
    key: 'frontend',
    link: null
  },
  {
    yearKey: 'year2023End',
    color: 'purple',
    icon: 'mdi-database',
    key: 'backend',
    link: null
  },
  {
    yearKey: 'year2024',
    color: 'red',
    icon: 'mdi-rocket-launch',
    key: 'fullstack',
    link: null
  },
  {
    yearKey: 'year2024Future',
    color: 'amber-darken-2',
    icon: 'mdi-star',
    key: 'growth',
    link: null
  },
];
</script>

<style scoped>
.timeline-card {
  transition: all 0.3s ease;
  transform-origin: left center;
}

.on-hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2) !important;
}
</style>
