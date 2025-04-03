import React, { useState } from 'react';
import './BestOpportunities.css';
import ModalProduct from '../ModalProduct/ModalProduct';
import bestOpportunitiesJson from '../../data/data.json';

interface Props {
    
}

function BestOpportunities(props: Props): React.JSX.Element {
    const [openModal, setOpenModal] = useState(false);
    const [valueBestOpportunitie, setValueBestOpportunitie] = useState(bestOpportunitiesJson[0]);

    return (
        <section className="best-opportunities">
            <h2>Melhores Oportunidades</h2>

            <div>
                {bestOpportunitiesJson.map((value, index) => {
                    return (
                        <div className="best-opportunities-item" onClick={() => {
                            setValueBestOpportunitie(value);
                            setOpenModal(!openModal);
                        }
                        } key={index}>
                            <div>
                                <img src={require(`../../assets/img/${value.image}`)} alt="casa" />
                                <h3>{value.price}</h3>
                                <p>{value.size}m<sup>2</sup></p>
                            </div>

                            <div>
                                <p>{value.bedrooms} quartos</p>
                                <p>{value.bathrooms} banheiros</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            {openModal ? <ModalProduct openModal={openModal} setOpenModal={setOpenModal} valueBestOpportunitie={valueBestOpportunitie} /> : openModal}
        </section>
  );
}

export default BestOpportunities;
