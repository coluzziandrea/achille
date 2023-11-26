import i18next, { ModuleType } from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as Localization from 'expo-localization'
import en from './en.json'
import it from './it.json'

const languageDetector = {
  type: 'languageDetector' as ModuleType,
  async: true, // async detection
  detect: (callback) => {
    // We will get back a string like "en-UK".
    callback(Localization.locale)
  },

  init: () => {},

  cacheUserLanguage: () => {}
}

const resources = {
  en: {
    translation: en
  },
  it: {
    translation: it
  }
}

i18next
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    resources,
    compatibilityJSON: 'v3',
    fallbackLng: 'en', // Specify a fallback language
    supportedLngs: ['en', 'it'],
    interpolation: {
      escapeValue: false
    }
  })

  export default i18next