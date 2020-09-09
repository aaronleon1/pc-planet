import React, {Component} from 'react'
import Slider from 'react-slick'
import './Slider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const banners = [
    {
        imgName: 'CPU GPU Bundle',
        imgLocation: 'bundle'
    },
    {
        imgName: 'COVID-19 Shipping Warning',
        imgLocation: 'takeTime'
    },
    
]
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
                    {banners.map((photo) =>{
                        return(
                            <div>
                                <img width='100%' height='100%'src={require(`../../../../public/assets/${photo.imgLocation}.png`)} alt={photo.imgName} />
                            </div>
                        )
                    })}

                </Slider>
            </div>
        )
    }
}

export default HeroSlider