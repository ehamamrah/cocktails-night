import React from 'react';
import logo from '../../images/logo.svg';

function Header() {
  return (
    <div className="navbar navbar-dark bg-dark shadow-sm">
      <div className="container d-flex justify-content-between">
        <a href="#" className="navbar-brand d-flex align-items-center">
          <img src={logo} className="App-logo logo" alt="Cheerz!" title="Cheerz!" />
          <strong className='site-title'>The Cocktails Night</strong>
        </a>
      </div>
    </div>
  );
}

export default Header;
