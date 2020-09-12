import React, {Component} from 'react'
import GraphicsCards from './GraphicsCards'
import ProductDetails from '../../ProductDetails/ProductDetails'
import {ProductConsumer} from '../../context'
import {Link} from 'react-router-dom'




class GPUCard extends Component {
    render() {
        const {id, productName, productImage, productPrice, inCart} = this.props.gpu

        return(
            <div className='card-wrapper'>
                <ProductConsumer>
                {value => (
                <div className='graphics-cards' onClick={() => value.handleDetail(id)}>
                        <Link to={'/graphics-cards/' + id} >
                            <img src={productImage} alt={productName} className='gpu-image'/>
                        </Link>
                        <h2 className='gpu-name'>{productName}</h2>
                        <p className='gpu-price'>{productPrice}</p>
                        <button className='view-btn' disabled={inCart ? true : false}
                        onClick={() => {
                        value.addToCart(id) 
                        value.openModal(id)}}>{inCart ? 'inCart' : 'add to cart'}</button>
                    </div>
                )}
                </ProductConsumer>
            </div>
        )
    }
    
    
}

export default GPUCard