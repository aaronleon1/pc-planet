import React from 'react';
import './GraphicsCards.css'
import Products from '../../UI/ProductCard/Products/GPU/GPU'
import {Link} from 'react-router-dom'


const GraphicsCards = () => {
    return(
        <div className='graphics-wrapper'> 
            <div className='graphics-head'>
                <h1>Graphics Cards</h1>
            </div>
            <div className='gpu-cards-wrapper'>
                {Products.map((gpu, index) => {
                            return (
                            <div className='card-wrapper'>
                                <div className='graphics-cards' key={index}>
                                    <img src={require(`../../../../public/assets/${gpu.productImage}.jpg`)} alt={gpu.productName} className='gpu-image'/>
                                    <h2 className='gpu-name'>{gpu.productName}</h2>
                                    <p className='gpu-price'>{gpu.productPrice}</p>
                                    <button className='view-btn'>View Item</button>
                                </div>
                            </div>
                        )  
                        })}
            </div>            
        </div>  
    )
}

export default GraphicsCards