import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MenProductsList.css';
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
    '10000-15000': [10000, 15000],
  };

  // Check if the product's price is within any selected price range
  const priceMatch = price.length === 0 || price.some(range => {
    const [min, max] = priceRanges[range] || [0, Infinity];
    return product.price >= min && product.price <= max;
  });

  // Check other filter criteria
  const categoryMatch = category.length === 0 || category.includes(product.category);
  const colorMatch = color.length === 0 || color.includes(product.color);
  const sizeMatch = size.length === 0 || size.includes(product.size);
  const occasionMatch = occasion.length === 0 || occasion.includes(product.occasion);

  return priceMatch && categoryMatch && colorMatch && sizeMatch && occasionMatch;
};

const Men = ({ searchTerm = '', filters = { category: [], price: [], color: [], size: [], occasion: [] } }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/products/men');
        const productsData = response.data;

        // Fetch images in parallel with products data
        const productsWithImages = await Promise.all(productsData.map(async (product) => {
          try {
            const imageResponse = await axios.get(`http://localhost:8080/api/products/men/image/${product.id}`);
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
    <div className="men-products-container">
      {productsToDisplay.length > 0 ? (
        productsToDisplay.map(product => (
          <div className="men-card" key={product.id}>
            <div className="men-imgBx">
              <img src={`data:image/jpeg;base64,${product.base64Image}`} alt={product.name} />
            </div>
            <div className="men-contentBx">
              <h2>{product.name}</h2>
              <p>{`₹${product.price} / day`}</p>
              <Link to={`/menproduct/${product.id}`}>Rent</Link>
            </div>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default Men;





//WORKING CODE 11th AUGUST 2024
// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/MenProductsList.css';
// import men1 from '../Assets/menimg/men1-sher-wb.png';
// import men2 from '../Assets/menimg/men2-suit-wb.png';
// import men3 from '../Assets/menimg/men3-blazer-wb.png';
// import men4 from '../Assets/menimg/men4-shirt-wb.png';
// import men5 from '../Assets/menimg/men5-kurta-wb.png';
// import men6 from '../Assets/menimg/men6-indo-wb.png'
// import men7 from '../Assets/menimg/men7-suit-wb.png';
// import men8 from '../Assets/menimg/men8-jack-wb.png'


// // Sample product data
// const products = [
//   { id: 1, name: 'Pink Sherwani', image: men1, price: 1500, category: 'Sherwani', color: 'pink', size: '40', occasion: 'Wedding' },
//   { id: 2, name: 'Blue Suit', image: men2, price: 2000, category: 'Suit', color: 'blue', size: '42', occasion: 'Formal' },
//   { id: 3, name: 'Velvet Blazer', image: men3, price: 1000, category: 'Blazer', color: 'black', size: '44', occasion: 'Casual' },
//   { id: 4, name: 'Wine Party Wear Shirt', image: men4, price: 600, category: 'Shirt', color: 'wine', size: '38', occasion: 'Party' },
//   { id: 5, name: 'Floral Printed Kurta', image: men5, price: 1000, category: 'Kurta', color: 'white', size: '40', occasion: 'Festive' },
//   { id: 6, name: 'Lilac Indo Western', image: men6, price: 1800, category: 'Indo Western', color: 'lilac', size: '40', occasion: 'Wedding' },
//   { id: 7, name: 'Deep Grey Suit', image: men7, price: 1500, category: 'Suit', color: 'grey', size: '42', occasion: 'Formal' },
//   { id: 8, name: 'Shadow Green Jacket', image: men8, price: 900, category: 'Jacket', color: 'green', size: '38', occasion: 'Festive' },
// ];

// // Function to filter products based on selected criteria
// const filterProductsByCriteria = (product, filters) => {
//   const { category, price, color, size, occasion } = filters;

//   // Define price ranges
//   const priceRanges = {
//     '500-1000': [500,1000],
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

// const Men = ({ searchTerm = '', filters = { category: [], price: [], color: [], size: [], occasion: [] } }) => {
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
//     <div className="men-products-container">
//       {productsToDisplay.length > 0 ? (
//         productsToDisplay.map(product => (
//           <div className="men-card" key={product.id}>
//             <div className="men-imgBx">
//               <img src={product.image} alt={product.name} />
//             </div>
//             <div className="men-contentBx">
//               <h2>{product.name}</h2>
//               <p>{`₹${product.price} / day`}</p>
//               <Link to={`/menproduct/${product.id}`}>Rent</Link>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>No products available</p>
//       )}
//     </div>
//   );
// };

// export default Men;



// import React from 'react';
// import '../styles/ProductsList.css';
// import suitImage from '../Assets/Suit.png';
// // import sherwaniImage from '../Assets/Sherwani.png';
// // import kurtaImage from '../Assets/Kurta.png';
// // import jacketImage from '../Assets/Jacket.png';
// // import waistcoatImage from '../Assets/Waistcoat.png';
// // import dhotiImage from '../Assets/Dhoti.png';
// // import blazerImage from '../Assets/Blazer.png';
// // import tieImage from '../Assets/Tie.png';

// const menProducts = [
//   { id: 1, name: 'Suit', image: suitImage, price: 2500, category: 'Suit', color: 'black', size: '40', occasion: 'Formal' },
// //   { id: 2, name: 'Sherwani', image: sherwaniImage, price: 3000, category: 'Sherwani', color: 'gold', size: '42', occasion: 'Wedding' },
// //   { id: 3, name: 'Kurta', image: kurtaImage, price: 1200, category: 'Kurta', color: 'blue', size: '38', occasion: 'Casual' },
// //   { id: 4, name: 'Jacket', image: jacketImage, price: 1800, category: 'Jacket', color: 'brown', size: '36', occasion: 'Casual' },
// //   { id: 5, name: 'Waistcoat', image: waistcoatImage, price: 1500, category: 'Waistcoat', color: 'grey', size: '40', occasion: 'Formal' },
// //   { id: 6, name: 'Dhoti', image: dhotiImage, price: 1000, category: 'Dhoti', color: 'white', size: '44', occasion: 'Traditional' },
// //   { id: 7, name: 'Blazer', image: blazerImage, price: 2000, category: 'Blazer', color: 'navy', size: '42', occasion: 'Formal' },
// //   { id: 8, name: 'Tie', image: tieImage, price: 500, category: 'Tie', color: 'red', size: 'One Size', occasion: 'Formal' },
// ];

// const filterMenProductsByCriteria = (product, filters) => {
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

// const MenProductsList = ({ searchTerm, filters }) => {
//   // Apply search term
//   const searchProducts = menProducts.filter(product =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Apply filters
//   const filteredProducts = searchProducts.filter(product => 
//     filterMenProductsByCriteria(product, filters)
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

// export default MenProductsList;



// import React from 'react';
// import '../styles/MenProductsList.css';
// import suitImage from '../Assets/Suit.png';
// // import sherwaniImage from '../Assets/Sherwani.png';
// // import blazerImage from '../Assets/Blazer.png';
// // import kurtaImage from '../Assets/Kurta.png';
// // import tuxedoImage from '../Assets/Tuxedo.png';
// // import nehruJacketImage from '../Assets/NehruJacket.png';
// // import pathaniImage from '../Assets/Pathani.png';
// // import indoWesternImage from '../Assets/IndoWestern.png';

// const menProducts = [
//   { id: 1, name: 'Suit', image: suitImage, price: 2500, category: 'Suit', color: 'black', size: '32', occasion: 'Wedding' },
// //   { id: 2, name: 'Sherwani', image: sherwaniImage, price: 3000, category: 'Sherwani', color: 'gold', size: '38', occasion: 'Wedding' },
// //   { id: 3, name: 'Blazer', image: blazerImage, price: 2000, category: 'Blazer', color: 'blue', size: '34', occasion: 'Party' },
// //   { id: 4, name: 'Kurta', image: kurtaImage, price: 1500, category: 'Kurta', color: 'white', size: '28', occasion: 'Casual' },
// //   { id: 5, name: 'Tuxedo', image: tuxedoImage, price: 3500, category: 'Tuxedo', color: 'black', size: '30', occasion: 'Party' },
// //   { id: 6, name: 'Nehru Jacket', image: nehruJacketImage, price: 1200, category: 'Nehru Jacket', color: '40', size: 'L', occasion: 'Casual' },
// //   { id: 7, name: 'Pathani', image: pathaniImage, price: 1700, category: 'Pathani', color: 'green', size: '34', occasion: 'Wedding' },
// //   { id: 8, name: 'Indo Western', image: indoWesternImage, price: 2800, category: 'Indo Western', color: 'red', size: '30', occasion: 'Party' },
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

// const MenProductsList = ({ searchTerm, filters }) => {
//   // Apply search term
//   const searchProducts = menProducts.filter(product =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Apply filters
//   const filteredProducts = searchProducts.filter(product => 
//     filterProductsByCriteria(product, filters)
//   );

//   // Display all products if no filters are applied or filteredProducts is empty
//   const productsToDisplay = filteredProducts.length > 0 ? filteredProducts : searchProducts;

//   return (
//     <div className="men-products-container">
//       {productsToDisplay.length > 0 ? (
//         productsToDisplay.map(product => (
//           <div className="men-card" key={product.id}>
//             <div className="men-imgBx">
//               <img src={product.image} alt={product.name} />
//             </div>
//             <div className="men-contentBx">
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

// export default MenProductsList;
