import { about } from '../content/about'
import { site } from '../content/site'
import { images } from '../content/images'

// WordPress: template-parts/section-about.php
export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div className="about__media">
          <img className="about__img" src={images.about.src} alt={images.about.alt} loading="lazy" />
          <div className="about__since">
            <small>Since</small>
            {site.founded}
          </div>
        </div>
        <div>
          <span className="eyebrow">{about.eyebrow}</span>
          <h2>{about.title}</h2>
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
