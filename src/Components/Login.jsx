import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import '../styles/Login.css';                                                           

function Login() {
  const [isSignUpMode, setSignUpMode] = useState(false);

  const toggleMode = () => {
    setSignUpMode(!isSignUpMode);
  };

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {isSignUpMode ? <SignUp /> : <SignIn />}
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>Discover stunning bridal and groom rentals. Find your perfect outfit for an unforgettable day.</p>
            <button className="btn transparent" onClick={toggleMode}>
              Sign up
            </button>
          </div>
          <img src="/assets/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>Sign in to access exclusive bridal and groom rentals. Elegant styles await you!</p>
            <button className="btn transparent" onClick={toggleMode}>
              Sign in
            </button>
          </div>
          <img src="/assets/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;



// import React,{useState} from 'react';
// import SignIn from './SignIn';
// import SignUp from './SignUp';
// import '../styles/Login.css';

// function Login() {
//     const [isSignUpMode, setSignUpMode] = useState(false);
  
//     const toggleMode = () => {
//       setSignUpMode(!isSignUpMode);
//     };
  
//     return (
//       <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
//         <div className="forms-container">
//           <div className="signin-signup">
//             <SignIn />
//             <SignUp />
//           </div>
//         </div>
//         <div className="panels-container">
//           <div className="panel left-panel">
//             <div className="content">
//               <h3>New here?</h3>
//               <p>Discover stunning bridal and groom rentals. Find your perfect outfit for an unforgettable day.</p>
//               <button className="btn transparent" onClick={toggleMode}>
//                 Sign up
//               </button>
//             </div>
//             <img src="/assets/log.svg" className="image" alt="" />
//           </div>
//           <div className="panel right-panel">
//             <div className="content">
//               <h3>One of us?</h3>
//               <p>Sign in to access exclusive bridal and groom rentals. Elegant styles await you!</p>
//               <button className="btn transparent" onClick={toggleMode}>
//                 Sign in
//               </button>
//             </div>
//             <img src="/assets/register.svg" className="image" alt="" />
//           </div>
//         </div>
//       </div>
//     );
//   }

//   export default Login;