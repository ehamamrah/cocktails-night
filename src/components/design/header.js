import React from 'react';
import logo from '../../images/logo.svg';
import '../../styles/App.css';

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Cheerz!" title="Cheerz!" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default Header;
