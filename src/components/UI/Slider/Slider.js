import React, {useState} from 'react'
import './Slider.css'
import Imgs from './Imgs'
import i1 from '../../../../public/assets/i1.jpg'
import i2 from '../../../../public/assets/i2.gif'
import i3 from '../../../../public/assets/i3.jpg'
import i4 from '../../../../public/assets/i4.jpg'
import i5 from '../../../../public/assets/i5.jpg'



function HeroSlider() { 

    let sliderImgs = [
        <Imgs src={i1}/>, 
        <Imgs src={i2}/>, 
        <Imgs src={i3}/>, 
        <Imgs src={i4}/>,
        <Imgs src={i5}/>
        
    ]
    const [x, setX] = useState(0)

    const shiftLeft = () => {
       x === 0 * (sliderImgs.length-1) ? setX(0) : setX(x+100)
    }
    const shiftRight = () => {
        x === -100 * (sliderImgs.length-1) ? setX(0) : setX(x-100)
    }
    return (
        <div className='slider' >
            {
                sliderImgs.map((item, index) =>{
                    return (
                        <div key={index} className='slide' style={{transform: `translateX(${x}%)`}}>
                            {item}
                        </div>
                        
                    )
                })
            }
            <button id='left'  onClick={shiftLeft}><i class="fas fa-chevron-left"></i></button>
            <button id='right' onClick={shiftRight}><i class="fas fa-chevron-right"></i></button>
        </div>
    )
}


export default HeroSlider
/*
class HeroSlider extends Component {
    
    render() {
        const settings = {
            dots: true,
            fade: true,
            autoplay: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            arrows: true,
            slidesToScroll: 1,
            className: 'slides'
        }
        return(
            <div className='slider'>
                <Slider {...settings}>
                    {banners.map((photo, index) =>{
                        return(
                            <div key={index}>
                                <img width='100%' height='100%'src={require(`../../../../public/assets/${photo.imgLocation}.png`)} alt={photo.imgName} />
                            </div>
                        )
                    })}

                </Slider>
            </div>
        )
    }
}
*/