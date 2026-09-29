import { Link } from 'react-router-dom'
import { mobileIcu } from '../content/about'
import { images } from '../content/images'

// WordPress: template-parts/section-micu.php
export default function MobileIcu({ link = false }) {
  return (
    <section className="section section--dark micu">
      <div className="container micu__grid">
        <div>
          <span className="eyebrow">{mobileIcu.eyebrow}</span>
          <h2>{mobileIcu.title}</h2>
          <p className="lead">{mobileIcu.text}</p>
          <ul className="check-list">
            {mobileIcu.equipment.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {link && <Link className="btn btn--light" to="/services/micu">About MICU transport</Link>}
        </div>
        <img className="micu__img" src={images.micu.src} alt={images.micu.alt} loading="lazy" />
      </div>
    </section>
  )
}
