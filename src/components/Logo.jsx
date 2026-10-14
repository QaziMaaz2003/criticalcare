import { Link } from 'react-router-dom'
import { site } from '../content/site'

// WordPress: header.php / footer.php via the_custom_logo() (add_theme_support('custom-logo')),
// falling back to this <img>. Upload public/logo.png in Appearance > Customize > Site Identity.
export default function Logo({ className = '' }) {
  return (
    <Link className={`logo ${className}`.trim()} to="/" aria-label={`${site.legalName} home`}>
      <img src={site.logo} alt={site.legalName} width="974" height="296" />
    </Link>
  )
}
