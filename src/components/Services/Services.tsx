import React from 'react';
import './Services.css';
import serviceHomeOne from '../../assets/img/services-home.png';

interface Props {

}

function Services(props: Props): React.JSX.Element {
    return (
        <section className="services">
            <h2>Nossos Serviços</h2>

            <div>
                <div className="service-item">
                    <img src={serviceHomeOne} alt="casa" />
                    <h3>Residenciais</h3>
                    <p>123 ofertas</p>
                </div>

                <div className="service-item">
                    <img src={serviceHomeOne} alt="casa" />
                    <h3>Residenciais</h3>
                    <p>123 ofertas</p>
                </div>

                <div className="service-item">
                    <img src={serviceHomeOne} alt="casa" />
                    <h3>Residenciais</h3>
                    <p>123 ofertas</p>
                </div>
            </div>
        </section>
  );
}

export default Services;
