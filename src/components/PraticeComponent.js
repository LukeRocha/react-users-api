import React, { useState, useEffect } from 'react';

const PraticeComponent = () => {
  const [isState, setIsState] = useState(false);
  const [count, setCount] = useState(100);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setCount(count + 1);
  }, [isState]);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval); //cleanup ?
  }, []);

  return (
    <>
      <h2>{isState && 'Olá!'}</h2>
      <h3>{count}</h3>
      <button onClick={() => setIsState(!isState)}>Update state</button>
      <div>
        <p>Updated time: {time.toLocaleDateString()}</p>
      </div>
    </>
  );
};

export default PraticeComponent;
