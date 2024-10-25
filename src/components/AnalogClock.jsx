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
          <img src={minutesMarks} alt="minutes" className="clockFace" />
          <img
            src={minuteHand}
            alt="minute hand"
            className="minHand"
            style={{ transform: `rotate(${minuteAngle}deg) translate(-50%, -100%)` }}
          />
          <img
            src={secondsHand}
            alt="second hand"
            className="secHand"
            style={{ transform: `rotate(${secondAngle}deg) translate(-50%, -100%)` }}
          />
        </>
      )}
      {timeUp && <span className="timesUpMessage">Times up!</span>}
    </div>
  );
};

export default AnalogClock;