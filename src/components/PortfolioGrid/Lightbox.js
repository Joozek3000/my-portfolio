import React from 'react';
import './Lightbox.css';

const Lightbox = ({ item, onClose }) => {
  return (
    <div className='lightbox' onClick={onClose}>
      <div className='lightbox-content' onClick={(e) => e.stopPropagation()}>
        <img src={item.image} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default Lightbox;
