import { Link } from 'react-router-dom'
import SectionHead from './SectionHead'
import { faq } from '../content/sections'

// WordPress: template-parts/section-faq.php. Uses native <details>, so no JS is needed.
// Props: items (override the default list), limit, head, muted, title/eyebrow overrides
export default function Faq({ items: custom, limit, head = true, muted = true, eyebrow = faq.eyebrow, title = faq.title, more = true }) {
  const all = custom || faq.items
  const items = limit ? all.slice(0, limit) : all
  return (
    <section className={`section${muted ? ' section--muted' : ''}`}>
      <div className="container">
        {head && <SectionHead center eyebrow={eyebrow} title={title} />}
        <div className="faq__list">
          {items.map((item) => (
            <details key={item.q} className="faq-item card">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
        {limit && more && (
          <p className="section__more section__more--center">
            <Link className="btn btn--outline" to="/faq">More questions</Link>
          </p>
        )}
      </div>
    </section>
  )
}
