import React from 'react';
import './LoginOrCreateAccount.css';

interface Props {

}

function LoginOrCreateAccount(props: Props): React.JSX.Element {
    return (
        <section className="login-or-create-account">
            <div>
                <h2>Entre com seu email<br /> e senha</h2>

                <form>
                    <input type="email" className="email" placeholder="Email" />
                    <input type="password" className="password" placeholder="Senha" />
                    <button className="button">Entrar</button>
                </form>
            </div>

            <p className="not-account">Não possui uma conta? <span>Criar</span></p>
        </section>
  );
}

export default LoginOrCreateAccount;
