import { Link } from "react-router-dom/cjs/react-router-dom";
const Navbar = () => {
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
          <section id="header">
    <a href="#">
      <img src="assets/home/logo1.png" className="logo1" alt="" />
    </a>
    <div>
      <ul id="navbar">
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to='/Myprofile'>My profile</Link>
        </li>
        <li>
          <Link to="/Products">products</Link>
        </li>
        <li>
          <a href="about.html">About</a>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
        <li>
          <Link to="/Cart">Cart</Link>
        </li>
      </ul>
    </div>
  </section>
  </>
     );
}
 
export default Navbar;