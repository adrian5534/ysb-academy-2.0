import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const isAuthenticated = !!token

  // Login
  const login = async (email, password) => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    const data = await res.json()
    if (res.ok && data.session) {
      setUser(data.user)
      setToken(data.session.access_token)
      localStorage.setItem('ysb_token', data.session.access_token)
      localStorage.setItem('ysb_user', JSON.stringify(data.user))
      return { success: true }
    }
    return { success: false, error: data.error }
  }

  // Register
  const register = async (email, password) => {
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    const data = await res.json()
    if (res.ok && data.user) {
      return { success: true }
    }
    return { success: false, error: data.error }
  }

  // Logout
  const logout = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem('ysb_token')
    localStorage.removeItem('ysb_user')
    fetch('/api/logout', { method: 'POST' })
  }

  // Load from localStorage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem('ysb_token')
    const storedUser = localStorage.getItem('ysb_user')
    if (storedToken && storedUser) {
      setToken(storedToken)
      setUser(JSON.parse(storedUser))
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}