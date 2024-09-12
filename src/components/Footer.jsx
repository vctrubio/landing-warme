import React from 'react';
import '../css/footer.css';
import WB from '/src/assets/warme_blanco.png';
import IG from '/src/assets/insta-white.svg';
import PH from '/src/assets/phone-white.svg';
import WH from '/src/assets/whatsapp-white.svg';

const Footer = () => {
    const handleLinkClick = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offset = 120; // Adjust this value as needed
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="footer">
            <div className="footer-content">
                <div>
                    <div className='assault-riffle'>
                        <div className='footer-links'>
                            <a href='#warme' onClick={(e) => handleLinkClick(e, 'warme')}>Acerca</a>
                            <a href='#desc' onClick={(e) => handleLinkClick(e, 'desc')}>Producto</a>
                            <a href='#calc' onClick={(e) => handleLinkClick(e, 'calc')}>Calculador</a>
                            <a href='#contact' onClick={(e) => handleLinkClick(e, 'contact')}>Contacto</a>
                        </div>
                        <div className='footer-logo'>
                            <img src={WB} alt='warme' />
                        </div>
                    </div>
                    <div className="footer-icons">
                        <div>Terminos y condiciones</div>
                        <div>Politica de privacidad</div>
                        <div className="social-icons">
                            <a href="https://wa.me/+34650326938" target="_blank" rel="noopener noreferrer">
                                <img src={WH} alt="Whatsapp" />
                            </a>
                            <a href="tel:+34650326938" target="_blank" rel="noopener noreferrer">
                                <img src={PH} alt="Phone" />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <img src={IG} alt="Instagram" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;