import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from './Button';

describe('Button Component', () => {
  it('renders a button when no href is provided', () => {
    render(<Button onClick={() => {}} imageSrc="/test.png" alt="test" style="test-style">Click Me</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('test-style');
    expect(screen.getByText('Click Me')).toBeInTheDocument();
    expect(screen.getByAltText('test')).toHaveAttribute('src', '/test.png');
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick} imageSrc="/test.png" alt="test" style="test-style">Click</Button>);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  it('renders an anchor when href is provided', () => {
    render(<Button href="https://example.com" imageSrc="/test.png" alt="test" style="link-style">Visit</Button>);
    
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveClass('link-style');
    expect(screen.getByAltText('test')).toHaveAttribute('src', '/test.png');
  });
});
