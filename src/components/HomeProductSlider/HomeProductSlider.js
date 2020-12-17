import React from 'react'
import Carousel from 'react-elastic-carousel'
import {Link} from 'react-router-dom'
import './HomeProductSlider.css'
 
function HomeProductSlider(){
        let items = [
            
            {src: 'cpus.jpg', name: 'PROCESSORS', url: 'processors'},
            {src: 'videocards.jpg', name: 'GRAPHICS CARDS', url: 'graphics-cards'},
            {src: 'ramModules.jpg', name: 'MEMORY', url: 'ram'},
            {src: 'motherboards.jpg', name: 'MOTHERBOARDS', url: 'motherboards'},
            {src: 'monitors.jpg', name: 'MONITORS', url: 'monitors'},
            {src: 'ssds.jpg', name: 'SSDs', url: 'ssds'},
            {src: 'coolers.jpg', name: 'COOLERS', url: 'coolers'},
            {src: 'routers.jpg', name: 'ROUTERS', url: 'routers'},
            {src: 'powerSupplys.jpg', name: 'POWER SUPPLIES', url: 'power-supplies'},
            {src: 'cases.jpg', name: 'CASES', url: 'computer-cases'},
            {src: 'desktops.jpg', name: 'DESKTOPS', url: 'desktops'},
            {src: 'laptops.jpg', name: 'LAPTOPS', url: 'laptops'},
        ]

        let breakPoints=[
            { width: 1, itemsToShow: 2, itemsToScroll: 2},
            { width: 550, itemsToShow: 2, itemsToScroll: 2 },
            { width: 768, itemsToShow: 4, itemsToScroll: 4 },
            { width: 1200, itemsToShow: 6, itemsToScroll: 4 }
        ]

        return(
        <div className='product-slider'>
            <p className='product-slider-heading'>All Products</p>
            <Carousel breakPoints ={breakPoints}>
                {
                    items.map((category) => {
                        return (
                            <div className='category-wrapper'>
                                <Link to={'/' + category.url}>
                                    <img src={require(`../../../public/assets/${category.src}`)} alt={category.name} className='category-img' />
                                </Link>
                                <p className='category-name'>{category.name}</p>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default HomeProductSlider