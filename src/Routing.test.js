// Routing.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Routing from './Routing';
import '@testing-library/jest-dom/extend-expect';

// Mock the pages used in Routing
jest.mock('./pages/HomePage', () => () => <div>Homepage</div>);
jest.mock('./pages/About', () => () => <div>About</div>);
jest.mock('./pages/BookingPage', () => () => <div>Reservation</div>);
jest.mock('./pages/Order', () => () => <div>Order</div>);
jest.mock('./pages/Login', () => () => <div>Login</div>);
jest.mock('./pages/Confirmation', () => () => <div>Confirmation</div>);

describe('Routing Component', () => {
  const renderWithRouter = (ui, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test page', route);

    return render(ui, { wrapper: MemoryRouter });
  };

  test('renders Homepage component for the default route', () => {
    renderWithRouter(<Routing />);
    expect(screen.getByText(/Homepage/i)).toBeInTheDocument();
  });

  test('renders About component for the /about route', () => {
    renderWithRouter(<Routing />, { route: '/about' });
    expect(screen.getByText(/About/i)).toBeInTheDocument();
  });

  test('renders Reservation component for the /reservations route', () => {
    renderWithRouter(<Routing />, { route: '/reservations' });
    expect(screen.getByText(/Reservation/i)).toBeInTheDocument();
  });

  test('renders Order component for the /order route', () => {
    renderWithRouter(<Routing />, { route: '/order' });
    expect(screen.getByText(/Order/i)).toBeInTheDocument();
  });

  test('renders Login component for the /login route', () => {
    renderWithRouter(<Routing />, { route: '/login' });
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });

  test('renders Confirmation component for the /confirmation route', () => {
    renderWithRouter(<Routing />, { route: '/confirmation' });
    expect(screen.getByText(/Confirmation/i)).toBeInTheDocument();
  });
});
