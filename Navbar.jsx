import React from 'react';

const Navbar = ({ toggleTheme, onOpenSignup, onOpenLogin }) => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <i className="fa-solid fa-shield-halved me-2"></i>APS-Admin
        </a>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2 align-items-center">
            
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#team">Schedule</a></li>
            
            {/* BUTTON TO OPEN MODAL */}
            <li className="nav-item">
              <button 
                className="nav-link btn btn-outline-primary px-3 rounded-pill" 
                onClick={onOpenSignup}
              >
                <i className="fa-solid fa-right-to-bracket me-1"></i> Sign-up
              </button>
            </li>
            
            <li className="nav-item">
              <button className="theme-btn" onClick={toggleTheme}>🌙</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar