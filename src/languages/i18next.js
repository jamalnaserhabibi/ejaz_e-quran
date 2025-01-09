// i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationDari from "./dari.json"; 
import translationArabi from "./arabi.json"; 
import translationPashto from "./pashto.json";
import translationUrdo from "./urdo.json"; 

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      da: {
        translation: translationDari,
      },
      ps: {
        translation: translationPashto, 
      },
      ar: {
        translation: translationArabi, 
      },
      ur: {
        translation: translationUrdo, 
      },
    },
    lng: "da", 
    fallbackLng: "da", 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
