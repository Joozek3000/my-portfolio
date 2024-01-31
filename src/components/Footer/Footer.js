import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <p>
        &copy; {new Date().getFullYear()} Your Portfolio Name. All rights
        reserved.
      </p>
      <ul>
        <li>
          <a href='https://twitter.com'>Twitter</a>
        </li>
        <li>
          <a href='https://linkedin.com'>LinkedIn</a>
        </li>
        <li>
          <a href='https://github.com'>GitHub</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
