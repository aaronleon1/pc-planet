import React, {Component} from 'react'
import '../Products/Products.css'
import ProductCard from '../../ProductCard/ProductCard';
import {ProductConsumer} from '../../context'


class ComputerCases extends Component {

    componentDidMount(){
        window.scrollTo(0, 0)
      }
    render() {
         
        return(
            
            <div className='product-wrapper'> 
                <div className='product-banner'>
                    <img src={require('../../../../public/assets/casesBanner.jpg')} alt='catergory banner' />
                </div>
                <div className='product-head'>
                    <h1>Computer Cases</h1>
                </div>
                <div className='product-cards-wrapper'>
                <ProductConsumer>
                    {value =>{
                       return value.products.slice(19,21).map( prod => {
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
    

export default ComputerCases