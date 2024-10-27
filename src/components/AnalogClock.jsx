import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import minutesMarks from '../assets/minutes.svg';
import minuteHand from '../assets/minuteHand.svg';
import secondsHand from '../assets/secondsHand.svg';
import styles from '../styles/AnalogClock.module.css';

const AnalogClock = ({ minutes, seconds, isActive, timeUp }) => {
  const [accumulatedSeconds, setAccumulatedSeconds] = useState(minutes * 60 + seconds);

  useEffect(() => {
    if (isActive) {
      setAccumulatedSeconds(minutes * 60 + seconds);
    }
  }, [minutes, seconds, isActive]);

  const minuteAngle = (minutes / 60) * 360;
  const secondAngle = (accumulatedSeconds / 60) * 360;

  return (
    isActive && (
      <div className={styles.analogClock}>
        <img src={minutesMarks} alt="minutes" className={styles.clockFace} />
        <motion.img
          src={minuteHand}
          alt="minute hand"
          className={styles.minHand}
          initial={{ rotate: `${minuteAngle}deg` }}
          animate={{ rotate: `${minuteAngle}deg` }}
          style={{ originX: 0.5, originY: 0.95 }}
          transition={{ type: 'spring', stiffness: 100, damping: 10 }}
        />
        <motion.img
          src={secondsHand}
          alt="second hand"
          className={styles.secHand}
          initial={{ rotate: `${secondAngle}deg` }}
          animate={{ rotate: `${secondAngle}deg` }}
          style={{ originX: 0.5, originY: 0.95 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        />
      </div>
    )
  );
};

export default AnalogClock;