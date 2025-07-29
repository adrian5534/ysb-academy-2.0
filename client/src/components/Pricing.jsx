function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <h2>Choose Your Path to Success</h2>
      <div className="pricing-list">
        <div className="pricing-card">
          <h3>Starter</h3>
          <div className="price">$49<span>/month</span></div>
          <ul>
            <li>Access to 1 Course</li>
            <li>Basic Community Support</li>
            <li>Monthly Live Q&A</li>
          </ul>
          <button className="pricing-btn yellow">Get Started</button>
        </div>
        <div className="pricing-card">
          <h3>Pro</h3>
          <div className="price">$99<span>/month</span></div>
          <ul>
            <li>Access to All Courses</li>
            <li>Premium Community Access</li>
            <li>Weekly Live Workshops</li>
            <li>Direct Instructor Support</li>
          </ul>
          <button className="pricing-btn purple">Join Pro</button>
        </div>
        <div className="pricing-card">
          <h3>Enterprise</h3>
          <div className="price">Custom<span>/quote</span></div>
          <ul>
            <li>Tailored Curriculum</li>
            <li>Dedicated Mentorship</li>
            <li>Team Training & Support</li>
            <li>Advanced Analytics</li>
          </ul>
          <button className="pricing-btn yellow">Contact Sales</button>
        </div>
      </div>
    </section>
  );
}
export default Pricing;