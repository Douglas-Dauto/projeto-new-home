import React from 'react';
import { render, screen } from '@testing-library/react';
import BestOpportunities from './BestOpportunities';

test('renders learn react link', () => {
  render(<BestOpportunities />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
