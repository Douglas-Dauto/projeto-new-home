import React from 'react';
import './ErrorPage.css';
import Divisor from '../Divisor/Divisor';

interface Props {

}

function ErrorPage(props: Props): React.JSX.Element {
    return (
        <Divisor>
            <section className="error-services-alert">
                <div>
                    <p>Oops...</p>
                    <h1>P&aacute;gina<br />em constru&ccedil;&atilde;o</h1>
                    <p className="work-error">Estamos trabalhando, em breve retorne aqui</p>
                    <button onClick={() => document.location.reload()}>Voltar</button>
                </div>
            </section>

            <section className="error-services-robot">

            </section>
        </Divisor>
  );
}

export default ErrorPage;
