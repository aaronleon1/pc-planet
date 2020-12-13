import React from 'react'
import './NewProductsPage.css'
import {Link} from 'react-router-dom'

function NewProductsPage() {
    return(
        <div className='newPage'>
            <div className='newPage-wrapper'>

                <div className='card no-margin'>
                <Link to='/processors'>
                    <img src={require('../../../../public/assets/cpus.jpg')} alt='processors' className='card-img'/>
                        
                </Link>
                <p className='card-text'>
                           Processors
                        </p>
                </div>
                <div className='card'>
                    <Link to='graphics-cards' >
                        <img src={require('../../../../public/assets/videocards.jpg')} alt='' className='card-img'/>
                        
                    </Link>
                    <p className='card-text'>
                            Graphics Cards
                    </p>
                </div>
                <div className='card'>
                    <Link to='ram'>
                        <img src={require('../../../../public/assets/ramModules.jpg')} alt='' className='card-img'/>
                        
                    </Link>  
                    <p className='card-text'>
                            Memory
                        </p>
                </div>
                <div className='card'>
                    <Link to='#'>
                        <img src={require('../../../../public/assets/motherboards.jpg')} alt='' className='card-img'/>
                       
                    </Link> 
                    <p className='card-text'>
                            Motherboards
                        </p> 
                </div>
                <div className='card'>
                    <Link to='#'>
                        <img src={require('../../../../public/assets/monitors.jpg')} alt='' className='card-img'/>
                        
                    </Link>
                    <p className='card-text'>
                            Monitors
                        </p>  
                </div>
                <div className='card'>
                    <Link to='#'>
                        <img src={require('../../../../public/assets/ssds.jpg')} alt='' className='card-img'/>
                        
                    </Link>
                    <p className='card-text'>
                            Hard Drives and SSDs
                        </p>  
                </div>
                <div className='card'>
                    <Link to='#'>
                        <img src={require('../../../../public/assets/coolers.jpg')} alt='' className='card-img'/>
                        
                    </Link>
                    <p className='card-text'>
                            Coolers
                        </p>  
                </div>
                <div className='card'>
                    <Link to='#'>
                        <img src={require('../../../../public/assets/routers.jpg')} alt='' className='card-img'/>
                        
                    </Link>  
                    <p className='card-text'>
                            Routers
                        </p>
                </div>
                <div className='card'>
                    <Link to='#'>
                        <img src={require('../../../../public/assets/powerSupplys.jpg')} alt='' className='card-img'/>
                        
                    </Link>
                    <p className='card-text'>
                            Power Supplies
                        </p>  
                </div>
                <div className='card'>
                    <Link to='#'>
                        <img src={require('../../../../public/assets/cases.jpg')} alt='' className='card-img'/>
                        
                    </Link> 
                    <p className='card-text'>
                            Cases
                        </p> 
                </div>
                <div className='card'>
                    <Link to='#'>
                        <img src={require('../../../../public/assets/desktops.jpg')} alt='' className='card-img'/>
                        
                    </Link>
                    <p className='card-text'>
                            Desktops
                        </p>  
                </div>
                <div className='card'>
                    <Link to='#'>
                        <img src={require('../../../../public/assets/laptops.jpg')} alt='' className='card-img'/>
                        
                    </Link>
                    <p className='card-text'>
                            Laptops
                        </p>  
                </div>
            </div>
        </div>
    )
}

export default NewProductsPage