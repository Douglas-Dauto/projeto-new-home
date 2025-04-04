import React, { useEffect } from 'react';
import logo from '../../assets/img/logo-uol.png';
import './Header.css';
import { root } from '../../index';
import Divisor from '../Divisor/Divisor';
import LoginOrCreateAccount from '../LoginOrCreateAccount/LoginOrCreateAccount';
import BemVindo from '../BemVindo/BemVindo';
import Carousel from '../Carousel/Carousel';
import Services from '../Services/Services';
import BestOpportunities from '../BestOpportunities/BestOpportunities';
import Footer from '../Footer/Footer';

interface Props {
    isLogged?: boolean;
    controlView?: boolean;
}

function Header(props: Props): React.JSX.Element {
    useEffect(() => {
        if (localStorage.getItem('user')) {
            login();
        }
    }, []);

    function login() {
        root.render(
            <>
                <Header isLogged={true} />
                <Carousel />
                <Services />
                <BestOpportunities />
                <Footer />
            </>
        );

        /* eslint-disable no-restricted-globals */
        scrollTo(0, 0);
    }

    function logout() {
        localStorage.removeItem('user');

        root.render(
            <>
                <Header />
                <Divisor>
                    <LoginOrCreateAccount />
                    <BemVindo />
                </Divisor>
            </>
        );

        /* eslint-disable no-restricted-globals */
        scrollTo(0, 0);
    }

    return (
        <header className={props.controlView ? "App-header-none" : "App-header"}>
        <div>
              <img src={logo} className="App-logo" alt="logo" />
              <p className="name">Ag&ecirc;ncia batatinha</p>
        </div>

        {props.isLogged ?
        <div>
            <p>Contato</p>
            <button onClick={logout}>Sair</button>
        </div> : props.isLogged}
    </header>
  );
}

export default Header;
