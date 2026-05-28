import { Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { ProfileFormPage } from './pages/ProfileFormPage'
import { AboutPage } from './pages/AboutPage'

import { ProgramsPage } from './pages/ProgramsPage'
import { ProcessPage } from './pages/ProcessPage'
import { ApplyPage } from './pages/ApplyPage'
import { ContactPage } from './pages/ContactPage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { ScrollToTop } from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/profile" element={<ProfileFormPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-conditions" element={<PrivacyPolicyPage />} />
      </Routes>
    </>
  )
}

export default App
