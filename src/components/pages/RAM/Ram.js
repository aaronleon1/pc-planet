import React, {Component} from 'react';
import '../../ProductCard/ProductCard.css'
import ProductCard from '../../ProductCard/ProductCard';
import {ProductConsumer} from '../../context'


class RAM extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        
        return(
            
            <div className='product-wrapper'> 
                <div className='product-head'>
                    <h1>RAM</h1>
                </div>
                <div className='product-cards-wrapper'>
                <ProductConsumer>
                    {value =>{
                       return value.products.slice(16,19).map( prod => {
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

    export default RAM