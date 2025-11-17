import React from 'react';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">TRANSIT</div>
      <div className="nav-actions">
        <button>account / login</button>
        <button>notification</button>
        <button>lost? help</button>
      </div>
    </header>
  );
}
