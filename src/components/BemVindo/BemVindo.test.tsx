import React from 'react';
import { render, screen } from '@testing-library/react';
import BemVindo from './BemVindo';

test('renders learn react link', () => {
  render(<BemVindo />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
