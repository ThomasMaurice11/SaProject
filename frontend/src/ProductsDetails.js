import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



// Import local styles
// import './assets/ProductsDetails/style.css';

// Import external library styles
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'https://fonts.googleapis.com/css2?family=Poppins&display=swap';


const ProductsDetails = () => {
  // const { productId } = useParams();
  // const [product, setProduct] = useState(null)

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const response = await fetch(`/api/products/${productId}`)
  //     const json = await response.json()

  //     if (response.ok) {
  //       setProduct(json)
  //     }
  //   }

  //   fetchProduct()
  // }, [])
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${productId}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }

        const productData = await response.json();
        setProduct(productData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProduct();
  }, []);

  if (!product) {
    // Loading state or error handling can be added here
    return <div>Loading...</div>;
  }




    return (  
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title>Product Page</title>
  <link rel="stylesheet" href="assets/ProductsDetails/style.css" />
  <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/css/bootstrap.min.css"
      />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
    rel="stylesheet"
  />
  <div className="container">
    
 
    <div className="product">
      <div className="images">
        <div className="slider">
          <img src="imgs/Image-1.jpeg" alt="" />
        </div>
        <div className="thumbnail">
          <div className="thumb active">
            <img src="imgs/Image-1.jpeg" alt="" />
          </div>
          <div className="thumb">
            <img src="imgs/Image-2.png" alt="" />
          </div>
          <div className="thumb">
            <img src="imgs/Image-3.png" alt="" />
          </div>
        </div>
      </div>
      <div className="info">
        <h1>{product.name}</h1>
        <div className="rating">
          <h4 className="review">3 Reviews</h4>
          <a href="" className="review">
            add Your Review
          </a>
        </div>
        <h1 className="price">{product.price}</h1>
        <h4 className="title">Color</h4>
        <div className="colors">
          <span className="color green" />
          <span className="color orange" />
          <span className="color pink" />
        </div>
        <h4 className="title">Size</h4>
        <div className="sizes">
          <span className="size">XS</span>
          <span className="size">S</span>
          <span className="size">M</span>
          <span className="size">L</span>
          <span className="size">XL</span>
        </div>
        <h4 className="title">Qty</h4>
        <input type="text" defaultValue={1} className="qty" />
        <a href="" className="cart">
          Add to cart
        </a>
      </div>
    </div>
  </div>
</>

    );
}
 
export default ProductsDetails;