import React, { createContext, useState } from "react";
import product_data from "../data/products.json";

export const ProductsContext = createContext({
  products: [],
  updateProduct: () => {},
});

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([...product_data]);
  const updateProduct = (id, newData) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, ...newData } : product
      )
    );
  };
  return (
    <ProductsContext.Provider value={{ products, updateProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
