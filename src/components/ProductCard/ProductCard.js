import React, {Component} from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'




class ProductCard extends Component {
    render() { 
        const {id, productName, productImage, productPrice, logoImage} = this.props.prod

        return(
            <div className='card-wrapper'>
                <ProductConsumer> 
                {value => (
                <div className='product' onClick={() => value.handleDetail(id)}>
                        <Link to='/details' >
                            <img src={productImage} alt={productName} className='product-image'/>
                        </Link>
                        <div className='product-card-details'>
                            <div className='product-card-heading' >
                                <img src={logoImage} alt='logo image' className='logo-image'/>
                                <p style={{marginLeft: '8px'}}>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i> ({Math.floor(Math.random() * 1000)+1})
                            </p>
                            </div>
                            
                            <h2 className='product-name' >{productName}</h2>
                            <div className='price-view-details'>
                                <p className='product-price'>${productPrice}</p>
                                <Link to='/details' className='view-details'><p>View Details</p></Link>
                            </div>
                            
                        </div>
                    </div>
                )}
                </ProductConsumer>
            </div>
        )
    }
    
    
}

export default ProductCard