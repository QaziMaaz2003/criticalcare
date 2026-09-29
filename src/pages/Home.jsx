import Hero from '../components/Hero'
import TrustStrip from '../components/TrustStrip'
import Services from '../components/Services'
import About from '../components/About'
import IconGrid from '../components/IconGrid'
import MobileIcu from '../components/MobileIcu'
import Process from '../components/Process'
import Why from '../components/Why'
import Work from '../components/Work'
import Coverage from '../components/Coverage'
import Quote from '../components/Quote'
import News from '../components/News'
import Faq from '../components/Faq'
import CareersBand from '../components/CareersBand'
import CtaBand from '../components/CtaBand'
import { audiences } from '../content/extra'

// WordPress: front-page.php
export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services limit={3} />
      <About teaser />
      <IconGrid {...audiences} />
      <MobileIcu link />
      <Process />
      <Why />
      <Work limit={4} muted={false} />
      <Coverage />
      <Quote />
      <News limit={3} muted />
      <Faq limit={4} muted={false} />
      <CareersBand />
      <CtaBand />
    </>
  )
}
