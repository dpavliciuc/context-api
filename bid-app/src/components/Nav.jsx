import React from 'react';
import logo from '../assets/logo-bid512.png';
import hamburger from '../assets/hamburger.png';
import "../styles/Nav.css";

const Nav = ({ scrollTo, homeRef, bidRef, aboutRef }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className='nav'>
      
      <div className='items'>
         <img 
      src={hamburger} className='burger' alt="burger"
      />
        <img
          src={logo}
          alt="logo"
          className='logo'
          onClick={scrollToTop}
        />
      </div>

      <ul className='nav-links'>
        <li>
          <button onClick={scrollToTop}>HOME</button>
        </li>
        <li>
          <button onClick={() => scrollTo(bidRef)}>BID</button>
        </li>
        <li>
          <button onClick={() => scrollTo(aboutRef)}>ABOUT US</button>
        </li>
      </ul>

      <ul className='nav-links ml-auto'>
        <li>
          <button onClick={() => scrollTo(faqRef)}>FAQ</button>
        </li>
      </ul>

    </nav>
  );
};

export default Nav;