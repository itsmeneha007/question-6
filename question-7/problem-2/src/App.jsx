import React from 'react';
import DynamicFormFocus from './DynamicFormFocus';
import RealTimeValidationForm from './RealTimeValidationForm';
import CustomFormSubmission from './CustomFormSubmission';

const App = () => {
  return (
    <div>
      <h1>React useRef Hook for Form Handling</h1>
      <h2>Dynamic Form Input Focus</h2>
      <DynamicFormFocus />
      <h2>Real-time Input Validation</h2>
      <RealTimeValidationForm />
      <h2>Custom Form Submission Handling</h2>
      <CustomFormSubmission />
    </div>
  );
};

export default App;