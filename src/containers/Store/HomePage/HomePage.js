import React, {Component} from 'react'
import HeroSlider from '../../../components/UI/Slider/Slider'
import FeaturedProducts from './FeaturedProducts'
import './HomePage.css'


class HomePage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render(){
        
        return(
            <div className='home-page'>
                <HeroSlider />
                <FeaturedProducts />
            </div>
        )
    }
}

export default HomePage