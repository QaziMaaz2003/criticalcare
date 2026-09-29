import { Link } from 'react-router-dom'
import { hero } from '../content/hero'
import { stats } from '../content/about'
import { site } from '../content/site'
import { images } from '../content/images'
import Icon from './Icon'

// WordPress: template-parts/section-hero.php
export default function Hero() {
  const [line1, pre, accent] = hero.title
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div>
          <span className="hero__badge">{hero.badge}</span>
          <h1 className="hero__title">
            {line1} {pre}
            <em>{accent}</em>
          </h1>
          <p className="hero__text">{hero.text}</p>
          <div className="hero__actions">
            <Link className="btn btn--primary" to={hero.primaryCta.to}>{hero.primaryCta.label}</Link>
            <a className="btn btn--outline" href={site.phoneHref}>Call dispatch</a>
            <Link className="btn btn--outline" to={hero.secondaryCta.to}>{hero.secondaryCta.label}</Link>
          </div>
        </div>

        <div className="hero__media">
          <img className="hero__img" src={images.hero.src} alt={images.hero.alt} fetchPriority="high" />
          <a className="hero__float" href={site.phoneHref}>
            <span className="hero__float-icon"><Icon name="phone" size={22} /></span>
            <span>
              <small>Dispatch</small>
              <strong>{site.phone}</strong>
            </span>
          </a>
          <img className="hero__accent" src={images.medic.src} alt="" loading="lazy" />
          <ul className="hero__stats">
            {stats.map((s) => (
              <li key={s.label} className="stat card">
                <span className="stat__value">{s.value}</span>
                <span className="stat__label">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
