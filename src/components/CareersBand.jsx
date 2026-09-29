import { Link } from 'react-router-dom'
import { careers } from '../content/sections'

// WordPress: template-parts/section-careers.php (homepage teaser for the Careers page)
export default function CareersBand() {
  return (
    <section className="section">
      <div className="container">
        <div className="careers__box">
          <div>
            <span className="eyebrow">{careers.eyebrow}</span>
            <h2>{careers.title}</h2>
            {careers.text.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
          <div>
            <ul className="careers__roles">
              {careers.roles.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <Link className="btn btn--light" to="/careers">Explore careers</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
