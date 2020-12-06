import React from 'react'
import './BestSellerBanner.css'

function BestSellerBanner(){
    return(
        <div className='ram-bestseller'>
            <center>
                <a href='#' >
                    <img src={require('../../../public/assets/homeBestseller.jpg')} alt='' className='bestseller-img'/>
                </a>
            </center>
            
        </div>
    )
}

export default BestSellerBanner