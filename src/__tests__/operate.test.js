import operate from '../logic/operate';

describe('the operation functions', () => {
  it('addition', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });
  it('subtraction', () => {
    expect(operate(1, 2, '-')).toBe('-1');
  });
  it('multiplication', () => {
    expect(operate(1, 2, '*')).toBe('2');
  });
  it('division', () => {
    expect(operate(8, 16, '÷')).toBe('0.5');
  });
  it('division by zero', () => {
    expect(operate(8, 0, '÷')).toBe("Can't divide by 0.");
  });
  it('modulus', () => {
    expect(operate(8, 16, '%')).toBe('8');
  });
});
  