import { useEffect } from "react";
import { useTranslation } from "react-i18next"

const languages =[
    {code:"en",lang:"english"},
    {code:"fr",lang:"french"},
    {code:"hi",lang:"hindi"},
    {code:"ar",lang:"arabic"}
]

const LanguageSelector = () => {
    const {i18n} = useTranslation();

    const setLanguage =(langCode)=>{
        console.log("language changed to: ", langCode)
        i18n.changeLanguage(langCode)
    }

    useEffect(()=>{
        console.log(i18n.dir)
        document.body.dir = i18n.dir()
    },[i18n,i18n.language])
  return (
    <div className='btn-container'>
      {languages.map(language=>(<button className={i18n.language === language.code?"selected":""}
      key={language.code} onClick={()=>setLanguage(language.code)}>{language.lang}</button>))}
    </div>
  )
}

export default LanguageSelector
