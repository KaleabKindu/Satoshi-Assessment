import React from "react";
import ProductsList from "../components/ProjectsList";
import { withRootLayout } from "../hoc/withRootLayout";
const Products = () => {
  return <ProductsList />;
};

export default withRootLayout(Products);
