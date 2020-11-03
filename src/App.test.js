import { render, screen } from '@testing-library/react';
import App from './App';

test('header renders text "Amor\'s Bow"', () => {
  render(<App />);
  const linkElement = screen.getByText(/Amor's Bow/i);
  expect(linkElement).toBeInTheDocument();
});
test('able to find footer text "footer"', () => {
  render(<App />);
  const linkElement = screen.getByText(/footer/i);
  expect(linkElement).toBeInTheDocument();
});

