import React from "react";
import { PRODUCTS } from "../../products";
import { ProductCustomer } from "./productCustomer";

import "./shopCustomer.css";
import Navbar from "../../components/navbar1";

export const ShopCustomer = () => {
  return (
    <div>
<Navbar role="user"/>
      <div className="shop">
        <div className="shopTitle">
          <h1>OnlyCommerce Product</h1>
        </div>

        <div className="products">
          {PRODUCTS.map((product) => (
            <ProductCustomer data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
