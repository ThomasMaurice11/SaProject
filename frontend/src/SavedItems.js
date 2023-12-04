import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const SavedItems = () => {


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
  }, []);

  if (!products) {
    return <div>Loading...</div>;
  }
    return ( 

      <>
      <link rel="stylesheet" href="assets/SavedItems/style.css"></link>
            <section className="h-100" style={{ backgroundColor: "#eee" }}>
          <div className="container h-100 py-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-10">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3 className="fw-normal mb-0 text-black">saved items</h3>
                  <div>
                  
                  </div>
                </div>


                {products && products.map((product) => (
                <div className="card rounded-3 mb-4">
                  <div className="card-body p-4">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-2 col-lg-2 col-xl-2">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                          className="img-fluid rounded-3"
                          alt="Cotton T-shirt"
                        />
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-3">
                        <p className="lead fw-normal mb-2">{product.name}</p>
                        <p>
                          <span className="text-muted">{product.price}$</span>
                         </p>
                      </div>
                      
                      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        <h5 className="mb-0">{product.price}</h5>
                      </div>
                      <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        <a href="#!" className="text-danger">
                          <i className="fas fa-trash fa-lg" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
               
                ))}
                
                    
                    
                  
                
              </div>
            </div>
          </div>
        </section>
        
            </>
     );
}
 
export default SavedItems;