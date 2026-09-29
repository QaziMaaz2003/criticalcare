import SectionHead from './SectionHead'
import { work } from '../content/sections'
import { images } from '../content/images'

// WordPress: template-parts/section-work.php (WP_Query for post_type=work)
export default function Work() {
  return (
    <section className="section section--muted" id="work">
      <div className="container">
        <SectionHead eyebrow={work.eyebrow} title={work.title} />
        <div className="gallery">
          {work.items.map((item) => (
            <figure key={item.key} className="gallery__item">
              <img src={images[item.key].src} alt={images[item.key].alt} loading="lazy" />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
