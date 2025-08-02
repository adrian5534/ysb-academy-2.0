import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Hero from '../components/Hero'
import Programs from '../components/Programs'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import Courses from '../pages/Courses'
import About from '../pages/About'
import Terms from '../pages/Terms'
import Privacy from '../pages/Privacy'
import Cookie from '../pages/Cookie'
import FAQ from '../pages/FAQ'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

const routes = [
  {
    path: '/',
    element: (
      <div className="homepage">
        <Header />
        <Hero />
        <Programs />
        <Testimonials />
        <Pricing />
        <Footer />
      </div>
    ),
    meta: {
      title: 'YSB Academy - Home',
      description: 'Unlock your potential with YSB Academy. Explore our programs and start learning today.',
    },
  },
  {
    path: '/courses',
    element: <Courses />,
    meta: {
      title: 'Courses | YSB Academy',
      description: 'Browse all courses offered by YSB Academy.',
    },
  },
  {
    path: '/about',
    element: <About />,
    meta: {
      title: 'About Us | YSB Academy',
      description: 'Learn more about YSB Academy and our mission.',
    },
  },
  {
    path: '/terms',
    element: <Terms />,
    meta: {
      title: 'Terms & Conditions | YSB Academy',
      description: 'Read the terms and conditions for using YSB Academy.',
    },
  },
  {
    path: '/privacy',
    element: <Privacy />,
    meta: {
      title: 'Privacy Policy | YSB Academy',
      description: 'Read our privacy policy.',
    },
  },
  {
    path: '/cookie',
    element: <Cookie />,
    meta: {
      title: 'Cookie Policy | YSB Academy',
      description: 'Read our cookie policy.',
    },
  },
  {
    path: '/faq',
    element: <FAQ />,
    meta: {
      title: 'FAQ | YSB Academy',
      description: 'Frequently asked questions about YSB Academy.',
    },
  },
  {
    path: '/contact',
    element: <Contact />,
    meta: {
      title: 'Contact Us | YSB Academy',
      description: 'Contact YSB Academy for support or inquiries.',
    },
  },
  {
    path: '/login',
    element: <Login />,
    meta: {
      title: 'Login | YSB Academy',
      description: 'Login to your YSB Academy account.',
    },
  },
  {
    path: '/signup',
    element: <Signup />,
    meta: {
      title: 'Sign Up | YSB Academy',
      description: 'Create a new account at YSB Academy.',
    },
  },
]

export default routes