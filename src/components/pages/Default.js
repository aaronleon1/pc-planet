import React, {Component} from 'react'
import axios from 'axios'
import './Default.css'

class Default extends Component {
    componentDidMount(){
        axios.get('https://pc-planet-55aa4.firebaseio.com/graphics-cards.json')
        .then(response => {
            console.log(response)
        })
    }
    render() {
        console.log(this.props)
        return(
            <div className='error-container'>
                <div className='error-code'>
                    <h1>404</h1>
                    <h2>Page not found</h2>
                    <h3>The requested URL <span>{this.props.location.pathname} </span>was not found</h3>
                </div>
            </div>
        )
    }
}

export default Default