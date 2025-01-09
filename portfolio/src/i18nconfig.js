import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./locales/en.json"; // Engels vertalingen
import nlTranslations from "./locales/nl.json"; // Nederlands vertalingen

i18n
  .use(initReactI18next) // zet de i18next-react integratie op
  .init({
    resources: {
      en: { translation: enTranslations },
      nl: { translation: nlTranslations },
    },
    lng: "en", // standaard taal
    fallbackLng: "en", // als er geen vertaling is, gebruik Engels
    interpolation: {
      escapeValue: false, // React ontsnapt automatisch
    },
  });

export default i18n;
