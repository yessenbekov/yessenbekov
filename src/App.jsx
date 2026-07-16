import { profile, socials, experienceMeta, educationMeta, projectsMeta } from './data'
import { useLanguage } from './i18n/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'
import Icon from './Icon'
import './App.css'

function App() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <>
      <header className="hero">
        <div className="wrap">
          <div className="hero-top">
            <p className="eyebrow">{t.hero.location}</p>
            <LanguageSwitcher />
          </div>
          <h1>{profile.name}</h1>
          <p className="role">{t.hero.title}</p>
          <p className="tagline">{t.hero.tagline}</p>
          <nav className="social-row" aria-label="Social links">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                <Icon name={s.icon} />
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="wrap">
        <section id="about" aria-label={t.sections.about}>
          <h2>{t.sections.about}</h2>
          <p>{t.about.bio1}</p>
          <p>{t.about.bio2}</p>
          <ul className="skills">
            {profile.skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>

        <section id="experience" aria-label={t.sections.experience}>
          <h2>{t.sections.experience}</h2>
          <ol className="timeline">
            {experienceMeta.map((job) => {
              const jt = t.experience[job.id]
              return (
                <li key={job.id}>
                  <div className="timeline-head">
                    <h3>{jt.role} · {job.company}</h3>
                    <span className="period">{job.period}</span>
                  </div>
                  <p className="location">{jt.location}</p>
                  <ul>
                    {jt.points.map((p, j) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                  <ul className="stack">
                    {job.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ol>

          <div className="education">
            <h3>{t.sections.education}</h3>
            <p>{educationMeta.school}</p>
            <p className="location">{t.education.degree} · {educationMeta.period}</p>
          </div>
        </section>

        <section id="projects" aria-label={t.sections.projects}>
          <h2>{t.sections.projects}</h2>
          <div className="project-grid">
            {projectsMeta.map((p) => {
              const pt = t.projects[p.id]
              return (
                <article key={p.id} className="project-card">
                  <h3>{p.name}</h3>
                  <p>{pt.description}</p>
                  <ul className="stack">
                    {p.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <div className="project-links">
                    {p.links.map((l) => (
                      <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                        {l.label} &rarr;
                      </a>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section id="services" aria-label={t.sections.services}>
          <h2>{t.sections.services}</h2>
          <h3 className="services-heading">{t.services.heading}</h3>
          <p>{t.services.intro}</p>

          <div className="services-grid">
            {t.services.items.map((item) => (
              <div key={item.title} className="service-card">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="services-meta">
            <div>
              <h4>{t.services.forWhoLabel}</h4>
              <p>{t.services.forWho}</p>
            </div>
            <div>
              <h4>{t.services.engagementLabel}</h4>
              <p>{t.services.engagement}</p>
            </div>
          </div>

          <a className="services-cta" href={`mailto:${profile.email}`}>{t.services.cta} &rarr;</a>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <p>{t.footer.rights.replace('{year}', year)}</p>
          <nav className="social-row" aria-label="Social links">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                <Icon name={s.icon} />
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </>
  )
}

export default App
