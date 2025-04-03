import React from 'react';
import casaModal from '../../assets/img/casa-modal.png';
import close from '../../assets/img/icons/vector-close.png';
import './ModalProduct.css';

interface Props {
    openModal: boolean;
    setOpenModal: Function;
}

function ModalProduct(props: Props): React.JSX.Element {

    return (
        <section className="modal-product">
            <div>
                <img src={close} alt="fechar modal" onClick={() => props.setOpenModal(!props.openModal)} />
                <img src={casaModal} alt="casa selecionada" />

                <div className="modal-product-info">
                    <p>R$ 2.200.000</p>

                    <div>
                        <div>
                            <p>5 quartos</p>
                            <p>5 banheiros</p>
                            <p>132m<sup>2</sup></p>
                        </div>

                        <button>Comprar</button>
                    </div>
                </div>
            </div>

            <div onClick={() => props.setOpenModal(!props.openModal)}></div>
        </section>
  );
}

export default ModalProduct;
