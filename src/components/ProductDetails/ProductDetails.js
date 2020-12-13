import React, {Component} from 'react';
import './ProductDetails.css'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; 
import Carousel from 'react-elastic-carousel';
import RecommendedProductCard from './RecommendedProductCards'




class ProductDetails extends Component {
    
    
    componentDidMount() {
        window.scrollTo(0, 0)
      }
      render() {
            
        const breakPoints = [
            { width: 1, itemsToShow: 1 },
            { width: 550, itemsToShow: 2, itemsToScroll: 2 },
            { width: 768, itemsToShow: 2 },
            { width: 1200, itemsToShow: 4, itemsToScroll: 4 }
          ];
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
                                        <Tabs>
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
                            <div className='recommended-review-wrapper'>
                                    <Tabs >
                                        <TabList>
                                            <Tab>Recommended</Tab>
                                            <Tab>Reviews</Tab>
                                        </TabList>
                                        <TabPanel>
                                            <Carousel breakPoints={breakPoints}>
                                                {
                                                
                                                value.recommendedProducts.sort( () => { return 0.5 - Math.random() } ).slice(0,8).map( prod => {
                                                        return <RecommendedProductCard key={prod.id}
                                                        prod={prod}  
                                                        />
                                                    })
                                                }
                                                    
                                                
                                            </Carousel>
                                        </TabPanel>
                                        <TabPanel></TabPanel>
                                    </Tabs>
                                </div>
                        </div>
                           
                    )
                }}
            </ProductConsumer>
        )
    }


}

export default ProductDetails
