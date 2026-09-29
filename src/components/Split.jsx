import { images } from '../content/images'

// WordPress: template-parts/split.php (image + text block). Props: eyebrow, title, text, points, roles, image, reverse, dark
export default function Split({ eyebrow, title, text, points = [], image, reverse = false, dark = false, children }) {
  const img = images[image]
  return (
    <section className={`section${dark ? ' section--dark' : ''}`}>
      <div className={`container split${reverse ? ' split--reverse' : ''}`}>
        <div className="split__text">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2>{title}</h2>
          {text && <p className={dark ? 'lead' : undefined}>{text}</p>}
          {points.length > 0 && (
            <ul className="check-list">
              {points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          )}
          {children}
        </div>
        {img && <img className="split__img" src={img.src} alt={img.alt} loading="lazy" />}
      </div>
    </section>
  )
}
