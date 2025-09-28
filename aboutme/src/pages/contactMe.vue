<template>
  <div class="family-guy-pattern pa-4">
    <!-- Family Guy стиль заголовок для контактов -->
    <v-container>
      <v-row class="mb-6">
        <v-col cols="12" class="text-center">
          <h1 class="family-guy-title text-h3 mb-4">
            📞 Contact Me - Like Calling the Griffins! 🏠
          </h1>
          <p class="family-guy-text text-h6">
            "Hey there! Want to chat? Just like when Brian calls Peter - but hopefully with better results!" 😄
          </p>
        </v-col>
      </v-row>
    </v-container>

    <!-- Новая улучшенная контактная форма -->
    <div class="family-guy-card ma-4">
      <ContactForm />
    </div>

    <!-- Существующая информация о контактах в стиле Family Guy -->
    <v-container class="fill-height d-flex align-center justify-center mt-8">
      <v-card 
        class="pa-4 family-guy-card" 
        max-width="500" 
        v-motion
        :initial="{ opacity: 0, x: -100 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
      >
        <v-card-title class="text-h4 font-weight-bold family-guy-title">
          🎯 Let's Connect Like the Griffin Family!
        </v-card-title>
        <v-card-text class="family-guy-text">
          <v-list lines="two">
            <v-list-item class="family-guy-text">
              <template v-slot:prepend>
                <v-icon icon="mdi-email" class="family-guy-icon"></v-icon>
              </template>
              <v-list-item-title>📧 Email (Better than Meg's texts!)</v-list-item-title>
              <v-list-item-subtitle>vizenovsky@gmail.com</v-list-item-subtitle>
            </v-list-item>
            <v-list-item class="family-guy-text">
              <template v-slot:prepend>
                <v-icon icon="mdi-phone" class="family-guy-icon"></v-icon>
              </template>
              <v-list-item-title>📱 Phone (Ring ring, like Joe's wheelchair!)</v-list-item-title>
              <v-list-item-subtitle>+972583278593</v-list-item-subtitle>
            </v-list-item>
            <v-list-item href="https://www.linkedin.com/in/mikyviz" target="_blank" class="family-guy-text family-guy-btn">
              <template v-slot:prepend>
                <v-icon icon="mdi-linkedin" class="family-guy-icon"></v-icon>
              </template>
              <v-list-item-title>💼 LinkedIn (Professional like Brian... sometimes)</v-list-item-title>
              <v-list-item-subtitle>www.linkedin.com/in/mikyviz</v-list-item-subtitle>
            </v-list-item>
            <v-list-item href="https://www.xplace.com/il/u/vizenovsky" target="_blank" class="family-guy-text family-guy-btn">
              <template v-slot:prepend>
                <v-icon icon="mdi-web" class="family-guy-icon"></v-icon>
              </template>
              <v-list-item-title>🌐 Xplace (My web presence!)</v-list-item-title>
              <v-list-item-subtitle>https://www.xplace.com/il/u/vizenovsky</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
      <v-card 
        class="ml-8 family-guy-card"
        v-motion
        :initial="{ opacity: 0, x: 100 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
      >
        <v-img :src="backgroundImg" width="500" class="family-guy-image"></v-img>
        <v-card-text class="text-center family-guy-text">
          <em>"Just like Peter's birthmark - unique and memorable!" 😄</em>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
import backgroundImg from '@/assets/BirthMark.gif';
import ContactForm from '@/components/ContactForm.vue';
</script>

<style scoped>
/* Family Guy стили для контактной страницы */
.v-card {
  transition: all 0.3s ease;
}

.v-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 12px 24px rgba(0,0,0,0.3) !important;
}

.family-guy-card {
  background: rgba(var(--v-theme-surface), 0.9);
  border-radius: 15px;
  border: 3px solid var(--v-theme-primary);
}

/* Анимация для list items */
.v-list-item {
  border-radius: 10px;
  margin: 5px 0;
  transition: all 0.2s ease;
}

.v-list-item:hover {
  background-color: rgba(var(--v-theme-primary), 0.1);
  transform: translateX(10px);
}

/* Стили для иконок */
.family-guy-icon {
  transition: all 0.3s ease;
}

.v-list-item:hover .family-guy-icon {
  transform: scale(1.2) rotate(15deg);
  color: rgb(var(--v-theme-primary));
}
</style>
