import React from "react";

function Navbar() {
  return (
    <header className="navbar-container">
      <h1 className="navbar-title">Math Magicians</h1>
      <div className="navbar">
        <div className="nav-item">Home</div>
        <div className="nav-item">Calculator</div>
        <div className="nav-item">Quote</div>
      </div>
    </header>
  );
}

export default Navbar;