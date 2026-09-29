import PageHero from '../components/PageHero'
import CtaBand from '../components/CtaBand'
import { pageHeroes } from '../content/pages'
import { faqGroups } from '../content/extra'

// WordPress: page-faq.php (groups = FAQ category taxonomy)
export default function FaqPage() {
  return (
    <>
      <PageHero {...pageHeroes.faq} crumbs={[{ label: 'FAQ' }]} />
      <section className="section">
        <div className="container faq-page">
          <nav className="faq-page__nav" aria-label="FAQ topics">
            <strong>Topics</strong>
            <ul>
              {faqGroups.map((g) => (
                <li key={g.id}><a href={`#${g.id}`}>{g.title}</a></li>
              ))}
            </ul>
          </nav>
          <div className="faq-page__groups">
            {faqGroups.map((g) => (
              <section key={g.id} id={g.id} className="faq-group">
                <h2>{g.title}</h2>
                <div className="faq__list">
                  {g.items.map((item) => (
                    <details key={item.q} className="faq-item card">
                      <summary>{item.q}</summary>
                      <p>{item.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
