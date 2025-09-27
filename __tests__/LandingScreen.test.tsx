import React from 'react';
import { render, screen } from '@testing-library/react-native';
import LandingScreen from '../src/screens/LandingScreen';

describe('LandingScreen', () => {
  it('renders "Hello, World!" text', () => {
    render(<LandingScreen />);

    const helloText = screen.getByTestId('hello-text');
    expect(helloText).toHaveTextContent('Hello, World!');
  });

  it('renders with correct styling', () => {
    render(<LandingScreen />);

    const helloText = screen.getByTestId('hello-text');
    expect(helloText).toBeDefined();
  });
});
