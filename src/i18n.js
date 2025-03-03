import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // Load translations from files
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Bind react-i18next
  .init({
    fallbackLng: 'en', // Default language
    debug: true, // Show logs in console
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    backend: {
      loadPath: '/locales/{{lng}}.json', // Path to translation files
    },
  });

export default i18n;
