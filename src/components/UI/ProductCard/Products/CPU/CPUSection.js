import React from 'react'
import CPU from './CPU'
import '../../Products.css'


const CPUCard = (props) => {
    return (
        <div className='ProductCards'>
        {CPU.map((prod, index) => {
        return (
            <div className='product-card-wrapper'>
                <div className='product-card' key={index}>
                    <img src={require(`../../../../../../public/assets/${prod.productImage}.jpg`)} alt={prod.productName} className='product-image'/>
                    <h2 className='product-name'>{prod.productName}</h2>
                    <p className='product-price'>{prod.productPrice}</p>
                    <button className='cart-btn'><i class="fas fa-cart-plus"></i> Add To Cart</button>
                </div>
            </div>
            
        )  
        })}
    </div>
    )
}
export default CPUCard