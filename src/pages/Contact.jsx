import PageHero from '../components/PageHero'
import ContactInfo from '../components/ContactInfo'
import ContactForm from '../components/ContactForm'
import Process from '../components/Process'
import Split from '../components/Split'
import Coverage from '../components/Coverage'
import Faq from '../components/Faq'
import Icon from '../components/Icon'
import { pageHeroes, contactPage } from '../content/pages'
import { contactExtra } from '../content/extra'
import { site } from '../content/site'

// WordPress: page-contact-us.php
export default function Contact() {
  return (
    <>
      <PageHero {...pageHeroes.contact} crumbs={[{ label: 'Contact Us' }]} />

      <section className="section section--muted">
        <div className="container">
          <div className="dispatch card">
            <span className="dispatch__icon"><Icon name="phone" size={28} /></span>
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

      <Process data={contactExtra.steps} />

      <Split
        eyebrow={contactExtra.prepare.eyebrow}
        title={contactExtra.prepare.title}
        text={contactExtra.prepare.text}
        points={contactExtra.prepare.points}
        image={contactExtra.prepare.image}
        reverse
      />

      <section className="map">
        <iframe
          title={`Map of ${site.legalName}`}
          src={site.mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <Coverage />
      <Faq limit={4} />
    </>
  )
}
