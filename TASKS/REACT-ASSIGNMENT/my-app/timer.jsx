import React, { useState, useEffect } from 'react';

const Timer = ({ start = 0 }) => {
  const [time, setTime] = useState(start);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      <h1>Timer: {time}s</h1>
    </div>
  );
};

export default Timer;
