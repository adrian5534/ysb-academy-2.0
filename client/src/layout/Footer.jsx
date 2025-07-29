import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-logo">YSB ACADEMY</div>
      <div className="footer-links">
        <Link to="/about">About</Link>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">FAQ</a>
        <a href="#">Support</a>
      </div>
      <div className="footer-copy">
        © 2024 YSB Academy. All rights reserved.
      </div>
    </footer>
  )
}
export default Footer