import Icon from './Icon'
import { trust } from '../content/extra'

// WordPress: template-parts/trust-strip.php
export default function TrustStrip() {
  return (
    <section className="trust">
      <div className="container">
        <ul className="trust__grid">
          {trust.map((t) => (
            <li key={t.title} className="trust__item">
              <span className="trust__icon"><Icon name={t.icon} size={22} /></span>
              <span>
                <strong>{t.title}</strong>
                <small>{t.text}</small>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
