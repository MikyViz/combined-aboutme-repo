<template>
  <v-container class="family-guy-gallery">
    <v-row>
      <v-col cols="12" class="text-center mb-4">
        <h2 class="family-guy-title text-h4">
          🎨 Family Guy Art Gallery 🖼️
        </h2>
        <p class="family-guy-text">
          "Like Peter's art collection, but actually good!" - Brian Griffin
        </p>
      </v-col>
    </v-row>
    
    <v-row>
      <v-col 
        v-for="(image, index) in familyGuyImages" 
        :key="index"
        cols="12" 
        sm="6" 
        md="4" 
        lg="2"
        class="d-flex justify-center"
      >
        <v-card 
          class="family-guy-image-card" 
          :class="`animate-${index + 1}`"
          @click="openImageDialog(image, index)"
        >
          <v-img 
            :src="image.src"
            :alt="image.alt"
            class="family-guy-gallery-image"
            height="200"
            cover
          />
          <v-card-text class="text-center pa-2">
            <small class="family-guy-text">{{ image.caption }}</small>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Диалог для просмотра большого изображения -->
    <v-dialog v-model="imageDialog" max-width="600">
      <v-card class="family-guy-card">
        <v-card-title class="family-guy-title">
          {{ selectedImage?.caption }}
        </v-card-title>
        <v-img 
          :src="selectedImage?.src" 
          :alt="selectedImage?.alt"
          class="family-guy-image"
          contain
        />
        <v-card-actions>
          <v-spacer />
          <v-btn 
            class="family-guy-btn" 
            color="primary" 
            @click="imageDialog = false"
          >
            Close (Like Meg's room!)
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const imageDialog = ref(false);
const selectedImage = ref(null);

const familyGuyImages = ref([
  {
    src: '/src/assets/family-guy/Gemini_Generated_Image_56v48g56v48g56v4.png',
    alt: 'Family Guy Style Art 1',
    caption: '🎭 Peter\'s Style'
  },
  {
    src: '/src/assets/family-guy/Gemini_Generated_Image_6xl8hk6xl8hk6xl8.png',
    alt: 'Family Guy Style Art 2',
    caption: '🐕 Brian\'s Wisdom'
  },
  {
    src: '/src/assets/family-guy/Gemini_Generated_Image_dcr36bdcr36bdcr3.png',
    alt: 'Family Guy Style Art 3',
    caption: '👶 Stewie\'s Plans'
  },
  {
    src: '/src/assets/family-guy/Gemini_Generated_Image_e7o17ne7o17ne7o1.png',
    alt: 'Family Guy Style Art 4',
    caption: '👩 Lois\'s Grace'
  },
  {
    src: '/src/assets/family-guy/Gemini_Generated_Image_nxfc2dnxfc2dnxfc.png',
    alt: 'Family Guy Style Art 5',
    caption: '👧 Meg\'s... Existence'
  },
  {
    src: '/src/assets/family-guy/Gemini_Generated_Image_ray92eray92eray9.png',
    alt: 'Family Guy Style Art 6',
    caption: '🏠 Quahog Life'
  }
]);

const openImageDialog = (image, index) => {
  selectedImage.value = image;
  imageDialog.value = true;
};
</script>

<style scoped>
.family-guy-gallery {
  margin: 20px 0;
}

.family-guy-image-card {
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  border-radius: 15px;
  border: 2px solid var(--v-theme-primary);
  background: rgba(var(--v-theme-surface), 0.9);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.family-guy-image-card:hover {
  transform: scale(1.05) rotate(2deg);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  border-color: var(--v-theme-accent);
}

.family-guy-gallery-image {
  border-radius: 10px;
  transition: all 0.3s ease;
}

/* Анимация появления для каждой картинки */
.animate-1 {
  animation: bounceInLeft 0.8s ease-out;
}

.animate-2 {
  animation: bounceInUp 0.8s ease-out 0.1s both;
}

.animate-3 {
  animation: bounceInRight 0.8s ease-out 0.2s both;
}

.animate-4 {
  animation: bounceInLeft 0.8s ease-out 0.3s both;
}

.animate-5 {
  animation: bounceInUp 0.8s ease-out 0.4s both;
}

.animate-6 {
  animation: bounceInRight 0.8s ease-out 0.5s both;
}

@keyframes bounceInLeft {
  0% {
    opacity: 0;
    transform: translateX(-50px) scale(0.8);
  }
  60% {
    opacity: 1;
    transform: translateX(5px) scale(1.05);
  }
  100% {
    transform: translateX(0) scale(1);
  }
}

@keyframes bounceInUp {
  0% {
    opacity: 0;
    transform: translateY(50px) scale(0.8);
  }
  60% {
    opacity: 1;
    transform: translateY(-5px) scale(1.05);
  }
  100% {
    transform: translateY(0) scale(1);
  }
}

@keyframes bounceInRight {
  0% {
    opacity: 0;
    transform: translateX(50px) scale(0.8);
  }
  60% {
    opacity: 1;
    transform: translateX(-5px) scale(1.05);
  }
  100% {
    transform: translateX(0) scale(1);
  }
}
</style>
