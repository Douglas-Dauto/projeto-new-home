import React, { useState } from 'react';
import melhoresCasas from '../../assets/img/melhores-casas.png';
import './BestOpportunities.css';
import ModalProduct from '../ModalProduct/ModalProduct';

interface Props {

}

function BestOpportunities(props: Props): React.JSX.Element {
    const qtdItems: Array<number> = [];
    const [openModal, setOpenModal] = useState(false);

    for (let i: number = 0; i < 8; i++) {
        qtdItems.push(i);
    }

    return (
        <section className="best-opportunities">
            <h2>Melhores Oportunidades</h2>

            <div>
                {qtdItems.map(() => {
                    return (
                        <div className="best-opportunities-item" onClick={() => setOpenModal(!openModal)}>
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

            {openModal ? <ModalProduct openModal={openModal} setOpenModal={setOpenModal} /> : openModal}
        </section>
  );
}

export default BestOpportunities;
