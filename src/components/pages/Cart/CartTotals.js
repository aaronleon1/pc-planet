import React from 'react'
import './CartTotals.css'
import {Link} from 'react-router-dom'

function CartTotals({value}){
    const {cartSubtotal, cartTax, cartTotal, clearCart} = value;
    
    return(
       <>
        <div className='cartTotals-container'>
            <div className='clearCart-container'>
                <Link to='/'>
                    <button className='clear-cart' onClick={() => clearCart()}>Clear Cart</button>
                </Link>
            </div>
            <div className='subtotal-container'>
                <h4>Subtotal: ${cartSubtotal}</h4>
            </div>
            <div className='tax-container'>
                <h4>Tax: ${cartTax}</h4>
            </div>
            <div className='total-container'>
                <h4>Total: ${cartTotal}</h4>
            </div>
        </div>
       </>
    )
} 

export default CartTotals