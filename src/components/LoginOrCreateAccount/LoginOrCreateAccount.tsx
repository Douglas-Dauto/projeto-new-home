import React from 'react';
import './LoginOrCreateAccount.css';
import { root } from '../../index';
import Header from '../Header/Header';
import Carousel from '../Carousel/Carousel';
import Services from '../Services/Services';
import BestOpportunities from '../BestOpportunities/BestOpportunities';
import Footer from '../Footer/Footer';

interface Props {

}

function LoginOrCreateAccount(props: Props): React.JSX.Element {
    function carryOutLogin() {
        root.render(
            <>
                <Header isLogged={true} />
                <Carousel />
                <Services />
                <BestOpportunities />
                <Footer />
            </>
        );
    }

    return (
        <section className="login-or-create-account">
            <div>
                <h2>Entre com seu email<br /> e senha</h2>

                <form>
                    <input type="email" className="email" placeholder="Email" />
                    <input type="password" className="password" placeholder="Senha" />
                    <button className="button" onClick={carryOutLogin}>Entrar</button>
                </form>
            </div>

            <p className="not-account">Não possui uma conta? <span>Criar</span></p>
        </section>
  );
}

export default LoginOrCreateAccount;
