import React, { useState } from 'react';
import './App.css';

// Components
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import InsightsSection from './components/InsightsSection';
import ContributorsSection from './components/ContributorsSection';
import ImageSlider from './components/ImageSlider';
import ContributorModal from './components/ContributorModal';
import AuthModal from './components/AuthModal'; // New Component for Login/Signup Popup

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  // State for Contributors Modal
  const [showContribModal, setShowContribModal] = useState(false);
  const [selectedContributor, setSelectedContributor] = useState(null);

  // State for Auth (Login/Signup) Modal
  // Values: null, 'login', 'signup'
  const [authMode, setAuthMode] = useState(null); 

  // Theme Toggle
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark');
  };

  // Contributor Modal Handlers
  const openContribModal = (contributor) => {
    setSelectedContributor(contributor);
    setShowContribModal(true);
  };
  const closeContribModal = () => {
    setShowContribModal(false);
    setSelectedContributor(null);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      
      {/* Navbar को Open Handlers पास करें */}
      <Navbar 
        toggleTheme={toggleTheme} 
        onOpenSignup={() => setAuthMode('signup')}
        onOpenLogin={() => setAuthMode('login')}
      />

      <div className="container pt-5 mt-5">
        {/* ये Sections अब हमेशा दिखेंगे, कभी नहीं हटेंगे */}
        <AboutSection />
        <ImageSlider />
        <InsightsSection />
        <ContributorsSection openModal={openContribModal} />
      </div>

      <footer className="text-center py-3 mt-4">© 2025 Admin Proctored Sys</footer>

      {/* Contributor Modal */}
      <ContributorModal
        show={showContribModal}
        contributor={selectedContributor}
        onClose={closeContribModal}
      />

      {/* Login/Signup Modal (Popup) */}
      {authMode && (
        <AuthModal 
          mode={authMode} 
          onClose={() => setAuthMode(null)} 
          onSwitchMode={(newMode) => setAuthMode(newMode)}
        />
      )}

    </div>
  );
};

export default App;