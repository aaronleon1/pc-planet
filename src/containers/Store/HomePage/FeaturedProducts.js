import React from 'react'
import GraphicsCardsHome from '../../../components/UI//FeaturedCards/GPU/GPUSection'
import ProcessorsHome from '../../../components/UI//FeaturedCards/CPU/CPUSection'
import RAMHome from '../../../components/UI//FeaturedCards/RAM/RAMSection'
import './FeaturedProducts.css'

const featuredProducts = (props) => {
    return (
        <div className='featured-wrapper'>
            <h1>Featured Products</h1>
            <GraphicsCardsHome />
            <ProcessorsHome />
            <RAMHome/>
        </div>
    )
}

export default featuredProducts