import { Link } from 'react-router-dom'
import { about } from '../content/about'
import { site } from '../content/site'
import { images } from '../content/images'

// WordPress: template-parts/section-about.php
// `teaser` shows the first paragraph + a link to the About page (used on the homepage).
export default function About({ teaser = false }) {
  const paragraphs = teaser ? about.paragraphs.slice(0, 1) : about.paragraphs
  return (
    <section className="section about">
      <div className="container about__grid">
        <div className="about__media">
          <img className="about__img" src={images.about.src} alt={images.about.alt} loading="lazy" />
          <img className="about__img2" src={images.crew.src} alt={images.crew.alt} loading="lazy" />
          <div className="about__since">
            <small>Since</small>
            {site.founded}
          </div>
        </div>
        <div>
          <span className="eyebrow">{about.eyebrow}</span>
          <h2>{about.title}</h2>
          {paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          {teaser && <Link className="btn btn--outline" to="/about-us">More about us</Link>}
        </div>
      </div>
    </section>
  )
}
