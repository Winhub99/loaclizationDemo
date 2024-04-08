import i18 from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"
i18.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLng:"en",
    returnObjects:true ,
    resources: {
        en: {
            translation: {
                greeting: "Hello, Welcome!",
                description:{
                    line1:"Welcome to my neighbourhood,<1>{{locality}}</1> " ,
                    line2:"This is an international place."
                }
            }
        },
        fr: {
            translation: {
                greeting: "Bonjour, bienvenue!",
                description:{
                    line1:"Bienvenue dans mon quartier,<1>{{locality}}</1>" ,
                    line2:"C'est un endroit international."
                }
            }
        },
        hi: {
            translation: {
                greeting: "नमस्कार, आपका स्वागत है!",
                description:{
                    line1:"मेरे पड़ोस <1>{{locality}}</1> में आपका स्वागत है" ,
                    line2:"यह एक अंतरराष्ट्रीय जगह है!"
                }
            }
        },
        ar: {
            translation: {
                greeting: "مرحبا أهلا وسهلا!",
                description:{
                    line1:"<1>{{locality}}</1> مرحبا بكم في حي بلدي" ,
                    line2:"هذا مكان دولي"
                }
            }
        }
    }
})
