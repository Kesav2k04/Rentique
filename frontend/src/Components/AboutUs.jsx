import React, { useState } from 'react';
import '../styles/AboutUs.css';


const AboutUs = () => {
const [showMore, setShowMore] = useState(false);

const handleShowMore = () => {
    setShowMore(!showMore);
};

return (
    <div>

    <section className="about-us">
        <div className="about">
        <div className="image-container">
            <img
            src="https://kuroindia.in/cdn/shop/files/2_311ecea8-0dcb-41e7-a3f6-bf1a130fa73f_540x.png?v=1707131906" 
            alt="About us"
            className="pic"
            />
        </div>
        <div className="text">
            <h1>ABOUT US</h1>
            <h5>RENTIQUE FASHION RENTAL CLOTHING</h5>
            <p>
            At Rentique, we believe that every special occasion deserves a unique and unforgettable look. Whether it's a wedding, gala, prom, or any other milestone event, our curated collection of high-quality rental clothing allows you to express your personal style without the commitment of a purchase. We offer a diverse range of elegant dresses, sophisticated suits, and stylish accessories, ensuring you find the perfect outfit for your big day. Our mission is to make luxury fashion accessible and sustainable, providing a seamless rental experience that lets you shine. Embrace the freedom to explore new styles and make your special occasions even more memorable with Rentique.
            </p>
        </div>
        </div>
        <div className="more-info">
        <div className="mission-section">
            <h3>OUR MISSION</h3>
            <p>
            Our mission at Rentique is to make high-quality fashion accessible to everyone by offering a wide range of stylish, elegant, and sustainable rental clothing options. We strive to provide an exceptional rental experience that allows you to express your personal style with confidence while supporting a more sustainable fashion industry.
            </p>
        </div>
        
        </div>
    </section>
    
    </div>
);
};

export default AboutUs;