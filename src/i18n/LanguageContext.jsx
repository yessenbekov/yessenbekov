import { createContext, useContext, useEffect, useState } from 'react'
import { translations, LANGUAGES } from './translations'

const LanguageContext = createContext(null)
const STORAGE_KEY = 'portfolio-lang'

function detectDefault() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (LANGUAGES.includes(stored)) return stored

  const nav = navigator.language?.slice(0, 2).toLowerCase()
  if (nav === 'ru') return 'ru'
  if (nav === 'kk') return 'kz'
  return 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectDefault)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang === 'kz' ? 'kk' : lang
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
