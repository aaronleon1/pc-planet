import React from 'react'
import GraphicsCards from './GraphicsCards'
import ProductDetails from '../../ProductDetails/ProductDetails'
import {Link} from 'react-router-dom'


const GPUCard = (props) => {

    return(
        <div className='card-wrapper'>
            <div className='graphics-cards' onClick={props.click}>
                <img src={props.image} alt={props.name} className='gpu-image'/>
                <h2 className='gpu-name'>{props.name}</h2>
                <p className='gpu-price'>{props.price}</p>
                <button className='view-btn'>View Item</button>
            </div>
    </div>
    )
    
}

export default GPUCard