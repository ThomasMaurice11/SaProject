import { useSignup } from "./hooks/useSignup"
import { Link } from "react-router-dom/cjs/react-router-dom";
import React, { useEffect, useState } from 'react';
import { useParams,useHistory } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext'
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [fname, setFname] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');

  const { signup, error } = useSignup();
  const history = useHistory(); 
  const { user } = useAuthContext()// Add this line to use the useHistory hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const data = { fname, mobile, address };

  
    await signup(email, password,fname,mobile,address);
   
    
  };
    return ( 
        <>
        <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title>Sign Up Form by Colorlib</title>
  {/* Font Icon */}
  <link
    rel="stylesheet"
    href="assets/reg/fonts/material-icon/css/material-design-iconic-font.min.css"
  />
  {/* Main css */}
  <link rel="stylesheet" href="assets/reg/css/style.css" />
  <div className="main">
    {/* Sign up form */}
    <section className="signup">
      <div className="container">
        <div className="signup-content">
          <div className="signup-form">
            <h2 className="form-title">Sign up</h2>
            <form method="POST" className="register-form" onSubmit={handleSubmit} id="register-form">
              <div className="form-group">
                <label htmlFor="name">
                  <i className="zmdi zmdi-account material-icons-name" />
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={(e) => setFname(e.target.value)} 
                  value={fname}
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <i className="zmdi zmdi-email" />
                </label>
                <input
                  type="mobile"
                  name="mobile"
                  id="email"
                  onChange={(e) => setMobile(e.target.value)} 
                  value={mobile}
                  placeholder="Your Mobile"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <i className="zmdi zmdi-email" />
                </label>
                <input
                  type="address"
                  name="address"
                  id="email"
                  onChange={(e) => setAddress(e.target.value)} 
                  value={address}
                  placeholder="Your address"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <i className="zmdi zmdi-email" />
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)} 
                  value={email}
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="pass">
                  <i className="zmdi zmdi-lock" />
                </label>
                <input
                  type="password"
                  name="pass"
                  id="pass"
                  onChange={(e) => setPassword(e.target.value)} 
                  value={password}
                  placeholder="Password"
                />
              </div>
              {/* <div className="form-group form-button">
              <button name="signup"  id="signup"  disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
      </div> */}
              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="form-submit"
                  defaultValue="Register"
                />
              
              </div>
              {error && <div className="error">{error}</div>}
            </form>
          </div>
          <div className="signup-image">
            <figure>
              <img src="assets/reg/images/signup-image.jpg" alt="sing up image" />
            </figure>
            <Link to='/' className="signup-image-link">
              I am already member
            </Link>
          </div>
        </div>
      </div>
    </section>
    </div>
    
        </>
     );
}
 
export default SignUp;
