import Header from '../layout/Header'
import Footer from '../layout/Footer'

function Cookie() {
  return (
    <div className="homepage">
      <Header />
      <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 16px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: 32 }}>Cookie Policy</h1>
        <p><strong>Last updated:</strong> 2023/07/19</p>
        <p>
          This Cookie Policy explains how YSB Academy (“we”, “us” or “our”) uses cookies and similar technologies on our website. By using our website, you consent to the use of cookies in accordance with this policy.
        </p>
        <h2>What are cookies?</h2>
        <p>
          Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit websites. They are widely used to make websites function more efficiently, provide a personalized browsing experience, and collect information about how visitors use the website.
        </p>
        <h2>Types of cookies we use</h2>
        <ul>
          <li>
            <strong>Essential cookies:</strong> These cookies are necessary to provide the core functionality of our website, such as allowing you to access secure areas, make purchases, and navigate between pages.
          </li>
          <li>
            <strong>Analytical/performance cookies:</strong> These cookies help us analyze how visitors use our website. They collect information about the number of visitors, the pages they visit, and the overall user experience. This data is aggregated and anonymous.
          </li>
          <li>
            <strong>Functionality cookies:</strong> These cookies allow our website to remember choices you make (such as your username or language preference) and provide enhanced features to personalize your experience.
          </li>
          <li>
            <strong>Targeting/advertising cookies:</strong> These cookies are used to deliver advertisements that are relevant to your interests. They may also be used to limit the number of times you see an advertisement and measure the effectiveness of advertising campaigns.
          </li>
        </ul>
        <h2>Third-party cookies</h2>
        <p>
          We may use third-party cookies on our website for various purposes, including analytics, advertising, and social media integration. These third-party cookies are subject to the respective privacy policies of the third-party providers.
        </p>
        <h2>Managing cookies</h2>
        <p>
          Most web browsers allow you to manage your cookie preferences. You can usually choose to accept or reject cookies, delete specific cookies, or set your browser to notify you when a website uses cookies. Please note that if you choose to disable or decline cookies, some parts of our website may not function properly.
        </p>
        <h2>Consent</h2>
        <p>
          By using our website, you consent to the use of cookies and similar technologies as described in this Cookie Policy. You can withdraw your consent at any time by changing your browser settings or deleting cookies from your device.
        </p>
        <h2>Changes to this Cookie Policy</h2>
        <p>
          We reserve the right to update or change this Cookie Policy at any time without prior notice. Any changes will be effective immediately upon posting the revised policy on our website.
        </p>
        <h2>Contact Information</h2>
        <p>
          If you have any questions or concerns about our use of cookies, please contact us at <a href="mailto:privacy@ysbacademy.com">privacy@ysbacademy.com</a>
        </p>
        <p>Thank you for choosing YSB Academy.</p>
      </main>
      <Footer />
    </div>
  )
}

export default Cookie