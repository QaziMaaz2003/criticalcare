import PageHero from '../components/PageHero'
import ServicesGrid from '../components/Services'
import CompareTable from '../components/CompareTable'
import IconGrid from '../components/IconGrid'
import Process from '../components/Process'
import Split from '../components/Split'
import MobileIcu from '../components/MobileIcu'
import Faq from '../components/Faq'
import CtaBand from '../components/CtaBand'
import { pageHeroes } from '../content/pages'
import { audiences, contactExtra } from '../content/extra'

// WordPress: archive-service.php
export default function Services() {
  return (
    <>
      <PageHero {...pageHeroes.services} crumbs={[{ label: 'Services' }]} />
      <ServicesGrid showCta head={false} />
      <CompareTable />
      <MobileIcu link />
      <IconGrid {...audiences} muted />
      <Process />
      <Split eyebrow={contactExtra.prepare.eyebrow} title={contactExtra.prepare.title} text={contactExtra.prepare.text} points={contactExtra.prepare.points} image={contactExtra.prepare.image} />
      <Faq limit={5} />
      <CtaBand />
    </>
  )
}
