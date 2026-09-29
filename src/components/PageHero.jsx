import { Link } from 'react-router-dom'
import { images } from '../content/images'

// WordPress: template-parts/page-hero.php (args: eyebrow, title, text, image, crumbs)
export default function PageHero({ eyebrow, title, text, image, crumbs = [] }) {
  const img = images[image]
  return (
    <section className="page-hero">
      {img && <img className="page-hero__img" src={img.src} alt="" />}
      <div className="container page-hero__inner">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label}>
              <span aria-hidden="true"> / </span>
              {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
            </span>
          ))}
        </nav>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {text && <p className="lead">{text}</p>}
      </div>
    </section>
  )
}
