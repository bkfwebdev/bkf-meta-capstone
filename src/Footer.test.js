// Footer.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer';
import '@testing-library/jest-dom/extend-expect';

describe('Footer Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
  });

  test('renders footer logo', () => {
    const logo = screen.getByAltText(/Little Lemon logo/i);
    expect(logo).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Menu/i)).toBeInTheDocument();
    expect(screen.getByText(/Reservations/i)).toBeInTheDocument();
    expect(screen.getByText(/Order/i)).toBeInTheDocument();
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });

  test('renders contact information', () => {
    expect(screen.getByText(/2395 Maldove Way,/i)).toBeInTheDocument();
    expect(screen.getByText(/Chicago Illinois/i)).toBeInTheDocument();
    expect(screen.getByText(/\(629\)-243-6827/i)).toBeInTheDocument();
    expect(screen.getByText(/info@littlelemon.com/i)).toBeInTheDocument();
  });

  test('renders social media links', () => {
    expect(screen.getByText(/Facebook/i)).toBeInTheDocument();
    expect(screen.getByText(/Instagram/i)).toBeInTheDocument();
    expect(screen.getByText(/Join us!/i)).toBeInTheDocument();
  });
});
