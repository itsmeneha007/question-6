import React, { useRef } from 'react';

const ChangeColorOnClick = () => {
  const divRef = useRef(null);

  const handleClick = () => {
    divRef.current.style.backgroundColor = 'lightblue';
  };

  return (
    <div>
      <div
        ref={divRef}
        style={{ width: '100px', height: '100px', backgroundColor: 'lightgrey' }}
        onClick={handleClick}
      >
        Click me to change color
      </div>
    </div>
  );
};

export default ChangeColorOnClick;