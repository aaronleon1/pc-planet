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
                                    <h5>item added to cart</h5>
                                    <img src={productImage} className='modal-image' alt={productName} />
                                    <h5>{productName}</h5>
                                    <h5>Price: ${productPrice}</h5>
                                    <Link to='/'>
                                        <button className='modal-continue' onClick={() => closeModal()}>
                                            Keep Shopping
                                        </button>
                                    </Link>
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