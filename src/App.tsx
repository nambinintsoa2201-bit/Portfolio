import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Certifications from './pages/Certifications'
import Skills from './components/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contacte'
import Footer from './components/Footer'

function App() {
  return (
    <>
      {/* Background grid */}
      <div className="bg-grid" />
      {/* Scan line effect */}
      <div className="scan-line" />

      <Navbar />

      <main>
        <Home />
        <About />
        <Certifications />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
