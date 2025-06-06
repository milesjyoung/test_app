import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import '@testing-library/jest-dom';
import App from './App';

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ username: 'TestUser' }),
  })
);

test('renders username from API', async () => {
  render(<App />);
  expect(await screen.findByText(/Hello TestUser/i)).toBeInTheDocument();
});