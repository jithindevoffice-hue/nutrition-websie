import { Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { ProfileFormPage } from './pages/ProfileFormPage'
import { AboutPage } from './pages/AboutPage'

import { ProgramsPage } from './pages/ProgramsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/programs" element={<ProgramsPage />} />
      <Route path="/profile" element={<ProfileFormPage />} />
    </Routes>
  )
}

export default App
