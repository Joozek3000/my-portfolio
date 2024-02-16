import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; // Import Link component from react-scroll
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className='logo-container'>
        <h1>Portfolio</h1>
      </div>
      <nav className='nav-container'>
        <ul>
          <li>
            {/* Replace traditional anchor tag with Link component */}
            <Link to='home' smooth={true} duration={500} offset={-70}>
              Home
            </Link>
          </li>
          <li>
            <Link to='about' smooth={true} duration={500} offset={-70}>
              About
            </Link>
          </li>
          <li>
            <Link to='portfolio' smooth={true} duration={500} offset={-70}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to='contact' smooth={true} duration={500} offset={-70}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
