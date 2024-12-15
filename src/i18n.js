import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files
import en from "./Locale/en.json";
import ar from "./Locale/ar.json";

// Translation resources
const resources = {
  en: { translation: en },
  ar: { translation: ar },
};

i18n
  .use(LanguageDetector) // Detect the user's language
  .use(initReactI18next) // Bind react-i18next to React
  .init({
    resources, // Load translations
    fallbackLng: "en", // Default language
    debug: true, // Enable debug mode (useful during development)
    interpolation: {
      escapeValue: false, // React already protects against XSS
    },
  });

export default i18n;
