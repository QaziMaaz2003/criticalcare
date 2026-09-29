import { Link } from 'react-router-dom'
import { site, nav } from '../content/site'
import { services, servicePath } from '../content/services'

// WordPress: footer.php (wp_footer() before </body>)
export default function Footer() {
  const { address } = site
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Link className="logo" to="/">
              <span className="logo__mark" aria-hidden="true">TC</span>
              <span className="logo__text">
                {site.name}
                <small>Ambulance</small>
              </span>
            </Link>
            <p className="footer__blurb">{site.tagline}. Serving {site.serviceArea.join(' and ')} since {site.founded}.</p>
          </div>

          <div>
            <h3>Menu</h3>
            <ul>
              {nav.map((item) => (
                <li key={item.to}><Link to={item.to}>{item.label}</Link></li>
              ))}
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3>Services</h3>
            <ul>
              {services.map((s) => (
                <li key={s.slug}><Link to={servicePath(s)}>{s.title}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Contact</h3>
            <address>
              {address.street}<br />
              {address.city}, {address.state} {address.zip}<br />
              <a href={site.phoneHref}>{site.phone}</a><br />
              Fax: {site.fax}<br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </address>
          </div>
        </div>

        <div className="footer__bar">
          <span>All Rights Reserved. Copyright {new Date().getFullYear()}. {site.copyright}</span>
        </div>
      </div>
    </footer>
  )
}
