import React from 'react'
import './TodaysDeal.css'


function TodaysDeal(){
    return(
        <div className='deal-div'>
            <div className='deal-wrapper'>
                <div className='deal-img'>
                    <h1 style={{fontWeight: '400'}}>Deal of the Day</h1>
                    <img src={require('../../../public/assets/amd5700.jpg')} alt='amd 5700'></img>
                </div>
                <div className='deal-details'>
                    <div className='deal-name'><h1>AMD Radeon 5700 XT</h1></div>
                    <div className='deal-price'>
                        <h2 style={{textDecoration: 'line-through', color: '#B8B8B8', fontWeight: '300'}}>
                            $350
                        </h2>
                        <h2 style={{paddingLeft: '16px', fontWeight: '300'}}>
                            $300
                        </h2>
                    </div>
                    <div className='deal-desc'>
                        <h2>Details:</h2>
                        <ul>
                            <li>
                                Brand: ASUS 
                            </li>
                            <li>
                                Graphics Processor: AMD Radeon RX 5700 
                            </li>
                            <li>
                                Chipset Brand: AMD  
                            </li>
                            <li>
                                Graphics Ram Type: GDDR6 
                            </li>
                            <li>
                                Graphics Ram Size: 8 GB   
                            </li>
                        </ul>
                    </div>
                    <div className='deal-more'>
                        <h2 style={{fontWeight: '400'}}>More Like this</h2>
                        <div className='extra-deal-wrapper'>
                            <div className='extra-deal'>
                                <img src={require('../../../public/assets/amd5600xt.jpg')} className='extra-deal-img' alt='deal' />
                            </div>
                            <div className='extra-deal'>
                                <img src={require('../../../public/assets/amd5700xt.jpg')} className='extra-deal-img' alt='deal' />
                            </div>
                            <div className='extra-deal'>
                                <img src={require('../../../public/assets/rtx2060.jpg')} className='extra-deal-img' alt='deal' />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodaysDeal