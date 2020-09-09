import React, { Component } from 'react';
import {graphicsProducts, detailProduct} from './UI/ProductCard/Products/GPU/GPU'


const ProductContext = React.createContext()
//Provider provides all information
//Consumer allows use of that info. wont need props



class ProductProvider extends Component {
    state ={
        products: graphicsProducts,
        detailProduct: detailProduct

    }

    getProductID = (id) => {
        const product = this.state.products.find(item => item.id === id)
        return product
    }
    handleDetail = (id) => {
        const product = this.getProductID(id);
        this.setState(() => {
            return {detailProduct: product}
        })
    }
    addToCart = () => {
        console.log('hello from cart')
    }
    render() {
        return(
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer}