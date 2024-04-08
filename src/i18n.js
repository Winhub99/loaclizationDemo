import i18 from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"
i18.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    lng: "en",
    resources: {
        en: {
            translation: {
                "greeting": "Hello, Welcome!"
            }
        },
        fr: {
            translation: {
                "greeting": "Bonjour, bienvenue!"
            }
        },
        hi: {
            translation: {
                "greeting": "नमस्कार, आपका स्वागत है!"
            }
        }
    }
})
