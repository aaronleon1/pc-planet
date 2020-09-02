import React from 'react';
import './Processors.css'
import Products from '../../UI/ProductCard/Products/CPU/CPU'
import {Link} from 'react-router-dom'


const Processors = () => {
    return(
        <div className='processors-wrapper'> 
            <div className='processors-head'>
                <h1>Processors</h1>
            </div>
            <div className='cpu-cards-wrapper'>
                {Products.map((cpu, index) => {
                            return (
                            <div className='card-wrapper'>
                                <div className='processors-cards' key={index}>
                                    <img src={require(`../../../../public/assets/${cpu.productImage}.jpg`)} alt={cpu.productName} className='cpu-image'/>
                                    <h2 className='cpu-name'>{cpu.productName}</h2>
                                    <p className='cpu-price'>{cpu.productPrice}</p>
                                    <button className='view-btn'>View Item</button>
                                </div>
                            </div>
                        )  
                        })}
            </div>            
        </div>  
    )
}

export default Processors