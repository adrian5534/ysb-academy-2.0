import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-logo">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          YSB ACADEMY
        </Link>
      </div>
      <div className="footer-links">
        <Link to="/about">About</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms of Service</Link>
        <Link to="/cookie">Cookie Policy</Link>
      </div>
      <div className="footer-copy">
        © 2024 YSB Academy. All rights reserved.
      </div>
    </footer>
  )
}
export default Footer