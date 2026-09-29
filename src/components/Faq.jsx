import SectionHead from './SectionHead'
import { faq } from '../content/sections'

// WordPress: template-parts/section-faq.php. Uses native <details>, so no JS is needed.
export default function Faq() {
  return (
    <section className="section section--muted">
      <div className="container">
        <SectionHead center eyebrow={faq.eyebrow} title={faq.title} />
        <div className="faq__list">
          {faq.items.map((item) => (
            <details key={item.q} className="faq-item card">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
