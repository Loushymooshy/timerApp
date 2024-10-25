import React from 'react'
import styles from '../styles/AbortButton.module.css'


const AbortButton = ({onClick, text}) => {
  return (
    <div> 
        <button  onClick={onClick} className={styles.abortButton}>
          {text}  
        </button>
    </div>
  )
}

export default AbortButton