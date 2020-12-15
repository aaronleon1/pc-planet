import React from 'react'
import Carousel from 'react-elastic-carousel'
import {Link} from 'react-router-dom'
import './HomeProductSlider.css'
 
function HomeProductSlider(){
        let items = [
            
            {src: 'cpus.jpg', name: 'PROCESSORS'},
            {src: 'videocards.jpg', name: 'GRAPHICS CARDS'},
            {src: 'ramModules.jpg', name: 'MEMORY'},
            {src: 'motherboards.jpg', name: 'MOTHERBOARDS'},
            {src: 'monitors.jpg', name: 'MONITORS'},
            {src: 'ssds.jpg', name: 'SSDs'},
            {src: 'coolers.jpg', name: 'COOLERS'},
            {src: 'routers.jpg', name: 'ROUTERS'},
            {src: 'powerSupplys.jpg', name: 'POWER SUPPLIES'},
            {src: 'cases.jpg', name: 'CASES'},
            {src: 'desktops.jpg', name: 'DESKTOPS'},
            {src: 'laptops.jpg', name: 'LAPTOPS'},
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
                                <Link to='/products'>
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