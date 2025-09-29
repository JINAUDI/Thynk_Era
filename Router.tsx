import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop';
import LandingPage from './pages/LandingPage';
import ProgramsPage from './pages/ProgramsPage';
import ConceptClassesPage from './pages/ConceptClassesPage';
import CodingTechPage from './pages/CodingTechPage';
import InnovationLabPage from './pages/InnovationLabPage';
import TestimonialsPage from './pages/TestimonialsPage';
import GalleryPage from './pages/GalleryPage';
import VisionPage from './pages/VisionPage';
import WhyThynkEraPage from './pages/WhyThynkEraPage';
import WebAppPage from './pages/WebAppPage';
import SPARKPage from './pages/SPARKPage';
import FutureRoadmapPage from './pages/FutureRoadmapPage';

// Admin imports
import AdminLayout from './pages/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import ContentManager from './pages/admin/ContentManager';
import ImageManager from './pages/admin/ImageManager';
import SectionControls from './pages/admin/SectionControls';
import UserManagement from './pages/admin/UserManagement';
import Settings from './pages/admin/Settings';
import Login from './pages/admin/Login';

// Loading component
const LoadingScreen = () => (
  <div className="min-h-screen bg-[#001F54] flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FFD700] mx-auto mb-4"></div>
      <p className="text-white">Loading...</p>
    </div>
  </div>
);

// Error fallback component
const RouterErrorFallback = ({ error }: { error?: Error }) => (
  <div className="min-h-screen bg-[#001F54] flex items-center justify-center px-4">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white mb-4">Oops! Page Error</h1>
      <p className="text-gray-300 mb-6">
        We encountered an issue loading this page. Please try refreshing or go back to home.
      </p>
      <button
        onClick={() => window.location.href = '/'}
        className="bg-gradient-to-r from-[#FFD700] to-[#FF6A00] hover:from-[#FFB400] hover:to-[#FF6A00] text-[#001F54] font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        Go Home
      </button>
    </div>
  </div>
);

export default function AppRouter() {
  return (
    <Router>
      <ScrollToTop />
      <ErrorBoundary fallback={RouterErrorFallback}>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/programs/concept-classes" element={<ConceptClassesPage />} />
            <Route path="/programs/coding-tech" element={<CodingTechPage />} />
            <Route path="/programs/innovation-lab" element={<InnovationLabPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/vision" element={<VisionPage />} />
            <Route path="/why-thynkera" element={<WhyThynkEraPage />} />
            <Route path="/web-app" element={<WebAppPage />} />
            <Route path="/spark" element={<SPARKPage />} />
            <Route path="/future-roadmap" element={<FutureRoadmapPage />} />
            
            {/* Admin routes */}
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="pages" element={<ContentManager />} />
              <Route path="pages/new" element={<ContentManager />} />
              <Route path="pages/:id" element={<ContentManager />} />
              <Route path="pages/:id/edit" element={<ContentManager />} />
              <Route path="assets" element={<ImageManager />} />
              <Route path="events" element={<Navigate to="/admin/pages" replace />} />
              <Route path="events/new" element={<Navigate to="/admin/pages" replace />} />
              <Route path="registrations" element={<Navigate to="/admin/pages" replace />} />
              <Route path="testimonials" element={<Navigate to="/admin/pages" replace />} />
              <Route path="analytics" element={<Navigate to="/admin" replace />} />
              <Route path="sections" element={<SectionControls />} />
              <Route path="navigation" element={<Navigate to="/admin/sections" replace />} />
              <Route path="users" element={<UserManagement />} />
              <Route path="settings" element={<Settings />} />
              
              {/* Legacy routes */}
              <Route path="content" element={<Navigate to="/admin/pages" replace />} />
              <Route path="images" element={<Navigate to="/admin/assets" replace />} />
            </Route>
            
            {/* Handle preview_page.html and any other unmatched routes */}
            <Route path="/preview_page.html" element={<Navigate to="/" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}