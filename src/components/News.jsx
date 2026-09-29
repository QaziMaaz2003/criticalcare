import { Link } from 'react-router-dom'
import SectionHead from './SectionHead'
import { articles, articlePath } from '../content/articles'
import { news } from '../content/sections'
import { images } from '../content/images'

export const fmtDate = (iso) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })

function ArticleCard({ a, featured = false }) {
  return (
    <article className={`news-card card${featured ? ' news-card--featured' : ''}`}>
      <Link to={articlePath(a)} className="news-card__media" tabIndex={-1} aria-hidden="true">
        <img className="news-card__img" src={images[a.image].src} alt="" loading="lazy" />
      </Link>
      <div className="news-card__body">
        <div className="news-card__meta">
          <span className="tag">{a.category}</span>
          <time dateTime={a.date}>{fmtDate(a.date)}</time>
        </div>
        <h3><Link to={articlePath(a)}>{a.title}</Link></h3>
        <p>{a.excerpt}</p>
        <Link className="service-card__link" to={articlePath(a)}>
          Read article <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </article>
  )
}

// WordPress: template-parts/section-news.php (WP_Query for posts) + content-card.php
// Props: limit, head, featured (first post shown large), exclude (slug), muted
export default function News({ limit, head = true, featured = false, exclude, muted = false, title = news.title, eyebrow = news.eyebrow }) {
  const list = articles.filter((a) => a.slug !== exclude)
  const posts = limit ? list.slice(0, limit) : list
  const [first, ...rest] = posts
  return (
    <section className={`section${muted ? ' section--muted' : ''}`}>
      <div className="container">
        {head && <SectionHead eyebrow={eyebrow} title={title} />}
        {featured && first ? (
          <>
            <ArticleCard a={first} featured />
            <div className="news__grid news__grid--2">
              {rest.map((a) => <ArticleCard key={a.slug} a={a} />)}
            </div>
          </>
        ) : (
          <div className="news__grid news__grid--3">
            {posts.map((a) => <ArticleCard key={a.slug} a={a} />)}
          </div>
        )}
        {limit && (
          <p className="section__more">
            <Link className="btn btn--outline" to="/news">All news</Link>
          </p>
        )}
      </div>
    </section>
  )
}
