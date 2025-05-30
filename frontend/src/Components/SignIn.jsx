import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const adminEmail = 'admin@gmail.com';
  const adminPassword = '123';

  const handleSignIn = async (e) => {
    e.preventDefault();

    console.log('Attempting to sign in with email:', email);

    // Check if the credentials are for the admin
    if (email === adminEmail && password === adminPassword) {
      alert('Admin login successful!');
      localStorage.setItem('email', email);
      navigate('/admin/dashboard', { state: { email } }); 
      return;
    }

    // Proceed with regular user login
    try {
      const response = await axios.post('http://localhost:8080/api/users/login', {
        email,
        password,
      });

      console.log('Server response:', response);

      if (response.status === 200) {
        const { email } = response.data; 
        localStorage.setItem('email', email);
        console.log('Email stored in localStorage:', email); 

        alert('Login successful!');
        navigate('/', { state: { email } }); 
      } else {
        console.log('Login failed with status:', response.status);
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert('Error logging in. Please check your credentials.');
    }
  };

  return (
    <form className="sign-in-form" onSubmit={handleSignIn}>
      <h2 className="title">Sign in</h2>
      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          style={{ textTransform: 'lowercase' }}
        />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          style={{ textTransform: 'lowercase' }}
        />
      </div>
      <input type="submit" value="Login" className="btn solid" />
      <p className="social-text">Or Sign in with social platforms</p>
      <div className="social-media">
        <a href="https://www.facebook.com/signup" className="social-icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com/i/flow/signup" className="social-icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://myaccount.google.com/" className="social-icon">
          <i className="fab fa-google"></i>
        </a>
        <a href="https://appleid.apple.com/sign-in" className="social-icon">
          <i className="fab fa-apple"></i>
        </a>
      </div>
    </form>
  );
}

export default SignIn;



// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function SignIn() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   // Predefined admin credentials (you can later fetch these from an environment variable or a secure source)
//   const adminEmail = 'admin123@gmail.com';
//   const adminPassword = '123';

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/api/users/login', {
//         email,
//         password,
//       });

//       if (response.status === 200) {
//         const { email } = response.data; 
//         localStorage.setItem('email', email);
//         console.log('Email stored in localStorage:', email); 

//         // Check if the logged-in user is an admin
//         if (email === adminEmail && password === adminPassword ) {
//           alert('Admin login successful!');
//           navigate('/admin/womenproducts', { state: { email } }); // Redirect to admin dashboard
//         } else {
//           alert('Login successful!');
//           navigate('/', { state: { email } }); // Redirect to user homepage
//         }
//       } else {
//         alert('Login failed. Please check your credentials.');
//       }
//     } catch (error) {
//       console.error("There was an error logging in!", error);
//       alert('Error logging in. Please check your credentials.');

//     }
//   };

//   return (
//     <form className="sign-in-form" onSubmit={handleSignIn}>
//       <h2 className="title">Sign in</h2>
//       <div className="input-field">
//         <i className="fas fa-envelope"></i>
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}   style={{ textTransform: 'lowercase' }}/>
//         {/* <input 
//           type="email" 
//           placeholder="Email" 
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)} 
//         /> */}
//       </div>
//       <div className="input-field">
//         <i className="fas fa-lock"></i>
//         <input 
//           type="password" 
//           placeholder="Password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} style={{ textTransform: 'lowercase' }}
//         />
//       </div>
//       <input type="submit" value="Login" className="btn solid" />
//       <p className="social-text">Or Sign in with social platforms</p>
//       <div className="social-media">
//         <a href="https://www.facebook.com/signup" className="social-icon">
//           <i className="fab fa-facebook-f"></i>
//         </a>
//         <a href="https://twitter.com/i/flow/signup" className="social-icon">
//           <i className="fab fa-twitter"></i>
//         </a>
//         <a href="https://myaccount.google.com/" className="social-icon">
//           <i className="fab fa-google"></i>
//         </a>
//         <a href="https://appleid.apple.com/sign-in" className="social-icon">
//           <i className="fab fa-apple"></i>
//         </a>
//       </div>
//     </form>
//   );
// }

// export default SignIn;





//Working code 11th AUG 24
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function SignIn() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/api/users/login', {
//         email,
//         password,
//       });

//       if (response.status === 200) {
//         const { email } = response.data; // Adjust based on your API response
//         localStorage.setItem('email', email);
//         console.log('Email stored in localStorage:', email); // Debugging
//         alert('Login successful!');
//         navigate('/', { state: { email } });
//       } else {
//         alert('Login failed. Please check your credentials.');
//       }
//     } catch (error) {
//       console.error("There was an error logging in!", error);
//       alert('Error logging in. Please check your credentials.');
//     }
//   };

//   return (
//     <form className="sign-in-form" onSubmit={handleSignIn}>
//       <h2 className="title">Sign in</h2>
//       <div className="input-field">
//         <i className="fas fa-envelope"></i>
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       </div>
//       <div className="input-field">
//         <i className="fas fa-lock"></i>
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </div>
//       <input type="submit" value="Login" className="btn solid" />
//       <p className="social-text">Or Sign in with social platforms</p>
//       <div className="social-media">
//         <a href="https://www.facebook.com/signup" className="social-icon">
//           <i className="fab fa-facebook-f"></i>
//         </a>
//         <a href="https://twitter.com/i/flow/signup" className="social-icon">
//           <i className="fab fa-twitter"></i>
//         </a>
//         <a href="https://myaccount.google.com/" className="social-icon">
//           <i className="fab fa-google"></i>
//         </a>
//         <a href="https://appleid.apple.com/sign-in" className="social-icon">
//           <i className="fab fa-apple"></i>
//         </a>
//       </div>
//     </form>
//   );
// }

// export default SignIn;




// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function SignIn() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/api/users/login', {
//         email,
//         password,
//       });

//       // Assuming the response contains the user object with a username
//       if (response.status === 200) {
//         const { username } = response.data; // Extract the username from the response
//         // Store the username in localStorage or another method to persist across pages
//         localStorage.setItem('username', username);
//         alert('Login successful!');
//         navigate('/', { state: { username } }); // Redirect with username
//       } else {
//         alert('Login failed. Please check your credentials.');
//       }
//     } catch (error) {
//       console.error("There was an error logging in!", error);
//       alert('Error logging in. Please check your credentials.');
//     }
//   };

//   return (
//     <form className="sign-in-form" onSubmit={handleSignIn}>
//       <h2 className="title">Sign in</h2>
//       <div className="input-field">
//         <i className="fas fa-envelope"></i>
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       </div>
//       <div className="input-field">
//         <i className="fas fa-lock"></i>
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </div>
//       <input type="submit" value="Login" className="btn solid" />
//       <p className="social-text">Or Sign in with social platforms</p>
//       <div className="social-media">
//         <a href="#" className="social-icon">
//           <i className="fab fa-facebook-f"></i>
//         </a>
//         <a href="#" className="social-icon">
//           <i className="fab fa-twitter"></i>
//         </a>
//         <a href="#" className="social-icon">
//           <i className="fab fa-google"></i>
//         </a>
//         <a href="#" className="social-icon">
//           <i className="fab fa-linkedin-in"></i>
//         </a>
//       </div>
//     </form>
//   );
// }

// export default SignIn;






//WORKING CODE 3rd AUG 24
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function SignIn() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/api/users/login', {
//         email, // Use email instead of username
//         password,
//       });
//       // Check if the login is successful
//       if (response.status === 200) {
//         alert('Login successful!');
//         navigate('/'); // Redirect to home page
//       } else {
//         alert('Login failed. Please check your credentials.');
//       }
//     } catch (error) {
//       console.error("There was an error logging in!", error);
//       alert('Error logging in. Please check your credentials.');
//     }
//   };

//   return (
//     <form className="sign-in-form" onSubmit={handleSignIn}>
//       <h2 className="title">Sign in</h2>
//       <div className="input-field">
//         <i className="fas fa-envelope"></i>
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       </div>
//       <div className="input-field">
//         <i className="fas fa-lock"></i>
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </div>
//       <input type="submit" value="Login" className="btn solid" />
//       <p className="social-text">Or Sign in with social platforms</p>
//       <div className="social-media">
//         <a href="#" className="social-icon">
//           <i className="fab fa-facebook-f"></i>
//         </a>
//         <a href="#" className="social-icon">
//           <i className="fab fa-twitter"></i>
//         </a>
//         <a href="#" className="social-icon">
//           <i className="fab fa-google"></i>
//         </a>
//         <a href="#" className="social-icon">
//           <i className="fab fa-linkedin-in"></i>
//         </a>
//       </div>
//     </form>
//   );
// }

// export default SignIn;









// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function SignIn() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/api/users/login', {
//         username,
//         password,
//       });
//       // Check if the login is successful
//       if (response.status === 200) {
//         alert('Login successful!');
//         navigate('/'); // Redirect to home page
//       } else {
//         alert('Login failed. Please check your credentials.');
//       }
//     } catch (error) {
//       console.error("There was an error logging in!", error);
//       alert('Error logging in. Please check your credentials.');
//     }
//   };

//   return (
//     <form className="sign-in-form" onSubmit={handleSignIn}>
//       <h2 className="title">Sign in</h2>
//       <div className="input-field">
//         <i className="fas fa-user"></i>
//         <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
//       </div>
//       <div className="input-field">
//         <i className="fas fa-lock"></i>
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </div>
//       <input type="submit" value="Login" className="btn solid" />
//       <p className="social-text">Or Sign in with social platforms</p>
//       <div className="social-media">
//         <a href="#" className="social-icon">
//           <i className="fab fa-facebook-f"></i>
//         </a>
//         <a href="#" className="social-icon">
//           <i className="fab fa-twitter"></i>
//         </a>
//         <a href="#" className="social-icon">
//           <i className="fab fa-google"></i>
//         </a>
//         <a href="#" className="social-icon">
//           <i className="fab fa-linkedin-in"></i>
//         </a>
//       </div>
//     </form>
//   );
// }

// export default SignIn;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function SignIn() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/api/users/login', {
//         username,
//         password,
//       });
//       alert('Login successful!');
//       // navigate to home page after successful login
//       navigate('/'); // Uncomment this line if you have routing set up
//     } catch (error) {
//       console.error("There was an error logging in!", error);
//       alert('Error logging in');
//     }
//   };

//   return (
//     <form className="sign-in-form" onSubmit={handleSignIn}>
//       <h2 className="title">Sign in</h2>
//       <div className="input-field">
//         <i className="fas fa-user"></i>
//         <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
//       </div>
//       <div className="input-field">
//         <i className="fas fa-lock"></i>
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </div>
//       <input type="submit" value="Login" className="btn solid" />
//       <p className="social-text">Or Sign in with social platforms</p>
//       <div className="social-media">
//         <a href="#" className="social-icon">
//           <i className="fab fa-facebook-f"></i>
//         </a>
//         <a href="#" className="social-icon">
//           <i className="fab fa-twitter"></i>
//         </a>
//         <a href="#" className="social-icon">
//           <i className="fab fa-google"></i>
//         </a>
//         <a href="#" className="social-icon">
//           <i className="fab fa-linkedin-in"></i>
//         </a>
//       </div>
//     </form>
//   );
// }

// export default SignIn;



// import React from 'react';

// function SignIn() {
//   return (
//     <form className="sign-in-form">
//       <h2 className="title">Sign in</h2>
//       <div className="input-field">
//         <i className="fas fa-user"></i>
//         <input type="text" placeholder="Username" />
//       </div>
//       <div className="input-field">
//         <i className="fas fa-lock"></i>
//         <input type="password" placeholder="Password" />
//       </div>
//       <input type="submit" value="Login" className="btn solid" />
//       <p className="social-text">Or Sign in with social platforms</p>
//       <div className="social-media">
//         <a href="#" className="social-icon">
//           <i className="fab fa-facebook-f"></i>
//         </a>
//         <a href="#" className="social-icon">
//           <i className="fab fa-twitter"></i>
//         </a>
//         <a href="#" className="social-icon">
//           <i className="fab fa-google"></i>
//         </a>
//         <a href="#" className="social-icon">
//           <i className="fab fa-linkedin-in"></i>
//         </a>
//       </div>
//     </form>
//   );
// }

// export default SignIn;
