import React from 'react';
import Home from './pages/Home';
import Products from './pages/Products';
import Layout from './components/Layout';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
      </Routes>
    </Layout>
  );
}

export default App;