import React from 'react'
import '../../Products.css'
import RAMCard from '../../../../pages/RAM/RAMCards';
import {ProductConsumer} from '../../../../context'

const RAMHome = (props) => {
    return (
        <div className='ProductCards'>

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
    )
}

export default RAMHome