import i18n from "i18next";
import { locales } from "./locale";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

export default i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "fa-IR",
    fallbackLng: "fa",
    resources: {
      fa: { translation: locales.fa },
      en: { translation: locales.en },
    },
    interpolation: { escapeValue: false },
  });
