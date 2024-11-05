import React from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/StartButton.module.css'

const StartButton = ({ onClick, text }) => {
  return (
    <div>
      <motion.button
        onClick={onClick}
        className={styles.startButton}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {text}
      </motion.button>
    </div>
  )
}

export default StartButton