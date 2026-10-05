import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import ScrollRevealManager from './components/ScrollRevealManager.jsx';
import ProjectSimulatorModal from './components/ProjectSimulatorModal.jsx';

import { ThemeTransitionProvider } from './components/ThemeTransition/ThemeTransitionProvider.jsx';

import HomePage from './pages/HomePage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import WorkPage from './pages/WorkPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

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
        <CustomCursor />
        <ScrollToTop />
        <ScrollRevealManager />
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage onOpenProject={handleOpenProject} />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<WorkPage onOpenProject={handleOpenProject} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage onOpenProject={handleOpenProject} />} />
        </Routes>

        <Footer />

        {activeProjectId && (
          <ProjectSimulatorModal
            activeProject={activeProjectId}
            onClose={handleCloseProject}
          />
        )}
      </div>
    </ThemeTransitionProvider>
  );
}
