// src/App.jsx
import React from 'react';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import LandingPage from './pages/LandingPage/LandingPage'; // Ensure this path is correct

// Import global styles and variables
import './assets/styles/variables.css'; // Make sure this is imported early
import './assets/styles/global.css'; // If you have a global.css
import './index.css'; // Your main Tailwind directives import (if used)

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;