import { Button } from './components/ui/button'
import Header from './components/Header'
import Hero from './components/Hero'
import Specialties from './components/Specialties'
import BeforeAfter from './components/BeforeAfter'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Scheduling from './components/Scheduling'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Specialties />
        <BeforeAfter />
        <Testimonials />
        <About />
        <Scheduling />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
