import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import Login from "./components/login";
import HomePage from "./pages/homepage";
import axios from 'axios';
import TokoHomepage from "./pages/tokoHomepage";
import Navbar from "./components/navbarPelanggan";






function App() {

  return (
    <div>
      
    <Router>
    <Navbar role="gudang"/>

      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add other routes as needed */}
        <Route path="/user-homepage" element={<HomePage />} />
        <Route path="/toko-homepage" element={<TokoHomepage />} />

        {/* Add routes for other homepages */}
        {/* Add a catch-all route for unknown paths */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
