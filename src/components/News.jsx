import SectionHead from './SectionHead'
import { news } from '../content/sections'

const fmt = (iso) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })

// WordPress: template-parts/section-news.php (WP_Query for posts; get_the_date())
export default function News() {
  return (
    <section className="section" id="news">
      <div className="container">
        <SectionHead eyebrow={news.eyebrow} title={news.title} />
        <div className="news__grid">
          {news.posts.map((p) => (
            <article key={p.title} className="news-card card">
              <time className="news-card__date" dateTime={p.date}>{fmt(p.date)}</time>
              <h3>{p.title}</h3>
              <p>{p.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
