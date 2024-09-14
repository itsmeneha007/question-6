import React, { useRef, useState } from 'react';

const UncontrolledInput = () => {
  const inputRef = useRef(null);
  const [displayValue, setDisplayValue] = useState('');

  const handleChange = () => {
    setDisplayValue(inputRef.current.value);
  };

  return (
    <div>
      <input ref={inputRef} type="text" onChange={handleChange} />
      <p>Current value: {displayValue}</p>
    </div>
  );
};

export default UncontrolledInput;