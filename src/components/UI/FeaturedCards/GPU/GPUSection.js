import React from 'react'
import '../../../ProductCard/ProductCard.css'
import ProductCard from '../../../ProductCard/ProductCard';
import {ProductConsumer} from '../../../context'

const GraphicsCardsHome = (props) => {
    return (
        <div className='ProductCards'>

            <ProductConsumer>
                    {value =>{
                       return value.products.slice(0,3).map( prod => {
                           return <ProductCard key={prod.id}
                            prod={prod}  
                            />
                       })
                    }}
            </ProductConsumer>
    </div>
    )
}

export default GraphicsCardsHome