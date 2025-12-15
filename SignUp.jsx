import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputGroup from './InputGroup'; // Import Reusable Component

const SignUp = () => {
  // State Management
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { type, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [type]: value // dynamically updates email or password based on type
    }));
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert(`Account created for: ${formData.email}`);
  };

  return (
    <div className="signup-wrapper pt-5 mt-5">
      <div className="signup-card">

        <h1 className="signup-title mb-4">Sign Up</h1>

        <form onSubmit={handleSubmit}>
          {/* Reusable Input Component used twice */}
          <InputGroup 
            type="email" 
            label="Email Address" 
            value={formData.email} 
            onChange={handleChange}
          />

          <InputGroup 
            type="password" 
            label="Password" 
            value={formData.password} 
            onChange={handleChange}
          />

          <button className="signup-btn" type="submit">
            Create Account
          </button>
        </form>

        <div className="alt-link">
          Already have an account? <br/>
          {/* Connection to Login Page */}
          <Link to="/login">Login</Link>
        </div>

      </div>
    </div>
  );
};

export default SignUp;