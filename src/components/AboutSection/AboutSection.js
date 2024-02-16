import React from 'react';
import { motion } from 'framer-motion';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <motion.div
      className='about-section'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className='about-text'
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2>About Me</h2>
        <p>
          Hello! I'm John Doe, a passionate software developer with a keen
          interest in building engaging, user-centric applications. With a
          background in computer science and a love for creative
          problem-solving, I've dedicated myself to learning and growing in the
          field of web development.
        </p>
        <p>
          My journey started with learning HTML, CSS, and JavaScript, and has
          since expanded to mastering frameworks like React and backend
          technologies such as Node.js. In my free time, I love contributing to
          open source projects and exploring new technologies.
        </p>
      </motion.div>
      <motion.div
        className='about-image'
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <img
          src='https://media.discordapp.net/attachments/1067901848998133840/1196550922155855942/masterblaster6293_a_print_with_a_cityscape_on_it_in_the_style_o_90095acb-33dd-47fd-995d-b4b607e2fd08.png?ex=65b809e2&is=65a594e2&hm=394c9a3f9cb7c7e7a63d5d3115a99a977030ff6d4844e5792fe52638dd59bbe0&=&format=webp&quality=lossless&width=657&height=657'
          alt='About Me'
        />
      </motion.div>
    </motion.div>
  );
};

export default AboutSection;
