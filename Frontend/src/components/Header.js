import React from 'react';

function Header({ onOpenModal }) {
  return (
    <header className="header">
      <div className="logo">Alfred</div>
      <button className="active">Command Centre</button>
      <button>Reporting & Compliance</button>
      <button onClick={onOpenModal}>Daily Site Briefing</button>
      <button style={{ background: 'none', border: 'none', cursor: 'pointer', color:"#ffffff",fontSize:"24px" }}> &#x2190;</button>
      <div className="icons">
        <span>🔔</span>
        <span>👤</span>
      </div>
    </header>
  );
}

export default Header;