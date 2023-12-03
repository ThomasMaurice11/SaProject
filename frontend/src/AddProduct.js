import { useState } from 'react'
const AddProduct = () => {
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [brand,setBrand]=useState('');
    const [description,setDescription]=useState('');
    const [image,setimage]=useState('');
    const [error,setError]=useState('');
    
;



  const handleSubmit = async (e) => {
    e.preventDefault()

    const product={name,price,brand,description,image}
    
    const response = await fetch('/api/products', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setName('')
      setPrice('')
      setBrand('')
      setimage('')
      setDescription('')

      console.log('new product added:', json)
    }

  }

    return (  
        <>
          <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.css"
  />

        <div className="container-fluid px-1 py-5 mx-auto">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
           
         
            <div className="card">
              <h5 className="text-center mb-4">Add new product</h5>
              <form className="form-card" onSubmit={handleSubmit}>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label className="form-control-label px-3">
                      product name<span className="text-danger"> *</span>
                    </label>{" "}
                    <input
                      type="text"
                      id="fname"
                      onChange={(e) => setName(e.target.value)} 
                      value={name}
                      name="fname"
                      placeholder="Enter your product name"
                      onblur="validate(1)"
                    />{" "}
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label className="form-control-label px-3">
                      brand<span className="text-danger"> *</span>
                    </label>{" "}
                    <input
                      type="text"
                      id="lname"
                      onChange={(e) => setBrand(e.target.value)} 
                      value={brand}
                      name="lname"
                      placeholder="Enter your product brand"
                      onblur="validate(2)"
                    />{" "}
                  </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label className="form-control-label px-3">
                      price<span className="text-danger"> *</span>
                    </label>{" "}
                    <input
                      type="text"
                      id="email"
                      onChange={(e) => setPrice(e.target.value)} 
                      value={price}
                      name="email"
                      placeholder=""
                      onblur="validate(3)"
                    />{" "}
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label className="form-control-label px-3">
                      description<span className="text-danger"> *</span>
                    </label>{" "}
                    <input
                      type="text"
                      id="mob"
                      onChange={(e) => setDescription(e.target.value)} 
                      value={description}
                      name="mob"
                      placeholder=""
                      onblur="validate(4)"
                    />{" "}
                  </div>

                  <div className="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label className="form-control-label px-3">
                      image url<span className="text-danger"> *</span>
                    </label>{" "}
                    <input
                      type="text"
                      id="mob"
                      onChange={(e) => setimage(e.target.value)} 
                      value={image}
                      name="mob"
                      placeholder="add image url"
                      onblur="validate(4)"
                    />{" "}
                  </div>

                </div>
                
             
           
                <div className="row justify-content-end">
                  <div className="form-group col-sm-6">
                    {" "}
                    <button type="submit" className="btn-block btn-primary">
                     add product
                    </button>{" "}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" />
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js" />
            </>
    );
}
 
export default AddProduct ;