import React from 'react';
import close from '../../assets/img/icons/vector-close.png';
import './ModalProduct.css';

interface Props {
    openModal: boolean;
    setOpenModal: Function;
    valueBestOpportunitie: { image: string, price: string, size: number, bedrooms: number, bathrooms: number };
}

function ModalProduct(props: Props): React.JSX.Element {

    return (
        <section className="modal-product">
            <div>
                <img src={close} alt="fechar modal" onClick={() => props.setOpenModal(!props.openModal)} />
                <img src={require(`../../assets/img/${props.valueBestOpportunitie.image}`)} alt="casa selecionada" />

                <div className="modal-product-info">
                    <p>{props.valueBestOpportunitie.price}</p>

                    <div>
                        <div>
                            <p>{props.valueBestOpportunitie.bedrooms} quartos</p>
                            <p>{props.valueBestOpportunitie.bathrooms} banheiros</p>
                            <p>{props.valueBestOpportunitie.size}m<sup>2</sup></p>
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
