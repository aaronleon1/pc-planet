import React from 'react'
import '../../Products.css'
import GPUCard from '../../../../pages/GraphicsCards/GPUCard';
import {ProductConsumer} from '../../../../context'

const GraphicsCardsHome = (props) => {
    return (
        <div className='ProductCards'>

            <ProductConsumer>
                    {value =>{
                       return value.products.slice(0,8).map( gpu => {
                           return <GPUCard key={gpu.id}
                            gpu={gpu}  
                            />
                       })
                    }}
            </ProductConsumer>
    </div>
    )
}

export default GraphicsCardsHome