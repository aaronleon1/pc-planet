import React, {Component} from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'




class ProductCard extends Component {
    render() {
        const {id, productName, productImage, productPrice, inCart} = this.props.prod

        return(
            <div className='card-wrapper'>
                <ProductConsumer> 
                {value => (
                <div className='product' onClick={() => value.handleDetail(id)}>
                        <Link to='/details' >
                            <img src={productImage} alt={productName} className='product-image'/>
                        </Link>
                        <h2 className='product-name'>{productName}</h2>
                        <p className='product-price'>${productPrice}</p>
                        <button className='cart-btn' disabled={inCart ? true : false}
                        onClick={() => {
                        value.addToCart(id) 
                        value.openModal(id)}}>{inCart ? 'In Cart' : <><i className='fas fa-cart-plus'/> Add To Cart</>}</button>
                    </div>
                )}
                </ProductConsumer>
            </div>
        )
    }
    
    
}

export default ProductCard