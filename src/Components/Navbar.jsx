import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/Rentique.png';
import searchw from '../Assets/search-w.png';
import { FaRegUser, FaShoppingCart, FaHeart } from "react-icons/fa";

const Navbar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [email, setEmail] = useState(null); // State for email
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Read email from localStorage
        const storedEmail = localStorage.getItem('email');
        console.log('Email retrieved from localStorage:', storedEmail); // Debugging
        setEmail(storedEmail);
    }, []);

    const handleSearchChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        onSearch(term);

        if (term.toLowerCase().includes('suit')) {
            navigate('/men', { state: { searchTerm: term } });
        } else if (term.toLowerCase().includes('saree')) {
            navigate('/products', { state: { searchTerm: term } });
        }
    };

    const toggleDropdown = () => {
        setDropdownOpen(prev => !prev);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleNavigation = (path) => {
        navigate(path);
        setDropdownOpen(false);
    };

    const handleCategoryClick = (category) => {
        navigate('/products', { state: { category } });
    };

    const handleLogout = () => {
        localStorage.removeItem('email');
        setEmail(null);
        navigate('/login'); // Redirect to login page after logout
    };

    return (
        <div className='navbar'>
            <Link to="/">
                <img src={logo} alt="Logo" className='logo' />
            </Link>
            <ul className='links'>
                <li><Link to="/men">MEN</Link></li>
                <li onClick={() => handleCategoryClick('women')}>WOMEN</li>
                <li><Link to="/sell-with-us">SELL WITH US</Link></li>
            </ul>
            <div className='search-box'>
                <input 
                    type="text" 
                    placeholder='Search' 
                    value={searchTerm}
                    onChange={handleSearchChange}
                    aria-label="Search"
                />
                <img src={searchw} alt="Search Icon" />
            </div>
            {/* <FaHeart className='navbar-icons' aria-label="Wishlist" /> */}
            <div ref={dropdownRef} className='dropdown-container'>
                <FaRegUser className='navbar-icons' onClick={toggleDropdown} aria-label="User" />
                {isDropdownOpen && (
                    <div className="dropdown-menu">
                        <ul>
                            {email ? (
                                <>
                                    <li>Welcome</li>
                                    <li onClick={handleLogout}>Logout</li>
                                </>
                            ) : (
                                <li onClick={() => handleNavigation('/login')}>Login/SignUp</li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
            <FaShoppingCart className='navbar-icons' aria-label="Cart" />
        </div>
    );
};

export default Navbar;





// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Navbar.css';
// import logo from '../Assets/Rentique.png';
// import searchw from '../Assets/search-w.png';
// import { FaRegUser, FaShoppingCart, FaHeart } from "react-icons/fa";

// const Navbar = ({ onSearch }) => {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [isDropdownOpen, setDropdownOpen] = useState(false);
//     const [username, setUsername] = useState(null); // Add state for username
//     const dropdownRef = useRef(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Read username from localStorage
//         const storedUsername = localStorage.getItem('username');
//         setUsername(storedUsername);
//     }, []);

//     const handleSearchChange = (event) => {
//         const term = event.target.value;
//         setSearchTerm(term);
//         onSearch(term);

//         if (term.toLowerCase().includes('suit')) {
//             navigate('/men', { state: { searchTerm: term } });
//         } else if (term.toLowerCase().includes('saree')) {
//             navigate('/products', { state: { searchTerm: term } });
//         }
//     };

//     const toggleDropdown = () => {
//         setDropdownOpen(prev => !prev);
//     };

//     const handleClickOutside = (event) => {
//         if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//             setDropdownOpen(false);
//         }
//     };

//     useEffect(() => {
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     const handleNavigation = (path) => {
//         navigate(path);
//         setDropdownOpen(false);
//     };

//     const handleCategoryClick = (category) => {
//         navigate('/products', { state: { category } });
//     };

//     const handleLogout = () => {
//         localStorage.removeItem('username');
//         setUsername(null);
//         navigate('/login'); // Redirect to login page after logout
//     };

//     return (
//         <div className='navbar'>
//             <Link to="/">
//                 <img src={logo} alt="Logo" className='logo' />
//             </Link>
//             <ul className='links'>
//                 <li><Link to="/men">MEN</Link></li>
//                 <li onClick={() => handleCategoryClick('women')}>WOMEN</li>
//                 <li><Link to="/sell-with-us">SELL WITH US</Link></li>
//             </ul>
//             <div className='search-box'>
//                 <input 
//                     type="text" 
//                     placeholder='Search' 
//                     value={searchTerm}
//                     onChange={handleSearchChange}
//                     aria-label="Search"
//                 />
//                 <img src={searchw} alt="Search Icon" />
//             </div>
//             <FaHeart className='navbar-icons' aria-label="Wishlist" />
//             <div ref={dropdownRef} className='dropdown-container'>
//                 <FaRegUser className='navbar-icons' onClick={toggleDropdown} aria-label="User" />
//                 {isDropdownOpen && (
//                     <div className="dropdown-menu">
//                         <ul>
//                             {username ? (
//                                 <>
//                                     <li>Welcome, {username}</li>
//                                     <li onClick={handleLogout}>Logout</li>
//                                 </>
//                             ) : (
//                                 <li onClick={() => handleNavigation('/login')}>Login/SignUp</li>
//                             )}
//                         </ul>
//                     </div>
//                 )}
//             </div>
//             <FaShoppingCart className='navbar-icons' aria-label="Cart" />
//         </div>
//     );
// };

// export default Navbar;




//WORKING CODE 3rd AUG 2024
// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Navbar.css';
// import logo from '../Assets/Rentique.png';
// import searchw from '../Assets/search-w.png';
// import { FaRegUser, FaShoppingCart, FaHeart } from "react-icons/fa";

// const Navbar = ({ onSearch }) => {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [isDropdownOpen, setDropdownOpen] = useState(false);
//     const dropdownRef = useRef(null);
//     const navigate = useNavigate();

//     const handleSearchChange = (event) => {
//         const term = event.target.value;
//         setSearchTerm(term);
//         onSearch(term);

//         if (term.toLowerCase().includes('suit')) {
//             navigate('/men', { state: { searchTerm: term } });
//         } else if (term.toLowerCase().includes('saree')) {
//             navigate('/products', { state: { searchTerm: term } });
//         }
//     };

//     const toggleDropdown = () => {
//         setDropdownOpen(prev => !prev);
//     };

//     const handleClickOutside = (event) => {
//         if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//             setDropdownOpen(false);
//         }
//     };

//     useEffect(() => {
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     const handleNavigation = (path) => {
//         navigate(path);
//         setDropdownOpen(false);
//     };

//     const handleCategoryClick = (category) => {
//         navigate('/products', { state: { category } });
//     };

//     return (
//         <div className='navbar'>
//             <Link to="/">
//                 <img src={logo} alt="Logo" className='logo' />
//             </Link>
//             <ul className='links'>
//                 <li><Link to="/men">MEN</Link></li> {/* Link to Men Products List */}
//                 <li onClick={() => handleCategoryClick('women')}>WOMEN</li>
//                 <li><Link to="/sell-with-us">SELL WITH US</Link></li>
//             </ul>
//             <div className='search-box'>
//                 <input 
//                     type="text" 
//                     placeholder='Search' 
//                     value={searchTerm}
//                     onChange={handleSearchChange}
//                     aria-label="Search"
//                 />
//                 <img src={searchw} alt="Search Icon" />
//             </div>
//             <FaHeart className='navbar-icons' aria-label="Wishlist" />
//             <div ref={dropdownRef} className='dropdown-container'>
//                 <FaRegUser className='navbar-icons' onClick={toggleDropdown} aria-label="User" />
//                 {isDropdownOpen && (
//                     <div className="dropdown-menu">
//                         <ul>
//                             <li onClick={() => handleNavigation('/account')}>My Account</li>
//                             <li onClick={() => handleNavigation('/login')}>Login/SignUp</li>
//                         </ul>
//                     </div>
//                 )}
//             </div>
//             <FaShoppingCart className='navbar-icons' aria-label="Cart" />
//         </div>
//     );
// };

// export default Navbar;











// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Navbar.css';
// import logo from '../Assets/Rentique.png';
// import searchw from '../Assets/search-w.png';
// import { FaRegUser, FaShoppingCart, FaHeart } from "react-icons/fa";

// const Navbar = ({ onSearch }) => {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [isDropdownOpen, setDropdownOpen] = useState(false);
//     const dropdownRef = useRef(null);
//     const navigate = useNavigate();

//     const handleSearchChange = (event) => {
//         setSearchTerm(event.target.value);
//         onSearch(event.target.value);
//     };

//     const toggleDropdown = () => {
//         setDropdownOpen(prev => !prev);
//     };

//     const handleClickOutside = (event) => {
//         if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//             setDropdownOpen(false);
//         }
//     };

//     useEffect(() => {
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     const handleNavigation = (path) => {
//         navigate(path);
//         setDropdownOpen(false);
//     };

//     const handleCategoryClick = (category) => {
//         navigate('/products', { state: { category } });
//     };

//     return (
//         <div className='navbar'>
//             <Link to="/">
//                 <img src={logo} alt="Logo" className='logo' />
//             </Link>
//             <ul className='links'>
//                 <li><Link to="/men">MEN</Link></li> {/* Link to Men Products List */}
//                 <li onClick={() => handleCategoryClick('women')}>WOMEN</li>
//                 <li><Link to="/sell-with-us">SELL WITH US</Link></li>
//             </ul>
//             <div className='search-box'>
//                 <input 
//                     type="text" 
//                     placeholder='Search' 
//                     value={searchTerm}
//                     onChange={handleSearchChange}
//                     aria-label="Search"
//                 />
//                 <img src={searchw} alt="Search Icon" />
//             </div>
//             <FaHeart className='navbar-icons' aria-label="Wishlist" />
//             <div ref={dropdownRef} className='dropdown-container'>
//                 <FaRegUser className='navbar-icons' onClick={toggleDropdown} aria-label="User" />
//                 {isDropdownOpen && (
//                     <div className="dropdown-menu">
//                         <ul>
//                             <li onClick={() => handleNavigation('/account')}>My Account</li>
//                             <li onClick={() => handleNavigation('/signin')}>Sign In</li>
//                             <li onClick={() => handleNavigation('/signup')}>Sign Up</li>
//                         </ul>
//                     </div>
//                 )}
//             </div>
//             <FaShoppingCart className='navbar-icons' aria-label="Cart" />
//         </div>
//     );
// };

// export default Navbar;


// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Navbar.css';
// import logo from '../Assets/Rentique.png';
// import searchw from '../Assets/search-w.png';
// import { FaRegUser, FaShoppingCart, FaHeart } from "react-icons/fa";

// const Navbar = ({ onSearch }) => {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [isDropdownOpen, setDropdownOpen] = useState(false);
//     const dropdownRef = useRef(null);
//     const navigate = useNavigate();

//     const handleSearchChange = (event) => {
//         setSearchTerm(event.target.value);
//         onSearch(event.target.value);
//     };

//     const toggleDropdown = () => {
//         setDropdownOpen(prev => !prev);
//     };

//     const handleClickOutside = (event) => {
//         if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//             setDropdownOpen(false);
//         }
//     };

//     useEffect(() => {
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     const handleNavigation = (path) => {
//         navigate(path);
//         setDropdownOpen(false);
//     };

//     const handleCategoryClick = (category) => {
//         navigate('/products', { state: { category } });
//     };

//     return (
//         <div className='navbar'>
//             <Link to="/">
//                 <img src={logo} alt="Logo" className='logo' />
//             </Link>
//             <ul className='links'>
//                 <li><Link to="/men">MEN</Link></li>
//                 <li onClick={() => handleCategoryClick('women')}>WOMEN</li>
//                 <li><Link to="/sell-with-us">SELL WITH US</Link></li>
//             </ul>
//             <div className='search-box'>
//                 <input 
//                     type="text" 
//                     placeholder='Search' 
//                     value={searchTerm}
//                     onChange={handleSearchChange}
//                     aria-label="Search"
//                 />
//                 <img src={searchw} alt="Search Icon" />
//             </div>
//             <FaHeart className='navbar-icons' aria-label="Wishlist" />
//             <div ref={dropdownRef} className='dropdown-container'>
//                 <FaRegUser className='navbar-icons' onClick={toggleDropdown} aria-label="User" />
//                 {isDropdownOpen && (
//                     <div className="dropdown-menu">
//                         <ul>
//                             <li onClick={() => handleNavigation('/account')}>My Account</li>
//                             <li onClick={() => handleNavigation('/signin')}>SignIn</li>
//                             <li onClick={() => handleNavigation('/signup')}>SignUp</li>
//                         </ul>
//                     </div>
//                 )}
//             </div>
//             <FaShoppingCart className='navbar-icons' aria-label="Cart" />
//         </div>
//     );
// };

// export default Navbar;




// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Navbar.css';
// import logo from '../Assets/Rentique.png';
// import searchw from '../Assets/search-w.png';
// import { FaRegUser, FaShoppingCart, FaHeart } from "react-icons/fa";

// const Navbar = ({ onSearch }) => {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [isDropdownOpen, setDropdownOpen] = useState(false);
//     const dropdownRef = useRef(null);
//     const navigate = useNavigate();

//     const handleSearchChange = (event) => {
//         setSearchTerm(event.target.value);
//         onSearch(event.target.value);
//     };

//     const toggleDropdown = () => {
//         setDropdownOpen(prev => !prev);
//     };

//     const handleClickOutside = (event) => {
//         if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//             setDropdownOpen(false);
//         }
//     };

//     useEffect(() => {
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     const handleNavigation = (path) => {
//         navigate(path);
//         setDropdownOpen(false);
//     };

//     const handleCategoryClick = (category) => {
//         navigate('/products', { state: { category } });
//     };

//     return (
//         <div className='navbar'>
//             <Link to="/">
//                 <img src={logo} alt="Logo" className='logo' />
//             </Link>
//             <ul className='links'>
//                 <li><Link to="/men">MEN</Link></li>
//                 <li onClick={() => handleCategoryClick('women')}>WOMEN</li>
//                 <li><Link to="/sell-with-us">SELL WITH US</Link></li> {/* Update this link */}
//             </ul>
//             <div className='search-box'>
//                 <input 
//                     type="text" 
//                     placeholder='Search' 
//                     value={searchTerm}
//                     onChange={handleSearchChange}
//                     aria-label="Search"
//                 />
//                 <img src={searchw} alt="Search Icon" />
//             </div>
//             <FaHeart className='navbar-icons' aria-label="Wishlist" />
//             <div ref={dropdownRef} className='dropdown-container'>
//                 <FaRegUser className='navbar-icons' onClick={toggleDropdown} aria-label="User" />
//                 {isDropdownOpen && (
//                     <div className="dropdown-menu">
//                         <ul>
//                             <li onClick={() => handleNavigation('/account')}>My Account</li>
//                             <li onClick={() => handleNavigation('/signin')}>SignIn/SignUp</li>
//                         </ul>
//                     </div>
//                 )}
//             </div>
//             <FaShoppingCart className='navbar-icons' aria-label="Cart" />
//         </div>
//     );
// };

// export default Navbar;








//WORKING CODE !!!!!!!!

// import React, { useState } from 'react';
// import './Navbar.css';
// import logo from '../Assets/Rentique.png';
// import searchw from '../Assets/search-w.png';
// import { FaRegUser, FaShoppingCart, FaHeart } from "react-icons/fa";

// const Navbar = ({ onSearch }) => {
//     const [searchTerm, setSearchTerm] = useState("");

//     const handleSearchChange = (event) => {
//         setSearchTerm(event.target.value);
//         onSearch(event.target.value);
//     };

//     return (
//         <div className='navbar'>
//             <img src={logo} alt="" className='logo'></img>
//             <ul>
//                 <li>MEN</li>
//                 <li>WOMEN</li>
//                 <li>SELL WITH US</li>
//             </ul>
//             <div className='search-box'>
//                 <input 
//                     type="text" 
//                     placeholder='Search' 
//                     value={searchTerm}
//                     onChange={handleSearchChange}
//                 />
//                 <img src={searchw} alt=""/>
//             </div>
//             <FaHeart className='navbar-icons'/>
//             <FaRegUser className='navbar-icons'/>
//             <FaShoppingCart className='navbar-icons'/>
//         </div>
//     );
// };

// export default Navbar;




// import React from 'react';
// import './Navbar.css';
// import logo from '../Assets/Rentique.png';
// import searchw from '../Assets/search-w.png';
// import { FaRegUser } from "react-icons/fa";
// import { FaShoppingCart } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa";



// const Navbar = () => {
//     return(
//         <div className='navbar'>
//             <img src={logo} alt="" className='logo'></img>
//             <ul>
//              <li>MEN</li>
//              <li>WOMEN</li>
//              <li>SELL WITH US</li>
             
//             </ul>

//             <div className='search-box'>
//                 <input type="text" placeholder='Search'/>
//                 <img src={searchw} alt=""/>
//             </div>
    
//                 <FaHeart className='navbar-icons'/>
//                 <FaRegUser className='navbar-icons'/>
//                 <FaShoppingCart className='navbar-icons'/>
//         </div>
//     )
// }
// export default Navbar;


// import logo_light from '../Assets/logo-black.png';
// import logo_dark from '../Assets/logo-white.png';
// import search_icon_dark from '../Assets/search-b.png';
// import toggle_light from '../Assets/night.png';
// import toggle_dark from '../Assets/day.png';

// const Navbar = ({theme, setTheme}) => {

//     const toggle_mode = () => {
//         theme == 'light' ? setTheme('dark') : setTheme('light');
//         console.log('clicked');
//     }
//     return(
//         <div className='navbar'>
//             <img src={theme == 'light' ? logo_light:logo_dark} alt="" className='logo'></img>
//             <ul>
//              <li>MEN</li>
//              <li>WOMEN</li>
//              <li>SELL WITH US</li>
             
//             </ul>

//             <div className='search-box'>
//                 <input type="text" placeholder='Search'/>
//                 <img src={theme == 'light' ? search_icon_light : search_icon_dark} alt=""/>
//             </div>

//             <img onClick={()=>{toggle_mode()}} src={theme == 'light' ? toggle_light : toggle_dark} alt="" className='toggle-icon'/>

//         </div>
//     )
// }
// export default Navbar;