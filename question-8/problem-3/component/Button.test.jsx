import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button';



describe('Button Component', () => {
  test('renders with correct text and calls onClick', () => {
    const handleClick = jest.fn(); 

    render(<Button onClick={handleClick}>Click Me</Button>);
    
    expect(screen.getByText('Click Me')).toBeInTheDocument();
    

    fireEvent.click(screen.getByText('Click Me'));
    
    
    expect(handleClick).toHaveBeenCalled();
  });
});