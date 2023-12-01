const SignUp = () => {
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
            <form method="POST" className="register-form" id="register-form">
              <div className="form-group">
                <label htmlFor="name">
                  <i className="zmdi zmdi-account material-icons-name" />
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
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
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="re-pass">
                  <i className="zmdi zmdi-lock-outline" />
                </label>
                <input
                  type="password"
                  name="re_pass"
                  id="re_pass"
                  placeholder="Repeat your password"
                />
              </div>
              <div className="form-group">
                <input
                  type="checkbox"
                  name="agree-term"
                  id="agree-term"
                  className="agree-term"
                />
                <label htmlFor="agree-term" className="label-agree-term">
                  <span>
                    <span />
                  </span>
                  I agree all statements in{" "}
                  <a href="#" className="term-service">
                    Terms of service
                  </a>
                </label>
              </div>
              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="form-submit"
                  defaultValue="Register"
                />
              </div>
            </form>
          </div>
          <div className="signup-image">
            <figure>
              <img src="assets/reg/images/signup-image.jpg" alt="sing up image" />
            </figure>
            <a href="#" className="signup-image-link">
              I am already member
            </a>
          </div>
        </div>
      </div>
    </section>
    </div>
    
        </>
     );
}
 
export default SignUp;
