import React, { useState, useRef } from 'react';
import "./App.css"

function padTime(time) {
    return time.toString().padStart(2, '0');
}
export default function App() {
    const [title, setTitle] = useState('Let the countdown begin!!!')
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    function startTimer() {
        setTitle('You are doing great');
        if (intervalRef.current !== null) return;
        setIsRunning(true);
        intervalRef.current = setInterval(() => {
            setTimeLeft(timeLeft => {
                if (timeLeft >= 1) return timeLeft - 1;

                // reset the timer
                return 0;
            });
        }, 1000);
    }

    console.log(intervalRef.current);

    function stopTimer() {
        setTitle('Keep it up');
        if (intervalRef.current === null) return;
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsRunning(false);
    }

    function resetTimer() {
        setTitle('Ready to go another round?')
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setTimeLeft(25 * 60);
        setIsRunning(false);
    }

    const minutes = padTime(Math.floor(timeLeft / 60));
    const seconds = padTime(timeLeft - minutes * 60);

    return (
        <div className='app'>
            <h2>{title}</h2>


            <div className='timer'>
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
            </div>

            <div className='buttons'>
            {!isRunning && <button onClick={startTimer}>Start</button>}
            {isRunning && <button onClick={stopTimer}>Stop</button>}
            <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
}

