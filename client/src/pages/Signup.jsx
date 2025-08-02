import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Signup() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    if (password !== confirm) {
      setError('Passwords do not match')
      return
    }
    const res = await register(email, password)
    if (res.success) {
      setSuccess('Registration successful! Please check your email to verify your account.')
      setTimeout(() => navigate('/login'), 2000)
    } else {
      setError(res.error || 'Registration failed')
    }
  }

  // Hide Google signup for now
  // const handleGoogleSignup = () => {
  //   window.location.href = 'http://localhost:4000/api/auth/google'
  // }

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100" style={{ background: "#f6f7fa" }}>
      <div className="container" style={{ maxWidth: 900 }}>
        <div className="row shadow rounded-4 overflow-hidden bg-white">
          {/* Left Side */}
          <div
            className="col-md-6 d-none d-md-flex flex-column justify-content-center align-items-center text-white"
            style={{
              background: "hsl(278,58%,38%)",
              minHeight: 520
            }}
          >
            <h2 className="fw-bold mb-3" style={{ fontSize: "2.2rem" }}>YSB Academy</h2>
            <p className="fs-5 text-center" style={{ maxWidth: 320 }}>
              Join YSB Academy and unlock your potential!
            </p>
          </div>
          {/* Right Side */}
          <div className="col-md-6 bg-white p-4 p-md-5">
            <div className="mb-4 d-flex border-bottom">
              <Link to="/login" className="fw-bold text-selective-yellow pb-2 px-3 text-decoration-none">Login</Link>
              <span className="fw-bold text-selective-purple border-bottom border-2 border-selective-purple pb-2 px-3" style={{ cursor: "pointer" }}>Sign Up</span>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold text-selective-purple">Full Name</label>
                <input type="text" className="form-control" id="name" placeholder="Your Name" required value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold text-selective-purple">Email Address</label>
                <input type="email" className="form-control" id="email" placeholder="your@example.com" required value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-semibold text-selective-purple">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Create a password" required value={password} onChange={e => setPassword(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="confirm" className="form-label fw-semibold text-selective-purple">Confirm Password</label>
                <input type="password" className="form-control" id="confirm" placeholder="Confirm your password" required value={confirm} onChange={e => setConfirm(e.target.value)} />
              </div>
              {error && <div className="alert alert-danger py-2">{error}</div>}
              {success && <div className="alert alert-success py-2">{success}</div>}
              <button
                type="submit"
                className="btn w-100 mb-3 fw-semibold text-white"
                style={{
                  background: "hsl(278,58%,38%)"
                }}
              >
                Sign Up
              </button>
              {/* Google signup hidden for now */}
              {/*
              <div className="d-flex align-items-center my-3">
                <hr className="flex-grow-1" />
                <span className="mx-2 text-muted">OR</span>
                <hr className="flex-grow-1" />
              </div>
              <button
                type="button"
                className="btn btn-outline-secondary w-100 fw-semibold text-selective-purple border-selective-purple"
                onClick={handleGoogleSignup}
              >
                <i className="bi bi-google me-2"></i>
                Continue with Google
              </button>
              */}
            </form>
            <div className="text-center mt-4">
              <span className="text-muted">Already have an account? </span>
              <Link to="/login" className="text-selective-yellow fw-semibold text-decoration-none">Login</Link>
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

export default Signup