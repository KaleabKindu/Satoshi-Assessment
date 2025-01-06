import React from "react";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/:id" element={<ProductDetail />} />
      </Routes>
    </Layout>
  );
}

export default App;
