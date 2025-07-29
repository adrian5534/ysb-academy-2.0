import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="logo">YSB ACADEMY</div>
      <nav className="nav">
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>
        <a href="#testimonials">Testimonials</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}
export default Header