import React from 'react';
import './LoginOrCreateAccount.css';

interface Props {

}

function LoginOrCreateAccount(props: Props): React.JSX.Element {
    return (
        <section>
            <h2>Entre com seu email e senha</h2>

            <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Senha" />
                <input type="submit" placeholder="Entrar" />
            </form>

            <p>Não possui uma conta? <span>Criar</span></p>
        </section>
  );
}

export default LoginOrCreateAccount;
