import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../../components/Home';

test('loads and displays Homepage', async () => {
  render(<Home />);
  const homePage = screen.getByTestId('homeTitle');
  await homePage;

  expect(homePage).toHaveTextContent('Welcome to our page!');
});
