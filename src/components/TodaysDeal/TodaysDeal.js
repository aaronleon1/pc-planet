import React from 'react'
import './TodaysDeal.css'
import ExtraDeal from './ExtraDeal'
import {ProductConsumer} from '../context'


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
                        <h2 style={{fontWeight: '400'}}>More Like This</h2>
                        <div className='extra-deal-wrapper'>
                        <ProductConsumer>
                        {value =>{
                            return value.products.slice(3,6).map( prod => {
                                return <ExtraDeal key={prod.id}
                                    prod={prod}  
                                    />
                            })
                        }}
                        </ProductConsumer>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default TodaysDeal