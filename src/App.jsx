import React, { useState, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import ScrollRevealManager from './components/ScrollRevealManager.jsx';

import { ThemeTransitionProvider } from './components/ThemeTransition/ThemeTransitionProvider.jsx';
import ContinuousJourneyLine from './components/ContinuousJourneyLine/ContinuousJourneyLine.jsx';

// Homepage is kept eager to guarantee instant entry paint (FCP/LCP optimization)
import HomePage from './pages/HomePage.jsx';

// Route-level code splitting for secondary pages
const ServicesPage = lazy(() => import('./pages/ServicesPage.jsx'));
const WorkPage = lazy(() => import('./pages/WorkPage.jsx'));
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'));

const ProjectSimulatorModal = lazy(() => import('./components/ProjectSimulatorModal.jsx'));

function RouteLoadingFallback() {
  return (
    <div className="route-loading-fallback" aria-busy="true" aria-label="Loading page">
      <div className="route-loading-spinner" />
    </div>
  );
}

export default function App() {
  const [activeProjectId, setActiveProjectId] = useState(null);

  const handleOpenProject = (projectId) => {
    setActiveProjectId(projectId);
  };

  const handleCloseProject = () => {
    setActiveProjectId(null);
  };

  return (
    <ThemeTransitionProvider>
      <div className="app-container" data-theme-aware="true">
        <ContinuousJourneyLine />
        <CustomCursor />
        <ScrollToTop />
        <ScrollRevealManager />
        <Navbar />

        <Suspense fallback={<RouteLoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage onOpenProject={handleOpenProject} />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/work" element={<WorkPage onOpenProject={handleOpenProject} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage onOpenProject={handleOpenProject} />} />
          </Routes>
        </Suspense>

        <Footer />

        <Suspense fallback={null}>
          {activeProjectId && (
            <ProjectSimulatorModal
              activeProject={activeProjectId}
              onClose={handleCloseProject}
            />
          )}
        </Suspense>
      </div>
    </ThemeTransitionProvider>
  );
}
