import React from "react";
import { PRODUCTS } from "../../../products";
import { Product } from "./product";
import "./shop.css";
import Navbar from "../../../components/navbar1";


export const Shop = () => {
  return (
    <div>
      <Navbar role = "toko"/>
      <div className="shop">
        <div className="shopTitle">
          <h1>OnlyCommerce Product</h1>
        </div>

        <div className="products">
          {PRODUCTS.map((product) => (
            <Product data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
