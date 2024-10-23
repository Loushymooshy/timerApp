import React, { useState, useEffect } from 'react';
import useTimer from 'easytimer-react-hook';

const TimerComponent = () => {
    const [inputTime, setInputTime] = useState(1); // Default to 1 minute
    const [intervalMode, setIntervalMode] = useState(false);
    const [breakMode, setBreakMode] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isBreak, setIsBreak] = useState(false);
    const [timer, isTargetAchieved] = useTimer({
        countdown: true,
        startValues: { minutes: inputTime },
        target: { minutes: 0 }
    });

    useEffect(() => {
        const handleTargetAchieved = () => {
            if (intervalMode) {
                if (isBreak) {
                    timer.start({
                        countdown: true,
                        startValues: { minutes: inputTime }
                    });
                    setIsBreak(false);
                } else if (breakMode) {
                    timer.start({
                        countdown: true,
                        startValues: { minutes: 5 }
                    });
                    setIsBreak(true);
                } else {
                    timer.start({
                        countdown: true,
                        startValues: { minutes: inputTime }
                    });
                }
            }
        };

        timer.addEventListener('targetAchieved', handleTargetAchieved);

        return () => {
            timer.removeEventListener('targetAchieved', handleTargetAchieved);
        };
    }, [intervalMode, breakMode, isBreak, inputTime, timer]);

    const handleStart = () => {
        setIsActive(true);
        timer.start({
            countdown: true,
            startValues: { minutes: inputTime }
        });
    };

    const handleAbort = () => {
        timer.stop();
        setIsActive(false);
        setIsBreak(false);
    };

    return (
        <div>
            <input
                type="number"
                id="inputTime" 
                name="inputTime"
                value={inputTime}
                onChange={(e) => setInputTime(Number(e.target.value))}
                placeholder="Enter time in minutes"
                disabled={isActive}
            />
            <div>
                <input
                    type="checkbox"
                    id="intervalCheck" 
                    name="intervalCheck"
                    checked={intervalMode}
                    onChange={(e) => setIntervalMode(e.target.checked)}
                    disabled={isActive}
                />
                <label htmlFor="intervalCheck">Interval Mode</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="breakCheck" 
                    name="breakCheck"
                    checked={breakMode}
                    onChange={(e) => setBreakMode(e.target.checked)}
                    disabled={!intervalMode || isActive}
                />
                <label htmlFor="breackCheck">Interval + 5 Minute Break</label>
            </div>
            {!isActive ? (
                <button onClick={handleStart}>Start Timer</button>
            ) : (
                <button onClick={handleAbort}>Abort Timer</button>
            )}
            <div>{timer.getTimeValues().toString()}</div>
            {isTargetAchieved && <div>Target Achieved!</div>}
        </div>
    );
};

export default TimerComponent;