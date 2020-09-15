import React, { useState, Component } from 'react';
import './ProductDetails.css'
import GraphicsCards from '../pages/GraphicsCards/GraphicsCards'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';




class ProductDetails extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { id, productName, productImage, productPrice, details, inCart } = value.detailProduct
                    return (
                        <div className='detail-wrapper'>

                            <div className='product-detail-wrapper'>
                                <div className='prod-image'>
                                    <img src={productImage} alt={productName} />
                                </div>
                                <div className='prod-details'>
                                    <p>{productName}</p>
                                    <p>{productPrice}</p>
                                    <button className='back-btn'><i class="fas fa-arrow-left" /> Back  to Products</button>
                                    <button className='add-to-cart' 
                                        disabled={inCart ? true : false} 
                                            onClick={() =>{
                                                value.addToCart(id)
                                                value.openModal(id)
                                    }}><i class="fas fa-cart-plus" />{inCart ? 'In Cart' : ' Add to Cart'}</button>
                                </div>
                                <div className='prod-specs'>
                                    <Tabs >
                                        <TabList>
                                            <Tab>Product Specifications</Tab>
                                            <Tab>Warranty</Tab>
                                            <Tab>Shipping</Tab>
                                        </TabList>
                                        <TabPanel>{details}</TabPanel>
                                        <TabPanel><p>All products come standard with a 30-Day warranty unless marked otherwise.</p></TabPanel>
                                        <TabPanel>
                                            <ul>
                                                <li>5-7 Business Days: $5.99</li>
                                                <li>2 Days: 14.99</li>
                                                <li>All orders over $399: Free 2-Day upgrade</li>
                                            </ul>
                                        </TabPanel>
                                    </Tabs>
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