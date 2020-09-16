import React, {Component} from 'react';
import Navbar from './components/Navigation/Navbar/Navbar'
import './App.css';
import HomePage from './containers/Store/HomePage/HomePage';
import {Switch, Route} from 'react-router-dom'
import Products from './components/pages/Products/Products';
import ContactUs from './components/pages/ContactUs/ContactUs';
import SignUp from './components/pages/SignUp/SignUp';
import GraphicsCards from './components/pages/GraphicsCards/GraphicsCards'
import Footer from './components/Navigation/Footer/Footer'
import Disclaimer from './components/Navigation/Footer/Disclaimer/Disclaimer'
import Processors from './components/pages/Processors/Processors';
import Ram from './components/pages/RAM/Ram';
import ProductDetails from './components/ProductDetails/ProductDetails'
import Modal from './components/UI/Modal/Modal'
import Cart from './components/pages/Cart/Cart'
import Default from './components/pages/Default'



class App extends Component {
  render() {
    return (
          <>
            <Navbar />
            <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/products'  component={Products} />
              <Route path='/contact-us'  component={ContactUs} />
              <Route path='/sign-up'  component={SignUp} />
              <Route path='/graphics-cards'  component={GraphicsCards} />
              <Route path='/processors'  component={Processors} />
              <Route path='/ram'  component={Ram} />
              <Route path='/cart'  component={Cart} />
              <Route path='/details'  component={ProductDetails} />
              <Route component={Default} />
            </Switch>
            <Modal />
            <Footer />
            <Disclaimer />
          </>

          
    )
  }
  
}

export default App;
