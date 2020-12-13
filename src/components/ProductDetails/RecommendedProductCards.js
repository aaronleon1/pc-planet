import React, {Component} from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import './ProductDetails.css'




class RecommendedProductCard extends Component {
    render() { 
        const {id, productName, productImage, productPrice, logoImage} = this.props.prod

        return(
            <div className='rec-card-wrapper'>
                <ProductConsumer> 
                {value => (
                <div className='rec-product' onClick={() => value.handleDetail(id)}>
                        <Link to='/details' >
                            <img src={productImage} alt={productName} className='rec-product-image'/>
                        </Link>
                        <div className='rec-product-card-details'>
                            <div className='rec-product-card-heading' >
                                <img src={logoImage} alt='logo image' className='rec-logo-image'/>
                                <p>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i> ({Math.floor(Math.random() * 1000)+1})
                            </p>
                            </div>
                            
                            <h2 className='rec-product-name'>{productName}</h2>
                            <div className='rec-price-view-details'>
                                <p className='rec-product-price'>${productPrice}</p>
                                
                            </div>
                            
                        </div>
                    </div>
                )}
                </ProductConsumer>
            </div>
        )
    }
    
    
}

export default RecommendedProductCard