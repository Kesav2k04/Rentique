import React, { useState } from "react";

import "../styles/FAQ.css";

const Faq = () => {
const [activeIndex, setActiveIndex] = useState(null);

const faqs = [
    {
    question: "What is RENTIQUE?",
    answer: "RENTIQUE is a our house brand.We offer an exclusive collection of clothes and accessories for rent and sale.",
    },
    {
    question: "How do I place an order?",
    answer: "To place an order, sign in to your account on our website or mobile app, browse the products, add them to your cart, and proceed to checkout.",
    },
    {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including credit cards, debit cards, and other online payment options.",
    },
    {
    question: "What is your return policy?",
    answer: "You can return rented products as per the agreed rental period. For purchased products, we have a return policy as outlined in our terms and conditions.",
    },
    {
    question: "How do I contact customer support?",
    answer: "You can contact our customer support team via email at support@rentique.com or call us at our helpline number provided on the website.",
    },
    {
    question: "i am a happy customer.How do I appreciate you?",
    answer: "You are welcome to give your experience on the website and also send via mail.",
    },
    {
        question: "Is there any documentation required for renting?",
        answer: "Yes. While renting our luxury products, our delivery person may request you to provide an ID proof.",
    }

];

const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
};

return (
    <div>
    
    <div className="faq-page-container">
        <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
            <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleClick(index)}
            >
            <div className="faq-question-container">
                <div className="faq-question">{faq.question}</div>
                <div className="faq-icon">
                {activeIndex === index ? "−" : "+"}
                </div>
            </div>
            <div className="faq-answer-container">
                {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
            </div>
        ))}
        </div>
    </div>
    
    </div>
);
};

export default Faq;