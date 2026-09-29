import SectionHead from './SectionHead'
import { services, extraServices } from '../content/services'
import { site } from '../content/site'
import { images } from '../content/images'

// WordPress: template-parts/section-services.php (WP_Query for post_type=service)
export default function Services() {
  const [wts, events] = extraServices
  return (
    <section className="section section--muted" id="services">
      <div className="container">
        <SectionHead
          eyebrow="Our Services"
          title="The right level of care for every transfer."
          text="From critical care transfers to routine wheelchair trips, every unit is fully equipped and staffed by licensed medics."
        />

        <div className="services__grid">
          {services.map((s) => (
            <article key={s.id} className="service-card card" id={s.id}>
              <span className="service-card__badge" aria-hidden="true">{s.badge}</span>
              <h3>{s.title}</h3>
              <p className="service-card__subtitle">{s.subtitle}</p>
              <p className="service-card__text">{s.excerpt}</p>
              <ul className="check-list">
                {s.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="extras">
          <article className="extra-card extra-card--wide card" id={wts.id}>
            <img className="extra-card__img" src={images.wheelchair.src} alt={images.wheelchair.alt} loading="lazy" />
            <div className="extra-card__body">
              <span className="extra-card__code">{wts.code}</span>
              <h3>{wts.title}</h3>
              <p>{wts.intro}</p>
              <ul className="check-list">
                {wts.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>

          <article className="extra-card card" id={events.id}>
            <div className="extra-card__body">
              <span className="extra-card__code">{events.code}</span>
              <h3>{events.title}</h3>
              <p>{events.intro}</p>
              <p>
                <a href={site.phoneHref}><strong>{site.phone}</strong></a>
                <br />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
