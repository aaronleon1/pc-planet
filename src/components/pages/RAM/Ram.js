import React, {Component} from 'react';
import './Ram.css'
import RAMCard from './RAMCards';
import {ProductConsumer} from '../../context'


class RAM extends Component {

    render() {
        return(
            
            <div className='ram-wrapper'> 
                <div className='ram-head'>
                    <h1>RAM</h1>
                </div>
                <div className='ram-cards-wrapper'>
                <ProductConsumer>
                    {value =>{
                       return value.products.slice(16,19).map( ram => {
                           return <RAMCard key={ram.id}
                            ram={ram}  
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