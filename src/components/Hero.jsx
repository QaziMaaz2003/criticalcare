import { hero } from '../content/hero'
import { stats } from '../content/about'
import { site } from '../content/site'
import { images } from '../content/images'

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
            <a className="btn btn--primary" href={hero.primaryCta.href}>{hero.primaryCta.label}</a>
            <a className="btn btn--outline" href={site.phoneHref}>Call dispatch</a>
            <a className="btn btn--outline" href={hero.secondaryCta.href}>{hero.secondaryCta.label}</a>
          </div>
        </div>

        <div className="hero__media">
          <img className="hero__img" src={images.hero.src} alt={images.hero.alt} fetchPriority="high" />
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
