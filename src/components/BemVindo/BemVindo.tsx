import React from 'react';
import './BemVindo.css';

interface Props {

}

function BemVindo(props: Props): React.JSX.Element {
    return (
        <section className="bem-vindo">
            <h2>Bem-vindo � ag�ncia<br /> batatinha</h2>
        </section>
  );
}

export default BemVindo;
