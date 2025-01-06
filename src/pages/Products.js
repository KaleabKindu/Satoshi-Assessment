import React from "react";
import ProductsList from "../components/ProductsList";
import { withRootLayout } from "../hoc/withRootLayout";
const Products = () => {
  return <ProductsList />;
};

export default withRootLayout(Products);
