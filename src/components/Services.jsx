import { Link } from 'react-router-dom'
import SectionHead from './SectionHead'
import { services, servicePath } from '../content/services'
import { site } from '../content/site'

// WordPress: template-parts/section-services.php (WP_Query for post_type=service)
// Props: limit (number of cards), showCta (extra "not sure?" card), muted (grey background)
export default function Services({ limit, showCta = false, muted = true, head = true, exclude, bare = false }) {
  const all = services.filter((s) => s.slug !== exclude)
  const items = limit ? all.slice(0, limit) : all
  const content = (
      <div className="container">
        {head && (
          <SectionHead
            eyebrow="Our Services"
            title="The right level of care for every transfer."
            text="From critical care transfers to routine wheelchair trips, every unit is fully equipped and staffed by licensed medics."
          />
        )}

        <div className="services__grid">
          {items.map((s) => (
            <article key={s.slug} className="service-card card">
              <span className="service-card__badge" aria-hidden="true">{s.badge}</span>
              <h3>{s.title}</h3>
              <p className="service-card__subtitle">{s.subtitle}</p>
              <p className="service-card__text">{s.excerpt}</p>
              <ul className="check-list">
                {s.highlights.slice(0, 4).map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <Link className="service-card__link" to={servicePath(s)}>
                Learn more<span className="sr-only"> about {s.title}</span> <span aria-hidden="true">&rarr;</span>
              </Link>
            </article>
          ))}

          {showCta && (
            <article className="service-card service-card--cta">
              <h3>Not sure which level of care you need?</h3>
              <p>Our dispatch team will review the patient&rsquo;s condition and recommend the right unit.</p>
              <a className="btn btn--light" href={site.phoneHref}>Call {site.phone}</a>
            </article>
          )}
        </div>

        {limit && limit < all.length && (
          <p className="section__more">
            <Link className="btn btn--outline" to="/services">View all services</Link>
          </p>
        )}
      </div>
  )

  if (bare) return content
  return <section className={`section${muted ? ' section--muted' : ''}`}>{content}</section>
}
