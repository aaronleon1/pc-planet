import React, { Component } from 'react';
import { ProductConsumer } from '../../context';
import CartList from './CartList'

class Cart extends Component {
    render(){
        return(
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if(cart.length>0) {
                            return(
                                <>
                                <h1>Your Cart</h1>
                                <CartList value={value} />
                                </> 
                            )
                        }
                        else{
                            return(
                                <div>
                                    <p>
                                        There are no items in your cart!
                                    </p>
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