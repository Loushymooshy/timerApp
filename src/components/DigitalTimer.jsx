import React from 'react';

const DigitalTimer = ({ minutes, seconds, isActive, timeUp }) => {
  return (
    <div className='timeDisplay'>
      {isActive && `${minutes}:${seconds.toString().padStart(2, '0')}`}
    </div>
  );
};

export default DigitalTimer;