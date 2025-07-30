import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './layout/Header'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Footer from './layout/Footer'
import Courses from './pages/Courses'
import About from './pages/About'
import ScrollToTop from './components/ScrollToTop'
// Future pages can be imported here
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Cookie from './pages/Cookie'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <div className="homepage">
              <Header />
              <Hero />
              <Programs />
              <Testimonials />
              <Pricing />
              <Footer />
            </div>
          }
        />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        {/* Future pages */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookie" element={<Cookie />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App