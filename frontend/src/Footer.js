const Footer = () => {
    return (  
        <>
                 <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>E-commerce</title>
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
  />
  <link rel="stylesheet" href="assets/home/style.css" />
          <section id="header"></section>
         <footer className="section-p1">
    <div className="col">
      <img className="logo" src="assets/Home/logo1.png" alt="" />
      <h4>Contact</h4>
      <p>
        <strong>Address:</strong> Hegaz street , Cairo
      </p>
      <p>
        <strong>Phone:</strong> (+2) 0123456789
      </p>
      <div className="follow">
        <h4>Follow Us</h4>
        <div className="icon">
          <i className="fab fa-facebook-f" />
          <i className="fab fa-twitter" />
          <i className="fab fa-instagram" />
          <i className="fab fa-youtube" />
        </div>
      </div>
    </div>
    <div className="col">
      <h4>About</h4>
      <a href="#">About Us</a>
      <a href="#">Delivery Information</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms &amp; Conditions</a>
      <a href="#">Contact Us</a>
    </div>
    <div className="col">
      <h4>My Account</h4>
      <a href="#">Sign In</a>
      <a href="#">View Cart</a>
      <a href="#">My Wishlist</a>
      <a href="#">Track My Order</a>
      <a href="#">Help</a>
    </div>
    <div className="col install">
      <h4>Install App</h4>
      <p>From App Store or Google Play</p>
      <div className="row">
        <img src="assets/Home/app.jpg" alt="" />
        <img src="assets/Home/play.jpg" alt="" />
      </div>
      <p>Secure Payment Gateway</p>
      <img src="assets/Home/pay.png" alt="" />
    </div>
  </footer>
        </>
    );
}
 
export default Footer;