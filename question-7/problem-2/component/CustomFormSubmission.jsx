import React, { useRef } from 'react';

const CustomFormSubmission = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;

    
    if (name && email) {
      alert(`Submitted: ${name}, ${email}`);
      
    } else {
      alert('Please fill in both fields');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input ref={nameRef} type="text" placeholder="Your name" />
        </div>
        <div>
          <label>Email:</label>
          <input ref={emailRef} type="email" placeholder="Your email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CustomFormSubmission;