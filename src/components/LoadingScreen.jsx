import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from '../styles/LoadingScreen.module.css';
import logo from '../assets/logo.svg';

const LoadingScreen = ({ onLogoClick }) => {
  const slogan = "For all your timing needs.";
  const letters = slogan.split("");
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: [0.5, 1.5, 0.8, 1],
      transition: { duration: 2, ease: "easeInOut" }
    });
  }, [controls]);

  return (
    <div className={styles.loadingScreen}>
      <motion.img 
        src={logo}
        alt="logo"
        className={styles.logo} 
        onClick={onLogoClick}
        initial={{ scale: 1 }}
        animate={controls}
        whileHover={{ scale: 1.2 }}
      />
      <motion.h1 className={styles.slogan}>
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 + index * 0.08, duration: 0.5 }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default LoadingScreen;