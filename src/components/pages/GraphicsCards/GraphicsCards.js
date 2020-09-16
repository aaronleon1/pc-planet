import React, {Component} from 'react';
import './GraphicsCards.css'
import GPUCard from './GPUCard';
import {ProductConsumer} from '../../context'


class GraphicsCards extends Component {

    render() {
        return(
            
            <div className='graphics-wrapper'> 
                <div className='graphics-head'>
                    <h1>Graphics Cards</h1>
                </div>
                <div className='gpu-cards-wrapper'>
                <ProductConsumer>
                    {value =>{
                       return value.products.map( gpu => {
                           return <GPUCard key={gpu.id}
                            gpu={gpu}  
                            />
                       })
                    }}
                </ProductConsumer>
                </div>
                
            </div>  
        )
    }
        
    }
    /*
 <div className='gpu-cards-wrapper'>
                    {graphicsProducts.map((gpu, index) => {
                                return (
                                <Link to={'/graphics-cards/'+ gpu.id}>
                                    
                                        <GPUCard key={gpu.id}
                                        image={gpu.productImage}
                                        name={gpu.productName}
                                        price={gpu.productPrice}
                                        
                                        />
                                    
                                </Link>
                                
                            )  
                            })}
                </div>
    */
        

    

export default GraphicsCards