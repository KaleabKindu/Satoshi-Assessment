import React from "react";
import { withRootLayout } from "../hoc/withRootLayout";
import ProductUpdateForm from "../components/ProductUpdateForm";


const ProductDetail = () => {
  return <ProductUpdateForm/>;
};

export default withRootLayout(ProductDetail);
