import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom/cjs/react-router-dom";

const Cart = () => {

  // get products from cart
  const { userId } = useParams();
  const [products, setProducts] = useState(null);

 
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/cart`);

        if (response.ok) {
          const productData = await response.json();
          setProducts(productData);
          console.log(productData);
        } else {
          console.error('Failed to fetch product:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchProduct();
  }, [userId]);

  if (!products) {
    return <div>Loading...</div>;
  }


    return ( 
    
        <>
       <>
       
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  />

  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
</>

      <link rel='stylesheet' href='assets/Cart/style.css'></link>
      <div className="allCart">
<div className="card">
  <div className="row">
    <div className="col-md-8 cart">
      <div className="title">
        <div className="row">
          <div className="col">
            <h4>
              <b>Shopping Cart</b>
            </h4>
          </div>
          
        </div>
      </div>
      {products && products.map((product) => (
      <div className="row">
        <div className="row main align-items-center">
          <div className="col-2">
            <img className="img-fluid" src="https://i.imgur.com/ba3tvGm.jpg" />
          </div>
          <div className="col">
            <div className="row text-muted">{product.name}</div>
            <div className="row">{product.brand}</div>
          </div>
          <div className="col">
            <a href="#">-</a>
            <a href="#" className="border">
              1
            </a>
            <a href="#">+</a>
          </div>
          <div className="col">
            {product.price}$ <span className="close">✕</span>
          </div>
        </div>
      </div>
      ))}
  
      <div className="back-to-shop">
        <a href="#">←</a>
        <span className="text-muted">Back to shop</span>
      </div>
    </div>
    <div className="col-md-4 summary">
      
      
      <Link to ='/Payment'>
      <button className="btn">Pay By Card</button>
      </Link>
      <button className="btn">CHECKOUT</button>
    </div>
  </div>
</div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" />
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js" />
</>
     );
}
 
export default Cart;