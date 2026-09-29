import { Link } from 'react-router-dom'
import SectionHead from './SectionHead'
import { faq } from '../content/sections'

// WordPress: template-parts/section-faq.php. Uses native <details>, so no JS is needed.
export default function Faq({ limit, head = true, muted = true }) {
  const items = limit ? faq.items.slice(0, limit) : faq.items
  return (
    <section className={`section${muted ? ' section--muted' : ''}`}>
      <div className="container">
        {head && <SectionHead center eyebrow={faq.eyebrow} title={faq.title} />}
        <div className="faq__list">
          {items.map((item) => (
            <details key={item.q} className="faq-item card">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
        {limit && (
          <p className="section__more section__more--center">
            <Link className="btn btn--outline" to="/faq">More questions</Link>
          </p>
        )}
      </div>
    </section>
  )
}
