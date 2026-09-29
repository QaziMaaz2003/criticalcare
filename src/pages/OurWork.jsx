import PageHero from '../components/PageHero'
import IconGrid from '../components/IconGrid'
import Work from '../components/Work'
import Split from '../components/Split'
import Coverage from '../components/Coverage'
import CtaBand from '../components/CtaBand'
import { Link } from 'react-router-dom'
import { pageHeroes } from '../content/pages'
import { pillars, eventsBlock, fleet } from '../content/extra'

// WordPress: archive-work.php
export default function OurWork() {
  return (
    <>
      <PageHero {...pageHeroes.work} crumbs={[{ label: 'Our Work' }]} />
      <IconGrid {...pillars} />
      <Work head={false} />
      <Split eyebrow={eventsBlock.eyebrow} title={eventsBlock.title} text={eventsBlock.text} points={eventsBlock.points} image={eventsBlock.image} reverse>
        <Link className="btn btn--primary" to="/services/special-events">About event coverage</Link>
      </Split>
      <Split dark eyebrow={fleet.eyebrow} title={fleet.title} text={fleet.text} points={fleet.points} image={fleet.image} />
      <Coverage />
      <CtaBand />
    </>
  )
}
