import { Link } from "react-router-dom/cjs/react-router-dom";
import { useLogout } from './hooks/useLogout'
import { useUser } from './context/userContext';
import { useParams,useHistory } from 'react-router-dom';
import React from "react";
const Navbar = () => {
  const history = useHistory();
  const userId = useUser();
  const { logout } = useLogout() ;


  const handleClick = () => {
    logout();
    history.push('/');
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
        <li><p>{userId}</p></li>
        <li>
          <Link to="/Home">
            Home
          </Link>
        </li>
        <li>
          <Link to={`/Myprofile/${userId}`}>My profile </Link>
        </li>
        <li>
          <Link to="/Products">products</Link>
        </li>
       
        <li>
          <Link to="/SavedItems">Saved Items</Link>
        </li>
        <li>
        <Link to={`/cart`}>Cart</Link>

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
