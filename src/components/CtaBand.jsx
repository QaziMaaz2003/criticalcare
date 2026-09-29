import { Link } from 'react-router-dom'
import { cta } from '../content/pages'
import { site } from '../content/site'

// WordPress: template-parts/cta-band.php (shared across templates)
export default function CtaBand() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band">
          <div>
            <h2>{cta.title}</h2>
            <p>{cta.text}</p>
          </div>
          <div className="cta-band__actions">
            <a className="btn btn--light" href={site.phoneHref}>Call {site.phone}</a>
            <Link className="btn btn--ghost-light" to="/contact-us">Request transport</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
