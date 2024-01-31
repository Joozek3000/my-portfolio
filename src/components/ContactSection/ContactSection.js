import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <div className='contact-section'>
      <h2>Contact Me</h2>
      <p>Feel free to reach out for collaborations or just a friendly chat!</p>
      <p>Email: johndoe@example.com</p>
      <p>Phone: +1234567890</p>
      <a
        href='https://www.linkedin.com/in/yourprofile'
        target='_blank'
        rel='noopener noreferrer'
      >
        LinkedIn Profile
      </a>
    </div>
  );
};

export default ContactSection;
