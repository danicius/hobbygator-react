
import LoginSignUp from './Components/LoginSignUp/LoginSignUp';
import HomePage from './Components/HomePage/HomePage';  
import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // This function simulates the login process
  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Simulate successful login
  };

  return (
    <div>
      {isLoggedIn ? <HomePage /> : <LoginSignUp onLoginSuccess={handleLoginSuccess} />}
    </div>
  );
}


export default App;
