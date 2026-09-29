import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

// Elements that fade/slide in as they enter the viewport.
// WordPress: the same ~15 lines go into assets/js/main.js.
const REVEAL = '.card, .icon-card, .why-item, .step, .gallery__item, .section__head, .split__img, .split__text, .mv__card, .cta-band, .trust__item, .compare, .stat'

function useReveal(deps) {
  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const els = [...document.querySelectorAll(REVEAL)]
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -4% 0px' },
    )
    els.forEach((el) => {
      el.classList.add('reveal')
      io.observe(el)
    })
    return () => io.disconnect()
  }, deps) // eslint-disable-line react-hooks/exhaustive-deps
}

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  useReveal([pathname])

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
