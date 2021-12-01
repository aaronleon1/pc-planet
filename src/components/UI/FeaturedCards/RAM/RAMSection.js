import React from "react";
import "../../../ProductCard/ProductCard.css";
import ProductCard from "../../../ProductCard/ProductCard";
import { ProductConsumer } from "../../../context";

const RAMHome = (props) => {
  return (
    <div className="ProductCards">
      <ProductConsumer>
        {(value) => {
          return value.products.slice(16, 19).map((prod) => {
            return <ProductCard key={prod.id} prod={prod} />;
          });
        }}
      </ProductConsumer>
    </div>
  );
};

export default RAMHome;
