// App.jsx

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Men from './Components/MenProductsList';
// import Women from './Components/ProductsList';
// import Groomsmen from './Components/Groomsmen';
// import Bridesmaid from './Components/Bridesmaid';
// import Exclusives from './Components/Exclusives';

// import AdminDashboard from './Components/admin/AdminDashboard';

// import AdminMenProducts from './Components/admin/AdminMenProducts';
// import AdminWomenProducts from './Components/admin/AdminWomenProducts';
// import AdminGroomsmenProducts from './Components/admin/AdminGroomsmenProducts';
// import AdminBridesmaidProducts from './Components/admin/AdminBridesmaidProduct';
// import AdminExclusivesProducts from './Components/admin/AdminExclusivesProduct';


// const App = () => {
//   return ( 

//         <Routes>
         
//           <Route path="/" element={<Women />} />
//           <Route path="/" element={<Groomsmen />} />
//           <Route path="/b" element={<Bridesmaid />} />
//           <Route path="/e" element={<Exclusives />} />

//           <Route path="/admin/dashboard" element={<AdminDashboard />} />
        
//           <Route path="/admin/menproducts" element={<AdminMenProducts />} />
//           <Route path="/admin/womenproducts" element={<AdminWomenProducts />} />
//           <Route path="/admin/groomsmenproducts" element={<AdminGroomsmenProducts />} />
//           <Route path="/admin/bridesmaidproducts" element={<AdminBridesmaidProducts />} />
//           <Route path="/admin/exclusivesproducts" element={<AdminExclusivesProducts />} />
//         </Routes>
//   );
// };

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AdminDashboard from './Components/admin/AdminDashboard';
// import AdminLogin from './Components/admin/AdminLogin';

// function App() {
//   return (
//       <Routes>
//         <Route path="/" element={<AdminLogin />} />
//         <Route path="/admin" element={<AdminDashboard />} />
//       </Routes>
//   );
// }

// export default App;




import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './Components/Navbar';
import ProductsList from './Components/ProductsList';
import Men from './Components/MenProductsList';
import Footer from './Components/Footer';
import FilterSidebar from './Components/FilterSidebar';
import Slider from './Components/Slider';
import MenSlider from './Components/MenSlider';
import MenFilter from './Components/MenFilterSidebar';
import Home from './Components/Home';
import Form from './Components/SellWithUs';
import Login from './Components/Login';
import FAQ from './Components/FAQ';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';
import TC from './Components/Terms&Conditions';
import PrivacyPolicy from './Components/PrivacyPolicy';
import ProductDetailWomen from './Components/ProductDetailWomen';
import Cart from './Components/Cart';
import Payment from './Components/Payment';
import Review from './Components/Review';
import ProductDetailMen from './Components/ProductDetailMen';
import ReturnPolicy from './Components/ReturnPolicy';

import Bridesmaid from './Components/Bridesmaid';
import SliderBridesmaid from './Components/SliderBridesmaid';
import ProductDetailBridesmaid from './Components/ProductDetailBridesmaid';


import Groomsmen from './Components/Groomsmen';
import SliderGroomsmen from './Components/SliderGroomsmen';
import ProductDetailGroomsmen from './Components/ProductDetailGroomsmen';

import Exclusives from './Components/Exclusives';
import SliderExclusives from './Components/SliderExclusives';
import ProductDetailExclusives from './Components/ProductDetailExclusives';


import AdminDashboard from './Components/admin/AdminDashboard';

import AdminMenProducts from './Components/admin/AdminMenProducts';
import AdminWomenProducts from './Components/admin/AdminWomenProducts';
import AdminGroomsmenProducts from './Components/admin/AdminGroomsmenProducts';
import AdminBridesmaidProducts from './Components/admin/AdminBridesmaidProduct';
import AdminExclusivesProducts from './Components/admin/AdminExclusivesProduct';


const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filters, setFilters] = useState({
        category: [],
        price: [],
        color: [],
        size: [],
        occasion: []
    });

    const [cartItems, setCartItems] = useState([]);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [username, setUsername] = useState(null); // State to store username
    const location = useLocation();

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const handleAddToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const handleRemoveItem = (index) => {
        const newCartItems = cartItems.filter((_, i) => i !== index);
        setCartItems(newCartItems);
    };

    useEffect(() => {
        if (location.state?.category) {
            setFilters((prevFilters) => ({
                ...prevFilters,
                category: [location.state.category]
            }));
        }

        if (location.state?.searchTerm) {
            setSearchTerm(location.state.searchTerm);
        }

        if (location.state?.username) { // Update username from login
            setUsername(location.state.username);
        }
    }, [location.state]);

    const showNavbarAndFooter = !["/login","/admin/dashboard","/admin/menproducts","/admin/womenproducts","/admin/groomsmenproducts","admin/bridesmaidproducts","/admin/exclusivesproducts"].includes(location.pathname);

    return (
        <div>
            {showNavbarAndFooter && <Navbar onSearch={setSearchTerm} username={username} />}
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/products" element={
                    <>
                        <Slider />
                        <div style={{ display: 'flex', marginTop: '20px' }}>
                            <div className="filter-sidebar-container">
                                <button 
                                    className={`filter-toggle-btn ${isFilterOpen ? 'hidden' : ''}`}
                                    onClick={toggleFilter}
                                >
                                    &#9776;
                                </button>
                                <FilterSidebar 
                                    filters={filters}
                                    onFilterChange={handleFilterChange}
                                    isOpen={isFilterOpen}
                                    onClose={toggleFilter}
                                />
                            </div>
                            <div style={{ flex: 1, paddingLeft: '20px' }}>
                                <ProductsList searchTerm={searchTerm} filters={filters} />
                            </div>
                        </div>
                    </>
                } />

                <Route path="/men" element={
                    <>
                        <MenSlider />
                        <div style={{ display: 'flex', marginTop: '20px' }}>
                            <div className="filter-sidebar-container">
                                <button 
                                    className={`filter-toggle-btn ${isFilterOpen ? 'hidden' : ''}`}
                                    onClick={toggleFilter}
                                >
                                    &#9776;
                                </button>
                                <MenFilter 
                                    filters={filters}
                                    onFilterChange={handleFilterChange}
                                    isOpen={isFilterOpen}
                                    onClose={toggleFilter}
                                />
                            </div>
                            <div style={{ flex: 1, paddingLeft: '20px' }}>
                                <Men searchTerm={searchTerm} filters={filters} />
                            </div>
                        </div>
                    </>
                } />
                <Route path="/bridesmaid" element={
                    <>
                        <SliderBridesmaid />
                        <div style={{ display: 'flex', marginTop: '20px' }}>
                            <div style={{ flex: 1, paddingLeft: '20px' }}>
                                <Bridesmaid searchTerm={searchTerm} filters={filters} />
                            </div>
                        </div>
                    </>
                } />
                 <Route path="/groomsmen" element={
                    <>
                        <SliderGroomsmen />
                        <div style={{ display: 'flex', marginTop: '20px' }}>
                            <div style={{ flex: 1, paddingLeft: '20px' }}>
                                <Groomsmen searchTerm={searchTerm} filters={filters} />
                            </div>
                        </div>
                    </>
                } />
                <Route path="/exclusives" element={
                    <>
                        <SliderExclusives />
                        <div style={{ display: 'flex', marginTop: '20px' }}>
                            <div style={{ flex: 1, paddingLeft: '20px' }}>
                                <Exclusives searchTerm={searchTerm} filters={filters} />
                            </div>
                        </div>
                    </>
                } />
                <Route path="/sell-with-us" element={<Form />} />
                <Route path="/login" element={<Login />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/womenproduct/:id" element={<ProductDetailWomen onAddToCart={handleAddToCart} />}/>
                <Route path="/menproduct/:id" element={<ProductDetailMen onAddToCart={handleAddToCart} />} />

                <Route path="/bridesmaidproduct/:id" element={<ProductDetailBridesmaid onAddToCart={handleAddToCart} />} />
                <Route path="/groomsmenproduct/:id" element={<ProductDetailGroomsmen onAddToCart={handleAddToCart} />} />
                <Route path="/exclusivesproduct/:id" element={<ProductDetailExclusives onAddToCart={handleAddToCart} />} />

                <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveItem={handleRemoveItem} />} />
                <Route path="/payment" element={<Payment/>}/>
                <Route path="/ContactUs" element={<ContactUs />} />
                <Route path="/FAQ" element={<FAQ />} />
                <Route path="/TC" element={<TC />} />
                <Route path="/Privacy" element={<PrivacyPolicy />} />
                <Route path="/review" element={<Review />} />
                <Route path="/return" element={<ReturnPolicy />} />

                <Route path="/admin/dashboard" element={<AdminDashboard />} />
        
                <Route path="/admin/menproducts" element={<AdminMenProducts />} />
                <Route path="/admin/womenproducts" element={<AdminWomenProducts />} />
                <Route path="/admin/groomsmenproducts" element={<AdminGroomsmenProducts />} />
                <Route path="/admin/bridesmaidproducts" element={<AdminBridesmaidProducts />} />
                <Route path="/admin/exclusivesproducts" element={<AdminExclusivesProducts />} />

            </Routes>
            {showNavbarAndFooter && <Footer />}
        </div>
    );
};

export default App;






//WORKING ONE 3rd Aug 2024
// import React, { useState, useEffect } from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import ProductsList from './Components/ProductsList';
// import Men from './Components/MenProductsList';
// import Footer from './Components/Footer';
// import FilterSidebar from './Components/FilterSidebar';
// import Slider from './Components/Slider';
// import MenSlider from './Components/MenSlider';
// import MenFilter from './Components/MenFilterSidebar';
// import Home from './Components/Home';
// import Form from './Components/SellWithUs';
// import Login from './Components/Login';

// const App = () => {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [filters, setFilters] = useState({
//         category: [],
//         price: [],
//         color: [],
//         size: [],
//         occasion: []
//     });
//     const [isFilterOpen, setIsFilterOpen] = useState(false);
//     const location = useLocation();

//     const handleFilterChange = (newFilters) => {
//         setFilters(newFilters);
//     };

//     const toggleFilter = () => {
//         setIsFilterOpen(!isFilterOpen);
//     };

//     useEffect(() => {
//         if (location.state?.category) {
//             setFilters((prevFilters) => ({
//                 ...prevFilters,
//                 category: [location.state.category]
//             }));
//         }

//         if (location.state?.searchTerm) {
//             setSearchTerm(location.state.searchTerm);
//         }
//     }, [location.state]);

//     const showNavbarAndFooter = !["/login"].includes(location.pathname);

//     return (
//         <div>
//             {showNavbarAndFooter && <Navbar onSearch={setSearchTerm} />}
//             <Routes>
//                 <Route path="/" element={<Home />} />

//                 <Route path="/products" element={
//                     <>
//                         <Slider />
//                         <div style={{ display: 'flex', marginTop: '20px' }}>
//                             <div className="filter-sidebar-container">
//                                 <button 
//                                     className={`filter-toggle-btn ${isFilterOpen ? 'hidden' : ''}`}
//                                     onClick={toggleFilter}
//                                 >
//                                     &#9776;
//                                 </button>
//                                 <FilterSidebar 
//                                     filters={filters}
//                                     onFilterChange={handleFilterChange}
//                                     isOpen={isFilterOpen}
//                                     onClose={toggleFilter}
//                                 />
//                             </div>
//                             <div style={{ flex: 1, paddingLeft: '20px' }}>
//                                 <ProductsList searchTerm={searchTerm} filters={filters} />
//                             </div>
//                         </div>
//                     </>
//                 } />

//                 <Route path="/men" element={
//                     <>
//                         <MenSlider />
//                         <div style={{ display: 'flex', marginTop: '20px' }}>
//                             <div className="filter-sidebar-container">
//                                 <button 
//                                     className={`filter-toggle-btn ${isFilterOpen ? 'hidden' : ''}`}
//                                     onClick={toggleFilter}
//                                 >
//                                     &#9776;
//                                 </button>
//                                 <MenFilter 
//                                     filters={filters}
//                                     onFilterChange={handleFilterChange}
//                                     isOpen={isFilterOpen}
//                                     onClose={toggleFilter}
//                                 />
//                             </div>
//                             <div style={{ flex: 1, paddingLeft: '20px' }}>
//                                 <Men searchTerm={searchTerm} filters={filters} />
//                             </div>
//                         </div>
//                     </>
//                 } />

//                 <Route path="/sell-with-us" element={<Form />} />
//                 <Route path="/login" element={<Login />} />
//             </Routes>
//             {showNavbarAndFooter && <Footer />}
//         </div>
//     );
// };

// export default App;















// import React, { useState, useEffect } from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import ProductsList from './Components/ProductsList';
// import Men from './Components/MenProductsList';
// import Footer from './Components/Footer';
// import FilterSidebar from './Components/FilterSidebar';
// import Slider from './Components/Slider';
// import MenSlider from './Components/MenSlider';
// import MenFilter from './Components/MenFilterSidebar';
// import Home from './Components/Home';
// import Form from './Components/Form';
// import SignIn from './Components/SignIn';
// import SignUp from './Components/SignUp';
// import './style.css';  // Ensure this imports the styles needed for SignIn/SignUp

// const App = () => {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [filters, setFilters] = useState({
//         category: [],
//         price: [],
//         color: [],
//         size: [],
//         occasion: []
//     });
//     const [isFilterOpen, setIsFilterOpen] = useState(false);
//     const location = useLocation();

//     const handleFilterChange = (newFilters) => {
//         setFilters(newFilters);
//     };

//     const toggleFilter = () => {
//         setIsFilterOpen(!isFilterOpen);
//     };

//     useEffect(() => {
//         if (location.state?.category) {
//             setFilters((prevFilters) => ({
//                 ...prevFilters,
//                 category: [location.state.category]
//             }));
//         }
//     }, [location.state]);

//     return (
//         <div>
//             <Navbar onSearch={setSearchTerm} />
//             <Routes>
//                 <Route path="/" element={<Home />} />

//                 <Route path="/products" element={
//                     <>
//                         <Slider />
//                         <div style={{ display: 'flex', marginTop: '20px' }}>
//                             <div className="filter-sidebar-container">
//                                 <button 
//                                     className={`filter-toggle-btn ${isFilterOpen ? 'hidden' : ''}`}
//                                     onClick={toggleFilter}
//                                 >
//                                     &#9776;
//                                 </button>
//                                 <FilterSidebar 
//                                     filters={filters}
//                                     onFilterChange={handleFilterChange}
//                                     isOpen={isFilterOpen}
//                                     onClose={toggleFilter}
//                                 />
//                             </div>
//                             <div style={{ flex: 1, paddingLeft: '20px' }}>
//                                 <ProductsList searchTerm={searchTerm} filters={filters} />
//                             </div>
//                         </div>
//                     </>
//                 } />

//                 <Route path= "/men" element={
//                     <>
//                     <MenSlider />
//                     <div style={{ display: 'flex', marginTop: '20px' }}>
//                         <div className="filter-sidebar-container">
//                             <button 
//                                 className={`filter-toggle-btn ${isFilterOpen ? 'hidden' : ''}`}
//                                 onClick={toggleFilter}
//                             >
//                                 &#9776;
//                             </button>
//                             <MenFilter 
//                                 filters={filters}
//                                 onFilterChange={handleFilterChange}
//                                 isOpen={isFilterOpen}
//                                 onClose={toggleFilter}
//                             />
//                         </div>
//                         <div style={{ flex: 1, paddingLeft: '20px' }}>
//                             <Men searchTerm={searchTerm} filters={filters} />
//                         </div>
//                     </div>
//                 </>

//                 } />
//                 <Route path="/sell-with-us" element={<Form />} />
//                 <Route path="/signin" element={<SignIn />} />
//                 <Route path="/signup" element={<SignUp />} />
//             </Routes>
//             <Footer />
//         </div>
//     );
// };

// export default App;




// import React, { useState, useEffect } from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import ProductsList from './Components/ProductsList';
// import Footer from './Components/Footer';
// import FilterSidebar from './Components/FilterSidebar';
// import Slider from './Components/Slider';
// import Home from './Components/Home';
// import Form from './Components/Form';
// // Import the main CSS

// const App = () => {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [filters, setFilters] = useState({
//         category: [],
//         price: [],
//         color: [],
//         size: [],
//         occasion: []
//     });
//     const [isFilterOpen, setIsFilterOpen] = useState(false);
//     const location = useLocation();

//     const handleFilterChange = (newFilters) => {
//         setFilters(newFilters);
//     };

//     const toggleFilter = () => {
//         setIsFilterOpen(!isFilterOpen);
//     };

//     useEffect(() => {
//         if (location.state?.category) {
//             setFilters((prevFilters) => ({
//                 ...prevFilters,
//                 category: [location.state.category]
//             }));
//         }
//     }, [location.state]);

//     return (
//         <div>
//             <Navbar onSearch={setSearchTerm} />
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/products" element={
//                     <>
//                         <Slider />
//                         <div style={{ display: 'flex', marginTop: '20px' }}>
//                             <div className="filter-sidebar-container">
//                                 <button 
//                                     className={`filter-toggle-btn ${isFilterOpen ? 'hidden' : ''}`}
//                                     onClick={toggleFilter}
//                                 >
//                                     &#9776;
//                                 </button>
//                                 <FilterSidebar 
//                                     filters={filters}
//                                     onFilterChange={handleFilterChange}
//                                     isOpen={isFilterOpen}
//                                     onClose={toggleFilter}
//                                 />
//                             </div>
//                             <div style={{ flex: 1, paddingLeft: '20px' }}>
//                                 <ProductsList searchTerm={searchTerm} filters={filters} />
//                             </div>
//                         </div>
//                     </>
//                 } />
//                 <Route path="/sell-with-us" element={<Form />} />
//             </Routes>
//             <Footer />
//         </div>
//     );
// };

// export default App;













// import React, { useState } from 'react';
// import Navbar from './Components/Navbar';
// import ProductsList from './Components/ProductsList';
// import Footer from './Components/Footer';
// import FilterSidebar from './Components/FilterSidebar';
// import Slider from './Components/Slider'; // Ensure the 3D slider component is imported

// const App = () => {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [filters, setFilters] = useState({
//         category: [],
//         price: [],
//         color: [],
//         size: [],
//         occasion: []
//     });
//     const [isFilterOpen, setIsFilterOpen] = useState(false);

//     const handleFilterChange = (newFilters) => {
//         setFilters(newFilters);
//     };

//     const toggleFilter = () => {
//         setIsFilterOpen(!isFilterOpen);
//     };

//     return (
//         <div>
//             <Navbar onSearch={setSearchTerm} />
//             <Slider /> {/* Ensure the 3D slider component is included */}
//             <div style={{ display: 'flex', marginTop: '20px' }}>
//                 <div className="filter-sidebar-container">
//                     <button 
//                         className={`filter-toggle-btn ${isFilterOpen ? 'hidden' : ''}`}
//                         onClick={toggleFilter}
//                     >
//                         &#9776; {/* Replace with FontAwesome icon if needed */}
//                     </button>
//                     <FilterSidebar 
//                         filters={filters}
//                         onFilterChange={handleFilterChange}
//                         isOpen={isFilterOpen}
//                         onClose={toggleFilter}
//                     />
//                 </div>
//                 <div style={{ flex: 1, paddingLeft: '20px' }}>
//                     <ProductsList searchTerm={searchTerm} filters={filters} />
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default App;
