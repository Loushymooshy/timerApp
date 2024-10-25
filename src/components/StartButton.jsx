import React from 'react'
import styles from '../styles/StartButton.module.css'


const StartButton = ({onClick, text}) => {
  return (
    <div> 
        <button  onClick={onClick} className={styles.startButton}>
          {text}  
        </button>
    </div>
  )
}

export default StartButton



