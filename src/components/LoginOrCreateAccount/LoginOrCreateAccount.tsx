import React, { useEffect, useRef, useState } from 'react';
import './LoginOrCreateAccount.css';
import { root } from '../../index';
import Header from '../Header/Header';
import Carousel from '../Carousel/Carousel';
import Services from '../Services/Services';
import BestOpportunities from '../BestOpportunities/BestOpportunities';
import Footer from '../Footer/Footer';
import Divisor from '../Divisor/Divisor';
import BemVindo from '../BemVindo/BemVindo';

interface Props {

}

function LoginOrCreateAccount(props: Props): React.JSX.Element {
    const [isCreateAccount, setIsCreateAccount] = useState(false);

    useEffect(() => {
        loadElements();
    });

    function loadElements(controlCleanElements: boolean = true) {
        const alertContainer = document.getElementById("alert")!;
        const emailInput = document.getElementById("email")! as HTMLInputElement;
        const passwordInput = document.getElementById("password")! as HTMLInputElement;
        const passwordInputConfirm = document.getElementById("password-confirm")! as HTMLInputElement;

        if (controlCleanElements) {
            if (emailInput) {
                emailInput.value = '';
            }

            if (passwordInput) {
                passwordInput.value = '';
            }

            if (passwordInputConfirm) {
                passwordInputConfirm.value = '';
            }

            alertContainer.innerHTML = '';
        }

        return {
            alertContainer,
            emailInput,
            passwordInput,
            passwordInputConfirm
        }
    }

    function carryOutLogin() {
        const { alertContainer, emailInput, passwordInput, passwordInputConfirm } = loadElements(false);
        const problems: Array<string> = [];
        
        alertContainer.innerHTML = '';

        if (emailInput.value === '' || passwordInput.value === '' || isCreateAccount && passwordInputConfirm.value === '') {
            problems.push('<p>Todos os campos são obrigatórios</p><br>');
        }

        if (passwordInput.value.length < 8 || isCreateAccount && passwordInputConfirm.value.length < 8) {
            problems.push('<p>Sua senha deve ter no mínimo 8 caracteres</p><br>');
        }

        if (isCreateAccount && passwordInput.value !== passwordInputConfirm.value) {
            problems.push('<p>As senhas devem ser iguais</p><br>');
        }

        if (problems.length > 0) {
            for (let i: number = 0; i < problems.length; i++) {
                alertContainer.innerHTML += problems[i];
            }

            return;
        }

        isCreateAccount ? verifyDataToCreateAccount(isCreateAccount, setIsCreateAccount) : verifyDataToLogin();
    }

    function verifyDataToLogin() {
        const { alertContainer, emailInput, passwordInput } = loadElements(false);
        const array: Array<{ id: number, email: string, password: string }> = JSON.parse(localStorage.getItem('usersJson')!);
        const newArray = array.filter((value) => emailInput.value === value.email && passwordInput.value === value.password);

        if (newArray.length > 0) {
            alertContainer.innerHTML = '<p>Dados ok</p>';
            localStorage.setItem('user', JSON.stringify(newArray));

            setTimeout(() => {
                root.render(
                    <>
                        <Header isLogged={true} />
                        <Carousel />
                        <Services />
                        <BestOpportunities />
                        <Footer />
                    </>
                );
            }, 1500);
        } else {
            alertContainer.innerHTML = '<p>Email ou senha inválidos</p>';
        }
    }

    function verifyDataToCreateAccount(isCreateAccount: boolean, setIsCreateAccount: Function) {
        const { alertContainer, emailInput, passwordInput } = loadElements(false);
        const array: Array<{ id: number, email: string, password: string }> = JSON.parse(localStorage.getItem('usersJson')!);
        const newArray = array.filter((value) => emailInput.value === value.email);

        if (newArray.length > 0) {
            alertContainer.innerHTML = '<p>Já existe uma conta com esse email</p>';
            return;
        }

        const newUser = { id: Number(JSON.parse(localStorage.getItem('usersJson')!).length) +2, email: emailInput.value, password: passwordInput.value };
        const arrayUsers = [...JSON.parse(localStorage.getItem('usersJson')!), newUser];

        localStorage.setItem('usersJson', JSON.stringify(arrayUsers));
        alertContainer.innerHTML = '<p>Conta criada com sucesso</p>';

        setTimeout(() => {
            setIsCreateAccount(!isCreateAccount);

            root.render(
                <>
                    <Header />
                    <Divisor>
                        <LoginOrCreateAccount />
                        <BemVindo />
                    </Divisor>
                </>
            );
        }, 1500);
    }
    
    return (
        <section className="login-or-create-account">
            <div>
                {isCreateAccount ? <h2>Cadastre-se com<br /> E-mail e Senha</h2> : <h2>Entre com seu email<br /> e senha</h2>}

                <form>
                    <input type="email" className="email" id="email" placeholder="Email" />
                    <input type="password" className="password" id="password" placeholder="Senha" />
                    {isCreateAccount ? <input type="password" className="password" id="password-confirm" placeholder="Confirmar Senha" /> : isCreateAccount}
                    <div id="alert"></div>
                    <button className="button" id="button" onClick={(e) => {
                        e.preventDefault();
                        carryOutLogin();
                    }}>{isCreateAccount ? 'Registro' :'Entrar'}</button>
                </form>
            </div>

            {isCreateAccount ? <p className="not-account">Já possui uma conta? <span onClick={() => setIsCreateAccount(false)}>Conecte-se</span></p> : <p className="not-account">Não possui uma conta? <span onClick={() => setIsCreateAccount(true)}>Criar</span></p>}
        </section>
  );
}

export default LoginOrCreateAccount;
