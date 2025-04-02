import React from 'react';
import './BestOpportunities.css';
import melhoresCasas from '../../assets/img/melhores-casas.png';

interface Props {

}

function BestOpportunities(props: Props): React.JSX.Element {
    const qtdItems: Array<number> = [];

    for (let i: number = 0; i < 8; i++) {
        qtdItems.push(i);
    }

    return (
        <section className="best-opportunities">
            <h2>Melhores Oportunidades</h2>

            <div>
                {qtdItems.map(() => {
                    return (
                        <div className="best-opportunities-item">
                            <div>
                                <img src={melhoresCasas} alt="casa" />
                                <h3>R$ 2.000.000</h3>
                                <p>132m<sup>2</sup></p>
                            </div>

                            <div>
                                <p>5 quartos</p>
                                <p>4 banheiros</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
  );
}

export default BestOpportunities;
