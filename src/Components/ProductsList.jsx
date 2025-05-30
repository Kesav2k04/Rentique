import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/ProductsList.css'; // Updated CSS file for Women

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

const Women = ({ searchTerm = '', filters = { category: [], price: [], color: [], size: [], occasion: [] } }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/womenproducts/women');
        const productsData = response.data;

        // Fetch images in parallel with products data
        const productsWithImages = await Promise.all(productsData.map(async (product) => {
          try {
            const imageResponse = await axios.get(`http://localhost:8080/api/womenproducts/women/image/${product.id}`);
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
    <div className="products-container"> {/* Updated class name */}
      {productsToDisplay.length > 0 ? (
        productsToDisplay.map(product => (
          <div className="card" key={product.id}> {/* Updated class name */}
            <div className="imgBx"> {/* Updated class name */}
              <img src={`data:image/jpeg;base64,${product.base64Image}`} alt={product.name} />
            </div>
            <div className="contentBx"> {/* Updated class name */}
              <h2>{product.name}</h2>
              <p>{`₹${product.price} / day`}</p>
              <Link to={`/womenproduct/${product.id}`}>Rent</Link>
            </div>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default Women;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/ProductsList.css';
// import women1 from '../Assets/womenimg/women1-leh-wb.png';
// import women2 from '../Assets/womenimg/women2-gown-wb.png';
// import women3 from '../Assets/womenimg/women3-anar-wb.png';
// import women4 from '../Assets/womenimg/women4-gown-wb.png';
// import women5 from '../Assets/womenimg/women5-saree-wb.png';
// import women6 from '../Assets/womenimg/women6-dress-wb.png';
// import women7 from '../Assets/womenimg/women7-salwar-wb.png';
// import women8 from '../Assets/womenimg/women8-leh-wb.png';

// // Sample product data
// const products = [
//   { id: 1, name: 'Yellow Lehenga', image: women1, price: 1000, category: 'Lehenga', color: 'yellow', size: '28', occasion: 'Wedding' },
//   { id: 2, name: 'Wine Sparkling Gown', image: women2, price: 1200, category: 'Gown', color: 'wine', size: '32', occasion: 'Wedding' },
//   { id: 3, name: 'Gold Anarkali', image: women3, price: 600, category: 'Anarkali', color: 'gold', size: '34', occasion: 'Wedding' },
//   { id: 4, name: 'Royal Blue Gown', image: women4, price: 1100, category: 'Gown', color: 'blue', size: '30', occasion: 'Party' },
//   { id: 5, name: 'Pink Georgette Saree', image: women5, price: 1200, category: 'Saree', color: 'pink', size: '32', occasion: 'Wedding' },
//   { id: 6, name: 'Cotton Midi Dress', image: women6, price: 500, category: 'Dress', color: 'black', size: '30', occasion: 'Casual' },
//   { id: 7, name: 'Orange Salwar Suit', image: women7, price: 900, category: 'Salwar', color: 'orange', size: '34', occasion: 'Wedding' },
//   { id: 8, name: 'Sky Blue Lehenga', image: women8, price: 1200, category: 'Lehenga', color: 'blue', size: '36', occasion: 'Wedding' },
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

// const Women = ({ searchTerm = '', filters = { category: [], price: [], color: [], size: [], occasion: [] } }) => {
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
//               <Link to={`/womenproduct/${product.id}`}>Rent</Link>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>No products available</p>
//       )}
//     </div>
//   );
// };

// export default Women;




// import React from 'react';
// import '../styles/ProductsList.css';
// import sareeImage from '../Assets/Saree.png';
// import kurtiImage from '../Assets/Kurti.png';
// import lehengaImage from '../Assets/Lehenga-removebg.png';
// import shalwarImage from '../Assets/Salwar.png';
// import choliImage from '../Assets/Choli.png';
// import dupattaImage from '../Assets/Dupatta.png';
// import anarkaliImage from '../Assets/Anarkali.png';
// import gownImage from '../Assets/Gown.png';

// const products = [
//   { id: 1, name: 'Saree', image: sareeImage, price: 1500, category: 'Saree', color: 'red', size: '30', occasion: 'Wedding' },
//   { id: 2, name: 'Kurti', image: kurtiImage, price: 1200, category: 'Kurti', color: 'blue', size: '32', occasion: 'Casual' },
//   { id: 3, name: 'Lehenga', image: lehengaImage, price: 2000, category: 'Lehenga', color: 'green', size: '34', occasion: 'Party' },
//   { id: 4, name: 'Salwaar', image: shalwarImage, price: 1800, category: 'Salwaar', color: 'yellow', size: '36', occasion: 'Wedding' },
//   { id: 5, name: 'Choli', image: choliImage, price: 1600, category: 'Choli', color: 'pink', size: '38', occasion: 'Casual' },
//   { id: 6, name: 'Dupatta', image: dupattaImage, price: 1000, category: 'Dupatta', color: 'black', size: '40', occasion: 'Party' },
//   { id: 7, name: 'Anarkali', image: anarkaliImage, price: 1900, category: 'Anarkali', color: 'white', size: '28', occasion: 'Wedding' },
//   { id: 8, name: 'Gown', image: gownImage, price: 2400, category: 'Gown', color: 'red', size: '30', occasion: 'Casual' },
// ];

// const filterProductsByCriteria = (product, filters) => {
//   const { category, price, color, size, occasion } = filters;

//   const priceRanges = {
//     '1000-2000': [1000, 2000],
//     '2000-5000': [2000, 5000],
//     '5000-10000': [5000, 10000],
//     '10000-15000': [10000, 15000]
//   };

//   const priceMatch = price.length === 0 || price.some(range => {
//     const [min, max] = priceRanges[range];
//     return product.price >= min && product.price <= max;
//   });

//   const categoryMatch = category.length === 0 || category.includes(product.category);
//   const colorMatch = color.length === 0 || color.includes(product.color);
//   const sizeMatch = size.length === 0 || size.includes(product.size.toString());
//   const occasionMatch = occasion.length === 0 || occasion.includes(product.occasion);

//   return priceMatch && categoryMatch && colorMatch && sizeMatch && occasionMatch;
// };

// const ProductsList = ({ searchTerm, filters }) => {
//   // Apply search term
//   const searchProducts = products.filter(product =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Apply filters
//   const filteredProducts = searchProducts.filter(product => 
//     filterProductsByCriteria(product, filters)
//   );

//   // Display all products if no filters are applied or filteredProducts is empty
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
//               <a href="#">Rent</a>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>No products available</p>
//       )}
//     </div>
//   );
// };

// export default ProductsList;



// import React from 'react';
// import '../styles/ProductsList.css';
// import sareeImage from '../Assets/Saree.png';
// import kurtiImage from '../Assets/Kurti.png';
// import lehengaImage from '../Assets/Lehenga-removebg.png';
// import shalwarImage from '../Assets/Salwar.png';
// import choliImage from '../Assets/Choli.png';
// import dupattaImage from '../Assets/Dupatta.png';
// import anarkaliImage from '../Assets/Anarkali.png';
// import gownImage from '../Assets/Gown.png';

// const products = [
//   { id: 1, name: 'Saree', image: sareeImage, price: 1500, category: 'Saree', color: 'red', size: '30', occasion: 'Wedding' },
//   { id: 2, name: 'Kurti', image: kurtiImage, price: 1200, category: 'Kurti', color: 'blue', size: '32', occasion: 'Casual' },
//   { id: 3, name: 'Lehenga', image: lehengaImage, price: 2000, category: 'Lehenga', color: 'green', size: '34', occasion: 'Party' },
//   { id: 4, name: 'Salwaar', image: shalwarImage, price: 1800, category: 'Salwaar', color: 'yellow', size: '36', occasion: 'Wedding' },
//   { id: 5, name: 'Choli', image: choliImage, price: 1600, category: 'Choli', color: 'pink', size: '38', occasion: 'Casual' },
//   { id: 6, name: 'Dupatta', image: dupattaImage, price: 1000, category: 'Dupatta', color: 'black', size: '40', occasion: 'Party' },
//   { id: 7, name: 'Anarkali', image: anarkaliImage, price: 1900, category: 'Anarkali', color: 'white', size: '28', occasion: 'Wedding' },
//   { id: 8, name: 'Gown', image: gownImage, price: 2400, category: 'Gown', color: 'red', size: '30', occasion: 'Casual' },
// ];

// const filterProductsByCriteria = (product, filters) => {
//   const { category, price, color, size, occasion } = filters;

//   const priceRanges = {
//     '1000-2000': [1000, 2000],
//     '2000-5000': [2000, 5000],
//     '5000-10000': [5000, 10000],
//     '10000-15000': [10000, 15000]
//   };

//   const priceMatch = price.length === 0 || price.some(range => {
//     const [min, max] = priceRanges[range];
//     return product.price >= min && product.price <= max;
//   });

//   const categoryMatch = category.length === 0 || category.includes(product.category);
//   const colorMatch = color.length === 0 || color.includes(product.color);
//   const sizeMatch = size.length === 0 || size.includes(product.size.toString());
//   const occasionMatch = occasion.length === 0 || occasion.includes(product.occasion);

//   return priceMatch && categoryMatch && colorMatch && sizeMatch && occasionMatch;
// };

// const ProductsList = ({ searchTerm, filters }) => {
//   // Apply search term
//   const searchProducts = products.filter(product =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Apply filters
//   const filteredProducts = searchProducts.filter(product => 
//     filterProductsByCriteria(product, filters)
//   );

//   // Display all products if no filters are applied or filteredProducts is empty
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
//               <a href="#">Rent</a>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>No products available</p>
//       )}
//     </div>
//   );
// };

// export default ProductsList;




// ProductsList.jsx
// import React from 'react';
// import '../styles/ProductsList.css';
// import sareeImage from '../Assets/Saree.png';
// import kurtiImage from '../Assets/Kurti.png';
// import lehengaImage from '../Assets/Lehenga-removebg.png';
// import shalwarImage from '../Assets/Salwar.png';
// import choliImage from '../Assets/Choli.png';
// import dupattaImage from '../Assets/Dupatta.png';
// import anarkaliImage from '../Assets/Anarkali.png';
// import gownImage from '../Assets/Gown.png';

// const products = [
//   { id: 1, name: 'Saree', image: sareeImage, price: '1500', category: 'Saree', color: 'red', size: '30', occasion: 'Wedding' },
//   { id: 2, name: 'Kurti', image: kurtiImage, price: '1200', category: 'Kurti', color: 'blue', size: '32', occasion: 'Casual' },
//   { id: 3, name: 'Lehenga', image: lehengaImage, price: '2000', category: 'Lehenga', color: 'green', size: '34', occasion: 'Party' },
//   { id: 4, name: 'Salwaar', image: shalwarImage, price: '1800', category: 'Salwaar', color: 'yellow', size: '36', occasion: 'Wedding' },
//   { id: 5, name: 'Choli', image: choliImage, price: '1600', category: 'Choli', color: 'pink', size: '38', occasion: 'Casual' },
//   { id: 6, name: 'Dupatta', image: dupattaImage, price: '1000', category: 'Dupatta', color: 'black', size: '40', occasion: 'Party' },
//   { id: 7, name: 'Anarkali', image: anarkaliImage, price: '1900', category: 'Anarkali', color: 'white', size: '28', occasion: 'Wedding' },
//   { id: 8, name: 'Gown', image: gownImage, price: '2400', category: 'Gown', color: 'red', size: '30', occasion: 'Casual' },
// ];

// const filterProductsByCriteria = (product, filters) => {
//     // Your filter logic
//   };
  
//   const ProductsList = ({ searchTerm, filters }) => {
//     // Apply search term
//     const searchProducts = products.filter(product =>
//       product.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
  
//     // Apply filters
//     const filteredProducts = searchProducts.filter(product => 
//       filterProductsByCriteria(product, filters)
//     );
  
//     // Display all products if no filters are applied or filteredProducts is empty
//     const productsToDisplay = filteredProducts.length > 0 ? filteredProducts : searchProducts;
  
//     return (
//       <div className="products-container">
//         {productsToDisplay.length > 0 ? (
//           productsToDisplay.map(product => (
//             <div className="card" key={product.id}>
//               <div className="imgBx">
//                 <img src={product.image} alt={product.name} />
//               </div>
//               <div className="contentBx">
//                 <h2>{product.name}</h2>
//                 <p>{`₹${product.price} / day`}</p>
//                 <a href="#">Rent</a>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No products available</p>
//         )}
//       </div>
//     );
//   };
  
//   export default ProductsList;


// import React, { useState } from 'react';
// import '../styles/ProductsList.css';
// import sareeImage from '../Assets/Saree.png';
// import kurtiImage from '../Assets/Kurti.png';
// import lehengaImage from '../Assets/Lehenga-removebg.png';
// import shalwarImage from '../Assets/Salwar.png';
// import choliImage from '../Assets/Choli.png';
// import dupattaImage from '../Assets/Dupatta.png';
// import anarkaliImage from '../Assets/Anarkali.png';
// import gownImage from '../Assets/Gown.png';

// const products = [
//   { id: 1, name: 'Saree', image: sareeImage, price: '1500' },
//   { id: 2, name: 'Kurti', image: kurtiImage, price: '1200' },
//   { id: 3, name: 'Lehenga', image: lehengaImage, price: '2000' },
//   { id: 4, name: 'Salwaar', image: shalwarImage, price: '1800' },
//   { id: 5, name: 'Choli', image: choliImage, price: '1600' },
//   { id: 6, name: 'Dupatta', image: dupattaImage, price: '1000' },
//   { id: 7, name: 'Anarkali', image: anarkaliImage, price: '1900' },
//   { id: 8, name: 'Gown', image: gownImage, price: '2400' },
// ];

// const ProductsList = ({ searchTerm }) => {
//   const filteredProducts = products.filter(product =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="products-container">
//       {filteredProducts.map((product) => (
//         <div className="card" key={product.id}>
//           <div className="imgBx">
//             <img src={product.image} alt={product.name} />
//           </div>
//           <div className="contentBx">
//             <h2>{product.name}</h2>
//             <p>{`₹${product.price} / day`}</p>
//             <a href="#">Rent</a>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductsList;
