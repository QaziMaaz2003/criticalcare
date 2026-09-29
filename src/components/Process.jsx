import SectionHead from './SectionHead'
import { process } from '../content/sections'

// WordPress: template-parts/section-process.php (ACF repeater)
export default function Process() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead eyebrow={process.eyebrow} title={process.title} />
        <ol className="process__grid">
          {process.steps.map((s, i) => (
            <li key={s.title} className="step card">
              <span className="step__num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
