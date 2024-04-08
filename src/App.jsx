
import './App.css'
import { useTranslation } from 'react-i18next'

function App() {
  const {t} = useTranslation()

  return (
    <div id='container'>
     <h2>{t("greeting")}</h2>
    </div>
  )
}

export default App
