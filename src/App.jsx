import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import OurWork from './pages/OurWork'
import News from './pages/News'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import FaqPage from './pages/FaqPage'
import NotFound from './pages/NotFound'

// Route -> WordPress template:
//   /                  front-page.php        /services/:slug  single-service.php
//   /about-us          page-about-us.php     /our-work        archive-work.php
//   /services          archive-service.php   /news            home.php
//   /careers           page-careers.php      /contact-us      page-contact-us.php
//   /faq               page-faq.php          *                404.php
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="our-work" element={<OurWork />} />
        <Route path="news" element={<News />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
