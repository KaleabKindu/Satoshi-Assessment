import React from "react";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
