import Header from '../layout/Header'
import Footer from '../layout/Footer'

function Privacy() {
  return (
    <div className="homepage">
      <Header />
      <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 16px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: 32 }}>YSB Academy: Privacy Policy</h1>
        <p><strong>Last updated:</strong> 2023/07/19</p>
        <p>
          This Privacy Policy explains how YSB Academy (“we”, “us” or “our”) collects, uses, discloses and protects your personal information. Personal information refers to any information that can be used to identify an individual, such as name, email address, phone number, or payment information. By using our website, you agree to the terms of this Privacy Policy.
        </p>
        <h2>Information we collect</h2>
        <h3>Personal information</h3>
        <p>
          We collect and store personal information you provide to us when you register for an account, purchase products or services from us, communicate with our customer support or submit information through our website’s contact forms. The types of personal information we may collect include your name, email address, phone number, billing and shipping address, and payment information (such as credit card number and expiration date).
        </p>
        <h3>Non-personal information</h3>
        <p>
          We may collect non-personal information such as browser type, device type, operating system, IP address, and third-party websites that directed you to our website.
        </p>
        <h2>How we use your information</h2>
        <p>We may use your personal information for the following purposes:</p>
        <ul>
          <li>To create and maintain your account;</li>
          <li>To process and fulfill your orders;</li>
          <li>To communicate with you about our products, services, and promotions;</li>
          <li>To provide customer support;</li>
          <li>To protect our website and prevent fraud;</li>
          <li>To aggregate and analyze non-personal information to assess our website's performance and improve user experience and content.</li>
        </ul>
        <h2>How we share your information</h2>
        <p>
          We do not sell, trade, or rent your personal information to third parties. However, we may share your personal information with trusted third-party vendors who provide services for us, such as payment processing, shipping, and data analysis.
        </p>
        <p>
          We require all third-party vendors to protect your personal information and not use it for any other purposes than fulfilling our services for you. Additionally, we may disclose your personal information if required by law or in response to a subpoena, court order, or other legal process.
        </p>
        <h2>How we protect your information</h2>
        <p>
          We use reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, use, theft, and loss. However, no security measures are foolproof, and we cannot guarantee the security of your personal information.
        </p>
        <h2>Children's privacy</h2>
        <p>
          Our website is not intended for use by children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete the information promptly.
        </p>
        <h2>Changes to our privacy policy</h2>
        <p>
          We reserve the right to modify this Privacy Policy at any time without notice to you. We encourage you to occasionally review this Privacy Policy to stay informed of any changes.
        </p>
        <h2>Contacting us</h2>
        <p>
          If you have any questions regarding our Privacy Policy, contact us at <a href="mailto:privacy@ysbacademy.com">privacy@ysbacademy.com</a>.
        </p>
        <p>Thank you for choosing YSB Academy.</p>
      </main>
      <Footer />
    </div>
  )
}

export default Privacy