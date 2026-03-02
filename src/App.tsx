import { Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { ProfileFormPage } from './pages/ProfileFormPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/profile" element={<ProfileFormPage />} />
    </Routes>
  )
}

export default App
