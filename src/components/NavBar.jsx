import React, { useState, useEffect } from 'react';
import '../css/navbar.css';

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
      <a href='#warme'>Home</a>
      <a href='#desc'>Description</a>
      <a href='#calc'>Calculator</a>
      <a href='#contact'>Contact</a>
    </div>
  );
};

export default NavBar;
