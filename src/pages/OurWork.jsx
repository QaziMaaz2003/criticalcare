import PageHero from '../components/PageHero'
import Work from '../components/Work'
import MobileIcu from '../components/MobileIcu'
import Coverage from '../components/Coverage'
import CtaBand from '../components/CtaBand'
import { pageHeroes } from '../content/pages'

// WordPress: archive-work.php
export default function OurWork() {
  return (
    <>
      <PageHero {...pageHeroes.work} crumbs={[{ label: 'Our Work' }]} />
      <Work head={false} />
      <MobileIcu link />
      <Coverage />
      <CtaBand />
    </>
  )
}
