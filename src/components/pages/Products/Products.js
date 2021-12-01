import React, { useEffect } from "react";
import "./Products.css";
import NewProductsPage from "../NewProductsPage/NewProductsPage";
import { Link } from "react-router-dom";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <NewProductsPage />;
};

export default Products;
