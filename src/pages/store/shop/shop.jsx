/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from "react";
import { Product } from "./product";
import "./shop.css";

import axios from "axios";
import Navbar from "../../../components/navbar1";

export const Shop = () => {
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
      <Navbar role = "toko"/>
      <div className="shop">
        <div className="shopTitle">
          <h1>OnlyCommerce Product</h1>
        </div>

        <div className="products">
          {products.map((product) => (
            <Product key={product.id_produk} isiData={product} arrData={products}/>
          ))}
        </div>
      </div>
    </div>
  );
};
