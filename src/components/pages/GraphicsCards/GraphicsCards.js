import React, {Component} from 'react';
import './GraphicsCards.css'
import GPUCard from './GPUCard'
import ProductDetails from '../../ProductDetails/ProductDetails'
import {BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom'


class GraphicsCards extends Component {

    state = {
        products: [
            {   
                id: 1,
                productName: 'AMD Radeon VII',
                productImage: 'amdVII',
                productPrice: '$549.99',
                url: '/amd-radeon-vii'
            },
            {
                id: 2,
                productName: 'AMD Radeon RX 5700XT',
                productImage: 'amd5700xt',
                productPrice: '$399.99',
                url: '/amd-radeon-rx-5700-xt'
            },
            {   id: 3,
                productName: 'AMD Radeon RX 5700',
                productImage: 'amd5700',
                productPrice: '$349.99',
                url: '/amd-radeon-rx-5700'
            },
            {   id: 4,
                productName: 'AMD Radeon RX 5600XT',
                productImage: 'amd5600xt',
                productPrice: '$279.99',
                url: '/amd-radeon-rx-5600-xt'
            },
            {   id: 5,
                productName: 'Nvidia GeForce RTX 2080Ti',
                productImage: 'rtx2080ti',
                productPrice: '$999.99',
                url: '/nvidia-rtx-2080-ti'
            },
            {   
                id: 6,
                productName: 'Nvidia GeForce RTX 2070',
                productImage: 'rtx2070',
                productPrice: '$499.99',
                url: '/nvidia-rtx-2070'
            },
            {   id: 7,
                productName: 'Nvidia GeForce RTX 2060 Super',
                productImage: 'rtx2060s',
                productPrice: '349.99',
                url: '/nvidia-rtx-2060-super'
            },
            {   
                id: 8,
                productName: 'Nvidia GeForce RTX 2060',
                productImage: 'rtx2060',
                productPrice: '$279.99',
                url: '/nvidia-rtx-2060'
            }
        ],
        selectedGPUid: null
    }
    
   
    gpuClickedHandler = (id) => {
        this.setState({selectedGPUid: id})
    }

   
    render() {

        let gpus = this.state.products.map((gpu) => {
            return (
                    <Link to={'/' + gpu.id} key={gpu.id}>
                        <GPUCard
                            image={require(`../../../../public/assets/${gpu.productImage}.jpg`)} 
                            name={gpu.productName} 
                            price={gpu.productPrice}
                            click={() => this.gpuClickedHandler(gpu.id)}
                        />
                    </Link>  
            )  
            })
        return(
            <div className='graphics-wrapper'> 
                <div className='graphics-head'>
                    <h1>Graphics Cards</h1>
                </div>
                <div className='gpu-cards-wrapper'>
                   {gpus} 
                </div>            
            </div>  
        )
    }
    
}

export default GraphicsCards