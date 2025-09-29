<template>
  <div class="family-guy-pattern pa-4">
    <!-- Family Guy заголовок для NPM пакетов -->
    <v-container>
      <v-row class="mb-6">
        <v-col cols="12" class="text-center">
          <h1 class="family-guy-title text-h3 mb-4 family-guy-bounce">
            📦 My NPM Packages - Like Stewie's Inventions! 🚀
          </h1>
          <p class="family-guy-text text-h6">
            "Blast! These packages are more sophisticated than my mind control device!" - Stewie Griffin
          </p>
        </v-col>
      </v-row>
    </v-container>

    <!-- NPM пакеты -->
    <v-container>
      <v-row>
        <v-col 
          v-for="(pkg, index) in npmPackages" 
          :key="index"
          cols="12" 
          md="8" 
          lg="6"
          class="mx-auto"
        >
          <v-card 
            class="family-guy-card npm-package-card"
            :class="`animate-package-${index + 1}`"
            elevation="8"
          >
            <v-card-title class="family-guy-title d-flex align-center">
              <v-icon :icon="pkg.icon" class="mr-2 family-guy-icon" size="large" />
              {{ pkg.name }}
            </v-card-title>

            <v-card-subtitle class="family-guy-text">
              <v-chip 
                color="primary" 
                variant="outlined" 
                class="family-guy-btn mr-2"
                size="small"
                :loading="pkg.isLoading"
              >
                <v-icon v-if="!pkg.isLoading" icon="mdi-tag" class="mr-1" />  
                v{{ pkg.version }}
              </v-chip>
              <v-chip 
                :color="pkg.hasError ? 'error' : 'success'" 
                variant="outlined" 
                class="family-guy-btn"
                size="small"
                :loading="pkg.isLoading"
              >
                <v-icon v-if="!pkg.isLoading && !pkg.hasError" icon="mdi-download" class="mr-1" />
                <v-icon v-if="pkg.hasError" icon="mdi-alert" class="mr-1" />
                {{ pkg.downloads }}
              </v-chip>
              <v-tooltip text="Real-time data from NPM API!" location="top">
                <template v-slot:activator="{ props }">
                  <v-chip 
                    v-bind="props"
                    color="info" 
                    variant="outlined" 
                    class="family-guy-btn ml-2"
                    size="small"
                  >
                    <v-icon icon="mdi-api" class="mr-1" />
                    Live Data
                  </v-chip>
                </template>
              </v-tooltip>
            </v-card-subtitle>

            <v-card-text>
              <!-- Описания на разных языках -->
              <v-tabs v-model="pkg.activeTab" class="mb-4">
                <v-tab 
                  v-for="(desc, lang) in pkg.descriptions" 
                  :key="lang"
                  :value="lang"
                  class="family-guy-btn"
                >
                  {{ lang === 'en' ? '🇺🇸 EN' : lang === 'ru' ? '🇷🇺 RU' : '🇮🇱 HE' }}
                </v-tab>
              </v-tabs>

              <v-window v-model="pkg.activeTab">
                <v-window-item 
                  v-for="(desc, lang) in pkg.descriptions" 
                  :key="lang"
                  :value="lang"
                >
                  <p class="family-guy-text">{{ desc }}</p>
                </v-window-item>
              </v-window>

              <v-divider class="my-4" />

              <!-- Фичи пакета -->
              <div class="mb-4">
                <h4 class="family-guy-title mb-2">✨ Features:</h4>
                <v-chip-group>
                  <v-chip 
                    v-for="feature in pkg.features" 
                    :key="feature"
                    color="accent" 
                    variant="outlined"
                    class="family-guy-btn ma-1"
                    size="small"
                  >
                    {{ feature }}
                  </v-chip>
                </v-chip-group>
              </div>

              <!-- Технологии -->
              <div class="mb-4">
                <h4 class="family-guy-title mb-2">🛠️ Tech Stack:</h4>
                <v-chip-group>
                  <v-chip 
                    v-for="tech in pkg.technologies" 
                    :key="tech"
                    color="secondary" 
                    variant="outlined"
                    class="family-guy-btn ma-1"
                    size="small"
                  >
                    {{ tech }}
                  </v-chip>
                </v-chip-group>
              </div>

              <!-- Установка -->
              <div class="mb-4">
                <h4 class="family-guy-title mb-2">📦 Installation:</h4>
                <v-card class="family-guy-code pa-3" color="surface-variant">
                  <pre class="installation-text"># Install globally for CLI usage
npm install -g keymap-inspector

# Install locally for library usage  
npm install keymap-inspector</pre>
                </v-card>
              </div>

              <!-- Статистика пакета (динамическая) -->
              <div class="mb-4">
                <h4 class="family-guy-title mb-2">
                  📊 Package Stats: 
                  <v-chip 
                    v-if="pkg.isLoading" 
                    color="info" 
                    variant="text" 
                    size="small"
                    class="ml-2"
                  >
                    <v-progress-circular indeterminate size="16" class="mr-1" />
                    Loading from NPM API...
                  </v-chip>
                </h4>
                <v-row>
                  <v-col cols="6" sm="3">
                    <v-chip 
                      color="success" 
                      variant="outlined" 
                      class="family-guy-btn" 
                      size="small"
                      :loading="pkg.isLoading"
                    >
                      📁 {{ pkg.fileCount }} files
                    </v-chip>
                  </v-col>
                  <v-col cols="6" sm="3">
                    <v-chip 
                      color="info" 
                      variant="outlined" 
                      class="family-guy-btn" 
                      size="small"
                      :loading="pkg.isLoading"
                    >
                      📦 {{ pkg.packageSize }}
                    </v-chip>
                  </v-col>
                  <v-col cols="6" sm="3">
                    <v-chip 
                      color="warning" 
                      variant="outlined" 
                      class="family-guy-btn" 
                      size="small"
                      :loading="pkg.isLoading"
                    >
                      🪪 {{ pkg.license }}
                    </v-chip>
                  </v-col>
                  <v-col cols="6" sm="3">
                    <v-chip color="primary" variant="outlined" class="family-guy-btn" size="small">
                      🌍 7 layouts
                    </v-chip>
                  </v-col>
                </v-row>
                
                <!-- Детальная статистика загрузок -->
                <v-row v-if="downloadStats && !pkg.isLoading" class="mt-2">
                  <v-col cols="12">
                    <v-card class="pa-3 download-stats-card" color="surface-variant" variant="tonal">
                      <h5 class="family-guy-title mb-2">📈 Download Statistics:</h5>
                      <v-row>
                        <v-col cols="6" sm="3">
                          <div class="text-center">
                            <div class="text-h6 font-weight-bold stats-number">{{ downloadStats.monthlyFormatted }}</div>
                            <div class="text-caption stats-label">Monthly Downloads</div>
                          </div>
                        </v-col>
                        <v-col cols="6" sm="3">
                          <div class="text-center">
                            <div class="text-h6 font-weight-bold stats-number">{{ downloadStats.weeklyFormatted }}</div>
                            <div class="text-caption stats-label">Weekly Downloads</div>
                          </div>
                        </v-col>
                        <v-col cols="6" sm="3">
                          <div class="text-center">
                            <div class="text-h6 font-weight-bold stats-number">{{ Math.round(downloadStats.weekly / 7) }}</div>
                            <div class="text-caption stats-label">Daily Average</div>
                          </div>
                        </v-col>
                        <v-col cols="6" sm="3">
                          <div class="text-center">
                            <v-icon color="success" class="text-h6">mdi-trending-up</v-icon>
                            <div class="text-caption stats-label">Real-time Data</div>
                          </div>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-col>
                </v-row>
              </div>

              <!-- Ошибка загрузки -->
              <v-alert 
                v-if="pkg.hasError" 
                type="error" 
                variant="tonal" 
                class="family-guy-text mt-4"
                :icon="false"
              >
                <template v-slot:prepend>
                  <v-icon>mdi-alert-circle</v-icon>
                </template>
                <div class="d-flex justify-space-between align-center">
                  <div>
                    <strong>Oops! Failed to load NPM data</strong><br>
                    <small>{{ error }}</small>
                  </div>
                  <v-btn 
                    color="error" 
                    variant="outlined" 
                    size="small"
                    class="family-guy-btn"
                    @click="fetchPackageInfo"
                  >
                    <v-icon class="mr-1">mdi-refresh</v-icon>
                    Retry
                  </v-btn>
                </div>
              </v-alert>

              <!-- Family Guy цитата -->
              <v-alert 
                type="info" 
                variant="tonal" 
                class="family-guy-text mt-4"
                :icon="false"
              >
                <template v-slot:prepend>
                  <v-icon>mdi-format-quote-open</v-icon>
                </template>
                <em>{{ pkg.quote }}</em>
                <br>
                <small>- {{ pkg.quoteAuthor }}</small>
              </v-alert>
            </v-card-text>

            <v-card-actions class="pa-4">
              <v-btn 
                :href="pkg.npmUrl" 
                target="_blank" 
                color="primary"
                class="family-guy-btn mr-2"
                prepend-icon="mdi-npm"
              >
                📦 NPM Package
              </v-btn>
              <v-btn 
                :href="pkg.githubUrl" 
                target="_blank" 
                color="secondary"
                class="family-guy-btn"
                prepend-icon="mdi-github"
              >
                💻 GitHub
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <!-- Дополнительная информация -->
      <v-row class="mt-8">
        <v-col cols="12">
          <v-card class="family-guy-card text-center">
            <v-card-text>
              <h3 class="family-guy-title mb-4">
                🎯 Why NPM Packages?
              </h3>
              <p class="family-guy-text text-h6">
                "Just like Peter's crazy schemes, but these actually work and help other developers!" 
              </p>
              <p class="family-guy-text">
                Creating NPM packages allows me to share useful tools with the developer community,
                just like how the Griffin family shares their... unique wisdom with Quahog! 🏠
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useHead } from '@vueuse/head';
import { useNpmPackageInfo } from '@/composables/useNpmPackageInfo.js';

// Используем composable для получения динамических данных
const { 
  packageData, 
  downloadStats, 
  loading, 
  error, 
  getDownloadSummary, 
  getPackageSize, 
  getFileCount 
} = useNpmPackageInfo('keymap-inspector');

// Статические описания и настройки
const staticPackageInfo = ref({
  icon: 'mdi-keyboard',
  activeTab: 'en',
  descriptions: {
    en: 'Inspect keyboard events and characters across different layouts. Find which physical key corresponds to a character and see what characters are on that key in other keyboard layouts.',
    ru: 'Инспектор клавиатурных раскладок. Определяет, какая физическая клавиша соответствует символу, и показывает, какие символы находятся на этой клавише в других раскладках.',
    he: 'בודק פריסות מקלדת. קובע איזה מקש פיזי מתאים לתו ומראה אילו תווים נמצאים על המקש הזה בפריסות מקלדת אחרות.'
  },
  features: [
    '7 keyboard layouts (English, Russian, German, French, Spanish, Ukrainian, Hebrew)',
    'Bidirectional mapping (Character → Key info, Key code → Characters)',
    'CLI tool for quick inspections',
    'TypeScript support with full type definitions',
    'Lightweight package with minimal dependencies',
    'MIT License - free to use and modify'
  ],
  technologies: [
    'TypeScript',
    'Node.js',
    'CLI Tools',
    'Keyboard Events API',
    'Cross-platform'
  ],
  npmUrl: 'https://www.npmjs.com/package/keymap-inspector',
  githubUrl: 'https://github.com/MikyViz/keymap-inspector',
  quote: "Holy crap! This supports 7 languages! That's more than I can count without using my toes!",
  quoteAuthor: "Peter Griffin"
});

// Вычисляемые свойства для объединения статических и динамических данных
const npmPackages = computed(() => [
  {
    ...staticPackageInfo.value,
    name: packageData.value?.name || 'keymap-inspector',
    version: packageData.value?.version || 'Loading...',
    downloads: loading.value ? 'Loading...' : (error.value ? 'Error loading' : getDownloadSummary()),
    license: packageData.value?.license || 'MIT',
    packageSize: loading.value ? 'Loading...' : getPackageSize(),
    fileCount: loading.value ? 'Loading...' : getFileCount(),
    isLoading: loading.value,
    hasError: error.value
  }
]);

// SEO мета-теги
useHead({
  title: 'My NPM Packages - keymap-inspector v0.1.5 | Miky Vizenovsky',
  meta: [
    {
      name: 'description',
      content: 'keymap-inspector v0.1.5 - TypeScript package for inspecting keyboard layouts across 7 languages with CLI support'
    },
    {
      name: 'keywords',
      content: 'keymap-inspector, NPM package, TypeScript, keyboard layouts, CLI tool, multilingual, developer tools'
    }
  ]
});
</script>

<style scoped>
.npm-package-card {
  background: rgba(var(--v-theme-surface), 0.95);
  border: 3px solid var(--v-theme-primary);
  transition: all 0.3s ease-in-out;
  height: 100%;
}

.npm-package-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  border-color: var(--v-theme-accent);
}

.animate-package-1 {
  animation: slideInUp 0.8s ease-out;
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

.v-tabs {
  border-radius: 10px;
  background: rgba(var(--v-theme-surface-variant), 0.5);
}

.v-chip {
  transition: all 0.2s ease;
}

.v-chip:hover {
  transform: scale(1.05);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.npm-package-card:hover .family-guy-icon {
  animation: bounce 0.6s ease-in-out;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) scale(1);
  }
  40% {
    transform: translateY(-5px) scale(1.1);
  }
  60% {
    transform: translateY(-3px) scale(1.05);
  }
}

.family-guy-code {
  border-radius: 10px;
  border: 2px solid var(--v-theme-primary);
  font-family: 'Courier New', monospace;
}

.family-guy-code pre {
  color: var(--v-theme-on-surface-variant);
  margin: 0;
}

/* Улучшенная контрастность для блока установки */
.installation-text {
  font-weight: 500;
  color: #1a1a1a !important; /* Темный текст для светлой темы */
}

/* Темная тема - светлый текст */
.v-theme--dark .installation-text {
  color: #ffffff !important;
}

/* Улучшенная контрастность для статистики загрузок */
.download-stats-card {
  border: 2px solid var(--v-theme-primary);
  background: rgba(240, 240, 240, 0.95) !important; /* Светлый фон для светлой темы */
}

/* Темная тема - темный фон */
.v-theme--dark .download-stats-card {
  background: rgba(30, 30, 30, 0.95) !important;
}

/* Светлая тема - темные цифры */
.stats-number {
  color: #1565c0 !important;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  font-weight: 600;
}

/* Темная тема - светлые цифры */
.v-theme--dark .stats-number {
  color: #90caf9 !important;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.1);
}

/* Светлая тема - темные подписи */
.stats-label {
  color: #2c2c2c !important;
  font-weight: 500;
}

/* Темная тема - светлые подписи */
.v-theme--dark .stats-label {
  color: #e0e0e0 !important;
  font-weight: 500;
}
</style>