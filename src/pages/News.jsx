import PageHero from '../components/PageHero'
import NewsList from '../components/News'
import CtaBand from '../components/CtaBand'
import { pageHeroes } from '../content/pages'

// WordPress: home.php (blog index)
export default function News() {
  return (
    <>
      <PageHero {...pageHeroes.news} crumbs={[{ label: 'News' }]} />
      <NewsList head={false} featured />
      <CtaBand />
    </>
  )
}
