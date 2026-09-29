import { useState } from 'react'
import { careersPage } from '../content/pages'

// WordPress: swap for a WPForms / CF7 job-application form (with file upload).
export default function ApplyForm() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    e.currentTarget.reset()
  }

  return (
    <form className="form card" onSubmit={handleSubmit}>
      <div className="form__row">
        <div className="field">
          <label htmlFor="ap-name">Full name</label>
          <input id="ap-name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="ap-phone">Phone</label>
          <input id="ap-phone" name="phone" type="tel" autoComplete="tel" required />
        </div>
      </div>
      <div className="form__row">
        <div className="field">
          <label htmlFor="ap-email">E-mail</label>
          <input id="ap-email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="field">
          <label htmlFor="ap-role">Position</label>
          <select id="ap-role" name="role" defaultValue="" required>
            <option value="" disabled>Select a position</option>
            {careersPage.positions.items.map((p) => (
              <option key={p.title}>{p.title}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="ap-message">Tell us about your experience</label>
        <textarea id="ap-message" name="message" />
      </div>
      <div className="field">
        <label htmlFor="ap-resume">Resume (optional)</label>
        <input id="ap-resume" name="resume" type="file" accept=".pdf,.doc,.docx" />
      </div>
      <button type="submit" className="btn btn--primary btn--block">Submit application</button>
      <p className="form__status" role="status" hidden={!sent}>
        Thank you for applying. Our team will review your details and be in touch.
      </p>
    </form>
  )
}
