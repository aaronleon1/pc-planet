import React from 'react'
import GraphicsCardsHome from '../../../components/UI/ProductCard/Products/GPU/GPUSection'
import CPUSection from '../../../components/UI/ProductCard/Products/CPU/CPUSection'
import RAMSection from '../../../components/UI/ProductCard/Products/RAM/RAMSection'
import './FeaturedProducts.css'

const featuredProducts = (props) => {
    return (
        <div className='featured-wrapper'>
            <h1>Featured Prodcuts</h1>
            <GraphicsCardsHome />
            <CPUSection />
            <RAMSection />
        </div>
    )
}

export default featuredProducts