import { Link } from 'react-router-dom'
import SectionHead from './SectionHead'
import { news } from '../content/sections'
import { images } from '../content/images'

const fmt = (iso) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })

// WordPress: template-parts/section-news.php (WP_Query for posts; get_the_date())
export default function News({ limit, head = true }) {
  const posts = limit ? news.posts.slice(0, limit) : news.posts
  return (
    <section className="section">
      <div className="container">
        {head && <SectionHead eyebrow={news.eyebrow} title={news.title} />}
        <div className="news__grid">
          {posts.map((p) => (
            <article key={p.title} className="news-card card">
              {p.image && <img className="news-card__img" src={images[p.image].src} alt="" loading="lazy" />}
              <div className="news-card__body">
                <time className="news-card__date" dateTime={p.date}>{fmt(p.date)}</time>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
        {limit && (
          <p className="section__more">
            <Link className="btn btn--outline" to="/news">All news</Link>
          </p>
        )}
      </div>
    </section>
  )
}
