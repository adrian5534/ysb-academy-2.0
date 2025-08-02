import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import routes from './routes/routes.jsx'
import MetaRoute from './routes/MetaRoute'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {routes.map(({ path, element, meta }, idx) => (
            <Route
              key={path || idx}
              path={path}
              element={<MetaRoute element={element} meta={meta} />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
export default App