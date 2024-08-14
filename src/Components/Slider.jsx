import React, { useEffect, useState } from 'react';
import '../styles/Slider.css';
import slide1 from '../Assets/new2.webp';
import slide2 from '../Assets/new1.webp';
import slide3 from '../Assets/new.jpg';

const slides = [
  { id: 1, image: slide1,  },
  { id: 2, image: slide2,},
  { id: 3, image: slide3, },
];

const Slider = () => {
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
    <div className="slider" style={{ perspective: '1000px' }}>
      <div className="wrapper" style={{ transform: `rotateY(${deg}deg)` }}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`item ${activeIndex === index ? 'active' : ''}`}
          >
            <img src={slide.image} alt={slide.name} className="item__image" />
            <div className="item__info">
              <p className="item__name"><span>{slide.name}</span></p>
              {/* Add more content if needed */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;





// import React, { useEffect, useState } from 'react';
// import '../styles/Slider.css';
// import slide1 from '../Assets/slide1.jpg';
// import slide2 from '../Assets/slide11.jpg';
// import slide3 from '../Assets/slide8.jpg';

// const slides = [
//   { id: 1, image: slide1, name: 'Vogue' },
//   { id: 2, image: slide2, name: 'Zara' },
//   { id: 3, image: slide3, name: 'Life' },
// ];

// const Slider = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [deg, setDeg] = useState(0);
//   const [zoom, setZoom] = useState(false);

//   const nextSlide = () => {
//     setZoom(true);
//     setDeg(deg - 120);
//     setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3000);
//     return () => clearInterval(interval);
//   }, [deg]);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setZoom(false);
//     }, 1900);
//     return () => clearTimeout(timer);
//   }, [activeIndex]);

//   return (
//     <div className="slider" style={{ perspective: '1000px' }}>
//       <div className="wrapper" style={{ transform: `rotateY(${deg}deg)` }}>
//         {slides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`item ${activeIndex === index ? 'active' : ''}`}
//             style={{ backgroundImage: `url(${slide.image})` }}
//           >
//             <div className="item__info">
//               <p className="item__name"><span>{slide.name}</span></p>
//               {/* Add more content if needed */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;
