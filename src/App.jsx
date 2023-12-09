import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Shop } from "./pages/store/shop/shop";
import { Cart } from "./pages/store/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import axios from 'axios';

import Navbar from "./components/navbar1";
import { ShopCustomer } from "./pages/customer/shopCustomer";
import { ShopWarehouse } from "./pages/warehouse/shopWarehouse";
import Req from "./pages/warehouse/req";
import ReqStore from "./pages/store/requests/reqStore";
import { Shop2 } from "./pages/store/shop/shop2";





function App() {

  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Routes>

            {/* TAMPILAN DISPLAY PELANGGAN */}
            <Route path="/" element={<ShopCustomer />} />   {/* Alief - DONE */}

            {/* TAMPILAN UPDATE STAF GUDANG (QUALITY CONTROL) */}
            <Route path="/warehouse" element={<ShopWarehouse />} />   {/* Alief */}

            {/* TAMPILAN REQUEST STAF GUDANG + UPDATE STATUS*/}        {/* Sam */}
            <Route path="/req" element={<Req />} />

            {/* TAMPILAN DISPLAY STAF TOKO */}          {/* ALief - DONE */}
            <Route path="/shop" element={<Shop />} />

            {/* Jujur, gatau ini apa wkwkwk */}         {/* Alief - gakepake */}
            <Route path="/cart" element={<Cart />} />

            {/* TAMPILAN REQUEST STAF TOKO */}
            <Route path="/reqstore" element={<ReqStore />} />       {/* Sam */}
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
