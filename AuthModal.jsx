import React, { useState } from 'react';
import InputGroup from './InputGroup'; // Using your existing component

const AuthModal = ({ mode, onClose, onSwitchMode }) => {
  const isSignup = mode === 'signup';
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.type]: e.target.value });
  };

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content" style={{ 
            background: 'var(--card)', 
            borderRadius: '30px',
            boxShadow: '0 30px 70px rgba(0,0,0,.25)',
            border: 'none',
            padding: '20px'
        }}>
          
          <div className="modal-header border-0">
            <button type="button" className="btn-close" onClick={onClose} 
              style={{ filter: 'var(--accent)' === '#22d3ee' ? 'invert(1)' : 'none' }}></button>
          </div>

          <div className="modal-body px-4 pb-4">
            <h1 className="signup-title mb-4">
              {isSignup ? 'Sign Up' : 'Login'}
            </h1>

            <form onSubmit={(e) => e.preventDefault()}>
              <InputGroup type="email" label="Email Address" value={formData.email} onChange={handleChange} />
              <InputGroup type="password" label="Password" value={formData.password} onChange={handleChange} />
              
              <button className="signup-btn mt-4">
                {isSignup ? 'Create Account' : 'Login'}
              </button>
            </form>

            <div className="alt-link mt-3 text-center">
              {isSignup ? 'Already have an account? ' : 'New here? '}
              <span 
                style={{ color: 'var(--accent)', cursor: 'pointer', fontWeight: '600' }}
                onClick={() => onSwitchMode(isSignup ? 'login' : 'signup')}
              >
                {isSignup ? 'Login' : 'Create Account'}
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AuthModal;