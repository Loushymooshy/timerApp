// LoadingScreen.js
import React from 'react';
import styles from '../styles/LoadingScreen.module.css';
import logo from '../assets/logo.svg';

const LoadingScreen = ({ onLogoClick }) => {
  return (
    <div className={styles.loadingScreen}>
      <img 
        src={logo}
        alt="logo"
        className={styles.logo} 
        onClick={onLogoClick} 
      />
      <h1 className={styles.slogan}>For all your timing needs</h1>
    </div>
  );
};

export default LoadingScreen;