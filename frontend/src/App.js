import logo from './logo.svg';
import './App.css';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from './Navbar';
import Footer from './Footer';
import Myprofile from './Myprofile';
import React from 'react';
import Products from './Products';
import ProductsDetails from './ProductsDetails';
import Payment from './Payment';
import SavedItems from './SavedItems';
import Checkout from './Checkout';
import Cart from './Cart';




function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/Login'>
           <Login />
        </Route>
        <Route path='/SignUp'>
           <SignUp/> 
        </Route>
        <Route path='/Myprofile'>
           <Myprofile/> 
        </Route>
        <Route path='/Products'>
           <Products/> 
           </Route>
        <Route path='/ProductsDetails'>
           <ProductsDetails/> 
        </Route>
        <Route path='/Payment'>
           <Payment/> 
        </Route>
        <Route path='/SavedItems'>
           <SavedItems/> 
        </Route>
        <Route path='/Checkout'>
           <Checkout/> 
        </Route>
        <Route path='/Cart'>
           <Cart/> 
        </Route>
      </Switch>
      <Footer />
    </Router>


  


    

    

  );
}

export default App;
