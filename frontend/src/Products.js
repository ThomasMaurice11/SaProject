import { Link } from "react-router-dom/cjs/react-router-dom";
import { useEffect, useState } from "react"
const Products = () => {
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
  <link rel="stylesheet" href="assets/Home/style.css" />
 
<section id="product1" className="section-p1">
    <p>Collection Of Newest Devices</p>
    
    <div className="pro-container">





     
    {products && products.map((product) => (
      
        <div className="pro">


  <img src="assets/Home/macbook2.jpg" alt="" />
  <div className="des">
    <span>Apple</span>
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

  </>

    );
}
 
export default Products;