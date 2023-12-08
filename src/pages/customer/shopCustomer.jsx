/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from "react";
import { ProductCustomer } from "./productCustomer";

import "./shopCustomer.css";

import Navbar from "../../components/navbar1";
import axios from "axios";


export const ShopCustomer = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('https://onlycommerce.onrender.com/v1/products')
      .then(result => {
        console.log('data API', result.data.data);

        setProducts(result.data.data);
      })
      .catch(err => {
        console.log('Error: ', err);
      })
  }, [])
  return (
    <div>
<Navbar role="user"/>
      <div className="shop">
        <div className="shopTitle">
          <h1>OnlyCommerce Product</h1>
        </div>

        <div className="products">
          {products.map((product) => (
            <ProductCustomer key={product.id_produk} isiData={product}/>
          ))}
        </div>
      </div>
    </div>
  );
};
