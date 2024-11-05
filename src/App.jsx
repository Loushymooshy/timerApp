//countdown timer with interval mode and break mode
// If the interval checkbox is checked, the timer will restart once it reaches 0. If the break checkbox is checked, there will be a 5 minute break between the intervals, 1 minute main timer, then 5 minute timer for break, then 1 minute main timer again. using easytimer.js.

import React, { useState, useEffect } from 'react';
import useTimer from 'easytimer-react-hook';
import StartButton from './components/StartButton';
import AbortButton from './components/AbortButton';
import incrementIcon from './assets/increment.svg';
import decrementIcon from './assets/decrement.svg';
import MenuComponent from './components/MenuComponent';
import AnalogClock from './components/AnalogClock';
import DigitalTimer from './components/DigitalTimer';
import LoadingScreen from './components/LoadingScreen';
import AlarmView from './components/AlarmView';
import PauseView from './components/PauseView';
import BlackSlide from './components/animation/BlackSlide'; 
import { motion } from 'framer-motion';



function App() {
  const [inputTime, setInputTime] = useState(1); // Default to 1 minute
  const [intervalMode, setIntervalMode] = useState(false);
  const [breakMode, setBreakMode] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [timeUp, setTimeUp] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [timerType, setTimerType] = useState('digital'); 
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const [showBlackSlide, setShowBlackSlide] = useState(false); 

  const [timer, isTargetAchieved] = useTimer({
    countdown: true,
    startValues: { minutes: inputTime },
    target: { minutes: 0 }
  });

  useEffect(() => { 
    const handleTargetAchieved = () => {
      console.log('Target achieved');
      setTimeUp(true);
      setIsActive(false);
      if (intervalMode) {
        if (isBreak) {
          console.log('Restarting main timer after break');
          setTimeUp(false);
          setIsActive(true);
          timer.start({
            countdown: true,
            startValues: { minutes: inputTime }
          });
          setIsBreak(false);
        } else if (breakMode) {
          console.log('Starting break timer');
          setTimeUp(false);
          setIsActive(true);
          timer.start({
            countdown: true,
            startValues: { minutes: 5 }
          });
          setIsBreak(true);
        } else {
          console.log('Restarting main timer');
          setTimeUp(false);
          setIsActive(true);
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
    setShowBlackSlide(true); 
    setIsActive(true);
    setTimeUp(false);
    timer.start({
      countdown: true,
      startValues: { minutes: inputTime }
    });
  };

  const handleAnimationComplete = () => {
    setShowBlackSlide(false); 
  };

  const handleAbort = () => {
    timer.stop();
    setIsActive(false);
    setIsBreak(false);
    setTimeUp(false);
  };

  const incrementTime = () => {
    setInputTime(prevTime => prevTime + 1);
  };

  const decrementTime = () => {
    setInputTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  const handleLogoClick = () => {
    setShowLoadingScreen(false);
  };

  return (
    <div>
      {showLoadingScreen ? (
        // Render the loading screen if showLoadingScreen is true
        <LoadingScreen onLogoClick={handleLogoClick} />
      ) : (
        
        <div className='container'>
        {showBlackSlide && <BlackSlide onAnimationComplete={handleAnimationComplete} />}
        {timeUp && !isBreak && (
          <AlarmView/>
        )}
        {isBreak && (
          <PauseView remainingTime={timer.getTimeValues()} isBreak={isBreak} />
        )}
          <MenuComponent
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            minutes={timer.getTimeValues().minutes}
            seconds={timer.getTimeValues().seconds}
            setTimerType={setTimerType} 
          />
          <div className={`display ${isMenuOpen ? 'hidden' : ''}`}>
            {!isActive && !timeUp && (
              <div className='spinner'>
                <button className='arrow' onClick={decrementTime} disabled={isActive}>
                  <img src={decrementIcon} alt="Decrement" />
                </button>
                <input
                  className='inputTime'
                  type="number"
                  id="inputTime"
                  name="inputTime"
                  value={inputTime}
                  readOnly
                  placeholder=""
                  disabled={isActive}
                />
                <button className='arrow' onClick={incrementTime} disabled={isActive}>
                  <img src={incrementIcon} alt="Increment" />
                </button>
              </div>
            )}

            {!isBreak && timerType === 'digital' && (
              <DigitalTimer
                minutes={timer.getTimeValues().minutes}
                seconds={timer.getTimeValues().seconds}
                isActive={isActive}
                timeUp={timeUp}
              />
            )}

            {!isBreak && timerType === 'analog' && (
              <AnalogClock
                minutes={timer.getTimeValues().minutes}
                seconds={timer.getTimeValues().seconds}
                isActive={isActive}
                timeUp={timeUp}
              />
            )}

            {!isActive && !timeUp && (
              <>
                <div className="controls">
                  <div>
                    <input className='box'
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
                    <input className='box'
                      type="checkbox"
                      id="breakCheck"
                      name="breakCheck"
                      checked={breakMode}
                      onChange={(e) => setBreakMode(e.target.checked)}
                      disabled={!intervalMode || isActive}
                    />
                    <label htmlFor="breakCheck">Interval + 5 Minute Break</label>
                  </div>
                </div>
              </>
            )}
            <div className="button_container">
              {!isActive && !timeUp ? (
                <StartButton onClick={handleStart} text="Start Timer" />
              ) : (
                <AbortButton onClick={handleAbort} text={timeUp ? "Set new time" : "Abort Timer"} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;