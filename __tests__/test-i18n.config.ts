import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import es from '@I18n/ES/common.json';

const resources = {
  es: {
    translation: es,
  },
  en: {
    translation: '',
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  fallbackLng: 'es',
  lng: 'es',
  cleanCode: true,
  initImmediate: false,
  returnEmptyString: true,
  returnNull: true,
});

export default i18n;
