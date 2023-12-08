import React, { useContext } from "react";
import { ShopContext } from "../../../context/shop-context";
import { PRODUCTS } from "../../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import Navbar from "../../../components/navbar1";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div>
      <Navbar role ="toko"/>
      <div>
        {totalAmount > 0 ? (
          <div className="cart">
            <div>
              <h1>Your Cart Items</h1>
            </div>
            <div className="cart">
              {PRODUCTS.map((product) => {
                if (cartItems[product.id] !== 0) {
                  return <CartItem data={product} />;
                }
              })}
            </div>

            <p style={{ fontSize: "20px" }}>
              <b> Total: Rp{totalAmount} </b>
            </p>

            <div className="request">
              <button onClick={() => navigate("/")}> Back </button>
              <button
                onClick={() => {
                  checkout();
                  navigate("/req");
                }}
              >
                {" "}
                Request{" "}
              </button>
            </div>
          </div>
        ) : (
          <h1 style={{ textAlign: "center" }}> Your Cart is Empty</h1>
        )}
      </div>
    </div>
  );
};
