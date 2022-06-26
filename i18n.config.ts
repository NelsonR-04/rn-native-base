import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import en from '@I18n/EN/common.json';
import es from '@I18n/ES/common.json';
import { getDeviceLanguage } from '@Utils/device';

const resources = {
  es: {
    translation: es,
  },
  en: {
    translation: en,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  fallbackLng: 'es',
  lng: getDeviceLanguage(),
  debug: false,
  cleanCode: true,
  initImmediate: false,
  returnEmptyString: true,
  returnNull: true,
});

export default i18n;
