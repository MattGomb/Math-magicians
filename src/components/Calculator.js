import React, { useEffect, useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0, operation: null, next: null, error: null,
  });

  const click = (e) => {
    const result = calculate(state, e.target.textContent);
    setState(result);
  };

  useEffect(() => {
    if (state.total !== null && state.total !== undefined) {
      document.title = `your result is ${state.total}`;
    }
  }, [state.total]);

  return (
    <section className="calculator-container">
      <div className="title">Just MATH it &#10004;</div>
      <div className="calculator-app-container">
        <div className="result" data-testid="result">
          {state.total}
          {state.operation}
          {state.next}
          {state.error}
        </div>
        <button type="button" onClick={click} key="AC" data-testid="AC">AC</button>
        <button type="button" onClick={click} key="+/-" data-testid="+/-">+/-</button>
        <button type="button" onClick={click} key="%" data-testid="%">%</button>
        <button type="button" className="last-col" onClick={click} key="÷" data-testid="%">÷</button>
        <button type="button" onClick={click} key="7" data-testid="7">7</button>
        <button type="button" onClick={click} key="8" data-testid="8">8</button>
        <button type="button" onClick={click} key="9" data-testid="9">9</button>
        <button type="button" className="last-col" onClick={click} key="*" data-testid="*">*</button>
        <button type="button" onClick={click} key="4" data-testid="4">4</button>
        <button type="button" onClick={click} key="5" data-testid="5">5</button>
        <button type="button" onClick={click} key="6" data-testid="6">6</button>
        <button type="button" className="last-col" onClick={click} key="-" data-testid="-">-</button>
        <button type="button" onClick={click} key="1" data-testid="1">1</button>
        <button type="button" onClick={click} key="2" data-testid="2">2</button>
        <button type="button" onClick={click} key="3" data-testid="3">3</button>
        <button type="button" className="last-col" onClick={click} key="+" data-testid="+">+</button>
        <button type="button" className="zero" onClick={click} key="0" data-testid="0">0</button>
        <button type="button" onClick={click} key="." data-testid=".">.</button>
        <button type="button" className="last-col" onClick={click} key="=" data-testid="=">=</button>
      </div>
    </section>
  );
};

export default Calculator;
