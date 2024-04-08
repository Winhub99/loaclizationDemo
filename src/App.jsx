
import './App.css'
import { Trans, useTranslation } from 'react-i18next'
import LanguageSelector from './components/LanguageSelector'

function App() {
  const {t} = useTranslation()

  const {line1, line2} = t("description",{locality:"Vishrantwadi"})

  return (
    <div id='container'>
      <LanguageSelector/>
     <h2>{t("greeting")}</h2>
     {/* <p>{line1}</p> */}
     <Trans
     i18nKey={line1}
     values={{locality:"Vishrantwadi"}}
     components={{1: <b/>}}/>
     <span>{line2}</span>
    </div>
  )
}

export default App
