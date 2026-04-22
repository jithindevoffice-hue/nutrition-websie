import { Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { ProfileFormPage } from './pages/ProfileFormPage'
import { AboutPage } from './pages/AboutPage'

import { ProgramsPage } from './pages/ProgramsPage'
import { ProcessPage } from './pages/ProcessPage'
import { ApplyPage } from './pages/ApplyPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/programs" element={<ProgramsPage />} />
      <Route path="/process" element={<ProcessPage />} />
      <Route path="/apply" element={<ApplyPage />} />
      <Route path="/profile" element={<ProfileFormPage />} />
    </Routes>
  )
}

export default App
