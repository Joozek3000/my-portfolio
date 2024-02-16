import React from 'react';
import { motion } from 'framer-motion';
import './HomeSection.css';
// Optionally import your image if you're planning to use a local file
// import yourImage from './path/to/your/image.jpg';

const HomeSection = () => {
  return (
    <motion.section
      className='home-section'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ display: 'flex', alignItems: 'center', height: '100vh' }}
    >
      {/* Left div for text */}
      <div
        style={{
          width: '50%',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <motion.div
          className='name-title'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Jakub Józefczyk
        </motion.div>
        <motion.div
          className='subtitle'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Web Developer
        </motion.div>
        <motion.div
          className='location'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Based in West Midlands, UK
        </motion.div>
      </div>

      {/* Right div for image */}
      <div
        style={{
          width: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        {/* Place your image here */}
        {/* Example: <img src={yourImage} alt="Your Image" style={{ maxWidth: '100%', height: 'auto' }} /> */}
      </div>
    </motion.section>
  );
};

export default HomeSection;
