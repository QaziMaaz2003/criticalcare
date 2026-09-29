import { useState } from 'react'
import { contact } from '../content/hero'
import { site } from '../content/site'

// WordPress: template-parts/section-contact.php. Swap <form> for a Contact Form 7 / WPForms shortcode.
export default function Contact() {
  const [sent, setSent] = useState(false)

  // Stub: no backend yet. In WordPress the form plugin handles submission + email.
  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    e.currentTarget.reset()
  }

  const { address } = site
  return (
    <section className="section section--muted" id="contact">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">{contact.eyebrow}</span>
          <h2>{contact.title}</h2>
          <p className="lead">{contact.text}</p>
        </div>

        <div className="contact__grid">
          <div className="contact__info card">
            <h3>{site.legalName}</h3>
            <dl className="contact__list">
              <div>
                <dt>Address</dt>
                <dd>
                  <a href={site.mapUrl} target="_blank" rel="noreferrer">
                    {address.street}<br />{address.city}, {address.state} {address.zip}
                  </a>
                </dd>
              </div>
              <div>
                <dt>Telephone</dt>
                <dd><a href={site.phoneHref}>{site.phone}</a></dd>
              </div>
              <div>
                <dt>Fax</dt>
                <dd>{site.fax}</dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd><a href={`mailto:${site.email}`}>{site.email}</a></dd>
              </div>
            </dl>
          </div>

          <form className="form card" onSubmit={handleSubmit}>
            <div className="form__row">
              <div className="field">
                <label htmlFor="cf-name">Name</label>
                <input id="cf-name" name="name" type="text" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="cf-phone">Phone</label>
                <input id="cf-phone" name="phone" type="tel" autoComplete="tel" required />
              </div>
            </div>
            <div className="form__row">
              <div className="field">
                <label htmlFor="cf-email">E-mail</label>
                <input id="cf-email" name="email" type="email" autoComplete="email" />
              </div>
              <div className="field">
                <label htmlFor="cf-service">Service needed</label>
                <select id="cf-service" name="service" defaultValue="">
                  <option value="" disabled>Select a service</option>
                  {contact.serviceOptions.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="field">
              <label htmlFor="cf-message">Message</label>
              <textarea id="cf-message" name="message" />
            </div>
            <button type="submit" className="btn btn--primary btn--block">Get in touch</button>
            <p className="form__status" role="status" hidden={!sent}>{contact.success}</p>
          </form>
        </div>
      </div>
    </section>
  )
}
