import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"
import translationAR from "./locale/ar.json";
import translationFR from "./locale/fr.json";

const resources = {
  ar: {
    translation: translationAR
  },
  fr: {
    translation: translationFR
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr",

    interpolation: {
      escapeValue: false
    },
    react : {
        useSupense: false
    }
  });

  export default i18n;
