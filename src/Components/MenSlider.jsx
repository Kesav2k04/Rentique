import React, { useEffect, useState } from 'react';
import '../styles/MenSlider.css';
import slide1 from '../Assets/menimg/men-slide1.avif';
import slide2 from '../Assets/menimg/men-slide2.png';
import slide3 from '../Assets/menimg/men-slide3.webp';

const slides = [
  { id: 1, image: slide1 },
  { id: 2, image: slide2 },
  { id: 3, image: slide3 },
];

const MenSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [deg, setDeg] = useState(0);
  const [zoom, setZoom] = useState(false);

  const nextSlide = () => {
    setZoom(true);
    setDeg(deg - 120);
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [deg]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setZoom(false);
    }, 1900);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <div className="men-slider" style={{ perspective: '1000px' }}>
      <div className="men-wrapper" style={{ transform: `rotateY(${deg}deg)` }}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`men-item ${activeIndex === index ? 'active' : ''}`}
          >
            <img src={slide.image} alt={`Slide ${slide.id}`} className="men-item__image" />
            <div className="men-item__info">
              
              {/* Add more content if needed */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenSlider;
