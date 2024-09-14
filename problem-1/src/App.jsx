import React from 'react';
import FocusableInput from './FocusableInput';
import UncontrolledInput from './UncontrolledInput';
import ChangeColorOnClick from './ChangeColorOnClick';

const App = () => {
  return (
    <div>
      <h1>React useRef Hook Examples</h1>
      <FocusableInput />
      <UncontrolledInput />
      <ChangeColorOnClick />
    </div>
  );
};

export default App;