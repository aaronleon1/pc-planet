import React, {Component} from 'react'
import {ProductConsumer} from '../../context'
import {Link} from 'react-router-dom'
import './Modal.css'

class Modal extends Component {
    render() {
        return(
            <ProductConsumer>
                {(value) =>{
                    const {modalOpen, closeModal} = value
                    const {productImage, productName, productPrice} = value.modalProduct
                    if(!modalOpen){
                        return null
                    }
                    else{
                        return(
                            <div className='modal-container'>
                                <div className='modal-inner'>
                                    <h3>Added to Cart</h3>
                                    <img src={productImage} className='modal-image' alt={productName} />
                                    <h4>{productName}</h4>
                                    <h4>Price: ${productPrice}</h4>
                                        <button className='modal-continue' onClick={() => closeModal()}>
                                            Keep Shopping
                                        </button>
                                    <Link to='/cart'>
                                        <button className='modal-cart' onClick={() => closeModal()}>
                                            Go to Cart
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        )
                       
                    }
                }}
            </ProductConsumer>
        )
    }
}

export default Modal