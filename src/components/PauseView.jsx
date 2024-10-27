import React from 'react';
import styles from '../styles/PauseView.module.css';
import pauseIcon from '../assets/pauseIcon.svg';

const PauseView = ({ remainingTime, isBreak }) => {
  return (
    <div className={styles.eventBackground}>
      <figure className={styles.eclipse} />
      <img src={pauseIcon} alt="pause icon" className={styles.icon} />
      {isBreak && <span className={styles.timesUpMessage}>Pause & Breathe...</span>}
      <div className={styles.remainingTime}>
        {remainingTime.minutes}:{remainingTime.seconds < 10 ? `0${remainingTime.seconds}` : remainingTime.seconds}
      </div>
    </div>
  );
};

export default PauseView;