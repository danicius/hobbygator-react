import React, { useState } from 'react';
import './LoginSignUp.css';

const LoginSignUp = ({ onLoginSuccess }) => {
  // State variables to store email, password, and sign up status
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  // Event handler for email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Event handler for password input change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value) 
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    onLoginSuccess(); // Simulate a successful login/sign-up
    // Add your login or sign up logic here
  };

  return (
    <div>
      {/* Conditional rendering of the heading based on sign up status */}
      <h1 className='loginSignUp'>{isSignUp ? 'Sign Up to Hobby Gator' : 'Login to HobbyGator'}</h1>

      <form className='form' onSubmit={handleSubmit}>
        {/* Email input field */}
        <label className='label'>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />

        {/* Password input field */}
        <label className='label'>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />

        {/* Submit button */}
        <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>

        {/* Button for continuing with Google */}
        <button type="button">Continue with Google</button>
      </form>

      {/* Toggle between sign up and login */}
      <p className='dontHaveAccount' onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Already have an account? Login' : 'Don\'t have an account? Sign Up'}
      </p>
    </div>
  );
};

export default LoginSignUp;
