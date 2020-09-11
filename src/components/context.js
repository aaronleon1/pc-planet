import React, { Component } from 'react';
import {graphicsProducts, detailProduct} from './UI/ProductCard/Products/GPU/GPU'


const ProductContext = React.createContext()
//Provider provides all information
//Consumer allows use of that info. wont need props



class ProductProvider extends Component {
    state ={
        products: [],
        detailProduct: detailProduct,
        cart: []

    }
    componentDidMount() {
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts = []
        graphicsProducts.forEach(item => {
            const singleProduct = {...item};
            tempProducts = [...tempProducts, singleProduct]
            
        })
        this.setState(()=>{
            return{products: tempProducts}
        })
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

    addToCart = (id) => {
        console.log(`added ${id}`)
        let tempProducts = [...this.state.products] //Products temporarily in cart
        const index = tempProducts.indexOf(this.getProductID(id))

        const product = tempProducts[index]
        product.inCart = true;
        product.count = 1
        const price = product.price;
        product.total = price
        this.setState(() =>{
            return {products: tempProducts, cart:[...this.state.cart]}
        })
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