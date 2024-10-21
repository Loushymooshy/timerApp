import React, { useState, useEffect, useRef } from 'react'

const Timer = () => {

    // Check if timer is running
    const [isRunning, setIsRunning] = useState(false);

    //track how much time has passed
    const [passedTime, setPassedTime] = useState(0);

    //clear intervals
    const intervalRef = useRef(null);

    //Get current time, stored in ref
    const startTimeRef = useRef(null);

    useEffect(() => {

        if(isRunning) {
            intervalRef.current = setInterval(() => {
                setPassedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalRef.current);
        }

    }, [isRunning])

    function startTimer() {
       setIsRunning(true);
       startTimeRef.current = Date.now() - passedTime; 
    }

    function stopTimer() {
    setIsRunning(false);
       
    }

    function resetTimer() {}
        setPassedTime(0);
        setIsRunning(false);

    function formatTime() {

        let hours = Math.floor( passedTime / (1000 * 60 * 60))
        let minutes = Math.floor((passedTime / 1000 / 60) % 60);
        let seconds = Math.floor((passedTime / 1000) % 60);
        let milliseconds = Math.floor((passedTime % 1000) / 10);

        return `${minutes}:${seconds}:${milliseconds}`;
    }

  return (

    <div className='timer'>
        <div className='display'>{formatTime()} </div>
        <div className='controls'>
            <button onClick={startTimer} className='start-button'>Start</button>
            <button onClick={stopTimer} className='stop-button'>Stop</button>
            <button onClick={resetTimer} className='reset-button'>Reset</button>
        </div>
    </div>
  )
}

export default Timer