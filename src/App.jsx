import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import Login from "./components/login";
import HomePage from "./pages/homepage";
import axios from 'axios';
import TokoHomepage from "./pages/tokoHomepage";
import Navbar from "./components/navbarPelanggan";





=======
import { Shop } from "./pages/store/shop/shop";
import { Cart } from "./pages/store/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { ShopCustomer } from "./pages/customer/shopCustomer";
import { ShopWarehouse } from "./pages/warehouse/shopWarehouse";
import Req from "./pages/warehouse/req";
import ReqStore from "./pages/store/requests/reqStore";
>>>>>>> 2bf895e8e85ce8bdb062eccf00b63355a3c4c479

function App() {

  return (
<<<<<<< HEAD
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
=======
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/req" element={<Req />} />
            <Route path="/customer" element={<ShopCustomer />} />
            <Route path="/warehouse" element={<ShopWarehouse />} />
            <Route path="/reqstore" element={<ReqStore />} />
          </Routes>
        </Router>
      </ShopContextProvider>
>>>>>>> 2bf895e8e85ce8bdb062eccf00b63355a3c4c479
    </div>
  );
}

export default App;
