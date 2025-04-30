import React from "react"
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SkillBar from './SkillBar';

describe('SkillBar Component', () => {
  it('renders the skill label and level', () => {
    render(<SkillBar level={75}>JavaScript</SkillBar>);
    
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('75')).toBeInTheDocument();
  });

  it('applies correct width and background color to barFill', () => {
    render(<SkillBar level={75}>JavaScript</SkillBar>);

    const barFill = screen.getByText('75').previousSibling;

    expect(barFill).toHaveStyle({
      width: '75%',
      backgroundColor: 'rgb(64,191,0)',
    });
  });

  it('applies correct styles for level 0 and 100', () => {
    render(<SkillBar level={0}>None</SkillBar>);
    const barFill0 = screen.getByText('0').previousSibling;
    expect(barFill0).toHaveStyle({ backgroundColor: 'rgb(255,0,0)' });

    render(<SkillBar level={100}>Maxed</SkillBar>);
    const barFill100 = screen.getByText('100').previousSibling;
    expect(barFill100).toHaveStyle({ backgroundColor: 'rgb(0,255,0)' });
  });
});
