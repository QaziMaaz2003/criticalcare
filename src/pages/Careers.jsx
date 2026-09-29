import PageHero from '../components/PageHero'
import SectionHead from '../components/SectionHead'
import Split from '../components/Split'
import IconGrid from '../components/IconGrid'
import Process from '../components/Process'
import Faq from '../components/Faq'
import ApplyForm from '../components/ApplyForm'
import { pageHeroes, careersPage } from '../content/pages'
import { careersExtra } from '../content/extra'
import { careers } from '../content/sections'
import { images } from '../content/images'
import { site } from '../content/site'

// WordPress: page-careers.php (open roles could be a `job` CPT)
export default function Careers() {
  const { perks, positions, form } = careersPage
  const { intro, qualities, requirements, process, faq } = careersExtra
  return (
    <>
      <PageHero {...pageHeroes.careers} crumbs={[{ label: 'Careers' }]} />

      <Split eyebrow={intro.eyebrow} title={intro.title} image={intro.image}>
        {careers.text.map((t) => (
          <p key={t}>{t}</p>
        ))}
        <p>{intro.text}</p>
        <a className="btn btn--primary" href="#apply">Apply now</a>
      </Split>

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
                <ul className="check-list">
                  {(requirements[p.title] || []).map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
                <a className="position__link" href="#apply">Apply for this role <span aria-hidden="true">&rarr;</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <IconGrid {...qualities} columns={4} muted />
      <Process data={process} />

      <section className="strip" aria-label="Photos of our team and fleet">
        {['team', 'ambulanceRoad', 'scrubs', 'crew'].map((k) => (
          <img key={k} src={images[k].src} alt={images[k].alt} loading="lazy" />
        ))}
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

      <Faq items={faq} limit={faq.length} more={false} muted={false} eyebrow="Careers FAQ" title="Before you apply." />
    </>
  )
}
