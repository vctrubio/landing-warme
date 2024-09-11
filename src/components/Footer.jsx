import React from 'react';
import '../css/footer.css';
import WB from '/src/assets/warme_blanco.png'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div>
                    <div className='assault-riffle'>
                        <div className='footer-links'>
                            <a href='#warme'>Acerca</a>
                            <a href='#desc'>Producto</a>
                            <a href='#calc'>Calculador</a>
                            <a href='#contact'>Contacto</a>
                        </div>
                        <div className='footer-logo'>
                            <img src={WB} alt='warme' />
                        </div>
                    </div>
                    <div className="footer-icons">
                        <div>Terminos y condiciones</div>
                        <div>Politica de privacidad</div>
                        <div className="social-icons">
                            <div>ins</div>
                            <div>fb</div>
                            <div>twitt</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;