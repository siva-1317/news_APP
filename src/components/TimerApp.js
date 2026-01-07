import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react'



function TimerApp() {
    const [sec, setSec] = useState(0);

    const[running, setRunning] = useState(false);

    useEffect( () => {
        let timer;
        if(running){
            timer = setInterval( () => {
                setSec(prev => prev+1)
            },1000);
        } return () => clearInterval(timer);
    } ,[running] );







  return (
    <div className='App-header'>
      <h1>Timer App</h1>
      <p>{sec} sec</p>
      <button onClick={()=> setRunning(true)}>start</button>
      <button onClick={()=> setRunning(false)}>stop</button>
      <button onClick={()=> setSec(0)}>reset</button>
    </div>
  )
}

export default TimerApp