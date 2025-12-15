import React from 'react';
import { Link } from 'react-router-dom';
import InputGroup from './InputGroup'; // Reusing the same input style!

const Login = () => {
  return (
    <div className="signup-wrapper pt-5 mt-5">
      <div className="signup-card" style={{ borderColor: 'var(--accent)' }}>
        <h1 className="signup-title mb-4">Login</h1>
        <form>
          <InputGroup type="email" label="Email" />
          <InputGroup type="password" label="Password" />
          <button className="signup-btn">Login</button>
        </form>
        <div className="alt-link">
          New here? <Link to="/signup">Create Account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;