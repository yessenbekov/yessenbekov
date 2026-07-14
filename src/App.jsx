import { profile, socials, experience, education, projects } from './data'
import Icon from './Icon'
import './App.css'

function App() {
  const year = new Date().getFullYear()

  return (
    <>
      <header className="hero">
        <div className="wrap">
          <p className="eyebrow">{profile.location}</p>
          <h1>{profile.name}</h1>
          <p className="role">{profile.title}</p>
          <p className="tagline">{profile.tagline}</p>
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
        <section id="about" aria-label="About">
          <h2>About</h2>
          <p>{profile.bio}</p>
          <p>{profile.bio2}</p>
          <ul className="skills">
            {profile.skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>

        <section id="experience" aria-label="Experience">
          <h2>Experience</h2>
          <ol className="timeline">
            {experience.map((job, i) => (
              <li key={i}>
                <div className="timeline-head">
                  <h3>{job.role} · {job.company}</h3>
                  <span className="period">{job.period}</span>
                </div>
                <p className="location">{job.location}</p>
                <ul>
                  {job.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
                <ul className="stack">
                  {job.stack.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div className="education">
            <h3>Education</h3>
            <p>{education.school}</p>
            <p className="location">{education.degree} · {education.period}</p>
          </div>
        </section>

        <section id="projects" aria-label="Projects">
          <h2>Projects</h2>
          <div className="project-grid">
            {projects.map((p) => (
              <article key={p.name} className="project-card">
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <ul className="stack">
                  {p.stack.map((t) => (
                    <li key={t}>{t}</li>
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
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <p>&copy; {year} {profile.name}</p>
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
