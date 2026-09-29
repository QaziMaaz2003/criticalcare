import { useState } from 'react'
import { site, nav } from '../content/site'

// WordPress: header.php (wp_nav_menu for the links). Menu toggle -> main.js
export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="header" id="top">
      <div className="container header__inner">
        <a className="logo" href="#top" aria-label={`${site.name} home`}>
          <span className="logo__mark" aria-hidden="true">TC</span>
          <span className="logo__text">
            {site.name}
            <small>Ambulance</small>
          </span>
        </a>

        <nav className="nav" aria-label="Primary">
          <ul className="nav__list">
            {nav.map((item) => (
              <li key={item.href}>
                <a className="nav__link" href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__cta">
          <a className="btn btn--outline" href={site.phoneHref}>Call {site.phone}</a>
          <a className="btn btn--primary" href="#contact">Request transport</a>
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="menu-toggle__bars" aria-hidden="true" />
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        {nav.map((item) => (
          <a key={item.href} href={item.href} onClick={close}>{item.label}</a>
        ))}
        <a className="btn btn--outline btn--block" href={site.phoneHref}>Call {site.phone}</a>
        <a className="btn btn--primary btn--block" href="#contact" onClick={close}>Request transport</a>
      </div>
    </header>
  )
}
