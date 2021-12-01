import React from "react";
import "../../../ProductCard/ProductCard.css";
import ProductCard from "../../../ProductCard/ProductCard";
import { ProductConsumer } from "../../../context";

const ProcessorsHome = (props) => {
  return (
    <div className="ProductCards">
      <ProductConsumer>
        {(value) => {
          return value.products.slice(8, 11).map((prod) => {
            return <ProductCard key={prod.id} prod={prod} />;
          });
        }}
      </ProductConsumer>
    </div>
  );
};

export default ProcessorsHome;
