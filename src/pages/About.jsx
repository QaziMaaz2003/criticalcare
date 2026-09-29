import PageHero from '../components/PageHero'
import Split from '../components/Split'
import Stats from '../components/Stats'
import Why from '../components/Why'
import MobileIcu from '../components/MobileIcu'
import CtaBand from '../components/CtaBand'
import { pageHeroes, story, crew, standards } from '../content/pages'
import { about } from '../content/about'

// WordPress: page-about-us.php
export default function About() {
  return (
    <>
      <PageHero {...pageHeroes.about} crumbs={[{ label: 'About Us' }]} />
      <Split eyebrow={story.eyebrow} title={story.title} image={story.image}>
        {about.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </Split>
      <Stats />
      <Split dark eyebrow={standards.eyebrow} title={standards.title} text={standards.text} points={standards.points} image={standards.image} reverse />
      <Split eyebrow={crew.eyebrow} title={crew.title} text={crew.text} points={crew.roles} image={crew.image} />
      <Why />
      <MobileIcu link />
      <CtaBand />
    </>
  )
}
