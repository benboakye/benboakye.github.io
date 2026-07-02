import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { CybersecurityRiskAssessmentPage } from './pages/CybersecurityRiskAssessmentPage';
import { HomePage } from './pages/HomePage';
import { PortableOfflineNasPage } from './pages/PortableOfflineNasPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/portable-offline-nas" element={<PortableOfflineNasPage />} />
        <Route
          path="/projects/cybersecurity-risk-assessment"
          element={<CybersecurityRiskAssessmentPage />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
