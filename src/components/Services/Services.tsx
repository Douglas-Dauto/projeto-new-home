import React from 'react';
import { root } from '../../index';
import './Services.css';
import serviceHomeOne from '../../assets/img/services-home.png';
import serviceBuilder from '../../assets/img/services-builder.png';
import serviceHotel from '../../assets/img/services-hotel.png';
import Header from '../Header/Header';
import ErrorPage from '../ErrorPage/ErrorPage';

interface Props {

}

function Services(props: Props): React.JSX.Element {
    function showErrorPage() {
        root.render(
            <>
                <Header />
                <ErrorPage />
            </>
        );
    }

    return (
        <section className="services">
            <h2>Nossos Servi&ccedil;os</h2>

            <div>
                <div className="service-item">
                    <img src={serviceHomeOne} alt="casa" />
                    <h3>Residenciais</h3>
                    <p>123 ofertas</p>
                </div>

                <div className="service-item" onClick={showErrorPage}>
                    <img src={serviceBuilder} alt="casa" />
                    <h3>Comerciais</h3>
                    <p>93 ofertas</p>
                </div>

                <div className="service-item" onClick={showErrorPage}>
                    <img src={serviceHotel} alt="casa" />
                    <h3>Hoteis</h3>
                    <p>23 ofertas</p>
                </div>
            </div>
        </section>
  );
}

export default Services;
