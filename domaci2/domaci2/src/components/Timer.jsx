import React, { useState, useEffect } from 'react';

 
  function Timer(props) {
    const [time, postaviTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    function uvecajTime() {
        postaviTime(time + 1);
    }
  
    function startTimer() {
        setIsRunning(true);
    }

    useEffect(() => {
      if (!props.resetValue) {
        if (isRunning && time < 90) {
          setTimeout(uvecajTime, 1000);
        }
      } else {
        postaviTime(0);
      }
    }, [props.resetValue, isRunning, time]);



    const handleButtonClick = () => {
      startTimer();
      if(props.resetValue) {
        props.akcija(false);
      }
    };

  return (
    <div className='timer'>
      <p>{time}'</p>
      {(time == 0 || time == 90)  && <button className='start-button' onClick={handleButtonClick}>Start match</button>}
    </div>
  );
}

export default Timer;