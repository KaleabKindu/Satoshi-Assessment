import React from "react";
import { withRootLayout } from "../hoc/withRootLayout";
import ProductUpdateForm from "../components/ProjectUpdateForm";


const ProductDetail = () => {
  return <ProductUpdateForm/>;
};

export default withRootLayout(ProductDetail);
