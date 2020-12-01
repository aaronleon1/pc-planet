import React from 'react'
import './homePageLinks.css'

function HomePageLinks(){
    return(
        <div className='home-cards'>
            <div className='home-cards-wrapper'>
                <div className='home-card'>
                    <img src={require('../../../public/assets/pcsetup.jpg')} alt='' className='home-card-img'/>
                    <p className='home-card-text'>
                        Submit a setup for a chance to win
                    </p>
                </div>
                <div className='home-card'>
                    <img src={require('../../../public/assets/repair.jpg')} alt='' className='home-card-img'/>
                    <p className='home-card-text'>
                        Need a repair or tuneup?
                    </p>
                </div>
                <div className='home-card'>
                    <img src={require('../../../public/assets/socialmedia.jpg')} alt='' className='home-card-img'/>
                    <p className='home-card-text'>
                        Follow us on social media
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomePageLinks