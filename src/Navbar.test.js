// Navbar.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';
import '@testing-library/jest-dom/extend-expect';
import Navigation from './Navigation';

// Mock the Navigation component
jest.mock('./Navigation', () => ({ device }) => <div>{device} Navigation</div>);

describe('Navbar Component', () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  test('renders navbar logo', () => {
    const logo = screen.getByAltText(/Little Lemon logo/i);
    expect(logo).toBeInTheDocument();
  });

  test('renders desktop navigation by default', () => {
    expect(screen.getByText(/desktop Navigation/i)).toBeInTheDocument();
  });

  test('toggles mobile navigation on burger button click', () => {
    const burgerButton = screen.getByAltText(/Navigation Bar/i);
    expect(screen.queryByText(/mobile Navigation/i)).not.toBeInTheDocument();

    // Simulate clicking the burger button to open the navbar
    fireEvent.click(burgerButton);
    expect(screen.getByText(/mobile Navigation/i)).toBeInTheDocument();

    // Simulate clicking the burger button to close the navbar
    fireEvent.click(burgerButton);
    expect(screen.queryByText(/mobile Navigation/i)).not.toBeInTheDocument();
  });
});
