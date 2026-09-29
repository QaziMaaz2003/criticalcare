import { useState } from 'react'
import { contact } from '../content/hero'

// WordPress: swap this <form> for a Contact Form 7 / WPForms shortcode with the same fields.
export default function ContactForm() {
  const [sent, setSent] = useState(false)

  // Stub: no backend yet. In WordPress the form plugin handles submission + email.
  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    e.currentTarget.reset()
  }

  return (
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
  )
}
