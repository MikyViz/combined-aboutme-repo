<template>
    <div v-html="content"></div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    content: {
      type: String,
      required: true
    }
  });
  </script>
  
  <style scoped>
  </style>
  