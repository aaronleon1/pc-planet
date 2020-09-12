import React from 'react'
import './CartItem.css'

function CartItem({item, value}){
    const {id, productName, productImage, productPrice, total, count} = item
    const {increment, decrement, removeFromCart} = value
    return(
        <div className='item-row'>
            <div className='item-image'>
                <img src={productImage} style={{width: '8rem', height: '8rem', padding: '0.5rem 0'}} alt={productName} />
            </div>
            <div className='item-name'>
                <h3>Product: {productName}</h3>
            </div>
            <div className='item-price'>
                <h3>Price: {productPrice}</h3>
            </div>
            <div className='cart-btn-container'>
                <div className='inner-cart-btns'>
                    <div>
                        <span><button className='decrement-btn' onClick={() => decrement(id)}>-</button></span>
                        <span className='active-count'>{count}</span>
                        <span><button className='increment-btn' onClick={() => increment(id)}>+</button></span>
                    </div>
                </div>
            </div>
            <div className='item-remove' onClick={() => removeFromCart(id)}>
                <i className='fas fa-times'/>
            </div>
            <div className='item-total'>
                <strong> Item Total: ${total}</strong>
            </div>
        </div>
    )
}

export default CartItem