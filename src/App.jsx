import { useEffect, useState } from 'react'
import { LANGS, makeT } from './i18n'
import { profile } from './data'
import { Home, Skills, Projects, Education, GitHub, Contact } from './tabs'

const TABS = [
  ['home', Home], ['skills', Skills], ['projects', Projects],
  ['education', Education], ['github', GitHub], ['contact', Contact],
]

const read = (k, f) => { try { return localStorage.getItem(k) || f } catch { return f } }
const write = (k, v) => { try { localStorage.setItem(k, v) } catch { /* ignore */ } }
const initialLang = () => {
  const saved = read('lang', '')
  if (saved) return saved
  const n = (navigator.language || 'en').slice(0, 2)
  return n === 'ru' || n === 'tg' ? n : 'en'
}
const getTab = () => location.hash.replace('#/', '').replace('#', '') || 'home'

export default function App() {
  const [lang, setLang] = useState(initialLang)
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  const [tab, setTab] = useState(getTab)
  const t = makeT(lang)

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = `${profile.name} — ${t('role')}`
    write('lang', lang)
  }, [lang])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    write('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    const onHash = () => { setTab(getTab()); window.scrollTo(0, 0) }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const Current = (TABS.find(([id]) => id === tab) || TABS[0])[1]
  const active = TABS.some(([id]) => id === tab) ? tab : 'home'

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-3 px-4 py-3">
          <a href="#/home" className="text-base font-semibold tracking-tight">{profile.fullName}</a>
          <div className="flex items-center gap-2">
            <div role="group" aria-label={t('lang')} className="flex overflow-hidden rounded-md border border-slate-300 dark:border-slate-700">
              {LANGS.map(([code, label]) => (
                <button key={code} onClick={() => setLang(code)} aria-pressed={lang === code}
                  className={`px-2.5 py-1 text-sm ${lang === code ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`}>
                  {label}
                </button>
              ))}
            </div>
            <button onClick={() => setDark(!dark)} aria-label={t('theme')} title={t('theme')}
              className="rounded-md border border-slate-300 px-2.5 py-1 text-sm hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800">
              {dark ? '☀' : '☾'}
            </button>
          </div>
        </div>
        <nav aria-label={t('menu')} className="border-t border-slate-200 dark:border-slate-800">
          <ul className="mx-auto flex max-w-4xl gap-1 overflow-x-auto px-2 whitespace-nowrap">
            {TABS.map(([id]) => (
              <li key={id}>
                <a href={`#/${id}`} aria-current={active === id ? 'page' : undefined}
                  className={`block border-b-2 px-3 py-2.5 text-sm ${active === id ? 'border-blue-600 font-semibold text-blue-700 dark:border-blue-400 dark:text-blue-300' : 'border-transparent text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'}`}>
                  {t(`nav.${id}`)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:py-12">
        <Current t={t} />
      </main>

      <footer className="border-t border-slate-200 py-5 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        © {new Date().getFullYear()} {profile.fullName}. {t('footer')}
      </footer>
    </div>
  )
}
