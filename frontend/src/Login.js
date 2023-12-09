import { useState } from "react"
import { useLogin } from "./hooks/useLogin"
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useParams,useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the user is an admin
    if (email === 'admin@gmail.com' && password === 'admin') {
      history.push('/addProduct');
    } else {
      // If not an admin, proceed with the normal login
      await login(email, password);
      history.push('/Home');
    }
  }
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
        <section className="sign-in">
      <div className="container">
        <div className="signin-content">
          <div className="signin-image">
            <figure>
              <img src="assets/reg/images/signin-image.jpg" alt="sing up image" />
            </figure>
            <Link to="/SignUp" className="signup-image-link">
              Create an account
            </Link>
          </div>
          <div className="signin-form">
            <h2 className="form-title">Login</h2>
            <form method="POST" className="register-form" onSubmit={handleSubmit} id="login-form">
              <div className="form-group">
                <label htmlFor="your_name">
                  <i className="zmdi zmdi-account material-icons-name" />
                </label>
                <input
                  type="text"
                  name="your_name"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email} 
                  id="your_name"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="your_pass">
                  <i className="zmdi zmdi-lock" />
                </label>
                <input
                  type="password"
                  name="your_pass"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password} 
                  id="your_pass"
                  placeholder="Password"
                />
              </div>
          
              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signin"
                  id="signin"
                  className="form-submit"
                  defaultValue="Log in"
                />
              </div>
            </form>
           
          </div>
        </div>
      </div>
    </section>
    </div>
  
      </>  
     );
}
 
export default Login;
