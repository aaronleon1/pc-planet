import React, {Component} from 'react'
import HeroSlider from '../../../components/UI/Slider/Slider'
import FeaturedProducts from './FeaturedProducts'
import HomePageLinks from '../../../components/HomePageLinks/homePageLinks'
import NewHomePage from '../../../components/pages/NewHomepage/NewHomepage'


class HomePage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render(){
        
        return(
            <div className='home-page'>
                <HeroSlider />
                <HomePageLinks />
            </div>
        )
    }
}

export default HomePage