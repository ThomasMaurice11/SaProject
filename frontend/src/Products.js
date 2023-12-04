import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products');
      const json = await response.json();

      if (response.ok) {
        setProducts(json);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on the search term
  const filteredProducts = products
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <>
    
    <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <section id="product1" className="section-p1">
        <p>Collection Of Newest Devices</p>

        <div className="pro-container">
          {/* Map over the filtered products */}
          {filteredProducts.map((product) => (
            <div className="pro" key={product._id}>
              <img src="assets/Home/macbook2.jpg" alt="" />
              <div className="des">
                <span>{product.brand}</span>
                <h5>{product.name}</h5>
                <div className="star">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <h4>{product.price}</h4>
                <Link to={`/ProductsDetails/${product._id}`}>
                  <button className="see-details-button">See Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
