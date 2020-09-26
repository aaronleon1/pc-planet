import React, {Component} from 'react';
import '../../ProductCard/ProductCard.css'
import ProductCard from '../../ProductCard/ProductCard';
import {ProductConsumer} from '../../context'


class GraphicsCards extends Component {

    render() {
        return(
            
            <div className='products-wrapper'> 
                <div className='products-head'>
                    <h1>Graphics Cards</h1>
                </div>
                <div className='products-cards-wrapper'>
                <ProductConsumer>
                    {value =>{
                       return value.products.slice(0,8).map( prod => {
                           return <ProductCard key={prod.id}
                            prod={prod}  
                            />
                       })
                    }}
                </ProductConsumer>
                </div>
                
            </div>  
        )
    }
        
    }
    

export default GraphicsCards