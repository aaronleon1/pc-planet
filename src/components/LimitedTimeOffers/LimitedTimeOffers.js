import React from 'react'
import './LimitedTimeOffers.css'
import Carousel from 'react-elastic-carousel'

function LimitedTimeOffers(){
    const breakPoints = [
        { width: 1, itemsToShow: 1},
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: 4, itemsToScroll: 4 }
      ];
    return(
        <div className='limited-deals-wrapper'>
            <div className='limited-deals-heading'>
                <p style={{margin: '12px 8px', fontSize: '32px', fontWeight:'400'}}>
                    Limited Time Offers
                </p>
            </div>
            <Carousel breakPoints={breakPoints}>
                <div className='limited-deal'>
                    <img src={require('../../../public/assets/deal1.png')} alt='limited-deal' className='limited-deal-img'/>
                </div>
                <div className='limited-deal'>
                    <img src={require('../../../public/assets/deal2.jpg')} alt='limited-deal' className='limited-deal-img'/>
                </div>
                <div className='limited-deal'>
                    <img src={require('../../../public/assets/deal3.png')} alt='limited-deal' className='limited-deal-img'/>
                </div>
                <div className='limited-deal'>
                    <img src={require('../../../public/assets/deal4.png')} alt='limited-deal' className='limited-deal-img'/>
                </div>
                <div className='limited-deal'>
                    <img src={require('../../../public/assets/deal5.png')} alt='limited-deal' className='limited-deal-img'/>
                </div>
                <div className='limited-deal'>
                    <img src={require('../../../public/assets/deal6.png')} alt='limited-deal' className='limited-deal-img'/>
                </div>
                <div className='limited-deal'>
                    <img src={require('../../../public/assets/deal7.gif')} alt='limited-deal' className='limited-deal-img'/>
                    <img src={require('../../../public/assets/deal8.gif')} alt='limited-deal' className='limited-deal-img thin-img'/>
                </div>
            </Carousel>
        </div>
        
        
        
    )
}

export default LimitedTimeOffers