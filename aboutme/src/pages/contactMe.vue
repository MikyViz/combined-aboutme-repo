<template>
  <div class="pa-4">
    <!-- Professional contact page -->
    <v-container>
      <v-row class="mb-6">
        <v-col cols="12" class="text-center">
          <h1 class="professional-title text-h3 mb-4 fade-in">
            Contact Me
          </h1>
          <p class="professional-text text-h6 slide-in-left">
            Let's connect and build something amazing together
          </p>
        </v-col>
      </v-row>
    </v-container>

    <!-- Contact form -->
    <div class="professional-card glass-card ma-4">
      <ContactForm />
    </div>

    <!-- Contact information -->
    <v-container class="fill-height d-flex align-center justify-center mt-8">
      <v-card 
        class="pa-4 professional-card glass-card" 
        max-width="500" 
        v-motion
        :initial="{ opacity: 0, x: -100 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
      >
        <v-card-title class="text-h4 font-weight-bold professional-title">
          Let's Connect
        </v-card-title>
        <v-card-text class="professional-text">
          <v-list lines="two">
            <v-list-item class="professional-text">
              <template v-slot:prepend>
                <v-icon icon="mdi-email" class="professional-icon"></v-icon>
              </template>
              <v-list-item-title>Email</v-list-item-title>
              <v-list-item-subtitle>vizenovsky@gmail.com</v-list-item-subtitle>
            </v-list-item>
            <v-list-item class="professional-text">
              <template v-slot:prepend>
                <v-icon icon="mdi-phone" class="professional-icon"></v-icon>
              </template>
              <v-list-item-title>Phone</v-list-item-title>
              <v-list-item-subtitle>+972583278593</v-list-item-subtitle>
            </v-list-item>
            <v-list-item href="https://www.linkedin.com/in/mikyviz" target="_blank" class="professional-text professional-btn">
              <template v-slot:prepend>
                <v-icon icon="mdi-linkedin" class="professional-icon"></v-icon>
              </template>
              <v-list-item-title>LinkedIn</v-list-item-title>
              <v-list-item-subtitle>www.linkedin.com/in/mikyviz</v-list-item-subtitle>
            </v-list-item>
            <v-list-item href="https://www.xplace.com/il/u/vizenovsky" target="_blank" class="professional-text professional-btn">
              <template v-slot:prepend>
                <v-icon icon="mdi-web" class="professional-icon"></v-icon>
              </template>
              <v-list-item-title>Xplace</v-list-item-title>
              <v-list-item-subtitle>https://www.xplace.com/il/u/vizenovsky</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
      <v-card 
        class="ml-8 professional-card glass-card"
        v-motion
        :initial="{ opacity: 0, x: 100 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
      >
        <v-img :src="backgroundImg" width="500" class="professional-avatar"></v-img>
        <v-card-text class="text-center professional-text">
          <em>"Building connections, one project at a time"</em>
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
/* Professional modern styles for contact page */
.v-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.v-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.2) !important;
}

.professional-card {
  padding: 20px;
}

/* Animation for list items */
.v-list-item {
  border-radius: 10px;
  margin: 5px 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.v-list-item:hover {
  background-color: rgba(var(--v-theme-primary), 0.1);
  transform: translateX(10px);
}

/* Icon styles */
.professional-icon {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.v-list-item:hover .professional-icon {
  transform: scale(1.2);
  color: rgb(var(--v-theme-primary));
}
</style>
