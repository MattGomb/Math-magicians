import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Calculator from '../../components/Calculator';

describe('Calculator page', () => {
  beforeEach(async () => {
    render(<Calculator />);
  });

  test('should update result when 0 is clicked', () => {
    const zeroBtn = screen.getByTestId('0');
    const result = screen.getByTestId('result');
    userEvent.click(zeroBtn);
    expect(result).toHaveTextContent('0');
  });

  test('should update result when 1 + 1 is clicked', () => {
    const oneBtn = screen.getByTestId('1');
    const plusBtn = screen.getByTestId('+');
    const result = screen.getByTestId('result');
    userEvent.click(oneBtn);
    userEvent.click(plusBtn);
    userEvent.click(oneBtn);
    expect(result).toHaveTextContent('1+1');
  });

  test('return result of  1 + 1 and update result', () => {
    const oneBtn = screen.getByTestId('1');
    const plusBtn = screen.getByTestId('+');
    const equalBtn = screen.getByTestId('=');
    const result = screen.getByTestId('result');
    userEvent.click(oneBtn);
    userEvent.click(plusBtn);
    userEvent.click(oneBtn);
    userEvent.click(equalBtn);
    expect(result).toHaveTextContent('2');
  });
});