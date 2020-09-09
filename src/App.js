import React, {Component} from 'react';
import Navbar from './components/Navigation/Navbar/Navbar'
import './App.css';
import HomePage from './containers/Store/HomePage/HomePage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Products from './components/pages/Products/Products';
import ContactUs from './components/pages/ContactUs/ContactUs';
import SignUp from './components/pages/SignUp/SignUp';
import GraphicsCards from './components/pages/GraphicsCards/GraphicsCards'
import Footer from './components/Navigation/Footer/Footer'
import Disclaimer from './components/Navigation/Footer/Disclaimer/Disclaimer'
import Dropdown from './components/Navigation/Navbar/Dropdown/Dropdown'
import Processors from './components/pages/Processors/Processors';
import Ram from './components/pages/RAM/Ram';
import ProductDetails from './components/ProductDetails/ProductDetails'
import GPUCard from './components/pages/GraphicsCards/GPUCard';



class App extends Component {
  render() {
    return (
          <>
            <Navbar />
            <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/products' exact component={Products} />
              <Route path='/contact-us' exact component={ContactUs} />
              <Route path='/sign-up' exact component={SignUp} />
              <Route path='/graphics-cards' exact component={GraphicsCards} />
              <Route path='/processors' exact component={Processors} />
              <Route path='/ram' exact component={Ram} />
              <Route path='/graphics-cards/:id' render={(props) => {
                        return (<ProductDetails {...props}/>)
                    }}/>
            </Switch>
            <Footer />
            <Disclaimer />
          </>

          
    )
  }
  
}

export default App;
