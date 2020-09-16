import React from 'react'
import RAM from './RAM'
import '../../Products.css'


const RAMCard = (props) => {
    return (
        <div className='ProductCards'>
        {RAM.map((prod, index) => {
        return (
            <div className='product-card-wrapper' key={index}>
                <div className='product-card'>
                    <img src={require(`../../../../../../public/assets/${prod.productImage}.jpg`)} alt={prod.productName} className='product-image'/>
                    <h2 className='product-name'>{prod.productName}</h2>
                    <p className='product-price'>{prod.productPrice}</p>
                    <button className='cart-btn'><i className="fas fa-cart-plus"></i> Add To Cart</button>
                </div>
            </div>
        )  
        })}
    </div>
    )
}
export default RAMCard