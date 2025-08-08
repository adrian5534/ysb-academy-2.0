import { useEffect, useState } from 'react'
import { useAuth } from '../../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const { token, user } = useAuth()
  const navigate = useNavigate()
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!token) {
      navigate('/login')
      return
    }
    const fetchData = async () => {
      setLoading(true)
      setError('')
      try {
        const res = await fetch('/api/student/courses', {
          headers: { Authorization: `Bearer ${token}` }
        })
        if (!res.ok) throw new Error('Failed to fetch courses')
        const data = await res.json()
        setCourses(data.courses || [])
      } catch (err) {
        setError(err.message)
      }
      setLoading(false)
    }
    fetchData()
  }, [token, navigate])

  if (loading) return <div className="container py-5">Loading...</div>
  if (error) return <div className="container py-5 text-danger">{error}</div>

  return (
    <div className="container py-5">
      <h1 className="mb-4">Welcome, {user?.name || user?.email || 'Student'}!</h1>
      <h2 className="mb-3">Your Course Progress</h2>
      {courses.length === 0 ? (
        <div>No enrolled courses yet.</div>
      ) : (
        <div className="row">
          {courses.map(course => (
            <div className="col-md-6 mb-4" key={course.id}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <div className="mb-2">{course.description}</div>
                  <div className="progress mb-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${course.progress || 0}%` }}
                      aria-valuenow={course.progress || 0}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {course.progress || 0}%
                    </div>
                  </div>
                  <button className="btn btn-selective-purple">Continue Learning</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dashboard