import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import '../../styles/adminstyles/AdminDashboard.css';

// Import images
import menImage from '../../Assets/menimg/men5-kurta-wb.png';  // Update the path as necessary
import womenImage from '../../Assets/womenimg/women5-saree-wb.png';  // Update the path as necessary
import groomsmenImage from '../../Assets/groomsmenimg/groomsmen1.png';  // Update the path as necessary
import bridesmaidImage from '../../Assets/bridesmaidimg/bridesmaid1.png';  // Update the path as necessary
import exclusivesImage from '../../Assets/exclusivesimg/exclusives1.png';  // Update the path as necessary

const AdminDashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <div className={`admin-dashboard ${isDarkMode ? 'dark-mode' : ''}`}>
      <nav className="navbarr">
        <div className="navbarr-brand">Admin Dashboard</div>
        <div className="navbarr-right">
          <button onClick={toggleTheme} className="theme-toggle-button">
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            {isDarkMode ? ' Light Mode' : ' Dark Mode'}
          </button>
          <Link to="/login" className="logoutt-button">Logout</Link>
        </div>
      </nav>
      <div className="sidebarr">
        <ul>
          <li><Link to="/admin/dashboard">Dashboard</Link></li>
          <li><Link to="/admin/menproducts">Men's Products</Link></li>
          <li><Link to="/admin/womenproducts">Women's Products</Link></li>
          <li><Link to="/admin/groomsmenproducts">Groomsmen's Products</Link></li>
          <li><Link to="/admin/bridesmaidproducts">Bridesmaid's Products</Link></li>
          <li><Link to="/admin/exclusivesproducts">Exclusives</Link></li>
        </ul>
      </div>
      <div className="dashboard-content">
        <h1>Welcome to Admin Dashboard</h1>
        <div className="cardss-container">
          <Link to="/admin/menproducts" className="cardd">
            <img src={menImage} alt="Men's Products" />
            <div className="cardd-content">Men's Products</div>
          </Link>
          <Link to="/admin/womenproducts" className="cardd">
            <img src={womenImage} alt="Women's Products" />
            <div className="cardd-content">Women's Products</div>
          </Link>
          <Link to="/admin/groomsmenproducts" className="cardd">
            <img src={groomsmenImage} alt="Groomsmen's Products" />
            <div className="cardd-content">Groomsmen's Products</div>
          </Link>
          <Link to="/admin/bridesmaidproducts" className="cardd">
            <img src={bridesmaidImage} alt="Bridesmaid's Products" />
            <div className="cardd-content">Bridesmaid's Products</div>
          </Link>
          <Link to="/admin/exclusivesproducts" className="cardd">
            <img src={exclusivesImage} alt="Exclusives" />
            <div className="cardd-content">Exclusives</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
