import { useState } from "react";

const StopWatch = () => {
  const [timer, setTimer] = useState(0);
  var timerId;
  const startTimer = ({ pause }) => {
    if (pause) {
      clearInterval(timerId);
    }
    timerId = setInterval(() => {
      setTimer((prevState) => prevState + 1);
    }, 1000);
  };
  const resetTimer = () => {
    setTimer(0);
  };
  const pauseTimer = () => {
    startTimer({ pause: true });
  };
  return (
    <div>
      <p>{timer}</p>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={pauseTimer}>Pause Timer</button>
      <button onClick={resetTimer}>Reset Timer</button>
    </div>
  );
};

export default StopWatch;
