import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { site, nav } from '../content/site'

// WordPress: header.php (wp_nav_menu with a sub-menu for Services). Menu toggle -> main.js
export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="header">
      <div className="container header__inner">
        <Link className="logo" to="/" aria-label={`${site.name} home`}>
          <span className="logo__mark" aria-hidden="true">TC</span>
          <span className="logo__text">
            {site.name}
            <small>Ambulance</small>
          </span>
        </Link>

        <nav className="nav" aria-label="Primary">
          <ul className="nav__list">
            {nav.map((item) => (
              <li key={item.to} className={`nav__item${item.children ? ' nav__item--has-sub' : ''}`}>
                <NavLink className="nav__link" to={item.to} end={item.to === '/' || !!item.children}>
                  {item.label}
                </NavLink>
                {item.children && (
                  <ul className="nav__sub">
                    {item.children.map((c) => (
                      <li key={c.to}>
                        <NavLink to={c.to}>{c.label}</NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__cta">
          <a className="header__phone" href={site.phoneHref}>{site.phone}</a>
          <Link className="btn btn--primary" to="/contact-us">Request transport</Link>
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
          <div key={item.to}>
            <NavLink to={item.to} end={item.to === '/' || !!item.children}>{item.label}</NavLink>
            {item.children && (
              <div className="mobile-menu__sub">
                {item.children.map((c) => (
                  <NavLink key={c.to} to={c.to}>{c.label}</NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
        <a className="btn btn--outline btn--block" href={site.phoneHref}>Call {site.phone}</a>
        <Link className="btn btn--primary btn--block" to="/contact-us">Request transport</Link>
      </div>
    </header>
  )
}
