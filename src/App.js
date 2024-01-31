import React, { useState, useEffect } from 'react';
import Circle from './components/circle';
import Header from './components/Header/Header';
import HomeSection from './components/HomeSection/HomeSection';
import PortfolioGrid from './components/PortfolioGrid/PortfolioGrid';
import AboutSection from './components/AboutSection/AboutSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import './App.css'; // Assuming you have a general App.css for overall styling

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sectionHeight = window.innerHeight;
  const homeSectionHeight = sectionHeight; // Height of the Home section
  // const aboutSectionHeight = sectionHeight * 2; // Height of the Home + About sections

  // Logic to determine the style of the Circle based on the scrollY value
  const circleStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    background:
      scrollY < homeSectionHeight
        ? `linear-gradient(55deg, var(--burgundy), var(--bg-100))`
        : `linear-gradient(45deg, var(--primary-200), var(--bg-100))`,
    position: 'absolute',
    top: scrollY < homeSectionHeight ? '50%' : '50%', // Example of dynamic positioning
    left: '27%',
    zIndex: 1000,
  };

  return (
    <div className='App'>
      <Header />
      <Circle style={circleStyle} />
      <HomeSection />
      <AboutSection />
      <PortfolioGrid />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
