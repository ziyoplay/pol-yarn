import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from './Homepage';
import Products from './Products';
import ProductDetail from './ProductDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<Products/>} />
      <Route path="/products-detail" element={<ProductDetail/>} />
    </Routes>
  </BrowserRouter>
);


