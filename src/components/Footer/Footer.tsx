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
                        <a href="https://www.facebook.com/compass.uol/about" target="_blank"><img src={vectorFacebook} alt="facebook" /></a>
                        <a href="https://www.instagram.com/compass.uol/" target="_blank"><img src={vectorInstagram} alt="instagram" /></a>
                        <a href="https://www.youtube.com/@Compassuol" target="_blank"><img src={vectorYoutube} alt="youtube" /></a>
                        <a href="https://x.com/compassuol/" target="_blank"><img src={vectorTwitter} alt="twitter" /></a>
                    </div>
                </div>

                <p>Feito com &lt;3 por Fulano de tal - Todos os Direitos Reservados</p>

                <div>
                    {/* eslint-disable no-restricted-globals */}
                    <div onClick={() => {
                        document.getElementsByTagName("html")[0]!.setAttribute('style', 'scroll-behavior: smooth;');

                        setTimeout(() => {
                            scrollTo(0, 0);
                            document.getElementsByTagName("html")[0]!.removeAttribute('style');
                        }, 100);
                    }}>
                        <img src={arrow} alt="seta para voltar ao topo" />
                    </div>
                </div>
            </div>
        </footer>
  );
}

export default Footer;
