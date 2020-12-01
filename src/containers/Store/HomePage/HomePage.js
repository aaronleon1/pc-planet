import React, {Component} from 'react'
import HeroSlider from '../../../components/UI/Slider/Slider'
import FeaturedProducts from './FeaturedProducts'
import HomePageLinks from '../../../components/HomePageLinks/homePageLinks'
import NewHomePage from '../../../components/pages/NewHomepage/NewHomepage'
import TodaysDeal from '../../../components/TodaysDeal/TodaysDeal'


class HomePage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render(){
        
        return(
            <div className='home-page'>
                <HeroSlider />
                <TodaysDeal />
                <HomePageLinks />
            </div>
        )
    }
}

export default HomePage