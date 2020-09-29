import React, {useEffect} from 'react';
import './Products.css'
import {Link} from 'react-router-dom'



const Products = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className='products-wrapper'> 
            <div className='product-head'>
                <h1>Products</h1>
            </div>
            
            <div className='product-categories'>
                
                <div className='category-wrapper'>
                    <div className='category-card'>
                        <img src={require('../../../../public/assets/nvidiaamd.jpg')} alt='Nvidia and AMD logos side by side' className='category-img'></img>
                        <h3>Graphics Cards</h3>
                        <p>View our selection of AMD and NVidia GPUs</p>
                        <Link to='/graphics-cards' exact className='card-links' >
                            <button>Shop Graphics Cards</button>
                        </Link>
                    </div>
                </div>
                <div className='category-wrapper'>
                    <div className='category-card'>
                        <img src={require('../../../../public/assets/intelamd.jpg')} alt='Intel and AMD processors side by side' className='category-img'></img>
                        <h3>Processors</h3>
                        <p>View our selection of AMD and Intel CPUs</p>
                        <Link to='/processors' exact className='card-links' >
                            <button>Shop Processors</button>
                        </Link>
                    </div>
                </div>
                <div className='category-wrapper'>
                    <div className='category-card'>
                        <img src={require('../../../../public/assets/corsair.jpg')} alt='Corsair Logo' className='category-img' ></img>
                        <h3>RAM</h3>
                        <p>View our selection of Corsair memory</p>
                        <Link to='/ram' exact className='card-links' >
                            <button>Shop RAM</button>
                        </Link>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Products