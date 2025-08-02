require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { createClient } = require('@supabase/supabase-js')

const app = express()
app.use(cors())
app.use(express.json())

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

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

// Login route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) {
    console.error('Login error:', error)
    return res.status(401).json({ error: error.message })
  }
  res.json({ session: data.session, user: data.user })
})

// Logout route (stateless, just for API completeness)
app.post('/api/logout', (req, res) => {
  res.json({ message: 'Logged out' })
})

app.listen(4000, () => console.log('API running on http://localhost:4000'))