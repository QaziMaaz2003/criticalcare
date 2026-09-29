import { careers } from '../content/sections'
import { site } from '../content/site'

// WordPress: template-parts/section-careers.php
export default function Careers() {
  return (
    <section className="section" id="careers">
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
            <a
              className="btn btn--light"
              href={`mailto:${site.email}?subject=${encodeURIComponent('Careers enquiry')}`}
            >
              Explore careers
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
