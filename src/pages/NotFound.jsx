import { Link } from 'react-router-dom'
import { notFound } from '../content/pages'

// WordPress: 404.php
export default function NotFound() {
  return (
    <section className="section">
      <div className="container not-found">
        <span className="not-found__code">404</span>
        <h1>{notFound.title}</h1>
        <p className="lead">{notFound.text}</p>
        <Link className="btn btn--primary" to="/">Back to home</Link>
      </div>
    </section>
  )
}
