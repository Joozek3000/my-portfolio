import React, { useState } from 'react';
import './PortfolioGrid.css';
import Lightbox from './Lightbox'; // Ensure this path is correct

const PortfolioGrid = () => {
  // Placeholder data for portfolio items
  const portfolioItems = [
    {
      id: 1,
      image: 'path/to/project1.jpg', // Replace with actual image path
      title: 'E-commerce Website',
      description:
        'A modern e-commerce platform with a clean interface and interactive user experience.',
    },
    {
      id: 2,
      image: 'path/to/project2.jpg', // Replace with actual image path
      title: 'Mobile App Design',
      description:
        'A sleek and user-friendly mobile app design for on-the-go task management.',
    },
    {
      id: 3,
      image: 'path/to/project3.jpg', // Replace with actual image path
      title: 'Interactive Data Dashboard',
      description: 'Data visualization dashboard providing insightful.',
    },
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  const openLightbox = (item) => {
    setSelectedItem(item);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
  };

  return (
    <div className='portfolio-grid'>
      {portfolioItems.map((item) => (
        <div
          key={item.id}
          className='portfolio-item'
          onClick={() => openLightbox(item)}
        >
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
      {selectedItem && <Lightbox item={selectedItem} onClose={closeLightbox} />}
    </div>
  );
};

export default PortfolioGrid;
