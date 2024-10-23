import React from 'react'
import styles from '../styles/TimerButton.module.css'

const TimerButton = () => {
  return (
    <div> 
        <button className={styles.timerButton}>Abort timer </button>
    </div>
  )
}

export default TimerButton