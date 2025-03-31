import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginOrCreateAccount from './LoginOrCreateAccount';

test('renders learn react link', () => {
  render(<LoginOrCreateAccount />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
