import Header from '../layout/Header'
import Footer from '../layout/Footer'

function Terms() {
  return (
    <div className="homepage">
      <Header />
      <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 16px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: 32 }}>Terms of Service</h1>
        <p><strong>Last updated:</strong> 2023/07/19</p>
        <p>
          Please read these Terms of Service (“Terms”) carefully before using the YSB Academy website (“website” or “site”) operated by YSB Academy (“we,” “us,” or “our”). By accessing or using our website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not access the website.
        </p>
        <h2>Access to Content and Services</h2>
        <ul>
          <li>We provide educational content, courses, and other resources related to Forex trading through our website.</li>
          <li>Access to our content and services is subject to these Terms and any additional guidelines, policies, or rules provided on our website.</li>
          <li>We reserve the right to modify, update or discontinue any part of our content or services at any time without prior notice.</li>
        </ul>
        <h2>User Accounts</h2>
        <ul>
          <li>All content and materials on our website, including but not limited to text, graphics, logos, images, videos, and trademarks, are the property of YSB Academy and are protected by intellectual property laws.</li>
          <li>You may not modify, reproduce, distribute, or create derivative works based on our content without our prior written consent.</li>
        </ul>
        <h2>Prohibited Activities</h2>
        <p>When using our website, you agree not to:</p>
        <ul>
          <li>Violate any applicable laws or regulations;</li>
          <li>Engage in any fraudulent, illegal, or unauthorized activities;</li>
          <li>Access or attempt to access any part of the website that is not intended for public access;</li>
          <li>Transmit any viruses, malware, or other harmful code;</li>
          <li>Interfere with or disrupt the operation or security of our website;</li>
          <li>Engage in any activity to collect or harvest information from other users.</li>
        </ul>
        <h2>Third-Party Content</h2>
        <p>
          Our website may include links to third-party websites, services, or products that are not owned or controlled by YSB Academy. We are not responsible for the content, privacy policies, or practices of any third-party websites. We encourage you to read the terms and privacy policies of any third-party websites you visit.
        </p>
        <h2>Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, YSB Academy and its affiliates, directors, officers, employees, and agents shall not be liable for any indirect, incidental, consequential, or punitive damages arising out of or in connection with the use or inability to use our website.
        </p>
        <h2>Changes to Terms of Service</h2>
        <p>
          We reserve the right to modify or replace these Terms at any time without prior notice. It is your responsibility to review these Terms periodically for any changes.
        </p>
        <h2>Contact Information</h2>
        <p>
          If you have any questions regarding these Terms, please contact us at:<br />
          <a href="mailto:info@ysbacademy.com">info@ysbacademy.com</a>
        </p>
        <p>Thank you for choosing YSB Academy.</p>
      </main>
      <Footer />
    </div>
  )
}

export default Terms