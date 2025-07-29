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
// Future pages can be imported here

function App() {
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  )
}
export default App