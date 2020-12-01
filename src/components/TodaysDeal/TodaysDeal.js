import React from 'react'
import './TodaysDeal.css'

function TodaysDeal(){
    return(
        <div className='deal-div'>
            <div className='deal-wrapper'>
                <div className='deal-img'>
                    <img></img>
                </div>
                <div className='deal-name'></div>
                <div className='deal-desc'></div>
                <div className='deal-more'>
                    <p>More Like this</p>
                    <div className='extra-deal'></div>
                    <div className='extra-deal'></div>
                    <div className='extra-deal'></div>
                </div>

            </div>
        </div>
    )
}

export default TodaysDeal