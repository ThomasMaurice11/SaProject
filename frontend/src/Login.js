const Login = () => {
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
            <a href="#" className="signup-image-link">
              Create an account
            </a>
          </div>
          <div className="signin-form">
            <h2 className="form-title">Login</h2>
            <form method="POST" className="register-form" id="login-form">
              <div className="form-group">
                <label htmlFor="your_name">
                  <i className="zmdi zmdi-account material-icons-name" />
                </label>
                <input
                  type="text"
                  name="your_name"
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
                  id="your_pass"
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="agree-term"
                />
                <label htmlFor="remember-me" className="label-agree-term">
                  <span>
                    <span />
                  </span>
                  Remember me
                </label>
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
            <div className="social-login">
              <span className="social-label">Or login with</span>
              <ul className="socials">
                <li>
                  <a href="#">
                    <i className="display-flex-center zmdi zmdi-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="display-flex-center zmdi zmdi-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="display-flex-center zmdi zmdi-google" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  
      </>  
     );
}
 
export default Login;
