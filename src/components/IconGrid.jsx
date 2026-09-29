import SectionHead from './SectionHead'
import Icon from './Icon'

// WordPress: template-parts/icon-grid.php (ACF repeater: icon, title, text)
// Props: items, columns (2-4), muted, dark, center
export default function IconGrid({ eyebrow, title, text, items, columns = 3, muted = false, dark = false, center = false }) {
  return (
    <section className={`section${muted ? ' section--muted' : ''}${dark ? ' section--dark' : ''}`}>
      <div className="container">
        {title && <SectionHead center={center} eyebrow={eyebrow} title={title} text={text} />}
        <div className={`icon-grid icon-grid--${columns}`}>
          {items.map((item) => (
            <div key={item.title} className="icon-card">
              <span className="icon-card__icon"><Icon name={item.icon} size={26} /></span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
