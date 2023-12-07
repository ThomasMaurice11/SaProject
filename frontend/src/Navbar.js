import { Link } from "react-router-dom/cjs/react-router-dom";
import { useLogout } from './hooks/useLogout'
const Navbar = () => {
  const { logout } = useLogout()

  const handleClick = () => {
    logout()
  }
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
          <Link to="/SavedItems">Saved Items</Link>
        </li>
        <li>
          <Link to="/Cart">Cart</Link>
        </li>
        <li>
        
          <button id="logout-btn" onClick={handleClick}>Log out</button>
          
        </li>
      </ul>
    </div>
  </section>
  </>
     );
}
 
export default Navbar;
