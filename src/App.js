import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; // Assuming react-scroll is used in Header component
import Circle from './components/circle';
import Header from './components/Header/Header';
import HomeSection from './components/HomeSection/HomeSection';
import AboutSection from './components/AboutSection/AboutSection';
import PortfolioGrid from './components/PortfolioGrid/PortfolioGrid';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import './App.css'; // Assuming general styling and theme variables are defined here

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
  const homeSectionHeight = sectionHeight;

  const circleStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    background:
      scrollY < homeSectionHeight
        ? `linear-gradient(55deg, var(--burgundy), var(--bg-100))`
        : `linear-gradient(45deg, var(--primary-200), var(--bg-100))`,
    position: 'absolute',
    top: scrollY < homeSectionHeight ? '20%' : '70%',
    left: '27%',
    zIndex: 1000,
    // Adding transition for smooth animation on scroll
    transition: 'top 0.5s ease, background 0.5s ease',
  };

  return (
    <div className='App'>
      <Header />
      {/* Circle component now receives inline styles for dynamic positioning and styling */}
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
