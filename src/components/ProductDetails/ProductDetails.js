import React, {useState, Component} from 'react';
import './ProductDetails.css'
import GraphicsCards from '../pages/GraphicsCards/GraphicsCards'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context'




class ProductDetails extends Component {
    render(){
        return (
            <ProductConsumer>
                {(value) => {
                   const {id, productName, productImage, productPrice, details} = value.detailProduct
                   return (
                    <div className='detail-wrapper'>
                    
                    <div className='product-detail-wrapper'>
                        <div className='prod-image'>
                        <img src={productImage}  alt={productName}/>
                        </div>
                        <div className='prod-details'>
                            <p>{productName}</p>
                            <p>{productPrice}</p>
                            <button className='back-btn'><i class="fas fa-arrow-left" /> Back to Products</button>
                            <button className='add-to-cart'><i class="fas fa-cart-plus" /> Add to Cart</button>
                        </div>
                        <div className='prod-specs'>
                            <h3>Product Specifications</h3>
                            {details}
                        </div>
                    </div>
                </div>
                   )
                }}
            </ProductConsumer>
        )
    }
    

}

export default ProductDetails
/*
const productDetails = (props) => {
    return (
        <div className='detail-wrapper'>
            <div className='detail-header'>{props.name}</div>
            <div className='product-detail-wrapper'>
                <div className='prod-image'>
                    {props.image}
                </div>
                <div className='prod-details'>
                    {props.name}
                    {props.price}
                </div>
                <div className='prod-specs'>
                    {props.description}
                </div>
            </div>
        </div>
    )
}


export default productDetails
*/