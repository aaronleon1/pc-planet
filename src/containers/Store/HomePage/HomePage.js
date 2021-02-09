import React, {Component} from 'react'
import HeroSlider from '../../../components/UI/Slider/Slider'
import FeaturedProducts from './FeaturedProducts'
import HomePageLinks from '../../../components/HomePageLinks/homePageLinks'
import TodaysDeal from '../../../components/TodaysDeal/TodaysDeal'
import BestSellerBanner from '../../../components/BestSellerBanner/BestSellerBanner'
import LimitedTimeOffers from '../../../components/LimitedTimeOffers/LimitedTimeOffers'
import HomeProductSlider from '../../../components/HomeProductSlider/HomeProductSlider'

class HomePage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render(){
        
        return(
            <div className='home-page'>
                <HeroSlider /> 
                <TodaysDeal />
                <HomeProductSlider />
                <BestSellerBanner />
                <LimitedTimeOffers />
                <HomePageLinks />
            </div>
        )
    }
}

export default HomePage