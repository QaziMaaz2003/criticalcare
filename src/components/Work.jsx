import { Link } from 'react-router-dom'
import SectionHead from './SectionHead'
import { work } from '../content/sections'
import { images } from '../content/images'

// WordPress: template-parts/section-work.php (WP_Query for post_type=work)
export default function Work({ limit, head = true, muted = true }) {
  const items = limit ? work.items.slice(0, limit) : work.items
  return (
    <section className={`section${muted ? ' section--muted' : ''}`}>
      <div className="container">
        {head && <SectionHead eyebrow={work.eyebrow} title={work.title} />}
        <div className={`gallery${limit ? ' gallery--compact' : ''}`}>
          {items.map((item) => (
            <figure key={item.key} className="gallery__item">
              <img src={images[item.key].src} alt={images[item.key].alt} loading="lazy" />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
        {limit && (
          <p className="section__more">
            <Link className="btn btn--outline" to="/our-work">See our work</Link>
          </p>
        )}
      </div>
    </section>
  )
}
