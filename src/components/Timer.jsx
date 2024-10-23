import React, { useEffect, useRef, useState } from 'react';
import EasyTimer from 'easytimer.js';

const Timer = () => {
    const intervalRef = useRef(null);
    const [startValues, setStartValues] = useState({ minutes: 25, seconds: 0 });
    const [intervalChecked, setIntervalChecked] = useState(false);
    const [breakChecked, setBreakChecked] = useState(false);

    useEffect(() => {
        intervalRef.current = new EasyTimer();

        intervalRef.current.addEventListener('secondsUpdated', function (e) {
            document.querySelector('.display').innerHTML = intervalRef.current.getTimeValues().toString();
        });

        intervalRef.current.addEventListener('targetAchieved', function (e) {
            if (intervalChecked) {
                if (breakChecked) {
                    console.log('Break time');
                    intervalRef.current.start({ countdown: true, startValues: { minutes: 5, seconds: 0 } });
                    intervalRef.current.addEventListener('targetAchieved', function (e) {
                        console.log('Break over, starting main timer again');
                        intervalRef.current.start({ countdown: true, startValues });
                    }, { once: true });
                } else {
                    console.log('1 interval completed');
                    intervalRef.current.start({ countdown: true, startValues });
                }
            } else {
                document.querySelector('.display').innerHTML = 'KABOOM!!';
            }
        });

        return () => {
            intervalRef.current.stop();
        };
    }, [intervalChecked, breakChecked, startValues]);

    function startTimer() {
        intervalRef.current.start({ countdown: true, startValues });
    }

    function stopTimer() {
        intervalRef.current.stop();
        intervalRef.current.reset();
        document.querySelector('.display').innerHTML = `${startValues.minutes}`;
    }


    function handleIntervalCheckboxChange(event) {
        setIntervalChecked(event.target.checked);
    }

    function handleBreakCheckboxChange(event) {
        setBreakChecked(event.target.checked);
    }

    return (
        <div className='timer'>
            <div className='display'>{`${startValues.minutes}`}</div>
            <div className='controls'>
                <button onClick={startTimer} className='start-button'>Start</button>
                <button onClick={stopTimer} className='stop-button'>Stop</button>
                <label className='checkbox'>
                    <input type="checkbox" checked={intervalChecked} onChange={handleIntervalCheckboxChange} />
                    Interval
                </label>
                <label  className='checkbox' >
                    <input type="checkbox" checked={breakChecked} onChange={handleBreakCheckboxChange} />
                    Break
                </label>
            </div>
        </div>
    );
};

export default Timer;