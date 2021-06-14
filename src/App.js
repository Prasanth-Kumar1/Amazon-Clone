import React, { useEffect } from 'react'
import './App.css';
import Header from './Header';
import Home from './Home';
import Payment from './Payment'
import Checkout from './Checkout'
import Orders from './Orders'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51J1pIHSGHRgjOalga4ds6FHoEDBV30c7jEWT8xEaGFMAcKOai2JApGydkfvBPMANNOZX78l4u7wGSOnmJ1J6E1sH004UiwSYpN');

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // Will only runs  when the app component loads..
    auth.onAuthStateChanged(authUser => {
      if(authUser) {
        // the user just logged in / the was logged in 

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else {
        // the user is logged out

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
