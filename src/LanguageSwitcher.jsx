import { useLanguage } from './i18n/LanguageContext'
import { LANGUAGES } from './i18n/translations'

const LABELS = { en: 'EN', ru: 'RU', kz: 'KZ' }

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="lang-switcher" role="group" aria-label="Language">
      {LANGUAGES.map((code) => (
        <button
          key={code}
          type="button"
          className={code === lang ? 'active' : ''}
          onClick={() => setLang(code)}
        >
          {LABELS[code]}
        </button>
      ))}
    </div>
  )
}
