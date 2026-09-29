import { Link, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import NewsList, { fmtDate } from '../components/News'
import CtaBand from '../components/CtaBand'
import NotFound from './NotFound'
import { getArticle } from '../content/articles'
import { images } from '../content/images'
import { site } from '../content/site'

// WordPress: single.php
export default function NewsDetail() {
  const { slug } = useParams()
  const article = getArticle(slug)
  if (!article) return <NotFound />

  const img = images[article.image]
  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        text={`${fmtDate(article.date)} · ${article.readTime}`}
        image={article.image}
        crumbs={[{ label: 'News', to: '/news' }, { label: article.category }]}
      />
      <article className="section">
        <div className="container article">
          <img className="article__img" src={img.src} alt={img.alt} />
          <div className="article__body">
            <p className="lead">{article.excerpt}</p>
            {article.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <div className="article__cta card">
              <h3>Have a question?</h3>
              <p>Talk to our dispatch team on <a href={site.phoneHref}><strong>{site.phone}</strong></a> or send us a message.</p>
              <Link className="btn btn--primary" to="/contact-us">Contact us</Link>
            </div>
          </div>
        </div>
      </article>
      <NewsList exclude={article.slug} limit={3} muted eyebrow="Keep reading" title="More from our team." />
      <CtaBand />
    </>
  )
}
