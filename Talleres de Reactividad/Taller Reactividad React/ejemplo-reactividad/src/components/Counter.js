import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (count >= 10) {
      setIncrement(3);
    } else if (count >= 5) {
      setIncrement(2);
    }
    
    if (count >= 100) {
      setIsDisabled(true);
    }
  }, [count]);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + increment);
  };

  return (
    <div className="counter">
      <button 
        onClick={handleIncrement}
        disabled={isDisabled}
        style={{
          padding: '10px 20px',
          backgroundColor: isDisabled ? '#ccc' : '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: isDisabled ? 'not-allowed' : 'pointer'
        }}
      >
        Incrementar
      </button>
      <span style={{ marginLeft: '10px', fontSize: '20px' }}>{count}</span>
      <p>Incremento actual: {increment}</p>
    </div>
  );
};

export default Counter;