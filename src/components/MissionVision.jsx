import SectionHead from './SectionHead'
import Icon from './Icon'
import { missionVision as mv } from '../content/extra'

// WordPress: template-parts/mission-values.php
export default function MissionVision() {
  return (
    <section className="section section--muted">
      <div className="container">
        <SectionHead eyebrow={mv.eyebrow} title={mv.title} />
        <div className="mv">
          {[mv.mission, mv.vision].map((b) => (
            <article key={b.title} className="mv__card">
              <span className="mv__icon"><Icon name={b.icon} size={30} /></span>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </article>
          ))}
        </div>
        <div className="icon-grid icon-grid--4">
          {mv.values.map((v) => (
            <div key={v.title} className="icon-card">
              <span className="icon-card__icon"><Icon name={v.icon} size={26} /></span>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
