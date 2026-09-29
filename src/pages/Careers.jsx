import PageHero from '../components/PageHero'
import SectionHead from '../components/SectionHead'
import ApplyForm from '../components/ApplyForm'
import { pageHeroes, careersPage } from '../content/pages'
import { careers } from '../content/sections'
import { site } from '../content/site'

// WordPress: page-careers.php (open roles could be a `job` CPT)
export default function Careers() {
  const { perks, positions, form } = careersPage
  return (
    <>
      <PageHero {...pageHeroes.careers} crumbs={[{ label: 'Careers' }]} />

      <section className="section">
        <div className="container careers-intro">
          {careers.text.map((t) => (
            <p key={t} className="lead">{t}</p>
          ))}
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <SectionHead eyebrow={perks.eyebrow} title={perks.title} />
          <div className="why__grid why__grid--three">
            {perks.items.map((item) => (
              <div key={item.title} className="why-item">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow={positions.eyebrow} title={positions.title} />
          <div className="positions">
            {positions.items.map((p) => (
              <article key={p.title} className="position card">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <a className="position__link" href="#apply">Apply for this role <span aria-hidden="true">&rarr;</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted" id="apply">
        <div className="container apply">
          <div>
            <SectionHead eyebrow={form.eyebrow} title={form.title} text={form.text} />
            <p>
              <a href={`mailto:${site.email}?subject=${encodeURIComponent('Careers enquiry')}`}><strong>{site.email}</strong></a>
            </p>
          </div>
          <ApplyForm />
        </div>
      </section>
    </>
  )
}
