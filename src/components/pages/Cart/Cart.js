import React, { Component } from 'react';
import { ProductConsumer } from '../../context';
import './Cart.css'
import CartList from './CartList'
import CartTotals from './CartTotals'
 
class Cart extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render(){
        
        return(
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if(cart.length>0) {
                            return(
                                <>
                                <h1 className='cart-heading'>Your Cart</h1>
                                <CartList value={value} />
                                <CartTotals value={value} />
                                </> 
                            )
                        }
                        else{
                            return(
                                <div className='empty-cart'>
                                    <h1>
                                        There are no items in your cart!
                                    </h1>
                                </div>
                            )
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}

export default Cart