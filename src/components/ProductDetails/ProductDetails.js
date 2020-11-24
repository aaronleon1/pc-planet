import React, {Component} from 'react';
import './ProductDetails.css'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; 




class ProductDetails extends Component {
    
    componentDidMount() {
        window.scrollTo(0, 0)
      }
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
                                    <h1>{productName}</h1>
                                    <h2>${productPrice}</h2>
                                    <button className='add-to-cart' 
                                        disabled={inCart ? true : false} 
                                            onClick={() =>{
                                                value.addToCart(id)
                                                value.openModal(id)
                                    }}><i className="fas fa-cart-plus" />{inCart ? ' In Cart' : ' Add to Cart'}</button>
                                    <div className='prod-specs'>
                                    <Tabs >
                                        <TabList>
                                            <Tab>Specifications</Tab>
                                            <Tab>Warranty</Tab>
                                            <Tab>Shipping</Tab>
                                        </TabList>
                                        <TabPanel>
                                            <ul>
                                                <li>
                                                {details.replaceAll("\\n", "\n")}
                                                </li>    
                                            </ul>
                                        </TabPanel>
                                        <TabPanel>
                                            <ul>
                                                <li>
                                                    All products come standard with a 30-Day warranty unless marked otherwise.
                                                </li>    
                                            </ul>
                                        </TabPanel>
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
                        </div>
                           
                    )
                }}
            </ProductConsumer>
        )
    }


}

export default ProductDetails
