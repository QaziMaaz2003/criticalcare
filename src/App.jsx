import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import MobileIcu from './components/MobileIcu'
import Process from './components/Process'
import Why from './components/Why'
import Coverage from './components/Coverage'
import Work from './components/Work'
import Quote from './components/Quote'
import News from './components/News'
import Faq from './components/Faq'
import Careers from './components/Careers'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Section order == front-page.php in the WordPress theme.
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <MobileIcu />
        <Process />
        <Why />
        <Coverage />
        <Work />
        <Quote />
        <News />
        <Faq />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
