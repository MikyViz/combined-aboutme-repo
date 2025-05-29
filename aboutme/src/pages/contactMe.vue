<template>
  <div>
    <!-- Новая улучшенная контактная форма -->
    <ContactForm />

    <!-- Существующая информация о контактах -->
    <v-container class="fill-height d-flex align-center justify-center mt-8">
      <v-card class="pa-4" max-width="500" 
        v-motion
        :initial="{ opacity: 0, x: -100 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }">
        <v-card-title class="text-h4 font-weight-bold">
          Let's Connect!
        </v-card-title>
        <v-card-text>
          <v-list lines="two">
            <v-list-item>
              <template v-slot:prepend>
                <v-icon icon="mdi-email"></v-icon>
              </template>
              <v-list-item-title>Email</v-list-item-title>
              <v-list-item-subtitle>vizenovsky@gmail.com</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon icon="mdi-phone"></v-icon>
              </template>
              <v-list-item-title>Phone</v-list-item-title>
              <v-list-item-subtitle>+972583278593</v-list-item-subtitle>
            </v-list-item>
            <v-list-item href="https://www.linkedin.com/in/mikyviz" target="_blank">
              <template v-slot:prepend>
                <v-icon icon="mdi-linkedin"></v-icon>
              </template>
                <v-list-item-title>LinkedIn</v-list-item-title>
               <v-list-item-subtitle>www.linkedin.com/in/mikyviz</v-list-item-subtitle>
            </v-list-item>
            <v-list-item href="https://www.xplace.com/il/u/vizenovsky" target="_blank">
               <template v-slot:prepend>
                <v-icon icon="mdi-web"></v-icon>
              </template>
              <v-list-item-title>Xplace</v-list-item-title>
              <v-list-item-subtitle>https://www.xplace.com/il/u/vizenovsky</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card-text>
       </v-card>
       <v-card class="ml-8"
        v-motion
        :initial="{ opacity: 0, x: 100 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }">
        <v-img :src="backgroundImg" width="500"></v-img>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
import backgroundImg from '@/assets/BirthMark.gif';
import ContactForm from '@/components/ContactForm.vue';
</script>

<style scoped>
/* Анимация при наведении на карточки */
.v-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.v-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.2) !important;
}
</style>
