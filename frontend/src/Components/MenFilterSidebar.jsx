import React from 'react';
import '../styles/MenFilterSidebar.css'; // Ensure this file exists with the appropriate styles

const MenFilterSidebar = ({ filters, onFilterChange, isOpen, onClose }) => {
  const handleCheckboxChange = (filterType, value) => {
    const newFilters = { ...filters };
    if (newFilters[filterType].includes(value)) {
      newFilters[filterType] = newFilters[filterType].filter(item => item !== value);
    } else {
      newFilters[filterType].push(value);
    }
    onFilterChange(newFilters);
  };

  return (
    <div className={`men-filter-sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>×</button>
      <h2>By Category</h2>
      {['Suit', 'Blazer', 'Kurta', 'Sherwani', 'Jacket', 'Indo Western'].map(category => (
        <label key={category}>
          <input 
            type="checkbox" 
            value={category} 
            checked={filters.category.includes(category)} 
            onChange={() => handleCheckboxChange('category', category)} 
          />
          {category}
        </label>
      ))}

      <h2>By Price</h2>
      {['1000-2000', '2000-5000', '5000-10000', '10000-15000'].map(price => (
        <label key={price}>
          <input 
            type="checkbox" 
            value={price} 
            checked={filters.price.includes(price)} 
            onChange={() => handleCheckboxChange('price', price)} 
          />
          {price}
        </label>
      ))}

      <h2>By Color</h2>
      {['black', 'blue', 'grey', 'brown', 'green'].map(color => (
        <label key={color}>
          <input 
            type="checkbox" 
            value={color} 
            checked={filters.color.includes(color)} 
            onChange={() => handleCheckboxChange('color', color)} 
          />
          <span className={`color-icon ${color}`}></span>{color}
        </label>
      ))}

      <h2>By Size</h2>
      {['32', '34', '36', '38', '40'].map(size => (
        <label key={size}>
          <input 
            type="checkbox" 
            value={size} 
            checked={filters.size.includes(size)} 
            onChange={() => handleCheckboxChange('size', size)} 
          />
          {size}
        </label>
      ))}

      <h2>By Occasion</h2>
      {['Wedding', 'Casual', 'Party'].map(occasion => (
        <label key={occasion}>
          <input 
            type="checkbox" 
            value={occasion} 
            checked={filters.occasion.includes(occasion)} 
            onChange={() => handleCheckboxChange('occasion', occasion)} 
          />
          {occasion}
        </label>
      ))}
    </div>
  );
};

export default MenFilterSidebar;
