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

  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  const handleLinkClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 100;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      debounce(() => {
        setShowNavbar(false);
      }, 300)();
    }
  };

  return (
    <div className={`nav-bar ${showNavbar ? 'visible' : 'hidden'}`}>
      <div className='nav-bar-header'>
        libre de emisiones
      </div>
      <div>
        <div className='nav-bar-logo'>
          <img src={logoWarme} alt='warme' />
        </div>
        <a className="nav-bar-mob" href='#warme' onClick={(e) => handleLinkClick(e, 'warme')}>Acerca</a>
        <a className="nav-bar-mob" href='#desc' onClick={(e) => handleLinkClick(e, 'desc')}>Producto</a>
        <a className="nav-bar-mob" href='#calc' onClick={(e) => handleLinkClick(e, 'calc')}>Calculador</a>
        <a className="nav-bar-mob" href='#contact' onClick={(e) => handleLinkClick(e, 'contact')}>Contacto</a>
      </div>
    </div>
  );
};

export default NavBar;