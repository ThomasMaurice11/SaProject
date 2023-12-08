import React from 'react';
import { useState } from 'react'
const Myprofile = () => {
  const [fname,setFname]=useState('');
  const [sname,setSname]=useState('');
  const [mobile,setMobile]=useState('');
  const [address,setAddress]=useState('');
  const [error,setError]=useState('');
 
  const handleSubmit = async (e) => {
    e.preventDefault()

    const data={fname,sname,mobile,address}
    
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
     
      setFname('')
      setSname('')
      setMobile('')
      setAddress('')
      

      console.log('new product added:', json)
    }

  }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/css/bootstrap.min.css"
      />
      <link rel='stylesheet' href='assets/Myprofile/style.css'></link>

      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                alt="Profile"
              />
              <span className="font-weight-bold">Edogaru</span>
              <span className="text-black-50">edogaru@mail.com.my</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <form  onSubmit={handleSubmit}>
              <div className="row mt-2">
                
                <div className="col-md-6">
               
                  <label className="labels">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="first name"
                    onChange={(e) => setFname(e.target.value)} 
                    value={fname}
                    defaultValue=""
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Surname</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setSname(e.target.value)} 
                    value={sname}
                    defaultValue=""
                    placeholder="surname"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setMobile(e.target.value)} 
                    value={mobile}
                    placeholder="enter phone number"
                    defaultValue=""
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Address Line 1</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter address line 1"
                    onChange={(e) => setAddress(e.target.value)} 
                    value={address}
                    defaultValue=""
                  />
                </div>
              </div>

              <div className="mt-5 text-center">
                <button className="btn btn-primary profile-button" type="submit">
                  Save Profile
                </button>
              </div>
              </form>
              
              
            </div>
            
            
            
          </div>
          
         
        </div>
        
        
      </div>
      

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/js/bootstrap.min.js"></script>
    </>
  );
};

export default Myprofile;
