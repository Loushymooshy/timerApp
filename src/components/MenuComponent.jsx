import React, { useState } from 'react';
import styles from '../styles/MenuComponent.module.css';
import AnalogClock from './AnalogClock';
import DigitalTimer from './DigitalTimer';

const MenuComponent = ({ isMenuOpen, toggleMenu, minutes, seconds, setTimerType, isActive, timeUp }) => {
  const [timerType, setLocalTimerType] = useState('digital');

  const selectTimerType = (type) => {
    setLocalTimerType(type);
    setTimerType(type); 
    toggleMenu(); 
  };

  return (
    <div className={styles.MenuComponent}>
      <button className={styles['menu-icon']} onClick={toggleMenu}>
        ☰
      </button>
      {isMenuOpen && (
        <div className={styles.menu}>
          <button onClick={() => selectTimerType('digital')}>Digital Timer</button>
          <button onClick={() => selectTimerType('analog')}>Analog Timer</button>
          <button onClick={() => selectTimerType('text')}>Text Timer</button>
        </div>
      )}
      <Timer type={timerType} minutes={minutes} seconds={seconds} isActive={isActive} timeUp={timeUp} />
    </div>
  );
};

const Timer = ({ type, minutes, seconds, isActive, timeUp }) => {
  switch (type) {
    case 'digital':
      return <DigitalTimer minutes={minutes} seconds={seconds} isActive={isActive} timeUp={timeUp} />;
    case 'analog':
      return <AnalogClock minutes={minutes} seconds={seconds} isActive={isActive} timeUp={timeUp} />;
    case 'text':
      return <TextTimer minutes={minutes} seconds={seconds} />;
    default:
      return null;
  }
};

const TextTimer = ({ minutes, seconds }) => {
  return (
    <div>
      {minutes} minutes and {seconds} seconds
    </div>
  );
};

export default MenuComponent;