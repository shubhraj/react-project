import React, { useEffect, useRef, useState } from 'react'

function Stopwatch() {

  const [time, setTime] = useState(0); 
  const [isRunning, setIsRunning] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const interValId = useRef(null);
  
  useEffect(()=> {
    if(isRunning) {
        interValId.current = setInterval(() => {
            setTime((prevValue) => prevValue + 1 );
        }, 1000)
       
    } else {
        clearInterval(interValId.current);
    }
  }, [isRunning])  

  const handleStart = () => {
    setIsRunning(true);
    setHasStarted(true);
  }

  const handleStop = () => {
    setIsRunning(false);
  }

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  }

  const handlePause = () => {
    setIsRunning(!isRunning);
    setHasStarted(false);
  }

  const handleButtonClick = (e) => {
    const action = e.target.getAttribute('data-action');
    switch(action) {
        case 'start' :
            handleStart();
            break;
        case 'stop' :
            handleStop();  
            break;
        case 'pause' : 
            handlePause();
            break;
        case 'reset' : 
            handleReset();
            break;
         default : 
            break;   
    }
  }

  return (
    <div className='p-2 m-4'>
        <span className='m-2'>{time}</span>
        <div className='p-1' onClick={handleButtonClick}>
            <button className='m-1 border-none ' data-action='start' disabled={isRunning}>Start</button>
            <button className='m-1 border-none ' data-action='stop' >stop</button>
            <button className='m-1 border-none ' data-action='pause' >{isRunning ? 'Pause' : 'Resume'}</button>
            <button className='m-1 border-none ' data-action='reset' >Reset</button>
        </div>
    </div>
  )
}

export default Stopwatch