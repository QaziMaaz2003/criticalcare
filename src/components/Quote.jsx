import { testimonial } from '../content/sections'

// WordPress: template-parts/section-quote.php
export default function Quote() {
  return (
    <section className="section section--dark">
      <div className="container">
        <blockquote className="quote">
          <p className="quote__text">&ldquo;{testimonial.quote}&rdquo;</p>
          <cite className="quote__cite">{testimonial.cite}</cite>
        </blockquote>
      </div>
    </section>
  )
}
