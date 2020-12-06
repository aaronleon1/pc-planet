import React from 'react'
import './NewProductsPage.css'
import {Link} from 'react-router-dom'

function NewProductsPage() {
    return(
        <div className='newPage'>
            <div className='newPage-wrapper'>

                <div className='card'>
                <Link to='/processors'>
                    <img src={require('../../../../public/assets/processors.jpg')} alt='mouse' className='card-img'/>
                        <p className='card-text'>
                            Shop Processors
                        </p>
                </Link>
                </div>
                <div className='card'>
                    <Link to='graphics-cards' >
                        <img src={require('../../../../public/assets/gpus.jpg')} alt='' className='card-img'/>
                        <p className='card-text'>
                            Shop GPUs
                        </p>
                    </Link>
                </div>
                <div className='card'>
                    <Link to='ram'>
                        <img src={require('../../../../public/assets/ram.jpg')} alt='' className='card-img'/>
                        <p className='card-text'>
                            Shop RAM
                        </p>
                    </Link>  
                </div>
                
            </div>
        </div>
    )
}

export default NewProductsPage