import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
const ProductsList = () => {
  const value = useContext(ProductsContext);
  console.log("here", value);
  return <div>ProductList</div>;
};

export default ProductsList;
