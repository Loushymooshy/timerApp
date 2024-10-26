import React from 'react';
import minutesMarks from '../assets/minutes.svg'; // A circular image of marks that represents the clock face
import minuteHand from '../assets/minuteHand.svg'; // The handle that moves and shows the minutes on the clock face
import secondsHand from '../assets/secondsHand.svg'; // The handle that moves and shows the seconds on the clock face
import styles from  '../styles/AnalogClock.module.css';

const AnalogClock = ({ minutes, seconds, isActive, timeUp }) => {
  const minuteAngle = (minutes / 60) * 360;
  const secondAngle = (seconds / 60) * 360;

  return (
    <div className={styles.analogClock}>
      {isActive && (
        <>
          <img src={minutesMarks} alt="minutes" className={styles.clockFace} />
          <img
            src={minuteHand}
            alt="minute hand"
            className={styles.minHand} 
            
          />
          <img
            src={secondsHand}
            alt="second hand"
            className={styles.secHand} 
            
          />
        </>
      )}
      {timeUp && <span className={styles.timesUpMessage}>Times up!</span>}
    </div>
  );
};

export default AnalogClock;