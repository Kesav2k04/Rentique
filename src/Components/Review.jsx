import React from 'react';
import { GiAmpleDress, GiDress } from "react-icons/gi";
import { FaStar, FaStarHalfAlt, FaRegStar, FaTshirt } from 'react-icons/fa';
import '../styles/Review.css';

const Review = () => {
  const steps = [
    { icon: <GiAmpleDress />, title: 'Ruhi', description: 'The product quality is outstanding. It exceeded my expectations.', rating: 5.0 },
    { icon: <GiDress />, title: 'Kevi', description: 'A fantastic experience with quick delivery and quality products.', rating: 4.7 },
    { icon: <FaTshirt />, title: 'Yuvi', description: 'Great value for the price. I will definitely order again.', rating: 4.1 },
    // { icon: <GiDress />, title: 'Tina', description: 'Loved the stylish collection and the service was top-notch.', rating: 4.9 },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <>
        {Array(fullStars).fill(0).map((_, index) => (
          <FaStar key={`full-${index}`} />
        ))}
        {halfStar && <FaStarHalfAlt key="half" />}
        {Array(emptyStars).fill(0).map((_, index) => (
          <FaRegStar key={`empty-${index}`} />
        ))}
      </>
    );
  };

  return (
    <div className="circle-cards-container">
      <h1>Reviews</h1>
      <ol className="circle-cards-list">
        {steps.map((step, index) => (
          <li key={index} className="circle-card">
            <div className="circle-card-icon">{step.icon}</div>
            <div className="circle-card-stars">{renderStars(step.rating)}</div>
            <div className="circle-card-title">{step.title}</div>
            <div className="circle-card-description">{step.description}</div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Review;
