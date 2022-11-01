import React from 'react';

class Calculator extends React.Component {
  render() {
    return (
      <section className="calculator-container">
        <p className="result">0</p>
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button" className="last-col">÷</button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button" className="last-col">*</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button" className="last-col">-</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button" className="last-col">+</button>
        <button type="button" className="zero">0</button>
        <button type="button">.</button>
        <button type="button" className="last-col">=</button>
      </section>
    );
  }
}

export default Calculator;
