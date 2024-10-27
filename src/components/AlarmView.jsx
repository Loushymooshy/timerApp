import React from 'react'
import styles from '../styles/Alarmview.module.css';
import alarmIcon from '../assets/alarmIcon.svg';

const AlarmView = ({children}, timeUp) => {
  return (
    <div className={styles.eventBackground} >
    <figure className={styles.eclipse}/>
    <img src={alarmIcon} alt="alarm icon" className={styles.icon} />
    {timeUp && <span className={styles.timesUpMessage}>Times up!</span>}
    
    </div>
    
  )
}

export default AlarmView