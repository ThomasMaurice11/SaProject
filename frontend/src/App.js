import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import Myprofile from './Myprofile';
import Products from './Products';
import ProductsDetails from './ProductsDetails';
import Payment from './Payment';
import SavedItems from './SavedItems';
import Checkout from './Checkout';
import Cart from './Cart';
import AddProduct from './AddProduct';
import { useAuthContext } from './hooks/useAuthContext'
import { UserContextProvider } from './context/userContext';

function App() {
  const { user } = useAuthContext();

  return (
   
    <UserContextProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            {user ? <Home /> : <Login />}
          </Route>
          <Route exact path='/Login'>
            {!user ? <Login /> : <Home/>}
          </Route>
          <Route exact path='/SignUp'>
            {!user ? <SignUp /> : <Home/>}
          </Route>
          
          
          
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/SignUp'>
            <SignUp />
          </Route>
          <Route path='/Myprofile'>
            <Myprofile />
          </Route>
          <Route path='/Products'>
            <Products />
          </Route>
          <Route path='/ProductsDetails/:productId'>
            <ProductsDetails />
          </Route>
          <Route path='/Payment'>
            <Payment />
          </Route>
          <Route path='/SavedItems'>
            <SavedItems />
          </Route>
          <Route path='/Checkout'>
            <Checkout />
          </Route>
          <Route path='/Cart/:userId'>
            <Cart />
          </Route>
          <Route path='/addProduct'>
            <AddProduct />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </UserContextProvider>
  );
}

export default App;
