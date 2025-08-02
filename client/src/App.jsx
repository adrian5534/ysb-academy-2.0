import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import routes from './routes/routes.jsx'
import MetaRoute from './routes/MetaRoute'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './routes/ProtectedRoute.jsx'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {routes.map(({ path, element, meta, protected: isProtected }, idx) => (
            <Route
              key={path || idx}
              path={path}
              element={
                isProtected
                  ? <ProtectedRoute><MetaRoute element={element} meta={meta} /></ProtectedRoute>
                  : <MetaRoute element={element} meta={meta} />
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
export default App