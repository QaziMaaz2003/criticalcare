import { coverage } from '../content/sections'
import { site } from '../content/site'

// WordPress: template-parts/section-coverage.php
export default function Coverage() {
  return (
    <section className="section">
      <div className="container coverage__grid">
        <div>
          <span className="eyebrow">{coverage.eyebrow}</span>
          <h2>{coverage.title}</h2>
          <p className="lead">{coverage.text}</p>
          <a className="btn btn--outline" href={site.mapUrl} target="_blank" rel="noreferrer">View on map</a>
        </div>
        <ul className="chips">
          {site.serviceArea.map((a) => (
            <li key={a} className="chip chip--strong">{a}</li>
          ))}
          {coverage.areas
            .filter((a) => !site.serviceArea.includes(a))
            .map((a) => (
              <li key={a} className="chip">{a}</li>
            ))}
        </ul>
      </div>
    </section>
  )
}
