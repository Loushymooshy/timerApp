import React from 'react';
import { motion } from 'framer-motion';

const BlackSlide = ({ onAnimationComplete }) => {
  return (
    <motion.div
    initial={{ y: '20%' }}
    animate={{ y: [ '20%','30%', '35%', '-100%' ] }}
    transition={{
      duration: 1,
      times: [0, 0.7, 0.8, 0.9, 1],
    }}
      onAnimationComplete={onAnimationComplete}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        zIndex: 1000,
      }}
      
    />
  );
};

export default BlackSlide;