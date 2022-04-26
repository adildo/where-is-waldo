// import './App.css';
import React, {useEffect} from 'react';


function Timer({time, setTime, foundChars}) {



  useEffect(()=> {

    const timer = () => {
        return foundChars.length > 2 ? time : setTimeout(() => {setTime(time + 1)}, 1000)
    }
    timer()
  },[time])

    
  return (
    <div id='timer'> 
        <p className='time'>{time} Seconds</p>
        <p style={{fontSize:'1em'}}>Since started playing</p>
    </div>
  );
}

export default Timer;