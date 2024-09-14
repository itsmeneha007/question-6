import React, { useState } from 'react';
import Button from './Button';

const ParentComponent = () => {
  const [message, setMessage] = useState('Initial');

  const handleClick = () => {
    setMessage('Button Clicked');
  };

  return (
    <div>
      <Button onClick={handleClick}>Click Me</Button>
      <p>{message}</p>
    </div>
  );
};

export default ParentComponent;