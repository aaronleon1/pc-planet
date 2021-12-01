import React, { Component } from "react";
import { detailProduct } from "./UI/FeaturedCards/GPU/GPU";
import axios from "axios";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0,
    recommendedProducts: [],
  };
  componentDidMount() {
    axios
      .get("https://pc-planet-55aa4.firebaseio.com/products.json")
      .then((response) => {
        const fetchedProducts = [];
        for (let key in response.data) {
          fetchedProducts.push({
            ...response.data[key],
            prodID: key,
          });
        }
        this.setState({
          products: fetchedProducts,
          recommendedProducts: [...fetchedProducts],
        });
      });
    let data = localStorage.getItem("myProduct");
    data = JSON.parse(data);
    this.setProducts();
    this.setState({ detailProduct: data });
  }
  setProducts = () => {
    let tempProducts = [];

    this.state.products.forEach((item) => {
      const singleProduct = { ...item };
      tempProducts = [...tempProducts, singleProduct];
    });
    this.setState({
      products: tempProducts,
      recommendedProducts: tempProducts,
    });
  };

  getProductID = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    localStorage.setItem("myProduct", JSON.stringify(product));

    return product;
  };
  handleDetail = (id) => {
    const product = this.getProductID(id);
    this.setState({ detailProduct: product });
  };

  addToCart = (id) => {
    let tempProducts = [...this.state.products]; //Products temporarily in cart
    const index = tempProducts.indexOf(this.getProductID(id));

    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.productPrice;
    product.total = price;
    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  openModal = (id) => {
    const product = this.getProductID(id);
    this.setState({ modalProduct: product, modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;

    product.total = product.count * product.productPrice;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;

    if (product.count === 0) {
      this.removeFromCart(id);
    } else {
      product.total = product.count * product.productPrice;

      this.setState(
        () => {
          return {
            cart: [...tempCart],
          };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  removeFromCart = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter((item) => item.id !== id); //array method to ensure right item deleted

    const index = tempProducts.indexOf(this.getProductID(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
    window.location.reload();
  };
  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.08;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubtotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeFromCart: this.removeFromCart,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
