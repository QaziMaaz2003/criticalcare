import SectionHead from './SectionHead'
import { why } from '../content/sections'

// WordPress: template-parts/section-why.php (ACF repeater)
export default function Why() {
  return (
    <section className="section section--muted">
      <div className="container">
        <SectionHead eyebrow={why.eyebrow} title={why.title} />
        <div className="why__grid">
          {why.items.map((item) => (
            <div key={item.title} className="why-item">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
