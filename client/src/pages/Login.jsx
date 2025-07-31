import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100" style={{ background: "#f6f7fa" }}>
      <div className="container" style={{ maxWidth: 900 }}>
        <div className="row shadow rounded-4 overflow-hidden bg-white">
          {/* Left Side */}
          <div
            className="col-md-6 d-none d-md-flex flex-column justify-content-center align-items-center text-white"
            style={{
              background: "hsl(278,58%,38%)",
              minHeight: 480
            }}
          >
            <h2 className="fw-bold mb-3" style={{ fontSize: "2.2rem" }}>YSB Academy</h2>
            <p className="fs-5 text-center" style={{ maxWidth: 320 }}>
              Unlock Your Potential. Master Your Future.
            </p>
          </div>
          {/* Right Side */}
          <div className="col-md-6 bg-white p-4 p-md-5">
            <div className="mb-4 d-flex border-bottom">
              <span className="fw-bold text-selective-purple border-bottom border-2 border-selective-purple pb-2 px-3" style={{ cursor: "pointer" }}>Login</span>
              <Link to="/signup" className="fw-bold text-selective-purple pb-2 px-3 text-decoration-none">Sign Up</Link>
            </div>
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold text-selective-purple">Email Address</label>
                <input type="email" className="form-control" id="email" placeholder="your@example.com" required />
              </div>
              <div className="mb-2">
                <label htmlFor="password" className="form-label fw-semibold text-selective-purple">Password</label>
                <input type="password" className="form-control" id="password" placeholder="********" required />
              </div>
              <div className="mb-4 text-end">
                <Link to="/forgot-password" className="small text-selective-purple text-decoration-none">Forgot Password?</Link>
              </div>
              <button
                type="submit"
                className="btn w-100 mb-3 fw-semibold text-white"
                style={{
                  background: "hsl(278,58%,38%)"
                }}
              >
                Login
              </button>
              <div className="d-flex align-items-center my-3">
                <hr className="flex-grow-1" />
                <span className="mx-2 text-muted">OR</span>
                <hr className="flex-grow-1" />
              </div>
              <button type="button" className="btn btn-outline-secondary w-100 fw-semibold text-selective-purple border-selective-purple">
                <i className="bi bi-google me-2"></i>
                Continue with Google
              </button>
            </form>
            <div className="text-center mt-4">
              <span className="text-muted">Not a member? </span>
              <Link to="/signup" className="text-selective-purple fw-semibold text-decoration-none">Sign up</Link>
            </div>
            <div className="text-center mt-4">
              <Link to="/" className="btn btn-link text-selective-purple text-decoration-none fw-semibold">
                <i className="bi bi-arrow-left me-2"></i>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login