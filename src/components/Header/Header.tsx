import React from 'react';
import logo from '../../assets/img/logo-uol.png';
import './Header.css';

function Header(): React.JSX.Element {
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="name">Ag�ncia batatinha</p>
    </header>
  );
}

export default Header;
