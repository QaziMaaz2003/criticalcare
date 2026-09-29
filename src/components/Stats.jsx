import { stats } from '../content/about'

// WordPress: template-parts/stats.php
export default function Stats() {
  return (
    <section className="stats-band">
      <div className="container">
        <ul className="stats-band__grid">
          {stats.map((s) => (
            <li key={s.label}>
              <span className="stats-band__value">{s.value}</span>
              <span className="stats-band__label">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
