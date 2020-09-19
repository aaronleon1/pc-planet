import React from 'react'
import GraphicsCardsHome from '../../../components/UI/ProductCard/Products/GPU/GPUSection'
import ProcessorsHome from '../../../components/UI/ProductCard/Products/CPU/CPUSection'
import RAMHome from '../../../components/UI/ProductCard/Products/RAM/RAMSection'
import './FeaturedProducts.css'

const featuredProducts = (props) => {
    return (
        <div className='featured-wrapper'>
            <h1>Featured Prodcuts</h1>
            <GraphicsCardsHome />
            <ProcessorsHome />
            <RAMHome/>
        </div>
    )
}

export default featuredProducts