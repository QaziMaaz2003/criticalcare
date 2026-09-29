import PageHero from '../components/PageHero'
import Faq from '../components/Faq'
import CtaBand from '../components/CtaBand'
import { pageHeroes } from '../content/pages'

// WordPress: page-faq.php
export default function FaqPage() {
  return (
    <>
      <PageHero {...pageHeroes.faq} crumbs={[{ label: 'FAQ' }]} />
      <Faq head={false} />
      <CtaBand />
    </>
  )
}
