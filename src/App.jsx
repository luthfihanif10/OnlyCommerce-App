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
    <div>
       <ShopContextProvider>  
    <Router>  
      <Routes>
        {/* Add other routes as needed */}


            <Route path="/cart" element={<Cart />} />
            <Route path="/req" element={<Req />} />
            <Route path="/" element={<ShopCustomer />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop2" element={<Shop2 />} />
            <Route path="/warehouse" element={<ShopWarehouse />} />
            <Route path="/reqstore" element={<ReqStore />} />
        {/* Add routes for other homepages */}
        {/* Add a catch-all route for unknown paths */}
      </Routes>
    </Router>
    </ShopContextProvider>
    </div>
  );
}

export default App;
