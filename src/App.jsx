import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/store/shop/shop";
import { Cart } from "./pages/store/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { ShopCustomer } from "./pages/customer/shopCustomer";
import Req from "./daftar/requests/req";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/req" element={<Req />} />
            <Route path="/customer" element={<ShopCustomer />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
