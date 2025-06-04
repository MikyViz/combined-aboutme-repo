import { ref, reactive, computed } from 'vue';
import translationsData from '@/translations.json';

// Available languages
const availableLocales = [
  { code: 'en', name: 'English', icon: 'mdi-flag-uk' },
  { code: 'ru', name: 'Русский', icon: 'mdi-flag-russia' },
  { code: 'he', name: 'עברית', icon: 'mdi-flag-israel' }
];

/**
 * Get browser locale or default to 'en'
 */
function getBrowserLocale() {
  // Try to get from navigator
  const browserLocale = navigator.language.split('-')[0];
  
  // Check if the language is supported
  if (translationsData[browserLocale]) {
    return browserLocale;
  }
  
  return 'en'; // Default fallback
}

// Current language
const currentLocale = ref(getBrowserLocale());

// All translations
const translations = reactive(translationsData);

/**
 * Change the current language
 * @param {string} locale - Language code (en, ru, he)
 */
function setLocale(locale) {
  if (translations[locale]) {
    currentLocale.value = locale;
    document.querySelector('html').setAttribute('lang', locale);
  }
}

/**
 * Get translation by key
 * @param {string} key - Translation key in dot notation (e.g. 'welcome.title')
 * @returns {string} - Translated text or key if translation not found
 */
function t(key) {
  if (!key) return '';
  
  const keys = key.split('.');
  let result = translations[currentLocale.value];
  
  // Traverse the nested object
  for (const k of keys) {
    if (!result || !result[k]) {
      // Fallback to English or return key if not found
      let fallback = translations['en'];
      for (const fbKey of keys) {
        if (!fallback || !fallback[fbKey]) {
          return key; // Not found even in fallback
        }
        fallback = fallback[fbKey];
      }
      return fallback;
    }
    result = result[k];
  }
  
  return result;
}

/**
 * Get the current locale object
 */
const getCurrentLocale = computed(() => {
  return availableLocales.find(locale => locale.code === currentLocale.value) || availableLocales[0];
});

export {
  availableLocales,
  currentLocale,
  setLocale,
  t,
  getCurrentLocale
};
