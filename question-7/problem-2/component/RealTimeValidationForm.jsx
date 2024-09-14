import React, { useRef, useState } from 'react';

const RealTimeValidationForm = () => {
  const [isValid, setIsValid] = useState(true);
  const inputRef = useRef(null);

  const handleBlur = () => {
    const value = inputRef.current.value;
    if (value.length < 5) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  return (
    <div>
      <form>
        <div>
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter at least 5 characters"
            onBlur={handleBlur}
          />
          {!isValid && <p style={{ color: 'red' }}>Input must be at least 5 characters long</p>}
        </div>
      </form>
    </div>
  );
};

export default RealTimeValidationForm;