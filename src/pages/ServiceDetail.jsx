import { Link, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Process from '../components/Process'
import ServicesGrid from '../components/Services'
import CtaBand from '../components/CtaBand'
import SectionHead from '../components/SectionHead'
import Split from '../components/Split'
import Faq from '../components/Faq'
import Icon from '../components/Icon'
import NotFound from './NotFound'
import { getService } from '../content/services'
import { serviceExtras, contactExtra, missionVision } from '../content/extra'
import { site } from '../content/site'
import { images } from '../content/images'

// WordPress: single-service.php
export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)
  if (!service) return <NotFound />

  const extra = serviceExtras[service.slug]
  const img = images[service.image]
  return (
    <>
      <PageHero
        eyebrow={service.subtitle}
        title={service.title}
        text={service.excerpt}
        image={service.image}
        crumbs={[{ label: 'Services', to: '/services' }, { label: service.title }]}
      />

      {extra && (
        <section className="glance">
          <div className="container">
            <ul className="glance__grid">
              {extra.glance.map((g) => (
                <li key={g.label} className="glance__item">
                  <span className="glance__icon"><Icon name={g.icon} size={22} /></span>
                  <span>
                    <small>{g.label}</small>
                    <strong>{g.value}</strong>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container detail">
          <div className="detail__main">
            <img className="detail__img" src={img.src} alt={img.alt} loading="lazy" />
            {service.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <h2 className="detail__sub">Ideal for</h2>
            <ul className="check-list">
              {service.idealFor.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>

          <aside className="detail__aside">
            <div className="card detail__box">
              <h3>What&rsquo;s included</h3>
              <ul className="check-list">
                {service.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
            <div className="card detail__box detail__box--cta">
              <h3>Request this service</h3>
              <p>Call our dispatch team or send us the details.</p>
              <a className="btn btn--primary btn--block" href={site.phoneHref}>Call {site.phone}</a>
              <Link className="btn btn--outline btn--block" to="/contact-us">Send a request</Link>
            </div>
          </aside>
        </div>
      </section>

      <Process muted />

      <Split
        eyebrow={contactExtra.prepare.eyebrow}
        title={contactExtra.prepare.title}
        text={contactExtra.prepare.text}
        points={contactExtra.prepare.points}
        image={contactExtra.prepare.image}
        reverse
      />

      {extra && (
        <Faq
          items={extra.faqs}
          muted
          eyebrow={`${service.title} FAQ`}
          title="Questions about this service."
          limit={extra.faqs.length}
          more={false}
        />
      )}

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="More services" title="Other levels of care." />
        </div>
        <ServicesGrid exclude={service.slug} head={false} muted={false} bare />
      </section>

      <CtaBand />
    </>
  )
}
