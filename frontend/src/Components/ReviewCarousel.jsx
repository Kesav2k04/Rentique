// src/components/ReviewCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import '../styles/ReviewCarousel.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
        avatar: "https://img.freepik.com/free-photo/woman-with-long-hair-yellow-hoodie-with-word-music-it_1340-39068.jpg",
        name: "Simonette Lindermann",
        review: "Mind-blowing discovery! changed my routine. Essential for everyone. A vise advice to all interested. Can't imagine without it!"
    },
    {
        avatar: "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg",
        name: "Merilee Beal",
        review: "Unbelievable gem! Altered my life. A must-have now. Wholeheartedly advise it to everyone. An absolute game-changer"
    },
    // Add more testimonials here
];

const ReviewCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="review-carousel">
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index}>
                        <div className="ImgHolder">
                            <img src={testimonial.avatar} alt={testimonial.name} />
                        </div>
                        <div className="ContentHolder">
                            <h3>{testimonial.name}</h3>
                            <p>{testimonial.review}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ReviewCarousel;
