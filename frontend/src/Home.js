import { Link } from "react-router-dom/cjs/react-router-dom";
import { useEffect, useState } from "react"
const Home = () => {




  const [products, setProducts] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products')
      const json = await response.json()

      if (response.ok) {
        setProducts(json)
      }
    }

    fetchProducts()
  }, [])
 
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
  {/* <link rel="stylesheet" href="assets/Home/style.css" /> */}
<div className="home">
  <section id="hero">
    <h4>Trade-In-Offer</h4>
    <h2>Super Value Deals</h2>
    <h1>On all products</h1>
    <p>Save more than 70%</p>
    <Link to='/Products'>
    <button>Shop Now</button>
    </Link>
  </section>
  <section id="feature" className="section-p1">
    <div className="fe-box">
      <img src="assets/Home/f1.png" alt="" />
      <h6>Free Shipping</h6>
    </div>
    <div className="fe-box">
      <img src="assets/Home/f2.png" alt="" />
      <h6>Online Order</h6>
    </div>
    <div className="fe-box">
      <img src="assets/Home/f3.png" alt="" />
      <h6>Save Money</h6>
    </div>
    <div className="fe-box">
    <img src="assets/Home/f4.png" alt="" />
      <h6>Promotions</h6>
    </div>
    <div className="fe-box">
      <img src="assets/Home/f6.png" alt="" />
      <h6>Support</h6>
    </div>
  </section>
  <section id="product1" className="section-p1">
    <h2>Featured products</h2>
    <p>Collection Of Newest Devices</p>
    <div className="pro-container">
    {products && products.map((product) => (
      
      <div className="pro">


<img src={product.image}  alt="" />
<div className="des">
  <span>{product.brand}</span>
  <h5 key={product._id}>{product.name}</h5>
  <div className="star">
    <i className="fas fa-star" />
    <i className="fas fa-star" />
    <i className="fas fa-star" />
    <i className="fas fa-star" />
    <i className="fas fa-star" />
  </div>
  <h4 key={product._id}>{product.price}</h4>
  <Link to={`/ProductsDetails/${product._id}`}>
 
  <button  className="see-details-button">See Details</button>
  </Link>
</div>

{/* <Link to={`/ProductsDetails/${product.id}`}>
  <i className="fal fa-shopping-cart cart" />
</Link> */}
</div>
))}
      
    </div>
  </section>
  <section id="product1" className="section-p1">
    <h2>New Arrivals</h2>
    <p>Collection Of Newest Devices</p>
    <div className="pro-container">
    {products && products.map((product) => (
      
      <div className="pro">


<img src={product.image}alt="" />
<div className="des">
  <span>{product.brand}</span>
  <h5 key={product._id}>{product.name}</h5>
  <div className="star">
    <i className="fas fa-star" />
    <i className="fas fa-star" />
    <i className="fas fa-star" />
    <i className="fas fa-star" />
    <i className="fas fa-star" />
  </div>
  <h4 key={product._id}>{product.price}</h4>
  <Link to={`/ProductsDetails/${product._id}`}>
 
  <button  className="see-details-button">See Details</button>
  </Link>
</div>

{/* <Link to={`/ProductsDetails/${product.id}`}>
  <i className="fal fa-shopping-cart cart" />
</Link> */}
</div>
))}
      
    </div>
  </section>
  <section id="sm-banner" className="section-p1">
    <div className="banner-box">
      <h4>Over 70% OFF</h4>
      <h2>Flash Sale Deals</h2>
      <span>best deals for black friday</span>
      <button className="white">show more</button>
    </div>
    <div className="banner-box">
      <h4>Over 70% OFF</h4>
      <h2>Flash Sale Deals</h2>
      <span>best deals for black friday</span>
      <button className="white">show more</button>
    </div>
  </section>
  </div>
</>

    
        
     );
}
 
export default Home;