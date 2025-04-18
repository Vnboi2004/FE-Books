import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Dùng import thay vì require
import headerEn from './locales/en/header.json';
import aboutEn from './locales/en/about.json';
import contactEn from './locales/en/contact.json';

import headerVi from './locales/vi/header.json';
import aboutVi from './locales/vi/about.json';
import contactVi from './locales/vi/contact.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    ns: ['header', 'about', 'contact'],
    defaultNS: 'header',
    resources: {
      en: {
        header: headerEn,
        about: aboutEn,
        contact: contactEn,
      },
      vi: {
        header: headerVi,
        about: aboutVi,
        contact: contactVi,
      },
    },
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    load: 'languageOnly', // "vi-VN" sẽ thành "vi"
  });

export default i18n;
