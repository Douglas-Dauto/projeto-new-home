import React from 'react';
import './Carousel.css';
import imgCarousel from '../../assets/img/casa-carrousel.jpg';

interface Props {

}

function Carousel(props: Props): React.JSX.Element {
    return (
        <section className="carousel">
            <div>
                <h2>Encontre as melhores casas, <br />pontos comerciais e hoteis</h2>
                <img src={imgCarousel} alt="casa" />
            </div>
        </section>
  );
}

export default Carousel;
