import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Groomsmen.css';
import axios from 'axios';

// Function to filter products based on selected criteria
const filterProductsByCriteria = (product, filters) => {
  const { category, price, color, size, occasion } = filters;

  // Define price ranges
  const priceRanges = {
    '500-1000': [500, 1000],
    '1000-2000': [1000, 2000],
    '2000-5000': [2000, 5000],
    '5000-10000': [5000, 10000],
    '10000-15000': [10000, 15000]
  };

  // Check if the product's price is within any selected price range
  const priceMatch = price.length === 0 || price.some(range => {
    const [min, max] = priceRanges[range] || [0, Infinity];
    return product.price >= min && product.price <= max;
  });

  // Check other filter criteria
  const categoryMatch = category.length === 0 || category.includes(product.category);
  const colorMatch = color.length === 0 || color.includes(product.color);
  const sizeMatch = size.length === 0 || size.includes(product.size.toString());
  const occasionMatch = occasion.length === 0 || occasion.includes(product.occasion);

  return priceMatch && categoryMatch && colorMatch && sizeMatch && occasionMatch;
};

const Groomsmen = ({ searchTerm = '', filters = { category: [], price: [], color: [], size: [], occasion: [] } }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/groomsmenproducts/groomsmen');
        const productsData = response.data;

        // Fetch images in parallel with products data
        const productsWithImages = await Promise.all(productsData.map(async (product) => {
          try {
            const imageResponse = await axios.get(`http://localhost:8080/api/groomsmenproducts/groomsmen/image/${product.id}`);
            return {
              ...product,
              base64Image: imageResponse.data,
            };
          } catch (error) {
            console.error(`Error fetching image for product ${product.id}:`, error);
            return product; // Return product without image if there's an error
          }
        }));

        setProducts(productsWithImages);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on search term
  const searchProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Apply additional filters
  const filteredProducts = searchProducts.filter(product =>
    filterProductsByCriteria(product, filters)
  );

  // Determine which products to display
  const productsToDisplay = filteredProducts.length > 0 ? filteredProducts : searchProducts;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products.</p>;

  return (
    <div className="products-container">
      {productsToDisplay.length > 0 ? (
        productsToDisplay.map(product => (
          <div className="card" key={product.id}>
            <div className="imgBx">
              <img src={`data:image/jpeg;base64,${product.base64Image}`} alt={product.name} />
            </div>
            <div className="contentBx">
              <h2>{product.name}</h2>
              <p>{`₹${product.price} / day`}</p>
              <Link to={`/groomsmenproduct/${product.id}`}>Rent</Link>
            </div>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default Groomsmen;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/Groomsmen.css';
// import groomsmen1 from '../Assets/groomsmenimg/groomsmen1.png';


// // Sample product data
// const products = [
//   { id: 1, name: 'Cloud Blue Suit', image: groomsmen1, price: 900, category: 'Suit', color: 'Blue', size: '38', occasion: 'Wedding' }
// ];

// // Function to filter products based on selected criteria
// const filterProductsByCriteria = (product, filters) => {
//   const { category, price, color, size, occasion } = filters;

//   // Define price ranges
//   const priceRanges = {
//     '500-1000': [500, 1000],
//     '1000-2000': [1000, 2000],
//     '2000-5000': [2000, 5000],
//     '5000-10000': [5000, 10000],
//     '10000-15000': [10000, 15000]
//   };

//   // Check if the product's price is within any selected price range
//   const priceMatch = price.length === 0 || price.some(range => {
//     const [min, max] = priceRanges[range] || [0, Infinity];
//     return product.price >= min && product.price <= max;
//   });

//   // Check other filter criteria
//   const categoryMatch = category.length === 0 || category.includes(product.category);
//   const colorMatch = color.length === 0 || color.includes(product.color);
//   const sizeMatch = size.length === 0 || size.includes(product.size.toString());
//   const occasionMatch = occasion.length === 0 || occasion.includes(product.occasion);

//   return priceMatch && categoryMatch && colorMatch && sizeMatch && occasionMatch;
// };

// const Groomsmen = ({ searchTerm = '', filters = { category: [], price: [], color: [], size: [], occasion: [] } }) => {
//   // Filter products based on search term
//   const searchProducts = products.filter(product =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Apply additional filters
//   const filteredProducts = searchProducts.filter(product =>
//     filterProductsByCriteria(product, filters)
//   );

//   // Determine which products to display
//   const productsToDisplay = filteredProducts.length > 0 ? filteredProducts : searchProducts;

//   return (
//     <div className="products-container">
//       {productsToDisplay.length > 0 ? (
//         productsToDisplay.map(product => (
//           <div className="card" key={product.id}>
//             <div className="imgBx">
//               <img src={product.image} alt={product.name} />
//             </div>
//             <div className="contentBx">
//               <h2>{product.name}</h2>
//               <p>{`₹${product.price} / day`}</p>
//               <Link to={`/groomsmenproduct/${product.id}`}>Rent</Link>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>No products available</p>
//       )}
//     </div>
//   );
// };

// export default Groomsmen;
