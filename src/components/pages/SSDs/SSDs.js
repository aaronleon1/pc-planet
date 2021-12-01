import React, { Component } from "react";
import "../Products/Products.css";
import ProductCard from "../../ProductCard/ProductCard";
import { ProductConsumer } from "../../context";

class SSDs extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="product-wrapper">
        <div className="product-banner">
          <img
            src={require("../../../../public/assets/ssdBanner.jpg")}
            alt="catergory banner"
          />
        </div>
        <div className="product-head">
          <h1>Hard Drives and SSDs</h1>
        </div>
        <div className="product-cards-wrapper">
          <ProductConsumer>
            {(value) => {
              return value.products.slice(23, 25).map((prod) => {
                return <ProductCard key={prod.id} prod={prod} />;
              });
            }}
          </ProductConsumer>
        </div>
      </div>
    );
  }
}

export default SSDs;
