import PageHero from '../components/PageHero'
import ServicesGrid from '../components/Services'
import Process from '../components/Process'
import Faq from '../components/Faq'
import CtaBand from '../components/CtaBand'
import { pageHeroes } from '../content/pages'

// WordPress: archive-service.php
export default function Services() {
  return (
    <>
      <PageHero {...pageHeroes.services} crumbs={[{ label: 'Services' }]} />
      <ServicesGrid showCta head={false} />
      <Process />
      <Faq limit={3} />
      <CtaBand />
    </>
  )
}
