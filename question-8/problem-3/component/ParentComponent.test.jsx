import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ParentComponent from '../components/ParentComponent';

describe('ParentComponent Integration Test', () => {
  test('updates message on button click', () => {
    render(<ParentComponent />);
    
    
    expect(screen.getByText('Initial')).toBeInTheDocument();
    
    
    fireEvent.click(screen.getByText('Click Me'));
    
    
    expect(screen.getByText('Button Clicked')).toBeInTheDocument();
  });
});