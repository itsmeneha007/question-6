
import React, { useState, useRef } from 'react';
import './OTPInput.css';

const OTPInput = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      
      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      } else if (value === '' && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text');
    const digits = pasteData.split('').filter(digit => /^\d$/.test(digit));
    const newOtp = [...otp];

    for (let i = 0; i < digits.length && i < otp.length; i++) {
      newOtp[i] = digits[i];
      if (i < otp.length - 1) {
        inputRefs.current[i + 1].focus();
      }
    }
    setOtp(newOtp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Entered OTP: ${otp.join('')}`);
  };

  const isSubmitDisabled = otp.some(value => value === '');

  return (
    <form onSubmit={handleSubmit} className="otp-form">
      <div className="otp-inputs" onPaste={handlePaste}>
        {otp.map((value, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={value}
            onChange={(e) => handleChange(e, index)}
            ref={el => (inputRefs.current[index] = el)}
            className="otp-input"
          />
        ))}
      </div>
      <button type="submit" disabled={isSubmitDisabled} className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default OTPInput;
