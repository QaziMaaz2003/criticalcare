import PageHero from '../components/PageHero'
import Split from '../components/Split'
import Stats from '../components/Stats'
import MissionVision from '../components/MissionVision'
import Why from '../components/Why'
import IconGrid from '../components/IconGrid'
import Coverage from '../components/Coverage'
import CtaBand from '../components/CtaBand'
import { pageHeroes, story, crew, standards } from '../content/pages'
import { fleet, audiences, location } from '../content/extra'
import { about } from '../content/about'
import { site } from '../content/site'

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
      <MissionVision />
      <Split dark eyebrow={standards.eyebrow} title={standards.title} text={standards.text} points={standards.points} image={standards.image} reverse />
      <Split eyebrow={crew.eyebrow} title={crew.title} text={crew.text} points={crew.roles} image={crew.image} />
      <Why />
      <Split eyebrow={fleet.eyebrow} title={fleet.title} text={fleet.text} points={fleet.points} image={fleet.image} reverse />
      <IconGrid {...audiences} muted />
      <Split eyebrow={location.eyebrow} title={location.title} text={location.text} image="houston">
        <ul className="contact-lines">
          <li>{site.address.street}, {site.address.city}, {site.address.state} {site.address.zip}</li>
          <li><a href={site.phoneHref}>{site.phone}</a></li>
          <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
        </ul>
      </Split>
      <Coverage />
      <CtaBand />
    </>
  )
}
