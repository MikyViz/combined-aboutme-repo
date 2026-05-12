<template>
  <div class="professional-bg-light pa-4">
    <!-- NPM Packages Header -->
    <v-container>
      <v-row class="mb-6">
        <v-col cols="12" class="text-center">
          <h1 class="professional-title text-h3 mb-4">
            My NPM Packages
          </h1>
          <p class="professional-subtitle text-h6">
            Open source packages for the developer community
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
            class="professional-card npm-package-card"
            :class="`animate-package`"
            elevation="8"
          >
            <v-card-title class="professional-title d-flex align-center">
              <v-icon :icon="pkg.icon" class="mr-2" size="large" />
              {{ pkg.name }}
            </v-card-title>

            <v-card-subtitle class="professional-subtitle">
              <v-chip 
                color="primary" 
                variant="outlined" 
                class="mr-2"
                size="small"
                :loading="pkg.isLoading"
              >
                <v-icon v-if="!pkg.isLoading" icon="mdi-tag" class="mr-1" />  
                v{{ pkg.version }}
              </v-chip>
              <v-chip 
                :color="pkg.hasError ? 'error' : 'success'" 
                variant="outlined" 
                class=""
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
                    class="ml-2"
                    size="small"
                  >
                    <v-icon icon="mdi-api" class="mr-1" />
                    Live Data
                  </v-chip>
                </template>
              </v-tooltip>
            </v-card-subtitle>

            <v-card-text>
              <!-- Описание на текущем языке -->
              <p class="professional-text mb-4">
                {{ pkg.descriptions[currentLocale] || pkg.descriptions['en'] }}
              </p>

              <v-divider class="my-4" />

              <!-- Фичи пакета -->
              <div class="mb-4">
                <h4 class="professional-title mb-2">Features:</h4>
                <v-chip-group>
                  <v-chip 
                    v-for="feature in pkg.features" 
                    :key="feature"
                    color="accent" 
                    variant="outlined"
                    class="ma-1"
                    size="small"
                  >
                    {{ feature }}
                  </v-chip>
                </v-chip-group>
              </div>

              <!-- Технологии -->
              <div class="mb-4">
                <h4 class="professional-title mb-2">Tech Stack:</h4>
                <v-chip-group>
                  <v-chip 
                    v-for="tech in pkg.technologies" 
                    :key="tech"
                    color="secondary" 
                    variant="outlined"
                    class="ma-1"
                    size="small"
                  >
                    {{ tech }}
                  </v-chip>
                </v-chip-group>
              </div>

              <!-- Установка -->
              <div class="mb-4">
                <h4 class="professional-title mb-2">Installation:</h4>
                <v-card class="pa-3" color="surface-variant">
                  <pre class="installation-text">{{ pkg.installationCode }}</pre>
                </v-card>
              </div>

              <!-- Статистика пакета (динамическая) -->
              <div class="mb-4">
                <h4 class="professional-title mb-2">
                  Package Stats: 
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
                      class="" 
                      size="small"
                      :loading="pkg.isLoading"
                    >
                       {{ pkg.fileCount }} files
                    </v-chip>
                  </v-col>
                  <v-col cols="6" sm="3">
                    <v-chip 
                      color="info" 
                      variant="outlined" 
                      class="" 
                      size="small"
                      :loading="pkg.isLoading"
                    >
                       {{ pkg.packageSize }}
                    </v-chip>
                  </v-col>
                  <v-col cols="6" sm="3">
                    <v-chip 
                      color="warning" 
                      variant="outlined" 
                      class="" 
                      size="small"
                      :loading="pkg.isLoading"
                    >
                       {{ pkg.license }}
                    </v-chip>
                  </v-col>
                  <v-col cols="6" sm="3">
                    <v-chip color="primary" variant="outlined" class="" size="small">
                       {{ pkg.name === 'keymap-inspector' ? '7 layouts' : 'Stats Kit' }}
                    </v-chip>
                  </v-col>
                </v-row>
                
                <!-- Детальная статистика загрузок -->
                <v-row v-if="pkg.downloadStatsData && !pkg.isLoading" class="mt-2">
                  <v-col cols="12">
                    <v-card class="pa-3 download-stats-card" color="surface-variant" variant="tonal">
                      <h5 class="professional-title mb-2">Download Statistics:</h5>
                      <v-row>
                        <v-col cols="6" sm="3">
                          <div class="text-center">
                            <div class="text-h6 font-weight-bold stats-number">{{ pkg.downloadStatsData.monthlyFormatted }}</div>
                            <div class="text-caption stats-label">Monthly Downloads</div>
                          </div>
                        </v-col>
                        <v-col cols="6" sm="3">
                          <div class="text-center">
                            <div class="text-h6 font-weight-bold stats-number">{{ pkg.downloadStatsData.weeklyFormatted }}</div>
                            <div class="text-caption stats-label">Weekly Downloads</div>
                          </div>
                        </v-col>
                        <v-col cols="6" sm="3">
                          <div class="text-center">
                            <div class="text-h6 font-weight-bold stats-number">{{ Math.round(pkg.downloadStatsData.weekly / 7) }}</div>
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
                class="professional-text mt-4"
                :icon="false"
              >
                <template v-slot:prepend>
                  <v-icon>mdi-alert-circle</v-icon>
                </template>
                <div class="d-flex justify-space-between align-center">
                  <div>
                    <strong>Oops! Failed to load NPM data</strong><br>
                    <small>{{ pkg.errorMessage }}</small>
                  </div>
                </div>
              </v-alert>

              <!-- Professional note -->
              <v-alert 
                v-if="!pkg.hasError" 
                type="info" 
                variant="tonal" 
                class="professional-text mt-4"
                :icon="false"
              >
                <template v-slot:prepend>
                  <v-icon>mdi-information</v-icon>
                </template>
                <div>{{ pkg.descriptions[currentLocale] || pkg.descriptions['en'] }}</div>
              </v-alert>
            </v-card-text>

            <v-card-actions class="pa-4">
              <v-btn 
                :href="pkg.npmUrl" 
                target="_blank" 
                color="primary"
                class="mr-2"
                prepend-icon="mdi-npm"
              >
                 NPM Package
              </v-btn>
              <v-btn 
                :href="pkg.githubUrl" 
                target="_blank" 
                color="secondary"
                class=""
                prepend-icon="mdi-github"
              >
                 GitHub
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <!-- Additional information -->
      <v-row class="mt-8">
        <v-col cols="12">
          <v-card class="professional-card text-center">
            <v-card-text>
              <h3 class="professional-title mb-4">
                Why NPM Packages?
              </h3>
              <p class="professional-text text-h6">
                Sharing useful tools with the developer community
              </p>
              <p class="professional-text">
                Creating NPM packages allows me to contribute to the open source ecosystem
                and help other developers solve common problems.
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
import { currentLocale } from '@/i18n';
import translationsData from '@/i18n/translations.json';

// Используем composable для получения динамических данных для keymap-inspector
const { 
  packageData: keymapPackageData, 
  downloadStats: keymapDownloadStats, 
  loading: keymapLoading, 
  error: keymapError, 
  getDownloadSummary: keymapGetDownloadSummary, 
  getPackageSize: keymapGetPackageSize, 
  getFileCount: keymapGetFileCount 
} = useNpmPackageInfo('keymap-inspector');

// Используем composable для получения динамических данных для stat-kit
const { 
  packageData: statKitPackageData, 
  downloadStats: statKitDownloadStats, 
  loading: statKitLoading, 
  error: statKitError, 
  getDownloadSummary: statKitGetDownloadSummary, 
  getPackageSize: statKitGetPackageSize, 
  getFileCount: statKitGetFileCount 
} = useNpmPackageInfo('@mikyviz/stat-kit');

// Статические описания и настройки для keymap-inspector
const staticKeymapInfo = ref({
  icon: 'mdi-keyboard',
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
  installationCode: `# Install globally for CLI usage
npm install -g keymap-inspector

# Install locally for library usage  
npm install keymap-inspector`
});

// Статические описания и настройки для stat-kit
const staticStatKitInfo = ref({
  icon: 'mdi-chart-bell-curve',
  features: [
    'Basic statistics (mean, median, standard deviation)',
    'Z-scores and Pearson correlation coefficient',
    'Outlier detection using IQR method',
    'Multiple range calculations (IQR, percentile, stddev)',
    'Distribution skewness analysis',
    'Zero dependencies - pure JavaScript/TypeScript'
  ],
  technologies: [
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Statistical Analysis',
    'Data Science'
  ],
  npmUrl: 'https://www.npmjs.com/package/@mikyviz/stat-kit',
  githubUrl: 'https://github.com/MikyViz/stat-kit',
  installationCode: `# Install the package
npm install @mikyviz/stat-kit

# Quick usage example
const { mean, median, stddev } = require('@mikyviz/stat-kit');
const data = [12, 15, 14, 10, 8, 12, 100];
console.log(mean(data)); // 24.43`
});

// Функция для получения описаний на всех языках из переводов
const getDescriptions = (packageKey) => {
  const descriptions = {};
  ['en', 'ru', 'he'].forEach(locale => {
    const keys = `npmPackages.${packageKey}.description`.split('.');
    let result = translationsData[locale];
    for (const k of keys) {
      if (result && result[k]) {
        result = result[k];
      }
    }
    descriptions[locale] = result || '';
  });
  return descriptions;
};

// Вычисляемые свойства для объединения статических и динамических данных
const npmPackages = computed(() => [
  {
    ...staticKeymapInfo.value,
    descriptions: getDescriptions('keymapInspector'),
    name: keymapPackageData.value?.name || 'keymap-inspector',
    version: keymapPackageData.value?.version || 'Loading...',
    downloads: keymapLoading.value ? 'Loading...' : (keymapError.value ? 'Error loading' : keymapGetDownloadSummary()),
    license: keymapPackageData.value?.license || 'MIT',
    packageSize: keymapLoading.value ? 'Loading...' : keymapGetPackageSize(),
    fileCount: keymapLoading.value ? 'Loading...' : keymapGetFileCount(),
    isLoading: keymapLoading.value,
    hasError: keymapError.value,
    downloadStatsData: keymapDownloadStats.value,
    errorMessage: keymapError.value
  },
  {
    ...staticStatKitInfo.value,
    descriptions: getDescriptions('statKit'),
    name: statKitPackageData.value?.name || '@mikyviz/stat-kit',
    version: statKitPackageData.value?.version || 'Loading...',
    downloads: statKitLoading.value ? 'Loading...' : (statKitError.value ? 'Error loading' : statKitGetDownloadSummary()),
    license: statKitPackageData.value?.license || 'MIT',
    packageSize: statKitLoading.value ? 'Loading...' : statKitGetPackageSize(),
    fileCount: statKitLoading.value ? 'Loading...' : statKitGetFileCount(),
    isLoading: statKitLoading.value,
    hasError: statKitError.value,
    downloadStatsData: statKitDownloadStats.value,
    errorMessage: statKitError.value
  }
]);

// SEO мета-теги
useHead({
  title: 'My NPM Packages - keymap-inspector & stat-kit | Miky Vizenovsky',
  meta: [
    {
      name: 'description',
      content: 'NPM packages by Miky Vizenovsky: keymap-inspector for keyboard layout inspection and stat-kit for statistical analysis. TypeScript, zero dependencies, MIT licensed.'
    },
    {
      name: 'keywords',
      content: 'keymap-inspector, stat-kit, NPM packages, TypeScript, keyboard layouts, statistics, data analysis, CLI tools, developer tools'
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
  will-change: transform, box-shadow;
}

.npm-package-card:hover {
  transform: translateY(-8px) scale(1.02) !important;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  border-color: var(--v-theme-accent);
}

.animate-package {
  animation: slideInUp 0.8s ease-out;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(50px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
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

.npm-package-card:hover .package-icon {
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

.code-block {
  border-radius: 10px;
  border: 2px solid var(--v-theme-primary);
  font-family: 'Courier New', monospace;
}

.code-block pre {
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

<style>
/* Глобальные стили для тултипов - в светлой теме темный фон, в темной теме светлый фон */
.v-tooltip .v-overlay__content {
  background-color: rgba(30, 30, 30, 0.95) !important;
  color: #ffffff !important;
  font-weight: 500;
}

.v-theme--dark .v-tooltip .v-overlay__content {
  background-color: rgba(245, 245, 245, 0.95) !important;
  color: #1a1a1a !important;
  font-weight: 500;
}
</style>