import React from 'react';

const Navbar = ({ activeSection, setActiveSection }) => (
  <nav>
    <ul>
      <li className={activeSection === 'WEB' ? 'active' : ''}>
        <a href="#web" onClick={() => setActiveSection('WEB')}>WEB</a>
      </li>
      <li className={activeSection === 'DESIGN' ? 'active' : ''}>
        <a href="#design" onClick={() => setActiveSection('DESIGN')}>DESIGN</a>
      </li>
      <li className={activeSection === 'GAME' ? 'active' : ''}>
        <a href="#game" onClick={() => setActiveSection('GAME')}>GAME</a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
