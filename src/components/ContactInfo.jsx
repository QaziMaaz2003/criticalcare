import { site } from '../content/site'
import Icon from './Icon'

// WordPress: template-parts/contact-info.php (values from the Customizer / Options page)
export default function ContactInfo() {
  const { address } = site
  return (
    <div className="contact__info card">
      <h3>{site.legalName}</h3>
      <dl className="contact__list">
        <div>
          <dt><Icon name="pin" size={16} /> Address</dt>
          <dd>
            <a href={site.mapUrl} target="_blank" rel="noreferrer">
              {address.street}<br />{address.city}, {address.state} {address.zip}
            </a>
          </dd>
        </div>
        <div>
          <dt><Icon name="phone" size={16} /> Telephone</dt>
          <dd><a href={site.phoneHref}>{site.phone}</a></dd>
        </div>
        <div>
          <dt><Icon name="fax" size={16} /> Fax</dt>
          <dd>{site.fax}</dd>
        </div>
        <div>
          <dt><Icon name="mail" size={16} /> E-mail</dt>
          <dd><a href={`mailto:${site.email}`}>{site.email}</a></dd>
        </div>
      </dl>
    </div>
  )
}
