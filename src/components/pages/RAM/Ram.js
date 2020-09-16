import React from 'react';
import './Ram.css'
import Products from '../../UI/ProductCard/Products/RAM/RAM'



const Ram = () => {
    return(
        <div className='ram-wrapper'> 
            <div className='ram-head'>
                <h1>RAM</h1>
            </div>
            <div className='ram-cards-wrapper'>
                {Products.map((ram, index) => {
                            return (
                            <div className='card-wrapper' key={index}>
                                <div className='ram-cards' >
                                    <img src={require(`../../../../public/assets/${ram.productImage}.jpg`)} alt={ram.productName} className='ram-image'/>
                                    <h2 className='ram-name'>{ram.productName}</h2>
                                    <p className='ram-price'>{ram.productPrice}</p>
                                    <button className='view-btn'>View Item</button>
                                </div>
                            </div>
                        )  
                        })}
            </div>            
        </div>  
    )
}

export default Ram