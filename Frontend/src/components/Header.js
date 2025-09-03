import React from 'react';

function Header({ onOpenModal }) {
  return (
    <header className="header">
      <div className="logo">Alfred</div>
      <button className="active">Command Centre</button>
      <button>Reporting & Compliance</button>
      <button onClick={onOpenModal}>Daily Site Briefing</button>
      <div className="icons">
        <span>🔔</span>
        <span>👤</span>
      </div>
    </header>
  );
}

export default Header;