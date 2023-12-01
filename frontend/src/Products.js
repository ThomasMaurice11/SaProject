import { Link } from "react-router-dom/cjs/react-router-dom";
const Products = () => {
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
      <div className="pro">
        <img src="assets/Home/macbook2.jpg" alt="" />
        <div className="des">
          <span>Apple</span>
          <h5>Macbook pro M2</h5>
          <div className="star">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4>$1266</h4>
        </div>
        <a href="#">
          <i className="fal fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
  <img src="assets/Home/macbook2.jpg" alt="" />
  <div className="des">
    <span>Apple</span>
    <h5>Macbook Air M2</h5>
    <div className="star">
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
    </div>
    <h4>$1166</h4>
    <Link to="/ProductsDetails">
   
    <button  className="see-details-button">See Details</button>
    </Link>
  </div>
  <Link to="/ProductsDetails">
    <i className="fal fa-shopping-cart cart" />
  </Link>
</div>

      <div className="pro">
        <img src="assets/Home/lenovo1.jpg" alt="" />
        <div className="des">
          <span>Lenovo</span>
          <h5>lenovo legion 5 pro</h5>
          <div className="star">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4>$999</h4>
        </div>
        <a href="#">
          <i className="fal fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="asus1.jpg" alt="" />
        <div className="des">
          <span>Asus</span>
          <h5>Asus Tuf gaming </h5>
          <div className="star">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4>$1580</h4>
        </div>
        <a href="#">
          <i className="fal fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="assets/Home/lenovo1.jpg" alt="" />
        <div className="des">
          <span>Lenovo</span>
          <h5>lenovo legion 7 pro</h5>
          <div className="star">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4>$1366</h4>
        </div>
        <a href="#">
          <i className="fal fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="assets/Home/asus1.jpg" alt="" />
        <div className="des">
          <span>Asus</span>
          <h5>Asus Tuf rtx3060</h5>
          <div className="star">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4>$2666</h4>
        </div>
        <a href="#">
          <i className="fal fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="assets/Home/macbook2.jpg" alt="" />
        <div className="des">
          <span>Apple</span>
          <h5>Macbook Air M2</h5>
          <div className="star">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4>$1266</h4>
        </div>
        <a href="#">
          <i className="fal fa-shopping-cart cart" />
        </a>
      </div>
      <div className="pro">
        <img src="assets/Home/macbook2.jpg" alt="" />
        <div className="des">
          <span>Apple</span>
          <h5>Macbook Air M2</h5>
          <div className="star">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <h4>$1266</h4>
        </div>
        <a href="#">
          <i className="fal fa-shopping-cart cart" />
        </a>
      </div>
    </div>
  </section>
  </>

    );
}
 
export default Products;