import React from 'react';
import { motion } from 'framer-motion';
import './HomeSection.css';

const HomeSection = () => {
  return (
    <motion.section
      className='home-section'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
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
    </motion.section>
  );
};

export default HomeSection;
