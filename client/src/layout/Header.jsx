import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header d-flex align-items-center py-3">
      <div className="logo">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          YSB ACADEMY
        </Link>
      </div>
      <nav className="flex-grow-1">
        <div className="d-flex justify-content-center">
          <Link to="/courses" className="nav-link px-3">Courses</Link>
          <Link to="/about" className="nav-link px-3">About</Link>
          <a href="#testimonials" className="nav-link px-3">Testimonials</a>
          <a href="#pricing" className="nav-link px-3">Pricing</a>
          <Link to="/contact" className="nav-link px-3">Contact</Link>
        </div>
      </nav>
      <div className="ms-auto d-flex">
        <Link to="/login" className="btn btn-outline-primary ms-3">Login</Link>
        <Link to="/signup" className="btn btn-primary ms-2">Sign Up</Link>
      </div>
    </header>
  )
}
export default Header