require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { Pool } = require('pg')

const app = express()
app.use(cors())
app.use(express.json())

const pool = new Pool({ connectionString: process.env.DATABASE_URL })
const JWT_SECRET = process.env.JWT_SECRET

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok' }))

// Register route
app.post('/api/register', async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) return res.status(400).json({ error: 'Email and password required' })
  try {
    const hashed = await bcrypt.hash(password, 10)
    const result = await pool.query(
      'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email',
      [email, hashed]
    )
    res.json({ user: result.rows[0] })
  } catch (err) {
    res.status(400).json({ error: 'User already exists or invalid data.' })
  }
})

// Login route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body
  const result = await pool.query('SELECT * FROM users WHERE email = $1', [email])
  const user = result.rows[0]
  if (!user) return res.status(401).json({ error: 'Invalid credentials' })
  const valid = await bcrypt.compare(password, user.password)
  if (!valid) return res.status(401).json({ error: 'Invalid credentials' })
  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' })
  res.json({ token, user: { id: user.id, email: user.email } })
})

// Logout route (stateless, just for API completeness)
app.post('/api/logout', (req, res) => {
  res.json({ message: 'Logged out' })
})

app.listen(4000, () => console.log('API running on http://localhost:4000'))