import React from 'react';
import vectorFacebook from '../../assets/img/icons/vector-facebook.png';
import vectorInstagram from '../../assets/img/icons/vector-instagram.png';
import vectorYoutube from '../../assets/img/icons/vector-youtube.png';
import vectorTwitter from '../../assets/img/icons/vector-twitter.png';
import arrow from '../../assets/img/icons/iconamoon_arrow-top-left-2.png';
import './Footer.css';

interface Props {

}

function Footer(props: Props): React.JSX.Element {
    return (
        <footer>
            <div>
                <div>
                    <h3>Contato</h3>
                    <p>agencia_batatinha@contato</p>
                    <p>(99) 99999-9999</p>

                    <div>
                        <img src={vectorFacebook} alt="facebook" />
                        <img src={vectorInstagram} alt="instagram" />
                        <img src={vectorYoutube} alt="youtube" />
                        <img src={vectorTwitter} alt="twitter" />
                    </div>
                </div>

                <p>Feito com &lt;3 por Fulano de tal - Todos os Direitos Reservados</p>

                <div>
                    <a href="carousel">
                        <div>
                            <img src={arrow} alt="seta para voltar ao topo" />
                        </div>
                    </a>
                </div>
            </div>
        </footer>
  );
}

export default Footer;
