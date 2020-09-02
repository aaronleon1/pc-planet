import React, { useEffect } from 'react';
import Products from '../UI/ProductCard/Products/GPU/GPU'
import {Link} from 'react-router-dom'


const productDetails = (props) => {
    return (
        <div className='detail-wrapper'>
            <div className='detail-header'>{props.Products.productName}</div>
            <div className='product-detail-wrapper'>
                <div className='prod-image'>
                    {props.Products.productImage}
                </div>
                <div className='prod-details'>
                    {props.Products.productName}
                    {props.Products.productPrice}
                </div>
            </div>
        </div>
    )
}


export default productDetails