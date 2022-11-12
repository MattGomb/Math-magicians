import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar-container">
      <h1 className="navbar-title" data-testid="title">Math Magicians</h1>
      <ul className="navbar" data-testid="nav-links">
        <li className="nav-item" data-testid=""><Link to="/home">Home</Link></li>
        <li className="nav-item"><Link to="calculator">Calculator</Link></li>
        <li className="nav-item"><Link to="quotes">Quote</Link></li>
      </ul>
    </header>
  );
}

export default Navbar;
