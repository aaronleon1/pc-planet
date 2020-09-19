import React from 'react'
import '../../Products.css'
import CPUCard from '../../../../pages/Processors/CPUCard';
import {ProductConsumer} from '../../../../context'

const ProcessorsHome = (props) => {
    return (
        <div className='ProductCards'>

            <ProductConsumer>
                    {value =>{
                       return value.products.slice(8,16).map( cpu => {
                           return <CPUCard key={cpu.id}
                            cpu={cpu}  
                            />
                       })
                    }}
            </ProductConsumer>
    </div>
    )
}

export default ProcessorsHome
