import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactSection.css';

const ContactSection = () => {
  const [formValues, setFormValues] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const sendEmail = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    emailjs
      .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formValues, 'YOUR_USER_ID')
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text);
          // Reset form or show a success message
        },
        (error) => {
          console.log('Failed to send email.', error.text);
          // Show an error message
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className='contact-section'>
      <h2>Contact Me</h2>
      <p>Feel free to reach out for collaborations or just a friendly chat!</p>
      <form onSubmit={sendEmail}>
        <input
          type='text'
          name='user_name'
          placeholder='Your Name'
          value={formValues.user_name}
          onChange={handleChange}
          required
        />
        <input
          type='email'
          name='user_email'
          placeholder='Your Email'
          value={formValues.user_email}
          onChange={handleChange}
          required
        />
        <textarea
          name='message'
          placeholder='Your Message'
          value={formValues.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type='submit'>Send Message</button>
      </form>
      <p>Email: johndoe@example.com</p>{' '}
      {/* Consider removing if form replaces direct contact */}
      <p>Phone: +1234567890</p>{' '}
      {/* Consider removing if form replaces direct contact */}
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
