import React, {Component} from 'react';
import Navbar from './components/Navigation/Navbar/Navbar'
import './App.css';
import HomePage from './containers/Store/HomePage/HomePage';
import {Switch, Route} from 'react-router-dom'
import Products from './components/pages/Products/Products';
import ContactUs from './components/pages/ContactUs/ContactUs';
import GraphicsCards from './components/pages/GraphicsCards/GraphicsCards'
import Footer from './components/Navigation/Footer/Footer'
import Disclaimer from './components/Navigation/Footer/Disclaimer/Disclaimer'
import Processors from './components/pages/Processors/Processors';
import Ram from './components/pages/RAM/Ram';
import ComputerCases from './components/pages/ComputerCases/ComputerCases'
import Motherboards from './components/pages/Motherboards/Motherboards'
import SSDs from './components/pages/SSDs/SSDs'
import Laptops from './components/pages/Laptops/Laptops'
import ProductDetails from './components/ProductDetails/ProductDetails'
import PowerSupplies from './components/pages/PowerSupplies/PowerSupplies'
import Desktops from './components/pages/Desktops/Desktops'
import Monitors from './components/pages/Monitors/Monitors'
import Routers from './components/pages/Routers/Routers'
import Coolers from './components/pages/Coolers/Coolers'
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
              <Route path='/graphics-cards'  component={GraphicsCards} />
              <Route path='/processors'  component={Processors} />
              <Route path='/ram'  component={Ram} />
              <Route path='/computer-cases' component={ComputerCases} />
              <Route path='/motherboards' component={Motherboards} />
              <Route path='/ssds' component={SSDs} />
              <Route path='/laptops' component={Laptops} />
              <Route path='/power-supplies' component={PowerSupplies} />
              <Route path='/monitors' component={Monitors} />
              <Route path='/desktops' component={Desktops} />
              <Route path='/routers' component={Routers} />
              <Route path='/coolers' component={Coolers} />
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
