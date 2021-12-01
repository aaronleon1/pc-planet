import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

function ExtraDeal(props) {
  const { id, productName, productImage } = props.prod;
  return (
    <ProductConsumer>
      {(value) => (
        <div className="extra-deal" onClick={() => value.handleDetail(id)}>
          <Link to="/details">
            <img
              src={productImage}
              alt={productName}
              className="product-image"
            />
          </Link>
        </div>
      )}
    </ProductConsumer>
  );
}

export default ExtraDeal;
