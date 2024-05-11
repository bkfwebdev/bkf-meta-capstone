// App.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';

// Mock the components used in App
jest.mock('./components/Navbar', () => () => <div>Mock Navbar</div>);
jest.mock('./components/Routing', () => () => <div>Mock Routing</div>);
jest.mock('./components/Footer', () => () => <div>Mock Footer</div>);

describe('App Component', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders Navbar component', () => {
    expect(screen.getByText(/Mock Navbar/i)).toBeInTheDocument();
  });

  test('renders Routing component', () => {
    expect(screen.getByText(/Mock Routing/i)).toBeInTheDocument();
  });

  test('renders Footer component', () => {
    expect(screen.getByText(/Mock Footer/i)).toBeInTheDocument();
  });
});
