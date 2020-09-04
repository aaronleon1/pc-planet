import React, { Component} from 'react';
import './ProductDetails.css'
import GraphicsCards from '../pages/GraphicsCards/GraphicsCards'
import {Link} from 'react-router-dom'




class ProductDetails extends Component {
    

    render() {
        let post = <p>pick a post</p>
        
            post = <div className='detail-wrapper'>
            <div className='detail-header'>{this.props.name}</div>
            <div className='product-detail-wrapper'>
                <div className='prod-image'>
                    {this.props.image}
                </div>
                <div className='prod-details'>
                    {this.props.name}
                    {this.props.price}
                </div>
            </div>
        </div>
        
        return post;
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