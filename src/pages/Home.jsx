import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import MobileIcu from '../components/MobileIcu'
import Process from '../components/Process'
import Coverage from '../components/Coverage'
import Quote from '../components/Quote'
import News from '../components/News'
import CareersBand from '../components/CareersBand'
import CtaBand from '../components/CtaBand'

// WordPress: front-page.php
export default function Home() {
  return (
    <>
      <Hero />
      <Services limit={3} />
      <About teaser />
      <MobileIcu link />
      <Process />
      <Coverage />
      <Quote />
      <News limit={2} />
      <CareersBand />
      <CtaBand />
    </>
  )
}
