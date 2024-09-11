import React, { useState, useEffect } from 'react';
import '../css/navbar.css';
import logoWarme from '/src/assets/w_n.png';

const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY < lastScrollY) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div className={`nav-bar ${showNavbar ? 'visible' : 'hidden'}`}>
      <div className='nav-bar-header'>
        libre de emisiones
      </div>
      <div>
        <div className='nav-bar-logo'>
          <img src={logoWarme} alt='warme' />
        </div>
        <a href='#warme'>Acerca</a>
        <a href='#desc'>Producto</a>
        <a href='#calc'>Calculador</a>
        <a href='#contact'>Contacto</a>
      </div>
    </div>
  );
};

export default NavBar;
