import PageHero from '../components/PageHero'
import ContactInfo from '../components/ContactInfo'
import ContactForm from '../components/ContactForm'
import Faq from '../components/Faq'
import { pageHeroes, contactPage } from '../content/pages'
import { site } from '../content/site'

// WordPress: page-contact-us.php
export default function Contact() {
  return (
    <>
      <PageHero {...pageHeroes.contact} crumbs={[{ label: 'Contact Us' }]} />

      <section className="section section--muted">
        <div className="container">
          <div className="dispatch card">
            <div>
              <h2>{contactPage.dispatch.title}</h2>
              <p>{contactPage.dispatch.text}</p>
            </div>
            <a className="btn btn--primary" href={site.phoneHref}>Call {site.phone}</a>
          </div>

          <div className="contact__grid">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="map">
        <iframe
          title={`Map of ${site.legalName}`}
          src={site.mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <Faq limit={3} muted={false} />
    </>
  )
}
