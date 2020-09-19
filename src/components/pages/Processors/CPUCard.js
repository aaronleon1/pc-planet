import React, {Component} from 'react'
import {ProductConsumer} from '../../context'
import {Link} from 'react-router-dom'




class CPUCard extends Component {
    render() {
        const {id, productName, productImage, productPrice, inCart} = this.props.cpu

        return(
            <div className='card-wrapper'>
                <ProductConsumer>
                {value => (
                <div className='processors' onClick={() => value.handleDetail(id)}>
                        <Link to='/details' >
                            <img src={productImage} alt={productName} className='cpu-image'/>
                        </Link>
                        <h2 className='cpu-name'>{productName}</h2>
                        <p className='cpu-price'>{productPrice}</p>
                        <button className='view-btn' disabled={inCart ? true : false}
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

export default CPUCard