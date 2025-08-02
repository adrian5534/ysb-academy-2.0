require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { createClient } = require('@supabase/supabase-js')
const jwt = require('jsonwebtoken')

const app = express()
app.use(cors())
app.use(express.json())

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

// JWT auth middleware
function requireAuth(req, res, next) {
  const auth = req.headers.authorization
  if (!auth) return res.status(401).json({ error: 'No token' })
  const token = auth.split(' ')[1]
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET)
    next()
  } catch {
    res.status(401).json({ error: 'Invalid token' })
  }
}

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok' }))

// Register route
app.post('/api/register', async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) return res.status(400).json({ error: 'Email and password required' })
  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
  })
  if (error) {
    console.error('Register error:', error)
    return res.status(400).json({ error: error.message })
  }
  res.json({ user: data.user })
})

// Login route (returns JWT)
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) {
    console.error('Login error:', error)
    return res.status(401).json({ error: error.message })
  }
  // Create your own JWT for protected routes
  const token = jwt.sign(
    { id: data.user.id, email: data.user.email },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  )
  res.json({ session: data.session, user: data.user, token })
})

// Google Auth route
app.get('/api/auth/google', (req, res) => {
  const redirectTo = encodeURIComponent('http://localhost:5173')
  const supabaseDomain = process.env.SUPABASE_URL.replace(/^https?:\/\//, '')
  const url = `https://${supabaseDomain}/auth/v1/authorize?provider=google&redirect_to=${redirectTo}`
  res.redirect(url)
})

// Example protected route
app.get('/api/protected', requireAuth, (req, res) => {
  res.json({ message: `Hello, ${req.user.email}! This is a protected route.` })
})

// Logout route (stateless, just for API completeness)
app.post('/api/logout', (req, res) => {
  res.json({ message: 'Logged out' })
})

app.listen(4000, () => console.log('API running on http://localhost:4000'))