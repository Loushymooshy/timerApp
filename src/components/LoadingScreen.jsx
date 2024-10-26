// LoadingScreen.js
import React from 'react';
import './LoadingScreen.module.css';

const LoadingScreen = ({ onLogoClick }) => {
  return (
    <div className="loading-screen">
      <img 
        src="path/to/logo.png" 
        alt="Logo" 
        className="logo" 
        onClick={onLogoClick} 
      />
      <h1 className="slogan">Your Slogan Here</h1>
    </div>
  );
};

export default LoadingScreen;