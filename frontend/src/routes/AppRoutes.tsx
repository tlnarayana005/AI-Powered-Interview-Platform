import { Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import CandidateDashboard from '../pages/CandidateDashboard';
import RecruiterDashboard from '../pages/RecruiterDashboard';
import AdminPanel from '../pages/AdminPanel';
import InterviewRoom from '../pages/InterviewRoom';
import AnalyticsPage from '../pages/AnalyticsPage';
import ProfilePage from '../pages/ProfilePage';
import ResumeUploadPage from '../pages/ResumeUploadPage';
import { ProtectedRoute } from '../components/ProtectedRoute';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/candidate" element={<ProtectedRoute roles={["candidate"]}><CandidateDashboard /></ProtectedRoute>} />
      <Route path="/recruiter" element={<ProtectedRoute roles={["recruiter"]}><RecruiterDashboard /></ProtectedRoute>} />
      <Route path="/admin" element={<ProtectedRoute roles={["admin"]}><AdminPanel /></ProtectedRoute>} />
      <Route path="/interview/:id" element={<ProtectedRoute><InterviewRoom /></ProtectedRoute>} />
      <Route path="/analytics" element={<ProtectedRoute><AnalyticsPage /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
      <Route path="/resume" element={<ProtectedRoute><ResumeUploadPage /></ProtectedRoute>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
