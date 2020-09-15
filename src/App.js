import React, { createContext, useState } from 'react';
import './App.css';
import FoodBanner from './components/FoodBanner/FoodBanner';
import Navbar from './components/Navbar/Navbar';
import TopBanner from './components/TopBanner/TopBanner';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import FoodDetail from './components/FoodDetail/FoodDetail';
import Login from './components/Login/Login';
import ReviewOrder from './components/ReviewOrder/ReviewOrder';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext()
export const CartContext = createContext()

function App() {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    error: '',
    success: false
  })
  const [cart, setCart] = useState([])

  return (
    <UserContext.Provider value={[user, setUser]}>
      <CartContext.Provider value={[cart, setCart]}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <TopBanner />
              <FoodBanner />
            </Route>
            <Route path='/item/:id'>
              <TopBanner />
              <FoodDetail />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <PrivateRoute path='/review'>
              <ReviewOrder />
            </PrivateRoute>
            <PrivateRoute path='/order'>
              <PlaceOrder />
            </PrivateRoute>
          </Switch>
        </Router>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
