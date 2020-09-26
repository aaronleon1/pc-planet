import React, {Component} from 'react';
import '../../ProductCard/ProductCard.css'
import {ProductConsumer} from '../../context'
import ProductCard from '../../ProductCard/ProductCard'


class Processors extends Component {

    render() {
        return(
            
            <div className='product-wrapper'> 
                <div className='product-head'>
                    <h1>Processors</h1>
                </div>
                <div className='product-cards-wrapper'>
                <ProductConsumer>
                    {value =>{
                       return value.products.slice(8,16).map( prod => {
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

    export default Processors
/*
const Processors = () => {
    return(
        <div className='processors-wrapper'> 
            <div className='processors-head'>
                <h1>Processors</h1>
            </div>
            <div className='cpu-cards-wrapper'>
                {Products.map((cpu, index) => {
                            return (
                            <div className='card-wrapper' key={index}>
                                <div className='processors-cards' >
                                    <img src={require(`../../../../public/assets/${cpu.productImage}.jpg`)} alt={cpu.productName} className='cpu-image'/>
                                    <h2 className='cpu-name'>{cpu.productName}</h2>
                                    <p className='cpu-price'>{cpu.productPrice}</p>
                                    <button className='view-btn'>View Item</button>
                                </div>
                            </div>
                        )  
                        })}
            </div>            
        </div>  
    )
}

export default Processors
*/