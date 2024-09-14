import React, { useState, useRef, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
  const [duration, setDuration] = useState(60); 
  const [remainingTime, setRemainingTime] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const progressBarRef = useRef(null);
  const backgroundColorRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    
    if (remainingTime < 10) {
      backgroundColorRef.current.style.backgroundColor = 'red';
    } else {
      backgroundColorRef.current.style.backgroundColor = 'lightblue';
    }
  }, [remainingTime]);

  useEffect(() => {
    if (remainingTime <= 0) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      messageRef.current.textContent = 'Time is up!';
    }
  }, [remainingTime]);

  const startTimer = () => {
    if (isRunning) return;
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalRef.current);
          setIsRunning(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const pauseTimer = () => {
    if (!isRunning) return;
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setRemainingTime(duration);
    messageRef.current.textContent = '';
  };

  const handleDurationChange = (e) => {
    const newDuration = parseInt(e.target.value, 10) || 0;
    setDuration(newDuration);
    if (!isRunning) {
      setRemainingTime(newDuration);
    }
  };

  useEffect(() => {
    
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="timer-container">
      <div className="timer" ref={backgroundColorRef}>
        <div className="timer-display">
          {Math.floor(remainingTime / 60)}:{remainingTime % 60}
        </div>
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            ref={progressBarRef}
            style={{ width: `${(remainingTime / duration) * 100}%` }}
          />
        </div>
        <input
          type="number"
          value={duration}
          onChange={handleDurationChange}
          className="duration-input"
        />
        <div className="buttons">
          <button onClick={startTimer}>Start</button>
          <button onClick={pauseTimer}>Pause</button>
          <button onClick={resetTimer}>Reset</button>
        </div>
        <div className="message" ref={messageRef}></div>
      </div>
    </div>
  );
};

export default Timer;