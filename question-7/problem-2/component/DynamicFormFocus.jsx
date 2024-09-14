import React, { useRef } from 'react';

const DynamicFormFocus = () => {
  const inputRefs = useRef([]);

  const handleFocus = (index) => {
    inputRefs.current[index].focus();
  };

  return (
    <div>
      <form>
        {[...Array(3)].map((_, index) => (
          <div key={index}>
            <input
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              placeholder={`Input ${index + 1}`}
            />
            <button type="button" onClick={() => handleFocus(index)}>
              Focus Input {index + 1}
            </button>
          </div>
        ))}
      </form>
    </div>
  );
};

export default DynamicFormFocus;