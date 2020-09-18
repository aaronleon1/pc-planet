import React, {Component} from 'react'
import axios from 'axios'
import './Default.css'
import firebase from '../../firebase'

class Default extends Component {
    
    state={
        products: []
    }
    componentDidMount(){
        axios.get('https://pc-planet-55aa4.firebaseio.com/graphics-cards.json')
        .then(response => {
            const fetchedProducts = []
            for(let key in response.data){
                fetchedProducts.push({
                    ...response.data[key],
                    prodID: key
                })
            }
            this.setState({products: fetchedProducts})
            
            console.log(this.state.products)
        })
    }
    render() {
        const prodnames = this.state.products.map((n) =>{
            return<p>{n.productName}</p>
        })
        var database = firebase.database();
        return(
            <div className='error-container'>
                <div className='error-code'>
                    <h1>404</h1>
                    <h2>Page not found</h2>
                    <h3>The requested URL <span>{this.props.location.pathname} </span>was not found</h3>
                    {prodnames}               
                </div>
            </div>
        )
    }
}

export default Default