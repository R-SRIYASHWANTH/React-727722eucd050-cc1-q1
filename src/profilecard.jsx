import React, { useState } from 'react';
import './profilecard.css'

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p className='p'>Count: {count}</p>
      <br></br>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Counter;
