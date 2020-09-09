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
                    <div className='detail-header'>{productName}</div>
                    <div className='product-detail-wrapper'>
                        <div className='prod-image'>
                        <img src={productImage}  alt={productName}/>
                        </div>
                        <div className='prod-details'>
                            {productName}
                            {productPrice}
                        </div>
                        <div className='prod-specs'>
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