import en from './locales/en.json';
import de from './locales/de.json';

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Configuration for i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: en,
      de: de
    },
    lng: "de",
    fallbackLng: "en",
    interpolation: {
      escapeValue: true // although react already safes from xss
    }
  });

export default i18n;