import React from 'react';

const Header = () => {
  return (
      <header id="header">
        <h1>
          <a href="/">KDE's PORTFOLIO</a>
        </h1>
        <nav>
          <ul>
              <li><a href="#listOfMyWork">work</a></li>
              <li><a href="#footer">about</a></li>
          </ul>
        </nav>
      </header>
  );
}

export default Header;