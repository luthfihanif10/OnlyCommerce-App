import React from "react";
import { PRODUCTS } from "../../products";
import { ProductCustomer } from "./productCustomer";
import { NavbarCustomer } from "../../components/navbarCustomer";
import "./shopCustomer.css";

export const ShopCustomer = () => {
  return (
    <div>
      <NavbarCustomer/>
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
