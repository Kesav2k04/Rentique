import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>OUR COMPANY</h4>
                        <a href="/AboutUs">
                            <p>ABOUT US</p>
                        </a>
                        <a href="/TC">
                            <p>TERMS & CONDITIONS</p>
                        </a>
                        <a href="/ContactUs">
                            <p>CONTACT US</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>CUSTOMER CARE</h4>
                        <a href="/FAQ">
                            <p>FAQ</p>
                        </a>
                        <a href="/Privacy">
                            <p>PRIVACY POLICY</p>
                        </a>
                        <a href="/return">
                            <p>RETURN & REFUND</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>CONTACT US</h4>
                        <a href="#">
                            <p>rentique@gmail.com</p>
                        </a>
                        <a href="#">
                            <p>+91-6789-868-900</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>FOLLOW US ON</h4>
                        <div className="socialmedia">
                            <a href="https://twitter.com/i/flow/signup" target="_blank" rel="noopener noreferrer">
                                <p><FontAwesomeIcon icon={faTwitter} /></p>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <p><FontAwesomeIcon icon={faInstagram} /></p>
                            </a>
                            <a href="https://www.facebook.com/signup" target="_blank" rel="noopener noreferrer">
                                <p><FontAwesomeIcon icon={faFacebook} /></p>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>@{new Date().getFullYear()} Rentique Clothing. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
