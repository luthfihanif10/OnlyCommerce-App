import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Shop } from "./pages/store/shop/shop";
import { Cart } from "./pages/store/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { ShopCustomer } from "./pages/customer/shopCustomer";
import { ShopWarehouse } from "./pages/warehouse/shopWarehouse";
import Req from "./pages/warehouse/req";
import ReqStore from "./pages/store/requests/reqStore";

function App() {
  return (
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
    </div>
  );
}

export default App;
