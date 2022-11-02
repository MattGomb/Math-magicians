import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      operation: null,
      next: null,
      error: null,
    };
    this.click = this.click.bind(this);
  }

  click = (e) => {
    const result = calculate(this.state, e.target.textContent);
    this.setState(result);
  }

  render() {
    const {
      total, operation, next, error,
    } = this.state;
    return (
      <section className="calculator-container">
        <div className="result">
          { total }
          { operation }
          { next }
          { error }
        </div>
        <button type="button" onClick={this.click}>AC</button>
        <button type="button" onClick={this.click}>+/-</button>
        <button type="button" onClick={this.click}>%</button>
        <button type="button" className="last-col" onClick={this.click}>÷</button>
        <button type="button" onClick={this.click}>7</button>
        <button type="button" onClick={this.click}>8</button>
        <button type="button" onClick={this.click}>9</button>
        <button type="button" className="last-col" onClick={this.click}>*</button>
        <button type="button" onClick={this.click}>4</button>
        <button type="button" onClick={this.click}>5</button>
        <button type="button" onClick={this.click}>6</button>
        <button type="button" className="last-col" onClick={this.click}>-</button>
        <button type="button" onClick={this.click}>1</button>
        <button type="button" onClick={this.click}>2</button>
        <button type="button" onClick={this.click}>3</button>
        <button type="button" className="last-col" onClick={this.click}>+</button>
        <button type="button" className="zero" onClick={this.click}>0</button>
        <button type="button" onClick={this.click}>.</button>
        <button type="button" className="last-col" onClick={this.click}>=</button>
      </section>
    );
  }
}

export default Calculator;
