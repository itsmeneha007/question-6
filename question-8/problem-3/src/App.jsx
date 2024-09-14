import React from 'react';
import Button from './components/Button';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div>
      <h1>React Application</h1>
      <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
      <ParentComponent />
    </div>
  );
}

export default App;