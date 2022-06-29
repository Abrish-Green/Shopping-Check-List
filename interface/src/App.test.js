import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the header of the div', () => {
  render(<App />);
  const linkElement = screen.getByText(/Shopping Check List/i);
  expect(linkElement).toBeInTheDocument();
});
