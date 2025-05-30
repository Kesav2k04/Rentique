import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/ProductDetailMen.css';

// Mock products data
const products = [
  {
    id: 1,
    name: 'Pink Sherwani',
    price: 1500,
    description: 'A classic sherwani rendered in tussar silk is elevated with intricate embroidery reminiscent of the geometry and floral.',
    images: [
      'https://jadeblue.com/cdn/shop/products/skmm_1_1.jpg?v=1685406864',
      'https://jadeblue.com/cdn/shop/products/skmm_2_480x.jpg?v=1685406864',
      'https://jadeblue.com/cdn/shop/products/skmm_3_480x.jpg?v=1685406864',
      'https://jadeblue.com/cdn/shop/products/skmm_4_480x.jpg?v=1685406864',
    ],
  },
  {
    id: 2,
    name: 'Blue Suit',
    price: 2000,
    description: 'Elevate your formal wardrobe with our Suit in a stunning shade of blue.',
    images: [
      'https://jadeblue.com/cdn/shop/files/C5TP_2_480x.jpg?v=1717139118',
      'https://jadeblue.com/cdn/shop/files/C5TP_4_480x.jpg?v=1717139118',
      'https://jadeblue.com/cdn/shop/files/C5TP_3_480x.jpg?v=1722322571',
      'https://jadeblue.com/cdn/shop/files/C5TP_1_480x.jpg?v=1722322571',
    ],
  },

  {
    id: 3,
    name: 'Black Velvet Blazer',
    price: 1000,
    description: 'A sleek Black Velvet Blazer featuring intricate sequin detailing on the lapel, pair it with smart trousers for a sophisticated and stylish look.',
    images: [
      'https://www.rentanattire.com//uploaded_files/product/0b814cb8ef04fbccda0b4c2d131c0b3c.jpg',
      'https://www.rentanattire.com//uploaded_files/product/6b1e2455e4f49df8e9bd0757b3226be3.jpg',
      'https://www.rentanattire.com//uploaded_files/product/1f4efaa5525d1a7567e8b61efa2697f0.jpg',
      'https://www.rentanattire.com//uploaded_files/product/0b814cb8ef04fbccda0b4c2d131c0b3c.jpg'
    ],
  },

  {
    id: 4,
    name: 'Wine Party Wear Shirt',
    price: 600,
    description: 'Elevate your party wear game with our Party Wear Shirt in a sleek Wine shade.',
    images: [
      'https://jadeblue.com/cdn/shop/files/IMG_1490.S.jpg?v=1715260295',
      'https://jadeblue.com/cdn/shop/files/IMG_1488.S_480x.jpg?v=1715260295',
      'https://jadeblue.com/cdn/shop/files/JB9C_3_480x.jpg?v=1722318487',
      'https://jadeblue.com/cdn/shop/files/JB9C_1_480x.jpg?v=1722318487'
    ],
  },

  {
    id: 5,
    name: 'Floral Printed Kurta',
    price: 1000,
    description: 'Embody timeless elegance in this pearled ivory white kurta, ornately detailed with floral patterns.',
    images: [
      'https://manyavar.scene7.com/is/image/manyavar/ML12117_303-BISCUIT.10510_17-07-2023-11-51:650x900',
      'https://manyavar.scene7.com/is/image/manyavar/ML12117_303-BISCUIT.10508_17-07-2023-11-51:650x900',
      'https://manyavar.scene7.com/is/image/manyavar/ML12117_303-BISCUIT.10514_17-07-2023-11-52:650x900',
      'https://manyavar.scene7.com/is/image/manyavar/ML12117_303-BISCUIT.10496_17-07-2023-11-50:650x900'
    ],
  },

  {
    id: 6,
    name: 'Lilac Indo Western',
    price: 1800,
    description: 'Made with blended rayon fabric this outfit ensures you stay comfortable all along.',
    images: [
      'https://manyavar.scene7.com/is/image/manyavar/I03_18-08-22%20MANYAVAR02977_18-08-2022-03-10:650x900',
      'https://manyavar.scene7.com/is/image/manyavar/I07_18-08-22 MANYAVAR03026_18-08-2022-03-18:650x900',
      'https://manyavar.scene7.com/is/image/manyavar/I02_18-08-22 MANYAVAR03020_18-08-2022-03-16:650x900',
      'https://manyavar.scene7.com/is/image/manyavar/I09_18-08-22 MANYAVAR02948_18-08-2022-03-04:650x900'
    ],
  },

  {
    id: 7,
    name: 'Deep Grey Suit',
    price: 1500,
    description: 'Men\'s Terry Rayon Grey Self Textured Suit',
    images: [
      'https://jadeblue.com/cdn/shop/products/ebvk_1_2_480x.jpg?v=1685411229',
      'https://jadeblue.com/cdn/shop/products/ebvk_2_2_480x.jpg?v=1685411229',
      'https://jadeblue.com/cdn/shop/products/ebvk_3_2_480x.jpg?v=1685411229',
      'https://jadeblue.com/cdn/shop/products/ebvk_4_2_480x.jpg?v=1685411229'
    ],
  },

  {
    id: 8,
    name: 'Shadow Green Jacket',
    price: 900,
    description: 'Immerse yourself in elegance with this shadow green jacket. The intricate medallion patterns, bandhgala neckline, and antique buttons reflect a seamless blend of tradition and contemporary design.',
    images: [
      'https://manyavar.scene7.com/is/image/manyavar/JCOS002_327-L.%20GREEN.2704_18-07-2023-16-10:650x900',
      'https://manyavar.scene7.com/is/image/manyavar/JCOS002_327-L. GREEN.2688_18-07-2023-16-08:650x900',
      'https://manyavar.scene7.com/is/image/manyavar/JCOS002_327-L. GREEN.2708_18-07-2023-16-10:650x900',
      'https://manyavar.scene7.com/is/image/manyavar/JCOS002_327-L. GREEN.2707_18-07-2023-16-10:650x900'
    ],
  },
  // Add other men's products with their respective images and descriptions
];

const ProductDetailMen = ({ onAddToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((prod) => prod.id === parseInt(id, 10));

  const [currentImage, setCurrentImage] = useState(product?.images[0]);
  const [selectedSize, setSelectedSize] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [rentalDays, setRentalDays] = useState(4);
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');

  useEffect(() => {
    if (startDate && rentalDays) {
      const start = new Date(startDate);
      const end = new Date(start);
      end.setDate(start.getDate() + rentalDays);
      setEndDate(end.toISOString().split('T')[0]);
    }
  }, [startDate, rentalDays]);
  

  const handleThumbnailClick = (image) => {
    setCurrentImage(image);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleRentalDaysChange = (e) => {
    setRentalDays(Number(e.target.value));
  };

  const handleSizeChartToggle = () => {
    setIsSizeChartOpen(!isSizeChartOpen);
  };

  const handleRentNow = () => {
    let message = '';
  if (!selectedSize && !startDate) {
    message = 'Please select a size and start date.';
  } else if (!selectedSize) {
    message = 'Please select a size.';
  } else if (!startDate) {
    message = 'Please select a start date.';
  }

  if (message) {
    setValidationMessage(message);
    return;
  }
    if (product) {
      const rentalCost = product.price * rentalDays;
      const securityDeposit = product.price * 4 * 0.5; // 50% of 4 days rental cost
      const totalCost = rentalCost + securityDeposit;

      const item = {
        name: product.name,
        image: currentImage,
        price: product.price,
        days: rentalDays,
        size: selectedSize,
        startDate,
        endDate,
        totalCost,
        securityDeposit
      };

      onAddToCart(item);
      navigate('/cart'); // Navigate to the cart page
    }
  };

  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-page">
      <div className="product-gallery">
        <img src={currentImage} alt={product.name} className="main-image" />
        <div className="thumbnail-images">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleThumbnailClick(image)}
              className={`thumbnail ${image === currentImage ? 'selected-thumbnail' : ''}`}
            />
          ))}
        </div>
      </div>
      <div className="product-details">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p className="price">Price: ₹{product.price} / day</p>
        <p className="security-deposit">Security Deposit: ₹{(product.price * 4) * 0.5}</p>
        <p className="total-cost">Total Cost: ₹{product.price * rentalDays + (product.price * 4) * 0.5}</p>
        <div className="size-selection">
          <h4>Select Size</h4>
          <div className="sizes">
            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
              <button
                key={size}
                className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <div className="check-size">
            <button onClick={handleSizeChartToggle}>Check Size</button>
          </div>
        </div>
        <div className="rental-details">
          <div className="rental-dates">
            <label htmlFor="start-date">Start Date:</label>
            <input
              type="date"
              id="start-date"
              value={startDate}
              onChange={handleStartDateChange}
            />
            <label htmlFor="end-date">End Date:</label>
            <input
              type="date"
              id="end-date"
              value={endDate}
              readOnly
            />
          </div>
          <div className="rental-duration">
            <label htmlFor="rental-days">Rental Duration:</label>
            <select id="rental-days" value={rentalDays} onChange={handleRentalDaysChange}>
              <option value={4}>4 days</option>
              <option value={8}>8 days</option>
              <option value={16}>16 days</option>
            </select>
          </div>
        </div>
        {validationMessage && <p className="validation-message">{validationMessage}</p>}
        <button className="rent-now" onClick={handleRentNow}>Rent Now</button>
        <p>Note: You can order this product up to 100 days in advance only.</p>
      </div>

      {isSizeChartOpen && (
        <div className="size-chart-modal">
          <div className="size-chart-content">
            <span className="close-button" onClick={handleSizeChartToggle}>&times;</span>
            <h3>Size Chart</h3>
            <table>
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Bust (inches)</th>
                  <th>Waist (inches)</th>
                  <th>Hip (inches)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>XS</td>
                  <td>32</td>
                  <td>24</td>
                  <td>34</td>
                </tr>
                <tr>
                  <td>S</td>
                  <td>34</td>
                  <td>26</td>
                  <td>36</td>
                </tr>
                <tr>
                  <td>M</td>
                  <td>36</td>
                  <td>28</td>
                  <td>38</td>
                </tr>
                <tr>
                  <td>L</td>
                  <td>38</td>
                  <td>30</td>
                  <td>40</td>
                </tr>
                <tr>
                  <td>XL</td>
                  <td>40</td>
                  <td>32</td>
                  <td>42</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailMen;