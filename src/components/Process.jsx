import SectionHead from './SectionHead'
import Icon from './Icon'
import { process as defaultProcess } from '../content/sections'

// WordPress: template-parts/section-process.php (ACF repeater). Pass `data` for other step lists.
export default function Process({ data = defaultProcess, muted = false }) {
  return (
    <section className={`section${muted ? ' section--muted' : ''}`}>
      <div className="container">
        <SectionHead eyebrow={data.eyebrow} title={data.title} />
        <ol className={`process__grid process__grid--${data.steps.length}`}>
          {data.steps.map((s, i) => (
            <li key={s.title} className="step card">
              <span className="step__top">
                <span className="step__num">{String(i + 1).padStart(2, '0')}</span>
                {s.icon && <span className="step__icon"><Icon name={s.icon} size={24} /></span>}
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
