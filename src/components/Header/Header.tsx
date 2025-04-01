import React from 'react';
import logo from '../../assets/img/logo-uol.png';
import './Header.css';

interface Props {
    isLogged?: boolean;
}

function Header(props: Props): React.JSX.Element {
  return (
    <header className="App-header">
        <div>
              <img src={logo} className="App-logo" alt="logo" />
              <p className="name">Agência batatinha</p>
        </div>

        {props.isLogged ?
        <div>
            <p>Contato</p>
            <button>Sair</button>
        </div> : props.isLogged}
    </header>
  );
}

export default Header;
