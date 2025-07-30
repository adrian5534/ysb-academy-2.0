import Header from '../layout/Header'
import Footer from '../layout/Footer'

function Contact() {
  return (
    <div className="homepage">
      <Header />
      <main className="container py-5">
        {/* Page Heading */}
        <div className="text-center mb-5">
          <h3 className="fw-normal text-muted">We're here to help!</h3>
          <h1 className="fw-bold text-uppercase mb-3">Contact Us</h1>
          <div className="d-flex justify-content-center align-items-center mb-3">
            <div className="bg-primary rounded-pill" style={{ height: 3, width: 70, marginRight: 6 }}></div>
            <div className="bg-primary rounded-circle" style={{ width: 10, height: 10 }}></div>
            <div className="bg-primary rounded-pill" style={{ height: 3, width: 70, marginLeft: 6 }}></div>
          </div>
          <p className="lead mx-auto" style={{ maxWidth: 600 }}>
            Thank you for your interest in YSB Academy! We aim to answer your questions in the quickest way possible. Please fill out the contact form below and we'll be in touch within one business day.
          </p>
        </div>

        <div className="row g-5">
          {/* Contact Info */}
          <div className="col-lg-5">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <ul className="list-unstyled">
                  <li className="mb-4 d-flex align-items-center">
                    <i className="bi bi-telephone-fill fs-2 text-primary me-3"></i>
                    <div>
                      <div className="fw-bold">Phone No.</div>
                      <div className="text-muted">+1 (876) 832-6382</div>
                    </div>
                  </li>
                  <li className="mb-4 d-flex align-items-center">
                    <i className="bi bi-envelope-fill fs-2 text-primary me-3"></i>
                    <div>
                      <div className="fw-bold">E-mail</div>
                      <div className="text-muted">support@ysbacademy.com</div>
                    </div>
                  </li>
                  <li className="mb-4 d-flex align-items-center">
                    <i className="bi bi-geo-alt-fill fs-2 text-primary me-3"></i>
                    <div>
                      <div className="fw-bold">Address</div>
                      <div className="text-muted">United States</div>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-clock-fill fs-2 text-primary me-3"></i>
                    <div>
                      <div className="fw-bold">Opening Hours</div>
                      <div className="text-muted">Monday - Friday (9:00 AM to 5:00 PM)</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="card shadow-sm">
              <div className="card-body">
                <form>
                  <div className="row mb-3">
                    <div className="col">
                      <label htmlFor="first_name" className="form-label">First Name</label>
                      <input type="text" id="first_name" className="form-control" placeholder="First Name" required />
                    </div>
                    <div className="col">
                      <label htmlFor="last_name" className="form-label">Last Name</label>
                      <input type="text" id="last_name" className="form-control" placeholder="Last Name" required />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <label htmlFor="email" className="form-label">E-mail</label>
                      <input type="email" id="email" className="form-control" placeholder="E-mail" required />
                    </div>
                    <div className="col">
                      <label htmlFor="phone" className="form-label">Phone</label>
                      <input type="text" id="phone" className="form-control" placeholder="Phone" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input type="text" id="subject" className="form-control" placeholder="Subject" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea rows={5} id="message" className="form-control" placeholder="Message" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100 text-uppercase fw-bold">Send Message</button>
                </form>
                <div className="text-center mt-4">
                  <img src="/images/contact.png" alt="Contact" className="img-fluid" style={{ maxWidth: 320 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Contact